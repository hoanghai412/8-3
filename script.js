// JavaScript (script.js)
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
};

document.getElementById("openGift").addEventListener("click", function () {
    let screen = document.getElementById("screen");
    let transitionTime = 2000;
    
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
    
    setTimeout(() => {
        document.getElementById("heart").style.display = "block";
    }, 3000);

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
    
    if (currentIndex < messages.length) {
        messageElement.innerHTML = messages[currentIndex];
        currentIndex++;

        if (currentIndex === messages.length) {
            nextButton.style.display = "none";
        }
    }
}
