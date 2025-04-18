const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// 🔧 Définir les chemins principaux du projet
const rootDir = path.join(__dirname, '..'); // Racine du projet
const projectsDir = path.join(rootDir, 'projects'); // Dossier contenant tous les projets
const indexHtmlTemplatePath = path.join(rootDir, 'templates', 'index.template.html'); // Chemin du template HTML
const jsonDir = path.join(rootDir, 'json'); // Dossier où sera généré le JSON

// 📁 Crée le dossier json s'il n'existe pas
if (!fs.existsSync(jsonDir)) fs.mkdirSync(jsonDir);

// 🧺 Tableau pour stocker tous les projets trouvés
const output = [];

// 🔍 Fonction récursive pour parcourir tous les fichiers HTML dans le dossier projects
function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            // Appel récursif pour descendre dans les sous-dossiers
            walk(fullPath);
        } else if (entry.isFile() && entry.name.endsWith('.html')) {
            // 🧠 Lecture du fichier HTML
            const html = fs.readFileSync(fullPath, 'utf-8');
            const $ = cheerio.load(html); // Utilisation de Cheerio pour lire le DOM

            // 🔍 Extraction à partir du body HTML, via des classes CSS
            const title = $('.data-title').text().trim() || 'Titre inconnu';
            const description = $('.data-description').text().trim() || 'Pas de description';
            const image = $('.data-image').attr('src') || 'placeholder.jpg';

            // 📂 Déterminer le chemin relatif et la catégorie (nom du sous-dossier)
            const relativePath = path.relative(projectsDir, fullPath).replace(/\\/g, '/');
            const category = relativePath.split('/')[0]; // Exemple : 'game', 'video', etc.

            // ➕ Ajout du projet dans le tableau global
            output.push({ file: relativePath, category, title, description, image });
        }
    }
}

// 🏃 Lancer le scan des projets
walk(projectsDir);

// 💾 Écriture du fichier JSON regroupant tous les projets
fs.writeFileSync(path.join(jsonDir, 'project-list.json'), JSON.stringify(output, null, 2), 'utf-8');

// 🧱 Générer un objet contenant le HTML pour chaque catégorie
function generateHTMLByCategory(projects) {
    const categories = {};

    for (const project of projects) {
        // Si la catégorie n'existe pas encore, on l'initialise
        if (!categories[project.category]) {
            categories[project.category] = [];
        }

        // 📄 Génération du bloc HTML du projet
        categories[project.category].push(`
            <a class="category-content-item-big" href="projects/${project.file}">
                <img src="${project.image}" alt="${project.title}">
                <div>
                    <h4>${project.title}</h4>
                    <p class="comment">${project.description}</p>
                </div>
            </a>
        `);
    }

    return categories; // Renvoie un objet : { game: [html, html], video: [html], ... }
}

// 🧪 On génère le HTML regroupé par catégories
const categoriesHTML = generateHTMLByCategory(output);

// 📖 On lit le template HTML
let template = fs.readFileSync(indexHtmlTemplatePath, 'utf-8');

// 🧩 On insère le HTML généré dans les bons emplacements du template
for (const [category, htmlList] of Object.entries(categoriesHTML)) {
    const placeholder = `<!-- ${category.toUpperCase()}_PLACEHOLDER -->`; // Exemple : <!-- GAME_PLACEHOLDER -->
    template = template.replace(placeholder, htmlList.join('\n')); // Remplace le placeholder par le contenu HTML
}

// 🏁 On écrit le fichier HTML final dans la racine
fs.writeFileSync(path.join(rootDir, 'index.html'), template, 'utf-8');

// ✅ Log de fin
console.log(`✅ ${output.length} projets intégrés dans index.html avec catégories : ${Object.keys(categoriesHTML).join(', ')}`);
