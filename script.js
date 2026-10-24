const loading = document.getElementById("loading");
const gift = document.getElementById("gift");
const main = document.getElementById("main");
const letter = document.getElementById("letter");
const proposal = document.getElementById("proposal");
const ending = document.getElementById("ending");

const openBtn = document.getElementById("openBtn");
const letterBtn = document.getElementById("letterBtn");
const nextBtn = document.getElementById("nextBtn");
const yesBtn = document.getElementById("yesBtn");

const typing = document.getElementById("typing");
const letterText = document.getElementById("letterText");
const music = document.getElementById("bgMusic");

const rainAudio = new Audio("assets/rain.mp3");
rainAudio.loop = true;
rainAudio.volume = 0.25;

setTimeout(() => {
    loading.classList.add("hidden");
    gift.classList.remove("hidden");
}, 4000);

openBtn.addEventListener("click", () => {
    const box = document.querySelector(".gift-box");
    box.style.transition = "1.2s";
    box.style.transform = "scale(1.3) rotateY(720deg)";
    box.style.opacity = "0";

    music.play().catch(e => console.log("Audio play blocked:", e));
    rainAudio.play().catch(e => console.log("Rain audio play blocked:", e));
    heartExplosion();

    setTimeout(() => {
        gift.classList.add("hidden");
        main.classList.remove("hidden");
        typingEffect();
    }, 1000);
});

const text = "I Love You Chetna ❤️";
let i = 0;

function typingEffect() {
    typing.innerHTML = "";
    let timer = setInterval(() => {
        typing.innerHTML += text.charAt(i);
        i++;
        if (i >= text.length) {
            clearInterval(timer);
        }
    }, 120);
}

letterBtn.onclick = () => {
    main.classList.add("hidden");
    letter.classList.remove("hidden");
    typeLetterMessage();
}

const loveMessage = "Dear Chetna ❤️\n\nFrom the moment you came into my life, everything became beautiful. You are my peace, my happiness, and my soulmate. I want to spend all my life making you smile.";
let j = 0;

function typeLetterMessage() {
    letterText.innerHTML = "";
    let timer = setInterval(() => {
        letterText.innerHTML += loveMessage.charAt(j);
        j++;
        if (j >= loveMessage.length) {
            clearInterval(timer);
        }
    }, 50);
}

nextBtn.onclick = () => {
    letter.classList.add("hidden");
    proposal.classList.remove("hidden");
}

yesBtn.onclick = () => {
    proposal.classList.add("hidden");
    ending.classList.remove("hidden");
    heartExplosion();
}

function heartExplosion() {
    for (let k = 0; k < 50; k++) {
        const h = document.createElement("div");
        h.innerHTML = "❤️";
        h.className = "heart";
        h.style.left = "50vw";
        h.style.top = "50vh";
        h.style.position = "fixed";
        h.style.fontSize = (20 + Math.random() * 25) + "px";
        h.style.transform = `translate(${(Math.random() - 0.5) * 700}px, ${(Math.random() - 0.5) * 700}px)`;
        document.body.appendChild(h);

        setTimeout(() => {
            h.remove();
        }, 3000);
    }
}

// Background Rain Drops generator
function createRain() {
    const rainContainer = document.getElementById("rain");
    if (!rainContainer) return;
    const drop = document.createElement("div");
    drop.className = "rain-drop";
    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDuration = (0.5 + Math.random() * 0.5) + "s";
    rainContainer.appendChild(drop);

    setTimeout(() => {
        drop.remove();
    }, 1000);
}
setInterval(createRain, 100);

// Love Timer
const startDate = new Date("2026-07-26");

function updateLoveTimer() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    let timer = document.getElementById("loveTimer");
    if (!timer) {
        timer = document.createElement("div");
        timer.id = "loveTimer";
        timer.style.position = "fixed";
        timer.style.top = "15px";
        timer.style.right = "15px";
        timer.style.padding = "12px 20px";
        timer.style.borderRadius = "20px";
        timer.style.background = "rgba(255,255,255,.12)";
        timer.style.backdropFilter = "blur(10px)";
        timer.style.color = "white";
        timer.style.fontSize = "15px";
        document.body.appendChild(timer);
    }
    timer.innerHTML = "❤️ Together Forever<br>" + days + " Days";
}
setInterval(updateLoveTimer, 1000);
