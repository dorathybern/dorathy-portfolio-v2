/* Day / night theme switcher
   - Uses the saved choice if there is one, otherwise the device setting.
   - Loaded in <head> so the right theme is applied before the page paints. */
(function () {
    "use strict";

    var root = document.documentElement;
    var KEY = "dorathyPortfolioTheme";
    var query = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

    function getSaved() {
        try { return localStorage.getItem(KEY); } catch (e) { return null; }
    }

    function save(theme) {
        try { localStorage.setItem(KEY, theme); } catch (e) { /* storage unavailable */ }
    }

    function systemTheme() {
        return query && query.matches ? "dark" : "light";
    }

    function apply(theme) {
        root.setAttribute("data-theme", theme);

        var button = document.getElementById("themeToggle");
        if (button) {
            button.setAttribute("aria-label",
                theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
        }

        var meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute("content", theme === "dark" ? "#0e1814" : "#18352b");
    }

    apply(getSaved() || systemTheme());

    document.addEventListener("DOMContentLoaded", function () {
        var button = document.getElementById("themeToggle");

        apply(root.getAttribute("data-theme"));

        if (!button) return;

        button.addEventListener("click", function () {
            var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
            apply(next);
            save(next);
        });
    });

    if (query && query.addEventListener) {
        query.addEventListener("change", function () {
            if (!getSaved()) apply(systemTheme());
        });
    }
})();