let messages = [
    "Chúc bạn 8/3 vui vẻ, luôn xinh đẹp và hạnh phúc! 🌸💖",
    "Mình cũng muốn gửi lời chúc: Chúc bạn có một ngày tuyệt vời, tràn đầy yêu thương và nụ cười nhé! 😊✨",
    "Xin chào bạn nào đó xinh xinh! 🥰",
    "Tớ tên là Hoàng Trung Hải 😊",
    "Giới thiệu xong rồi, cho tớ làm quen nha? ❤️"
];

let currentIndex = 0;

// Hàm mở quà
function openGift() {
    let screen = document.getElementById("screen");
    let giftButton = document.getElementById("giftButton");
    let heart = document.getElementById("heart");
    
    // Chuyển dần màn hình từ đen sang hồng
    screen.style.transition = "background-color 2s";
    screen.style.backgroundColor = "pink";
    
    // Ẩn nút mở quà
    giftButton.style.display = "none";
    
    // Hiện trái tim
    heart.style.display = "block";
    
    // Sau 3 giây thì ẩn trái tim
    setTimeout(() => {
        heart.style.transition = "opacity 1s";
        heart.style.opacity = "0";
        setTimeout(() => heart.style.display = "none", 1000);
        
        // Khi trái tim biến mất, hiện phần giới thiệu
        document.getElementById("message-container").style.display = "block";
    }, 3000);
}

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
