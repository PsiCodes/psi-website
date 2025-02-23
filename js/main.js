// Main.js

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("modeButton").addEventListener("click", function () {
        const body = document.body;
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

