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
            "https://forms.gle/yJJRQbDBUJc7vwz5A", 
            "https://forms.gle/SKRwPtsncdHyTFoQ9",
            "https://forms.gle/b5uZ7zbJUUxvWBBv5",
            "https://forms.gle/DuPPkyj1tMd878w9A",
            "https://forms.gle/rBfkwL4VVf4sVDK97",
            "https://forms.gle/ezm5oXY2iHJYUBkr8",
            "https://forms.gle/wGVow6zTsvaWoRsQ8",
            "https://forms.gle/FZbK9JNWH4RMDWf2A",
            "https://forms.gle/7wE5xuXiHmCf2ZkdA"
        ];
        applyHref(urlsArray);
    };
    if (getLang === "de") {
        const urlsArray = [
            "https://forms.gle/tPWZV3LkzEaCUij77", 
            "https://forms.gle/eMcb2DE6TYVSsfoz5",
            "https://forms.gle/R3gXpsLYptgFCxEb6",
            "https://forms.gle/ZGomyUt4qzV3ep2a8",
            "https://forms.gle/oM1hEAD643n37Anq7",
            "https://forms.gle/3tzTPZD3mUHXoYeM6",
            "https://forms.gle/UjWDUYqqFtguzJBVA",
            "https://forms.gle/oH9QpEXpemfd1Wu38",
            "https://forms.gle/eYSzgNc3BWgXsQGB8"
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