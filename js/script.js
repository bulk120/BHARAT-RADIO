/* THEME SWITCHER */
const toggle = document.getElementById("themeToggle");
const body = document.body;

/* Load saved theme */
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light");
    toggle.innerHTML = "<span>🌞</span>";
}

toggle.addEventListener("click", () => {
    body.classList.toggle("light");

    if (body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
        toggle.innerHTML = "<span>🌞</span>";
    } else {
        localStorage.setItem("theme", "dark");
        toggle.innerHTML = "<span>🌙</span>";
    }
});