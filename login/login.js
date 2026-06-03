function getUsers() {
  const users = JSON.parse(localStorage.getItem("users") || "{}");
  const oldUsername = localStorage.getItem("username");
  const oldPassword = localStorage.getItem("password");

  if (oldUsername && oldPassword && !users[oldUsername]) {
    users[oldUsername] = { password: oldPassword };
    localStorage.setItem("users", JSON.stringify(users));
  }

  return users;
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function getBalanceKey(username) {
  return `balance:${username}`;
}

function ensureUserBalance(username) {
  const balanceKey = getBalanceKey(username);

  if (localStorage.getItem(balanceKey) === null) {
    const oldBalance = localStorage.getItem("balance");
    localStorage.setItem(balanceKey, oldBalance || "0");
  }
}

function showRegister() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("forgotForm").style.display = "none";
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
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    const users = getUsers();

    if (!username || !password) {
      alert("Vui lòng nhập đầy đủ thông tin!");
    } else if (users[username] && users[username].password === password) {
      ensureUserBalance(username);
      localStorage.setItem("currentUser", username);
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
        localStorage.setItem("currentUser", username);
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
    const username = usernameInput.value.trim();
    const passwordInputs = this.querySelectorAll('input[type="password"]');
    const password = passwordInputs[0].value;
    const confirmPassword = passwordInputs[1].value;
    const users = getUsers();

    if (!username) {
      alert("Vui lòng nhập tài khoản!");
      usernameInput.focus();
    } else if (users[username]) {
      alert("Tài khoản đã tồn tại!");
      usernameInput.focus();
    } else if (password !== confirmPassword) {
      alert("Mật khẩu và xác nhận mật khẩu không trùng khớp!");
      passwordInputs[1].focus();
      passwordInputs[1].select();
    } else {
      users[username] = { password };
      saveUsers(users);
      localStorage.setItem(getBalanceKey(username), "0");
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      alert("Đăng ký tài khoản thành công!");
      showLogin();
    }
  });

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

  const currentUser = localStorage.getItem("currentUser");

  if (currentUser) {
    const users = getUsers();

    if (users[currentUser]) {
      users[currentUser].password = newPassword;
      saveUsers(users);
    }
  }

  localStorage.setItem("password", newPassword);
  alert("Lấy lại mật khẩu thành công!");
  document.getElementById("newPassword").value = "";
  showLogin();
});
