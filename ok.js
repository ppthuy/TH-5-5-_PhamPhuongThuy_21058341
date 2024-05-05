document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn gửi form mặc định

    // Hiển thị thông báo khi form được gửi thành công
    alert("Bạn đã gửi câu hỏi thành công!");
    document.getElementById("myForm").reset();
  });

