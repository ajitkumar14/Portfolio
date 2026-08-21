/* ========================================
   LOADER
======================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* ========================================
   MOBILE MENU
======================================== */

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

});


document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* ========================================
   TYPING ANIMATION
======================================== */

const typingElement = document.querySelector(".typing");

const words = [
    "Python Developer",
    "Software Developer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 90
    );

}


typeEffect();


/* ========================================
   SCROLL REVEAL
======================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* ========================================
   ACTIVE NAVIGATION
======================================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* ========================================
   MOUSE CURSOR
======================================== */

const cursor =
    document.querySelector(".cursor");

const follower =
    document.querySelector(".cursor-follower");


document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    setTimeout(() => {

        follower.style.left =
            e.clientX + "px";

        follower.style.top =
            e.clientY + "px";

    }, 60);

});


/* ========================================
   BUTTON HOVER
======================================== */

const interactiveElements =
    document.querySelectorAll(
        "a, button, .skill, .project"
    );


interactiveElements.forEach(element => {

    element.addEventListener("mouseenter", () => {

        cursor.classList.add("cursor-grow");

    });


    element.addEventListener("mouseleave", () => {

        cursor.classList.remove("cursor-grow");

    });

});