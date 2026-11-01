const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

function updateThemeControls() {
    const theme = document.documentElement.dataset.theme;
    const label = `Switch to ${theme === "dark" ? "light" : "dark"} mode`;
    const themeColor = document.querySelector('meta[name="theme-color"]');

    document.querySelectorAll("[data-theme-toggle]").forEach((toggle) => {
        toggle.setAttribute("aria-label", label);
        toggle.setAttribute("title", label);
    });

    if (themeColor) {
        themeColor.setAttribute("content", theme === "dark" ? "#101714" : "#f5f2e9");
    }
}

updateThemeControls();

document.querySelectorAll("[data-theme-toggle]").forEach((toggle) => {
    toggle.addEventListener("click", () => {
        const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = theme;

        try {
            localStorage.setItem("site-theme", theme);
        } catch (error) {
            console.error("Unable to save the theme preference.", error);
        }

        updateThemeControls();
    });
});
