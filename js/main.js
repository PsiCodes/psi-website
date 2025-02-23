document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const button = document.getElementById("modeButton");
    
    const setMode = (isLight) => {
        body.classList.toggle("light-mode", isLight);
        button.textContent = isLight ? "☀️" : "🌙";
        localStorage.setItem("mode", isLight ? "light" : "dark");
    };
    
    setMode(localStorage.getItem("mode") === "light");
    
    button.addEventListener("click", () => setMode(!body.classList.contains("light-mode")));
});
