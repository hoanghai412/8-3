let messages = [
    "Chúc bạn 8/3 vui vẻ, luôn xinh đẹp và hạnh phúc! 🌸💖",
    "Mình cũng muốn gửi lời chúc: Chúc bạn có một ngày tuyệt vời, tràn đầy yêu thương và nụ cười nhé! 😊✨",
    "Xin chào bạn nào đó xinh xinh! 🥰",
    "Tớ tên là Hoàng Trung Hải 😊",
    "Giới thiệu xong rồi, cho tớ làm quen nha? ❤️"
];

let currentIndex = 0;

window.onload = function () {
    document.getElementById("heart").style.display = "none";
    document.getElementById("message-container").style.display = "none";
    document.getElementById("openGift").style.display = "block";
};

// Nút mở quà
document.getElementById("openGift").addEventListener("click", function () {
    document.getElementById("openGift").style.display = "none";
    
    setTimeout(() => {
        document.getElementById("heart").style.display = "block";
    }, 2000);

    setTimeout(() => {
        document.getElementById("heart").style.display = "none";
        document.getElementById("message-container").style.display = "block";
    }, 4000);
});

function nextMessage() {
    let messageElement = document.getElementById("message");
    let nextButton = document.getElementById("nextButton");

    if (currentIndex < messages.length) {
        messageElement.innerHTML = messages[currentIndex];

        document.getElementById("intro-image").style.display = "none";
        document.getElementById("request-image").style.display = "none";
        document.getElementById("womens-day-image").style.display = "none";
        document.getElementById("womens-day-video").style.display = "none";

        if (currentIndex === 0) {
            document.getElementById("womens-day-image").style.display = "block";
        } else if (currentIndex === 1) {
            document.getElementById("womens-day-video").style.display = "block";
            document.getElementById("womens-day-video").play();
        } else if (currentIndex === 3) {
            document.getElementById("intro-image").style.display = "block";
        } else if (currentIndex === 4) {
            document.getElementById("request-image").style.display = "block";
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
