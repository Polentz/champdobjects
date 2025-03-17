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
    const surveyButton = document.getElementById("survey-button");
    const anchorTag = surveyButton.querySelector("a");
    const getLang = document.documentElement.lang;
    
    const applyHref = (urlsArray) => {
        const href = urlsArray[Math.floor(Math.random()*urlsArray.length)];
        anchorTag.setAttribute("href", href);
        return false;
    }
    if (getLang === "fr") {
        const urlsArray = [
            "https://forms.gle/CA8SdSow6jihfcRXA", 
            "https://forms.gle/K9qtJidEG7s3t6WB8",
            "https://forms.gle/3uTqfwW3CfwH7s8X8",
            "https://forms.gle/K5v4EUw994KrmuB87",
            "https://forms.gle/1RrutBxgspw2QtiV9",
            "https://forms.gle/teujgRT9SMK9Bcww7",
            "https://forms.gle/HqivPu7tgUGWyjCJ6",
            "https://forms.gle/N9hKTkn1pSuA14YdA",
            "https://forms.gle/g4dP5WMm6XseAcG56"
        ];
        applyHref(urlsArray);
    };
    if (getLang === "en") {
        const urlsArray = [
            "", 
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ];
        applyHref(urlsArray);
    };
    if (getLang === "de") {
        const urlsArray = [
            "", 
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ];
        applyHref(urlsArray);
    };
};

window.addEventListener("load", () => {
    documentHeight();
    getRandomUrl();
    revealOnLoad();
});

window.addEventListener("scroll", () => {
    revealOnScroll();
});

window.addEventListener("resize", () => {
    documentHeight();
});