gsap.registerPlugin(ScrollTrigger);


const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};

const revealOnLoad = () => {
    const reveals = document.querySelectorAll(".text-container, .drawing-container, .header");
    reveals.forEach(element => {
        element.classList.add("--appear");
    });
};

const revealOnScroll = () => {
    const reveals = document.querySelectorAll(".text-container, .drawing-container, .header");
    for (let i = 0; i < reveals.length; i++) {
        const element = reveals[i];
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("--appear");
        } else {
            element.classList.remove("--appear");
        };
    };
};

const getRandomUrl = () => {
    const buttonUrl = document.querySelector(".random-button");
    const items = [];
    const item = items[Math.floor(Math.random()*items.length)];
}

window.addEventListener("load", () => {
    documentHeight();
    revealOnLoad();
});

window.addEventListener("scroll", () => {
    revealOnScroll();
});

window.addEventListener("resize", () => {
    documentHeight();
});