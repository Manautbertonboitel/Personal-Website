const CATEGORY_TO_DISPLAY = document.body.dataset.category;

async function renderProjects() {
    const container = document.getElementById('projects-list');
    container.innerHTML = ''; // reset au cas où

    const response = await fetch('project-list.json');
    const projects = await response.json();

    const filtered = projects.filter(p => p.category === CATEGORY_TO_DISPLAY);

    for (const { file, category } of filtered) {
        const url = `projets/${file}`;
        const res = await fetch(url);
        const text = await res.text();
        const doc = new DOMParser().parseFromString(text, 'text/html');

        const title = doc.querySelector('meta[name="project-title"]')?.content || 'Titre inconnu';
        const description = doc.querySelector('meta[name="project-description"]')?.content || 'Pas de description';
        const image = doc.querySelector('meta[name="project-image"]')?.content || 'placeholder.jpg';

        const card = document.createElement('div');
        card.className = `project-card ${category}`;
        card.innerHTML = `
            <a href="${url}">
                <img src="${image}" alt="${title}" />
                <h3>${title}</h3>
                <p>${description}</p>
            </a>
            <!-- Projects section -->
            <section>
                <div class="category">
                    <div class="category-title">
                        <h3 id="links">${project.category}</h3>
                    </div>
                    <div class="category-content" id="projects-list">
                        <a class="category-content-item-big" href="${project.url}">
                            <!-- <iframe src="https://www.youtube.com/embed/TuCRYNTomwM?loop=1&showinfo=0&modestbranding=1&controls=0&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&playlist=TuCRYNTomwM" title="Teaser Death Of Internet" frameborder="0"></iframe> -->
                            <img src="${project.image}" alt="${project.title}">
                            <div>
                                <h4>${project.title}</h4>
                                <p class="comment">${project.description}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        `;

        container.appendChild(card);
    }
}

renderProjects();