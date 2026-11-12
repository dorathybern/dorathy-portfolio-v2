
/* =====================================================
   1. DAY AND NIGHT THEME SWITCHER
   Uses saved preference or device theme.
===================================================== */
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

    /* APPLY SELECTED THEME */
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

    /* LOAD SAVED OR DEVICE THEME */
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

    /* DETECT DEVICE THEME CHANGES */
    if (query && query.addEventListener) {
        query.addEventListener("change", function () {
            if (!getSaved()) apply(systemTheme());
        });
    }
})();


/* =====================================================
   2. MOBILE NAVIGATION MENU (HAMBURGER)
   Controls opening and closing of the mobile menu.
===================================================== */
(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {
        var toggle = document.getElementById("menuToggle");
        var links = document.getElementById("navLinks");

        if (!toggle || !links) return;

        function setOpen(open) {
            links.classList.toggle("is-open", open);
            toggle.setAttribute("aria-expanded", String(open));
            toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        }

        toggle.addEventListener("click", function () {
            setOpen(toggle.getAttribute("aria-expanded") !== "true");
        });

        /* CLOSE MENU AFTER PAGE SELECTION */
        links.addEventListener("click", function (event) {
            if (event.target.closest("a")) setOpen(false);
        });

        /* CLOSE MENU WITH ESCAPE OR OUTSIDE CLICK */
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") setOpen(false);
        });

        document.addEventListener("click", function (event) {
            if (!event.target.closest(".site-header")) setOpen(false);
        });

        /* RESET MENU ON DESKTOP SCREEN SIZES */
        window.addEventListener("resize", function () {
            if (window.innerWidth > 680) setOpen(false);
        });
    });
})();