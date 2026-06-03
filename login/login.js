function showRegister() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
}

function showLogin() {
  document.getElementById("registerForm").style.display = "none";

  document.getElementById("forgotForm").style.display = "none";

  document.getElementById("loginForm").style.display = "block";
}
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameInput = this.querySelector('input[type="text"]');
    const passwordInput = this.querySelector('input[type="password"]');
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    if (usernameInput.value === "" || passwordInput.value === "") {
      alert("Vui lòng nhập đầy đủ!");
    } else if (
      usernameInput.value === username &&
      passwordInput.value === password
    ) {
      localStorage.setItem("currentUser", usernameInput.value.trim());
      document.body.innerHTML += `
            <div style="
                position:fixed;
                top:20px;
                right:20px;
                background:#4caf50;
                color:white;
                padding:15px 25px;
                border-radius:10px;
                font-size:18px;
                z-index:9999;
            ">
                Đăng nhập thành công!
            </div>
        `;
      setTimeout(() => {
        localStorage.setItem("currentUser", usernameInput.value.trim());

        window.location.href = "../main/index.html";
      }, 1500);
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  });
document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const usernameInput = this.querySelector('input[type="text"]');
    const username = usernameInput.value;
    const passwordInputs = this.querySelectorAll('input[type="password"]');
    const password = passwordInputs[0].value;
    const confirmPassword = passwordInputs[1].value;

    if (password !== confirmPassword) {
      alert(
        "Mật khẩu và Xác nhận mật khẩu không trùng khớp! Vui lòng kiểm tra lại.",
      );
      passwordInputs[1].focus();
      passwordInputs[1].select();
    } else {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      alert("Đăng ký tài khoản thành công!");
      showLogin();
    }
  });
// ================= QUÊN MẬT KHẨU =================

function showForgotPassword() {
  document.getElementById("loginForm").style.display = "none";

  document.getElementById("registerForm").style.display = "none";

  document.getElementById("forgotForm").style.display = "block";
}

document.getElementById("forgotForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const newPassword = document.getElementById("newPassword").value.trim();

  if (newPassword === "") {
    alert("Vui lòng nhập mật khẩu!");

    return;
  }

  localStorage.setItem("password", newPassword);

  alert("Lấy lại mật khẩu thành công!");

  document.getElementById("newPassword").value = "";

  showLogin();
});
