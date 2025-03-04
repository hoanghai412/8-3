document.addEventListener("DOMContentLoaded", function () {
    let music = document.getElementById("loveSong");
    function playMusic() {
        music.play().catch(error => console.log("Autoplay bị chặn:", error));
    }
    document.body.addEventListener("click", playMusic, { once: true });

    setTimeout(() => {
        document.getElementById("intro-text").style.display = "block";
    }, 3000);

    setTimeout(() => {
        let heart = document.getElementById("heart");
        heart.style.transition = "opacity 1s";
        heart.style.opacity = "0";
        setTimeout(() => heart.style.display = "none", 1000);
        document.getElementById("message-container").style.display = "block";
    }, 5000);
});

let messages = [
    "Chúc bạn 8/3 vui vẻ, luôn xinh đẹp và hạnh phúc! 🌸💖",
    "Mình cũng muốn gửi lời chúc: Chúc bạn có một ngày tuyệt vời, tràn đầy yêu thương và nụ cười nhé! 😊✨",
    "Xin chào bạn nào đó xinh xinh! 🥰",
    "Tớ tên là Hoàng Trung Hải 😊",
    "Giới thiệu xong rồi, cho tớ làm quen nha? ❤️"
];

let currentIndex = 0;

function nextMessage() {
    let messageElement = document.getElementById("message");
    let nextButton = document.getElementById("nextButton");
    let introImage = document.getElementById("intro-image");
    let requestImage = document.getElementById("request-image");
    let womensDayImage = document.getElementById("womens-day-image");
    let womensDayVideo = document.getElementById("womens-day-video");

    if (currentIndex < messages.length) {
        messageElement.innerHTML = messages[currentIndex];
        if (currentIndex === 0) {
            womensDayImage.style.display = "block";
            womensDayVideo.style.display = "none";
        } else if (currentIndex === 1) {
            womensDayImage.style.display = "none";
            womensDayVideo.style.display = "block";
            womensDayVideo.play();
        } else if (currentIndex === 3) {
            womensDayImage.style.display = "none";
            womensDayVideo.style.display = "none";
            introImage.style.display = "block";
        } else if (currentIndex === 4) {
            introImage.style.display = "none";
            requestImage.style.display = "block";
        } else {
            womensDayImage.style.display = "none";
            womensDayVideo.style.display = "none";
            introImage.style.display = "none";
            requestImage.style.display = "none";
        }
        currentIndex++;
        if (currentIndex === messages.length) {
            nextButton.style.display = "none";
            document.getElementById("choice-container").style.display = "block";
        }
    }
}

function sayYes() {
    alert("Yayyy! Mình làm bạn nhé! 💖🥰");
}

function runAway() {
    let noButton = document.getElementById("noButton");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}
