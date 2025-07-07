const roles = ["Front-End Developer","Designer", "Freelancer", "Problem Solver"]
const typedText = document.querySelector('.typed-text');

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[roleIndex];
    const currentText = currentRole.substring(0, charIndex);

    typedText.textContent = currentText;

    if (!isDeleting && charIndex < currentRole.length) {
        charIndex++;
        setTimeout(type, 100);
    }
    else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
    }
    else{
        isDeleting = !isDeleting;
        if (!isDeleting) roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 1000);
    }
 }

 type();