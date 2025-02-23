// Projects


document.addEventListener("DOMContentLoaded", function () {
    fetch("https://raw.githubusercontent.com/PsiCodes/psi-website/refs/heads/main/markdown/projects.md")
        .then(response => response.text())
        .then(text => {
            document.getElementById("content").innerHTML = marked.parse(text);
        })
        .catch(error => console.error("Error loading markdown:", error));


    document.getElementById("modeButton").addEventListener("click", function () {
        const body = document.body;
        const content = document.getElementById("content");
        const button = document.getElementById("modeButton");
        if (body.classList.contains("light-mode")) {
            body.classList.remove("light-mode");
            button.textContent = "🌙";
        } else {
            body.classList.add("light-mode");
            button.textContent = "☀️";
        }
    });
});
