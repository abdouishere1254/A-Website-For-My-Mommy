// CHANGE PAGES
function showPage(number) {
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    document.getElementById("page" + number)
        .classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Hearts when opening a new page!
    if (number === 2 || number === 4) {
        makeItRain();
    }
}


// BEAUTY TEST
function checkRating() {
    const ratingInput = document.getElementById("rating");
    const message = document.getElementById("ratingMessage");

    const rating = Number(ratingInput.value);

    // Check if the number is valid
    if (
        ratingInput.value.trim() === "" ||
        !Number.isInteger(rating) ||
        rating < 1 ||
        rating > 10
    ) {
        message.textContent = "ENTER A NUMBER FROM 1 TO 10!";
        message.className = "wrong";
        return;
    }

    // Any number below 10 is WRONG!
    if (rating < 10) {
        message.textContent = "NO WRONG ANSWERE 😡💗";
        message.className = "wrong";

        ratingInput.value = "";

        return;
    }

    // THE CORRECT ANSWER!
    message.textContent =
        "CORRECTTTTTTTT!! YOU'RE VERY BEAUTIFULL MY QUEEN!! 💗";

    message.className = "correct";

    // Wait a little, then show the compliments
    setTimeout(function() {
        showPage(2);
    }, 2200);

    makeItRain();
}


// FLOATING HEARTS
function makeItRain() {
    const hearts = ["♥", "♡", "💗", "💖", "🌸", "✿"];

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("span");

        heart.className = "floating-heart";

        heart.textContent =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";

        heart.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(heart);

        // Remove each heart after its animation
        setTimeout(function() {
            heart.remove();
        }, 4500);
    }
}


// FINAL PAGE SURPRISE
function makeItRainAgain() {
    makeItRain();
}

function makeItRain() {
    const hearts = ["♥", "♡", "💗", "💖", "🌸", "✿"];

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("span");

        heart.className = "floating-heart";
        heart.textContent =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(heart);

        setTimeout(function() {
            heart.remove();
        }, 4500);
    }
}

document.querySelector("input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkRating();
    }
});
