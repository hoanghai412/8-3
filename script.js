let messages = [
    "Chúc bạn 8/3 vui vẻ, luôn xinh đẹp và hạnh phúc! 🌸💖",
    "Mình cũng muốn gửi lời chúc: Chúc bạn có một ngày tuyệt vời, tràn đầy yêu thương và nụ cười nhé! 😊✨",
    "Xin chào bạn nào đó xinh xinh! 🥰",
    "Tớ tên là Hoàng Trung Hải 😊",
    "Giới thiệu xong rồi, cho tớ làm quen nha? ❤️"
];

let currentIndex = 0;

// Sau 3 giây mới hiện chữ
setTimeout(() => {
    document.getElementById("intro-text").style.display = "block";
}, 5000);

// Sau 5s thì ẩn trái tim
setTimeout(() => {
    let heart = document.getElementById("heart");
    heart.style.transition = "opacity 1s";
    heart.style.opacity = "0";
    setTimeout(() => heart.style.display = "none", 1000);

    // Khi trái tim biến mất, hiện phần giới thiệu
    document.getElementById("message-container").style.display = "block";
}, 5000);

function nextMessage() {
    let messageElement = document.getElementById("message");
    let nextButton = document.getElementById("nextButton");
    let introImage = document.getElementById("intro-image");
    let requestImage = document.getElementById("request-image");
    let womensDayImage = document.getElementById("womens-day-image");
    let womensDayVideo = document.getElementById("womens-day-video");

    if (currentIndex < messages.length) {
        messageElement.innerHTML = messages[currentIndex];

        // Ẩn tất cả hình ảnh & video trước khi kiểm tra điều kiện
        womensDayImage.style.display = "none";
        womensDayVideo.style.display = "none";
        introImage.style.display = "none";
        requestImage.style.display = "none";

        // Hiển thị hình ảnh hoặc video theo từng bước
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
            nextButton.style.display = "none"; // Ẩn nút tiếp theo khi hết tin nhắn
            document.getElementById("choice-container").style.display = "block"; // Hiện câu hỏi làm quen
        }
    }
}

// Nút "Có"
function sayYes() {
    alert("Yayyy! Mình làm bạn nhé! 💖🥰");
}

// Nút "Không" chạy trốn (Cải thiện để chạy tốt trên điện thoại)
function runAway() {
    let noButton = document.getElementById("noButton");
    let x = Math.random() * (window.innerWidth - noButton.clientWidth);
    let y = Math.random() * (window.innerHeight - noButton.clientHeight);

    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

// Tự động phát nhạc khi trang load hoặc khi người dùng nhấn vào màn hình
document.addEventListener("DOMContentLoaded", function () {
    let music = document.getElementById("loveSong");

    function playMusic() {
        music.play().catch(error => console.log("Không thể tự động phát nhạc:", error));
    }

    // Phát nhạc khi người dùng click hoặc chạm vào trang
    document.body.addEventListener("click", playMusic, { once: true });
    document.body.addEventListener("touchstart", playMusic, { once: true });
});
