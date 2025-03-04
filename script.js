let messages = [
    "Chúc bạn 8/3 vui vẻ, luôn xinh đẹp và hạnh phúc! 🌸💖",
    "Mình cũng muốn gửi lời chúc: Chúc bạn có một ngày tuyệt vời, tràn đầy yêu thương và nụ cười nhé! 😊✨",
    "Xin chào bạn nào đó xinh xinh! 🥰",
    "Tớ tên là Hoàng Trung Hải 😊",
    "Giới thiệu xong rồi, cho tớ làm quen nha? ❤️"
];

let currentIndex = 0;

window.onload = function () {
    document.getElementById("screen").style.backgroundColor = "black";
    document.getElementById("heart").style.display = "none";
    document.getElementById("message-container").style.display = "none";
    document.getElementById("openGift").style.display = "block";
    document.getElementById("loveSong").play().catch(error => console.log("Không thể tự động phát nhạc:", error));
};

document.getElementById("openGift").addEventListener("click", function () {
    let screen = document.getElementById("screen");
    screen.style.transition = "background-color 1s ease-in-out";
    screen.style.backgroundColor = "#FFC0CB";

    document.getElementById("openGift").style.display = "none";
    
    setTimeout(() => {
        let heart = document.getElementById("heart");
        heart.style.display = "block";
        heart.style.animation = "heartbeat 1.5s infinite";
    }, 1000);

    setTimeout(() => {
        let heart = document.getElementById("heart");
        heart.style.transition = "opacity 1s";
        heart.style.opacity = "0";
        setTimeout(() => heart.style.display = "none", 1000);
        document.getElementById("message-container").style.display = "block";
    }, 4000);
});

document.getElementById("nextButton").addEventListener("click", nextMessage);

document.getElementById("yesButton").addEventListener("click", sayYes);
document.getElementById("noButton").addEventListener("mouseover", runAway);
document.getElementById("noButton").addEventListener("click", runAway);
document.getElementById("noButton").addEventListener("touchstart", runAway);

document.addEventListener("DOMContentLoaded", function () {
    let music = document.getElementById("loveSong");
    function playMusic() {
        music.play().catch(error => console.log("Không thể tự động phát nhạc:", error));
    }
    document.body.addEventListener("click", playMusic, { once: true });
    document.body.addEventListener("touchstart", playMusic, { once: true });
});

document.getElementById("heart").style.display = "none"; // Ẩn trái tim ban đầu
...
