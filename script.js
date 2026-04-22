// script.js - Logic cho app Marina Bay Sandz

let timeLeft = 300;        // 5 phút = 300 giây
let currentPhase = 893;
let lastResult = "";

// Cập nhật timer mỗi giây
function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  
  document.getElementById('timer').textContent = 
    `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  if (timeLeft <= 0) {
    // Quay số ngẫu nhiên
    let numbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
    lastResult = numbers.join(' ');
    
    document.getElementById('result').innerHTML = 
      `Kết quả: <strong>${lastResult}</strong>`;
    
    currentPhase++;
    document.getElementById('phase').textContent = `MBS 5P - Phiên ${currentPhase}`;
    
    timeLeft = 300; // Reset timer
  } else {
    timeLeft--;
  }
}

// Hàm đặt cược
function bet(type) {
  alert(`Đã đặt cược ${type} 1.98`);
  // Có thể thêm animation hoặc hiệu ứng sau
}

// Đăng ký (đóng popup)
function register() {
  const username = document.getElementById('username').value;
  if (username.trim() !== "") {
    document.getElementById('popup').style.display = 'none';
    alert(`Chào mừng ${username} đến với Marina Bay Sandz!`);
  } else {
    alert("Vui lòng nhập tên người dùng!");
  }
}

// Khởi động timer
setInterval(updateTimer, 1000);

// Khởi tạo ban đầu
window.onload = function() {
  document.getElementById('timer').textContent = "05:00";
  document.getElementById('phase').textContent = `MBS 5P - Phiên ${currentPhase}`;
};