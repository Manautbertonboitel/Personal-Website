const fs = require('fs');
const path = require('path');

const categories = {
    'games': 'game',
    'videos': 'video'
};

const basePath = './projects';
let allProjects = [];

for (const [subfolder, category] of Object.entries(categories)) {
    const folderPath = path.join(basePath, subfolder);

    const files = fs.readdirSync(folderPath)
        .filter(f => f.endsWith('.html'));

    files.forEach(file => {
        allProjects.push({
            file: `${subfolder}/${file}`,
            category: category
        });
    });
}

fs.writeFileSync(
    './project-list.json',
    JSON.stringify(allProjects, null, 2)
);

console.log(`✅ ${allProjects.length} projets trouvés et enregistrés dans project-list.json`);
