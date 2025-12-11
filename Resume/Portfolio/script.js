// ===== Dynamic Year in Footer =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Mobile Menu Toggle =====
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".mobile-menu .nav-link").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});

// ===== Active Section Highlight on Scroll =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 70; // offset for navbar
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("nav-active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("nav-active");
        }
    });
});

// ===== Smooth Fade-in Animation on Scroll =====
const fadeElems = document.querySelectorAll("section, .skill-badge, .service-card");

const fadeInOnScroll = () => {
    fadeElems.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
};

fadeElems.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
});

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll(); // trigger on load


