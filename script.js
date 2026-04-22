// HÀM CHUYỂN ĐỔI MÀN HÌNH (SCREENS)
function showScreen(screenId) {
  // 1. Ẩn tất cả các màn hình
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => {
    screen.classList.remove('active');
  });

  // 2. Hiển thị màn hình được chọn
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }

  // 3. Cập nhật trạng thái Active trên thanh Bottom Nav
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.classList.remove('active');
    // Kiểm tra xem item có chứa hàm gọi screenId này không
    if (item.getAttribute('onclick') && item.getAttribute('onclick').includes(screenId)) {
      item.classList.add('active');
    }
  });

  // Cuộn lên đầu trang khi chuyển màn hình
  targetScreen.scrollTop = 0;
}

// XỬ LÝ CHỌN PHƯƠNG THỨC THANH TOÁN
document.querySelectorAll('.method').forEach(method => {
  method.addEventListener('click', function() {
    document.querySelectorAll('.method').forEach(m => m.classList.remove('active'));
    this.classList.add('active');
  });
});

// GIẢ LẬP ĐỒNG HỒ ĐẾM NGƯỢC TRONG GAME
let time = 45;
setInterval(() => {
  time--;
  if (time < 0) time = 60;
  const timerElement = document.querySelector('.timer');
  if (timerElement) {
    timerElement.textContent = `00:${time < 10 ? '0' + time : time}`;
  }
}, 1000);

// HIỆU ỨNG KHI BẤM NÚT ĐẶT CƯỢC
document.querySelectorAll('.bet-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const type = this.classList.contains('red') ? 'LỚN' : 'NHỎ';
    alert(`Bạn đã đặt cược cửa ${type} thành công!`);
  });
});

// HIỆU ỨNG KHI XÁC NHẬN NẠP/RÚT
document.querySelectorAll('.action-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    alert('Yêu cầu của bạn đã được gửi đi. Vui lòng chờ hệ thống xử lý!');
  });
});
