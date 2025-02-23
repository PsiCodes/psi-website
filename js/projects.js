document.addEventListener("DOMContentLoaded", () => {
    const projects = ["ktxpy", "zen-app"];
    const projectsContainer = document.getElementById("projectsContainer");
    const button = document.getElementById("modeButton");
    const body = document.body;

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.id = project;
        projectDiv.classList.add("markdown-content");
        projectsContainer.appendChild(projectDiv);
        
        fetch(`../markdown/${project}.md`)
            .then(response => response.text())
            .then(text => projectDiv.innerHTML = marked.parse(text))
            .catch(error => console.error(`Error loading markdown file '${project}':`, error));
    });

    const setMode = (isLight) => {
        body.classList.toggle("light-mode", isLight);
        button.textContent = isLight ? "☀️" : "🌙";
        localStorage.setItem("mode", isLight ? "light" : "dark");
    };

    setMode(localStorage.getItem("mode") === "light");
    button.addEventListener("click", () => setMode(!body.classList.contains("light-mode")));
});
