
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let noClicks = 0;

const messages = [
    "Wrong answer, pretty girl! 😾",
    "Are you REALLY sure? 🥺",
    "The NO button is getting tiny!",
    "Your YES button is waiting... 💙",
    "NO HAS LEFT THE CHAT. 😭"
];

// Question buttons
noBtn.addEventListener("click", function () {
    noClicks++;

    const noScale = Math.max(0, 1 - noClicks * 0.2);
    const yesScale = 1 + noClicks * 0.22;

    noBtn.style.transform = `scale(${noScale})`;
    yesBtn.style.transform = `scale(${yesScale})`;

    message.textContent =
        messages[Math.min(noClicks - 1, messages.length - 1)];

    if (noClicks >= 5) {
        noBtn.style.display = "none";
    }
});

// Move to the next slide
function showSlide(number) {
    document.querySelectorAll(".slide").forEach(function (slide) {
        slide.classList.remove("active");
    });

    document.getElementById("slide" + number).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// YES takes her to the cars slide
yesBtn.addEventListener("click", function () {
    showSlide(2);
});

// Navigation buttons
document.querySelectorAll(".next-btn").forEach(function (button) {
    button.addEventListener("click", function () {
        const nextNumber = Number(button.dataset.next);

        if (nextNumber) {
            showSlide(nextNumber);
        }
    });
});

// Play again
document.getElementById("restartBtn").addEventListener("click", function () {
    noClicks = 0;

    noBtn.style.display = "";
    noBtn.style.transform = "scale(1)";
    yesBtn.style.transform = "scale(1)";
    message.textContent = "";

    showSlide(1);
});

// Falling cherry blossom petals
const petalsContainer = document.getElementById("petals");
const petalSymbols = ["✿", "✧", "♡", "❀"];

function createPetal() {
    const petal = document.createElement("span");

    petal.className = "petal";
    petal.textContent =
        petalSymbols[Math.floor(Math.random() * petalSymbols.length)];

    petal.style.left = Math.random() * 100 + "%";
    petal.style.fontSize = (10 + Math.random() * 14) + "px";
    petal.style.animationDuration = (6 + Math.random() * 7) + "s";

    petalsContainer.appendChild(petal);

    petal.addEventListener("animationend", function () {
        petal.remove();
    });
}

for (let i = 0; i < 12; i++) {
    setTimeout(createPetal, i * 350);
}

setInterval(createPetal, 650);
