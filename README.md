<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rahul ❤️ Chetna</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Great+Vibes&display=swap" rel="stylesheet">
</head>
<body>

<div id="rain"></div>
<div id="hearts"></div>
<div id="roses"></div>
<div id="lightning"></div>

<section id="loading">
    <h1 class="loading-text">Someone has sent you a Surprise ❤️</h1>
    <p class="loading-sub">Please wait...</p>
    <div class="loader"></div>
</section>

<section id="gift" class="hidden">
    <img src="assets/gift.png" class="gift-box" alt="Gift Box">
    <h2>A Special Gift For You 🎁</h2>
    <button id="openBtn">Open My Heart ❤️</button>
</section>

<section id="main" class="hidden">
    <h1 class="title">Rahul Saini ❤️ Chetna Saini</h1>
    <h2 id="typing"></h2>
    <p class="quote">
        Every heartbeat of mine whispers your name.<br>
        You are my today,<br>
        my tomorrow,<br>
        and forever.
    </p>
    <button id="letterBtn">Read Love Letter 💌</button>
</section>

<section id="letter" class="hidden">
    <div class="letter-box">
        <h2>Dear Chetna ❤️</h2>
        <p id="letterText"></p>
        <button id="nextBtn">Next ❤️</button>
    </div>
</section>

<section id="proposal" class="hidden">
    <h1>Will You Stay With Me Forever?</h1>
    <button id="yesBtn">YES ❤️</button>
</section>

<section id="ending" class="hidden">
    <h1>Forever Yours ❤️</h1>
    <h2>Rahul Saini</h2>
    <div id="fireworks"></div>
</section>

<audio id="bgMusic" loop>
    <source src="assets/bg.mp3" type="audio/mp3">
</audio>

<script src="script.js"></script>
</body>
</html>
