const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    const isOpen = nav.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


const sections = document.querySelectorAll(".section-content");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
});

sections.forEach((section) => {
    observer.observe(section);
});