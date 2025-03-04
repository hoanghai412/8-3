let messages = [
    "Chúc bạn 8/3 vui vẻ, luôn xinh đẹp và hạnh phúc! 🌸💖",
    "Mình cũng muốn gửi lời chúc: Chúc bạn có một ngày tuyệt vời, tràn đầy yêu thương và nụ cười nhé! 😊✨",
    "Xin chào bạn nào đó xinh xinh! 🥰",
    "Tớ tên là Hoàng Trung Hải 😊",
    "Giới thiệu xong rồi, cho tớ làm quen nha? ❤️"
];

let currentIndex = 0;

// Khi vào trang, màn hình sẽ đen hoàn toàn
window.onload = function () {
    document.getElementById("screen").style.backgroundColor = "black";
    document.getElementById("heart").style.display = "none";
    document.getElementById("message-container").style.display = "none";
    document.getElementById("openGift").style.display = "block";
};

// Nút mở quà
document.getElementById("openGift").addEventListener("click", function () {
    let screen = document.getElementById("screen");
    let transitionTime = 2000; // 2 giây
    
    let step = 0;
    let interval = setInterval(() => {
        step += 0.05;
        let colorValue = Math.min(255, Math.floor(step * 255));
        screen.style.backgroundColor = `rgb(${colorValue}, ${Math.floor(colorValue * 0.8)}, ${Math.floor(colorValue * 0.9)})`;
        
        if (colorValue >= 255) {
            clearInterval(interval);
        }
    }, transitionTime / 20);

    document.getElementById("openGift").style.display = "none";
    
    // Sau 3 giây hiện trái tim
    setTimeout(() => {
        document.getElementById("heart").style.display = "block";
    }, 3000);

    // Sau 6 giây thì ẩn trái tim và hiện tin nhắn
    setTimeout(() => {
        let heart = document.getElementById("heart");
        heart.style.transition = "opacity 1s";
        heart.style.opacity = "0";
        setTimeout(() => heart.style.display = "none", 1000);

        document.getElementById("message-container").style.display = "block";
    }, 6000);
});

function nextMessage() {
    let messageElement = document.getElementById("message");
    let nextButton = document.getElementById("nextButton");
    let introImage = document.getElementById("intro-image");
    let requestImage = document.getElementById("request-image");
    let womensDayImage = document.getElementById("womens-day-image");
    let womensDayVideo = document.getElementById("womens-day-video");

    if (currentIndex < messages.length) {
        messageElement.innerHTML = messages[currentIndex];

        womensDayImage.style.display = "none";
        womensDayVideo.style.display = "none";
        introImage.style.display = "none";
        requestImage.style.display = "none";

        if (currentIndex === 0) {
            womensDayImage.style.display = "block";
        } else if (currentIndex === 1) {
            womensDayVideo.style.display = "block";
            womensDayVideo.play();
        } else if (currentIndex === 3) {
            introImage.style.display = "block";
        } else if (currentIndex === 4) {
            requestImage.style.display = "block";
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
