function showRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

function showLogin() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}
document
    .getElementById("loginForm")
    .addEventListener("submit", function(event) {
        event.preventDefault();
        const usernameInput = this.querySelector('input[type="text"]');

        if (usernameInput && usernameInput.value.trim() !== "") {
            localStorage.setItem("currentUser", usernameInput.value.trim());
            window.location.href = "index.html";
        } else {
            alert("Vui lòng nhập tên tài khoản!");
        }
    });
document
    .getElementById("registerForm")
    .addEventListener("submit", function(event) {
        event.preventDefault();
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
            alert("Đăng ký tài khoản thành công!");
            showLogin();
        }
    });
