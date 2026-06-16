const text = "Krish";
const nameElement = document.getElementById("name");

let index = 0;
let isDeleting = false;

function typeEffect() {

    if (!isDeleting) {
        nameElement.textContent = text.substring(0, index + 1);
        index++;

        if (index === text.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000); // pause after typing
            return;
        }
    } else {
        nameElement.textContent = text.substring(0, index - 1);
        index--;

        if (index === 0) {
            isDeleting = false;
        }
    }

    setTimeout(typeEffect, 150);
}

typeEffect();

new Typed("#role", {
    strings: [
    "Computer Engineering Student",
    "MERN Stack Developer",
    "DSA Enthusiast",
    "Problem Solver"
],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

//Glow effect
const glow = document.querySelector(".cursor-glow");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;

    glow.style.left = currentX + "px";
    glow.style.top = currentY + "px";

    requestAnimationFrame(animate);
}

animate();