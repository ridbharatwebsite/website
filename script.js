// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Typing Effect
const typingHeading = document.getElementById('typing-heading');
const typingSubheading = document.getElementById('typing-subheading');

const headingText = "Master Web Development & Cybersecurity";
const subheadingText = "Hands-on training, internships, and project work in web development, ethical hacking, and IT fields";

let headingIndex = 0;
let subheadingIndex = 0;

function typeHeading() {
    if (headingIndex < headingText.length) {
        typingHeading.textContent += headingText.charAt(headingIndex);
        headingIndex++;
        setTimeout(typeHeading, 100);
    } else {
        setTimeout(typeSubheading, 500);
    }
}

function typeSubheading() {
    if (subheadingIndex < subheadingText.length) {
        typingSubheading.textContent += subheadingText.charAt(subheadingIndex);
        subheadingIndex++;
        setTimeout(typeSubheading, 50);
    }
}

// Start typing effect when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    typeHeading();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});