document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll("nav ul li");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("mouseenter", function () {
            let submenu = this.querySelector("ul");
            if (submenu) {
                submenu.style.display = "block";
            }
        });

        dropdown.addEventListener("mouseleave", function () {
            let submenu = this.querySelector("ul");
            if (submenu) {
                submenu.style.display = "none";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a[href^='#']");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {

    const backToTop = document.createElement("button");
    backToTop.innerText = "↑";
    backToTop.style.position = "fixed";
    backToTop.style.bottom = "20px";
    backToTop.style.right = "20px";
    backToTop.style.padding = "10px 15px";
    backToTop.style.border = "none";
    backToTop.style.borderRadius = "50%";
    backToTop.style.backgroundColor = "rgb(175, 31, 110)";
    backToTop.style.color = "white";
    backToTop.style.fontSize = "18px";
    backToTop.style.cursor = "pointer";
    backToTop.style.display = "none";
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function () {
        backToTop.style.display = window.scrollY > 200 ? "block" : "none";
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.1)";
            card.style.transition = "transform 0.3s ease";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });
});