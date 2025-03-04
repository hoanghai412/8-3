let messages = [
    "Chúc bạn 8/3 vui vẻ, luôn xinh đẹp và hạnh phúc! 🌸💖",
    "Mình cũng muốn gửi lời chúc: Chúc bạn có một ngày tuyệt vời, tràn đầy yêu thương và nụ cười nhé! 😊✨",
    "Xin chào bạn nào đó xinh xinh! 🥰",
    "Tớ tên là Hoàng Trung Hải 😊",
    "Giới thiệu xong rồi, bạn có muốn làm quen không? 🥰"
];

let currentIndex = 0;

window.onload = function () {
    document.getElementById("screen").style.backgroundColor = "black";
    document.getElementById("heart").style.display = "none";
    document.getElementById("message-container").style.display = "none";
    document.getElementById("openGift").style.display = "block";
    document.getElementById("choice-container").style.display = "none";
    document.getElementById("womens-day-image").style.display = "none";
    document.getElementById("womens-day-video").style.display = "none";
    document.getElementById("intro-image").style.display = "none";
    document.getElementById("request-image").style.display = "none";
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
        heart.style.position = "absolute";
        heart.style.top = "30%";
        heart.style.left = "50%";
        heart.style.transform = "translate(-50%, -50%)";
    }, 1000);

    setTimeout(() => {
        let heart = document.getElementById("heart");
        heart.style.transition = "opacity 1s";
        heart.style.opacity = "0";
        setTimeout(() => heart.style.display = "none", 1000);
    }, 3000);

    setTimeout(() => {
        document.getElementById("message-container").style.display = "block";
    }, 4000);
});

function nextMessage() {
    let messageElement = document.getElementById("message");
    let nextButton = document.getElementById("nextButton");
    let womensDayImage = document.getElementById("womens-day-image");
    let womensDayVideo = document.getElementById("womens-day-video");
    let introImage = document.getElementById("intro-image");
    let requestImage = document.getElementById("request-image");

    if (currentIndex < messages.length) {
        messageElement.innerHTML = messages[currentIndex];
        
        if (currentIndex === 0) {
            womensDayImage.style.display = "block";
            womensDayVideo.style.display = "none";
            introImage.style.display = "none";
            requestImage.style.display = "none";
        } else if (currentIndex === 1) {
            womensDayImage.style.display = "none";
            womensDayVideo.style.display = "block";
            womensDayVideo.play();
            introImage.style.display = "none";
            requestImage.style.display = "none";
        } else if (currentIndex === 3) {
            womensDayImage.style.display = "none";
            womensDayVideo.style.display = "none";
            introImage.style.display = "block";
            requestImage.style.display = "none";
        } else if (currentIndex === 4) {
            womensDayImage.style.display = "none";
            womensDayVideo.style.display = "none";
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
    let maxX = window.innerWidth - noButton.clientWidth - 20;
    let maxY = window.innerHeight - noButton.clientHeight - 20;
    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

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
