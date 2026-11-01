const savedTheme = (() => {
    try {
        return localStorage.getItem("site-theme");
    } catch (error) {
        console.error("Unable to read the saved theme preference.", error);
        return null;
    }
})();

const initialTheme =
    savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : "light";

document.documentElement.dataset.theme = initialTheme;

const themeColor = document.querySelector('meta[name="theme-color"]');

if (themeColor) {
    themeColor.setAttribute("content", initialTheme === "dark" ? "#101714" : "#f5f2e9");
}
