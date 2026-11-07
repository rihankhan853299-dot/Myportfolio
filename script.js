// Custom Navbar ScrollSpy

document.addEventListener("DOMContentLoaded", function () {

    // Navbar ke links select karna
    const navLinks = document.querySelectorAll(
        "#portfolioNavbar .nav-link, #portfolioNavbar .contact-btn"
    );

    // Website ke sections select karna
    const sectionIds = [
        "about",
        "projects",
        "services",
        "skills",
        "contact"
    ];

    const sections = sectionIds
        .map(id => document.getElementById(id))
        .filter(section => section !== null);

    // Scroll hone par active link update karna
    function updateActiveLink() {

        let currentSection = "";

        const offset = document.querySelector("#portfolioNavbar").offsetHeight + 80;

        sections.forEach(section => {

            const sectionTop = section.getBoundingClientRect().top + window.scrollY;

            if (window.scrollY + offset >= sectionTop) {
                currentSection = section.id;
            }

        });

        // Page ke bilkul bottom par Contact active karna
        if (window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 1) {
            currentSection = "contact";
        }

        // Sabhi links se active class remove karna
        navLinks.forEach(link => {

            link.classList.remove("active");

            // Current section ke link ko active karna
            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    }

    // Scroll event
    window.addEventListener("scroll", updateActiveLink);

    // Page load hone par bhi check karna
    updateActiveLink();

});