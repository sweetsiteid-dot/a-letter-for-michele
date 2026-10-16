/* =========================
   CONFIGURATION
========================= */

const CORRECT_PIN = "1710";

const message = `My Dearest Love,

Happy 2nd Mensiversary. ❤️

today is a little celebration of us, of the love we share, and of another beautiful month we've spent together. aku harap di perjalanan kita selanjutnya, akan ada lebih banyak happiness, laughter, and unforgettable memories yang bisa kita simpan bersama. semoga setiap hari yang kita lewati bisa membuat kita semakin mengenal, memahami, dan menyayangi satu sama lain.

thank you for being part of my life and making my ordinary days feel more special just by being there. aku bersyukur bisa mengenal kamu, punya kamu, dan menjalani cerita ini bersama kamu. mungkin aku nggak selalu bisa mengungkapkan semuanya dengan sempurna, but i hope you can always feel how much you mean to me through all the little things i do.

never forget how precious you are to me. jangan pernah lupa kalau kamu punya tempat yang istimewa di hati aku, dan aku harap kamu selalu merasa dicintai, dihargai, dan disayangi dengan tulus. semoga kita selalu punya alasan untuk bertahan, saling mengerti, dan tetap memilih satu sama lain, even when things don't always go as planned.

happy 2nd mensiversary once again, my love.

here's to us, to our little love story, and to all the beautiful chapters we have yet to write together. semoga masih ada banyak bulan dan tahun yang bisa kita rayakan, lebih banyak tawa yang kita bagi, dan lebih banyak cerita yang kita ciptakan berdua. no matter how much time passes, i hope we'll always find comfort in each other and keep growing together. i love you, more than words could ever explain. 🤍

Forever yours,
Jestro 🤍`;


/* =========================
   PIN SYSTEM
========================= */

let pin = "";

function addPin(num) {
    if (pin.length >= 4) return;

    pin += num;

    const input = document.getElementById("pinInput");

    if (input) {
        input.value = "●".repeat(pin.length);
    }

    const pinMessage = document.getElementById("pinMessage");

    if (pinMessage) {
        pinMessage.textContent = "";
    }
}

function clearPin() {
    pin = pin.slice(0, -1);

    const input = document.getElementById("pinInput");

    if (input) {
        input.value = "●".repeat(pin.length);
    }
}

function checkPin() {
    if (pin === CORRECT_PIN) {
        const pinScreen = document.getElementById("pinScreen");
        const website = document.getElementById("website");
        const music = document.getElementById("music");

        pinScreen.style.display = "none";
        website.classList.remove("hidden");

        // Attempt to play music after the PIN button is clicked.
        if (music) {
            music.volume = 0.5;

            music.play().catch(() => {
                console.log(
                    "Music could not autoplay. The browser may require another interaction."
                );
            });
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {
        const pinMessage = document.getElementById("pinMessage");

        if (pinMessage) {
            pinMessage.textContent = "Wrong PIN, my love. Try again 🤍";
        } else {
            alert("Wrong PIN, my love. Try again 🤍");
        }

        pin = "";

        const input = document.getElementById("pinInput");

        if (input) {
            input.value = "";
        }
    }
}


/* =========================
   OPEN HEART
========================= */

function openHeart() {
    const bottleSection = document.getElementById("bottleSection");

    if (!bottleSection) return;

    bottleSection.classList.remove("hidden");

    bottleSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================
   FLOATING BLUE HEARTS
========================= */

function createHeart() {
    const heart = document.createElement("div");

    const hearts = ["🩵", "🤍", "💙", "✨"];

    heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-40px";

    heart.style.fontSize =
        Math.random() * 15 + 15 + "px";

    heart.style.opacity =
        Math.random() * 0.4 + 0.5;

    heart.style.pointerEvents = "none";
    heart.style.zIndex = "1";

    heart.style.animation =
        `fall ${Math.random() * 4 + 6}s linear forwards`;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 11000);
}

// Create floating hearts at regular intervals.
setInterval(createHeart, 700);


/* =========================
   ANIMATION STYLES
========================= */

const style = document.createElement("style");

style.textContent = `

@keyframes fall {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0;
    }

    10% {
        opacity: 0.8;
    }

    100% {
        transform: translateY(120vh) rotate(360deg);
        opacity: 0;
    }
}

@keyframes flowerBurst {
    0% {
        opacity: 1;
        transform: translate(0, 0) scale(0.5);
    }

    100% {
        opacity: 0;
        transform:
            translate(var(--x), var(--y))
            scale(1.5)
            rotate(360deg);
    }
}

@keyframes popIn {
    from {
        opacity: 0;
        transform: scale(0.5);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes letterAppear {
    from {
        opacity: 0;
        transform: translateY(25px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

`;

document.head.appendChild(style);


/* =========================
   BOTTLE BREAK
========================= */

let bottleOpened = false;
let typingTimer = null;

function breakBottle() {
    if (bottleOpened) return;

    bottleOpened = true;

    const bottle = document.getElementById("bottle");

    if (!bottle) return;

    bottle.innerHTML = "💌";

    bottle.style.animation = "popIn 0.5s ease";
    bottle.style.transform = "scale(1.2)";

    createFlowerBurst();

    setTimeout(() => {
        bottle.style.display = "none";

        const letterContainer =
            document.getElementById("letterContainer");

        if (letterContainer) {
            letterContainer.style.display = "block";
            letterContainer.style.animation =
                "letterAppear 0.8s ease";
        }

        typeLetter();

    }, 1000);
}


/* =========================
   FLOWER BURST
========================= */

function createFlowerBurst() {
    const flowers = document.getElementById("flowers");

    if (!flowers) return;

    const emojis = [
        "🩵",
        "🤍",
        "💙",
        "🌸",
        "🩵",
        "✨",
        "💐",
        "🤍"
    ];

    for (let i = 0; i < 40; i++) {
        const flower = document.createElement("div");

        flower.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        flower.style.position = "absolute";
        flower.style.left = "0";
        flower.style.top = "0";

        flower.style.fontSize =
            Math.random() * 15 + 20 + "px";

        flower.style.setProperty(
            "--x",
            Math.random() * 600 - 300 + "px"
        );

        flower.style.setProperty(
            "--y",
            -(Math.random() * 350 + 50) + "px"
        );

        flower.style.animation =
            "flowerBurst 2.5s ease-out forwards";

        flowers.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 2600);
    }
}


/* =========================
   LOVE LETTER TYPING EFFECT
========================= */

function typeLetter() {
    const target = document.getElementById("letterText");

    if (!target) return;

    // Stop any previous typing animation.
    if (typingTimer !== null) {
        clearInterval(typingTimer);
        typingTimer = null;
    }

    target.textContent = "";

    let i = 0;

    typingTimer = setInterval(() => {
        target.textContent += message.charAt(i);

        i++;

        if (i >= message.length) {
            clearInterval(typingTimer);
            typingTimer = null;
        }
    }, 15);
}


/* =========================
   LOVE QUIZ
========================= */

let currentQuestion = 0;

const questions = document.querySelectorAll(".question");

function checkAnswer(button, correct) {
    if (!questions.length) return;

    // Prevent multiple clicks while processing an answer.
    if (button.dataset.answered === "true") return;

    if (!correct) {
        alert("Oops! Try again, my love. 🤍");
        return;
    }

    button.dataset.answered = "true";

    button.style.background =
        "linear-gradient(135deg, #438ed0, #24588e)";

    button.style.borderColor = "#a9d8ff";

    // Disable the buttons for the question already answered.
    questions[currentQuestion]
        .querySelectorAll("button")
        .forEach((answerButton) => {
            answerButton.disabled = true;
        });

    setTimeout(() => {
        questions[currentQuestion].classList.remove("active");

        currentQuestion++;

        if (currentQuestion < questions.length) {
            questions[currentQuestion].classList.add("active");

            questions[currentQuestion].scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        } else {
            showQuizSuccess();
        }
    }, 500);
}


/* =========================
   QUIZ SUCCESS
========================= */

function showQuizSuccess() {
    const quizSuccess = document.getElementById("quizSuccess");

    if (!quizSuccess) return;

    quizSuccess.classList.remove("hidden");

    createConfetti();

    quizSuccess.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


/* =========================
   BLUE CONFETTI
========================= */

function createConfetti() {
    const emojis = ["🩵", "🤍", "💙", "✨", "🎉"];

    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement("div");

        confetti.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        confetti.style.position = "fixed";

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";

        confetti.style.fontSize =
            Math.random() * 15 + 15 + "px";

        confetti.style.pointerEvents = "none";
        confetti.style.zIndex = "9999";

        confetti.style.animation =
            `fall ${Math.random() * 3 + 3}s linear forwards`;

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 6500);
    }
                          }
