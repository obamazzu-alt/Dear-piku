const teddy = document.getElementById("teddy");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const memory = document.getElementById("memory");
const finalPage = document.getElementById("final");

setTimeout(() => {
    envelope.classList.add("show");
}, 3000);

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "block";
});

document.getElementById("openMemory").addEventListener("click", () => {
    letter.style.display = "none";
    memory.style.display = "block";
});

document.getElementById("lastMessage").addEventListener("click", () => {
    memory.style.display = "none";
    finalPage.style.display = "block";
});// 🎵 Background Music
const music = document.getElementById("bgMusic");

window.addEventListener("click", () => {
    if (music.paused) {
        music.volume = 0.3;
        music.play();
    }
}, { once: true });

// 💖 Floating Hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const emojis = ["💗","🩷","🤍","🌸","💕"];

    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    heart.style.animationDuration = (5 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 500);// ✨ Smooth Fade Animations
function fadeIn(element) {
    element.style.opacity = "0";
    element.style.display = "block";

    let opacity = 0;

    const fade = setInterval(() => {
        opacity += 0.05;
        element.style.opacity = opacity;

        if (opacity >= 1) {
            clearInterval(fade);
        }
    }, 30);
}

// 🌸 Apply fade effect
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    fadeIn(letter);
});

document.getElementById("openMemory").addEventListener("click", () => {
    letter.style.display = "none";
    fadeIn(memory);
});

document.getElementById("lastMessage").addEventListener("click", () => {
    memory.style.display = "none";
    fadeIn(finalPage);
});

// 🧸 Teddy Bounce
setInterval(() => {
    teddy.style.transform = "translateY(-10px)";

    setTimeout(() => {
        teddy.style.transform = "translateY(0)";
    }, 400);

}, 3000);
