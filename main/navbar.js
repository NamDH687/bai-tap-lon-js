(function () {
  const NAVBAR_ROOT_ID = "site-navbar";
  let authInitialized = false;

  function getPaths() {
    const page = document.body.getAttribute("data-page") || "intro";
    if (page === "main") {
      return {
        page,
        home: "index.html",
        main: "index.html",
        support: "#",
        intro: "main/intro.html",
        policy: "main/chinhsach.html",
        login: "login/login.html",
        logo: "logo.jpg",
        showSearch: true,
      };
    }
    if (page === "game") {
      return {
        page,
        home: "../index.html",
        main: "../index.html",
        support: "../index.html#ho-tro",
        intro: "../main/intro.html",
        policy: "../main/chinhsach.html",
        login: "../login/login.html",
        logo: "../logo.jpg",
        showSearch: true,
      };
    }
    return {
      page,
      home: "../index.html",
      main: "../index.html",
      support: "../index.html#ho-tro",
      intro: "intro.html",
      policy: "chinhsach.html",
      login: "../login/login.html",
      logo: "../logo.jpg",
      showSearch: false,
    };
  }

  function getCurrentUser() {
    return localStorage.getItem("currentUser");
  }

  function getBalanceKey(username = getCurrentUser()) {
    return username ? `balance:${username}` : "balance";
  }

  function getCartKey(username = getCurrentUser()) {
    return username ? `cart:${username}` : "cart:guest";
  }

  function getUserBalance(username = getCurrentUser()) {
    return Number(localStorage.getItem(getBalanceKey(username)) || 0);
  }

  function setUserBalance(balance, username = getCurrentUser()) {
    localStorage.setItem(getBalanceKey(username), String(balance));
  }

  function buildSearchHtml(showSearch) {
    if (!showSearch) return "";
    return `
      <div class="search-box">
        <input type="text" id="searchInput" placeholder="Gõ để tìm kiếm..." />
        <button type="button" aria-label="Tìm kiếm">🔍</button>
      </div>
    `;
  }

  const GENRES = [
    { id: "all", label: "Tất cả game" },
    { id: "nhapvai", label: "Game Nhập vai" },
    { id: "thethao", label: "Game Thể thao" },
    { id: "bansung", label: "Hành động / Bắn súng" },
    { id: "duaxe", label: "Game Đua xe" },
    { id: "chiensuat", label: "Chiến thuật / Sinh tồn" },
  ];

  function buildGenreLinks(p) {
    if (p.page === "main") {
      return GENRES.map(
        (g) => `<a href="#" data-genre="${g.id}">${g.label}</a>`,
      ).join("");
    }
    return GENRES.map((g) => {
      const hash = `#genre-${g.id}`;
      return `<a href="${p.main}${hash}">${g.label}</a>`;
    }).join("");
  }

  function buildStoreMenu(p) {
    const storeHref = p.page === "main" ? "#store" : `${p.main}#store`;
    return `
      <div class="policy menu-item store-menu">
        <a href="${storeHref}" id="storeBtn">CỬA HÀNG</a>
        <div class="menu-submenu" id="genreDropdown">
          ${buildGenreLinks(p)}
        </div>
      </div>
    `;
  }

  function buildSupportLink(p) {
    if (p.page === "main") {
      return `<a href="#" id="supportBtn">HỖ TRỢ</a>`;
    }
    return `<a href="${p.support}" id="supportBtn">HỖ TRỢ</a>`;
  }

  function buildInfoLink(p) {
    if (p.page === "main") {
      return `<a href="#" id="infoBtn">THƯ VIỆN</a>`;
    }
    return `<a href="${p.main}#lich-su" id="infoBtn">THƯ VIỆN</a>`;
  }

  function buildCartSidebar(p) {
    if (p.page === "main") return "";

    return `
      <div id="cartSidebar" class="cart-sidebar">
        <div class="cart-header">
          <h2>Giỏ Hàng Của Bạn</h2>
          <span id="closeCartBtn">✕</span>
        </div>
        <div id="cartItems" class="cart-items">
          <p class="empty-cart">Giỏ hàng trống.</p>
        </div>
        <div class="cart-footer">
          <div class="cart-total">
            <span>Tổng tiền:</span>
            <span id="cartTotal">0đ</span>
          </div>
          <button type="button" class="checkout-btn" id="checkoutCartBtn">
            Tiến Hành Thanh Toán
          </button>
        </div>
      </div>
    `;
  }

  function buildAccountModals(p) {
    const accountInfoModal = `
      <div class="modal fade" id="accountInfoModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Thông tin tài khoản</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <p><strong>Tài khoản:</strong> <span id="accountInfoName"></span></p>
              <p class="mb-0"><strong>Số dư:</strong> <span id="accountInfoBalance"></span></p>
            </div>
          </div>
        </div>
      </div>
    `;

    if (p.page === "main") return accountInfoModal;

    return `
      ${accountInfoModal}
      <div class="modal fade" id="depositModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Nạp tiền</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <div class="mt-3 text-center">
                <h6>Quét mã QR để thanh toán</h6>
                <img
                  src="qr.jpg"
                  alt="QR Thanh Toán"
                  class="img-fluid rounded"
                  style="max-width: 300px;"
                />
                <p class="mt-3 mb-0">
                  <strong>Ngân hàng:</strong> MSB BANK<br />
                  <strong>Chủ tài khoản:</strong> VU TUAN MINH<br />
                  <strong>Số tài khoản:</strong> 80001841292
                </p>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" id="confirmDeposit">Nạp tiền</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function buildNavbarHtml(p) {
    const cartButton = `
        <button type="button" class="navbar-cart-btn" id="openCartBtn" aria-label="Mo gio hang">
          <span class="navbar-cart-icon">&#128722;</span>
          <span class="navbar-cart-count" id="cartCount">0</span>
        </button>
      `;

    return `
      <div class="top-bar">
        <div class="logo-text">SHOP GAME BẢN QUYỀN CHÍNH HÃNG</div>
        ${buildSearchHtml(p.showSearch)}
        <div class="top-right">
          <a href="${p.intro}">Về Gamecuatui.vn |</a>
          <a href="${p.policy}">Chính sách |</a>
          <div class="policy-top">
            <a href="#">Thông tin liên hệ ▾|</a>
            <div class="top-submenu">
              <a href="https://www.facebook.com/profile.php?id=61590020309778" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.tgdd.vn/2020/03/GameApp/Facebook-200x200.jpg" alt="Facebook" /> Facebook
              </a>
              <a href="https://www.tiktok.com/@shopgametuat.vnuytin?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
                <img src="https://p16-tiktokcdn-com.akamaized.net/obj/tiktok-obj/c793ec5430b28c9d157f34562a0596b9" alt="TikTok" /> TikTok
              </a>
              <a href="https://zalo.me/0387918807" target="_blank" rel="noopener noreferrer">
                <img src="https://play-lh.googleusercontent.com/Zs0-SVFd7FHABCT6buDhAVmOZHlIJS8Z37LMmWghcJV9N4ryZfpI0dZa0jzejcJ3cQ" alt="Zalo" /> Zalo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="menu">
        <a href="${p.home}">
          <img src="https://img.freepik.com/premium-vector/gct-letter-logo-design-technology-company-gct-logo-design-black-white-color-combination-gct-logo-gct-vector-gct-design-gct-icon-gct-alphabet-gct-typography-logo-design_229120-150392.jpg?w=1380" class="logo" alt="Logo" />
        </a>
        <div class="menu-item">
          <a href="${p.home}" id="homeBtn">TRANG CHỦ</a>
        </div>
        ${buildStoreMenu(p)}
        <div class="menu-item">
          ${buildInfoLink(p)}
        </div>
        <div class="menu-item">
          ${buildSupportLink(p)}
        </div>
        <div class="login">
          <a href="${p.login}" id="userAuthLink">ĐĂNG NHẬP / ĐĂNG KÝ</a>
        </div>
        ${cartButton}
      </div>
      ${buildCartSidebar(p)}
      ${buildAccountModals(p)}
    `;
  }

  function initUserAuth() {
    if (authInitialized) return;

    const authBtn = document.getElementById("userAuthLink");
    if (!authBtn) return;

    const currentUser = getCurrentUser();
    const balance = getUserBalance(currentUser);

    if (!currentUser) return;

    authInitialized = true;

    authBtn.innerHTML = `
      <div class="btn-group">
        <button type="button" class="btn btn-primary">
          <span class="user-avatar">👤</span>
          <span>${currentUser} - ${Number(balance).toLocaleString("vi-VN")}đ</span>
        </button>
        <button
          type="button"
          class="btn btn-primary dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><a class="dropdown-item" id="accountInfoBtn" href="#">Thông tin</a></li>
          <li><a class="dropdown-item" id="depositBtn" href="#">Nạp tiền</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li><button type="button" class="dropdown-item" id="logoutBtn">Đăng xuất</button></li>
        </ul>
      </div>
    `;

    authBtn.href = "#";
    authBtn.classList.add("logged");

    const dropdownToggle = authBtn.querySelector('[data-bs-toggle="dropdown"]');
    if (dropdownToggle && typeof bootstrap !== "undefined") {
      new bootstrap.Dropdown(dropdownToggle);
    }

    const accountInfoBtn = authBtn.querySelector("#accountInfoBtn");
    const depositBtn = authBtn.querySelector("#depositBtn");
    const qrBtn = authBtn.querySelector("#qrBtn");

    if (accountInfoBtn) {
      accountInfoBtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        const accountInfoModal = document.getElementById("accountInfoModal");
        if (!accountInfoModal || typeof bootstrap === "undefined") return;

        const accountInfoName = document.getElementById("accountInfoName");
        const accountInfoBalance =
          document.getElementById("accountInfoBalance");

        if (accountInfoName) accountInfoName.innerText = currentUser;
        if (accountInfoBalance) {
          accountInfoBalance.innerText =
            getUserBalance(currentUser).toLocaleString("vi-VN") + "đ";
        }

        new bootstrap.Modal(accountInfoModal).show();
      });
    }

    if (qrBtn) {
      qrBtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        const qrModal = document.getElementById("qrModal");
        if (!qrModal || typeof bootstrap === "undefined") return;

        const modal = new bootstrap.Modal(qrModal);

        modal.show();
      });
    }
    if (depositBtn) {
      depositBtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        const depositModal = document.getElementById("depositModal");
        if (!depositModal || typeof bootstrap === "undefined") return;

        const modal = new bootstrap.Modal(depositModal);

        modal.show();
      });
    }

    const logoutBtn = authBtn.querySelector("#logoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (confirm("Đăng xuất tài khoản?")) {
          localStorage.removeItem(getCartKey(currentUser));
          localStorage.removeItem("currentUser");
          location.reload();
        }
      });
    }

    authBtn.addEventListener("click", function (e) {
      e.preventDefault();
    });

    authBtn.style.opacity = "0";
    setTimeout(() => {
      authBtn.style.transition = "0.6s";
      authBtn.style.opacity = "1";
    }, 200);
  }

  function parseCartPrice(price) {
    if (!price) return 0;
    const s = String(price).trim();
    if (s === "Miễn phí" || s === "0" || s === "0đ") return 0;
    const cleaned = s.replace(/[^\d]/g, "");
    const num = Number(cleaned);
    return isNaN(num) ? 0 : num;
  }

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(getCartKey())) || [];
    } catch (e) {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem(getCartKey(), JSON.stringify(cart));
  }

  function initDeposit() {
    const confirmDepositBtn = document.getElementById("confirmDeposit");
    if (!confirmDepositBtn) return;

    confirmDepositBtn.addEventListener("click", function () {
      const amount = Number(prompt("Nhập số tiền muốn nạp:"));

      if (!amount || amount <= 0) {
        alert("Nhập số tiền hợp lệ");
        return;
      }

      const currentUser = getCurrentUser();

      if (!currentUser) {
        alert("Vui lòng đăng nhập để nạp tiền");
        return;
      }

      const balance = getUserBalance(currentUser) + amount;
      setUserBalance(balance, currentUser);

      const accountInfoBalance = document.getElementById("accountInfoBalance");
      if (accountInfoBalance) {
        accountInfoBalance.innerText = balance.toLocaleString("vi-VN") + "đ";
      }

      alert("Nạp tiền thành công!");
      location.reload();
    });
  }

  function updateCartCount() {
    const cartCount = document.getElementById("cartCount");
    if (!cartCount) return;

    cartCount.innerText = getCart().length;
  }

  function renderSharedCart() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    if (!cartItems || !cartTotal) return;

    const cart = getCart();
    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
      cartItems.innerHTML = `<p class="text-muted mb-0">Giỏ hàng trống</p>`;
    } else {
      cart.forEach((item, index) => {
        total += parseCartPrice(item.price);
        const priceDisplay =
          parseCartPrice(item.price) === 0 ? "0đ" : item.price;

        cartItems.innerHTML += `
          <div class="cart-item">
            <img src="${item.image || ""}" class="cart-img" alt="">
            <div class="cart-info">
              <div class="cart-name">${item.name}</div>
              <div class="cart-price">${priceDisplay}</div>
            </div>
            <button type="button" class="btn btn-sm btn-danger remove-cart-item" data-index="${index}">
              X
            </button>
          </div>
        `;
      });
    }

    cartTotal.innerText = total.toLocaleString("vi-VN") + "đ";
    updateCartCount();
  }

  function initCart() {
    updateCartCount();

    const openCartBtn = document.getElementById("openCartBtn");
    if (openCartBtn) {
      openCartBtn.addEventListener("click", function () {
        const cartSidebar = document.getElementById("cartSidebar");
        if (!cartSidebar) return;

        renderSharedCart();
        cartSidebar.style.display = "flex";
      });
    }

    const closeCartBtn = document.getElementById("closeCartBtn");
    if (closeCartBtn) {
      closeCartBtn.addEventListener("click", function () {
        const cartSidebar = document.getElementById("cartSidebar");
        if (cartSidebar) cartSidebar.style.display = "none";
      });
    }

    const cartItems = document.getElementById("cartItems");
    if (cartItems) {
      cartItems.addEventListener("click", function (e) {
        const removeBtn = e.target.closest(".remove-cart-item");
        if (!removeBtn) return;

        const cart = getCart();
        cart.splice(Number(removeBtn.dataset.index), 1);
        saveCart(cart);
        renderSharedCart();
      });
    }

    const checkoutCartBtn = document.getElementById("checkoutCartBtn");
    if (checkoutCartBtn) {
      checkoutCartBtn.addEventListener("click", function () {
        const currentUser = getCurrentUser();
        if (!currentUser) {
          alert("Vui lòng đăng nhập trước khi thanh toán");
          return;
        }

        const cart = getCart();
        if (cart.length === 0) {
          alert("Giỏ hàng trống");
          return;
        }

        const total = cart.reduce(
          (sum, item) => sum + parseCartPrice(item.price),
          0,
        );
        const balance = getUserBalance(currentUser);

        if (balance < total) {
          alert("Số dư không đủ, vui lòng nạp thêm tiền");
          return;
        }

        const newBalance = balance - total;
        setUserBalance(newBalance, currentUser);

        const purchasedKey = `purchasedGames:${currentUser}`;
        const purchased = JSON.parse(localStorage.getItem(purchasedKey)) || [];
        cart.forEach((item) => {
          if (!purchased.some((g) => g.name === item.name)) {
            purchased.unshift({ name: item.name, image: item.image || "" });
          }
        });
        localStorage.setItem(purchasedKey, JSON.stringify(purchased));

        localStorage.removeItem(getCartKey());
        renderSharedCart();

        alert("Thanh toán thành công!\nTài khoản game đã được gửi.");
        location.reload();
      });
    }
  }
  
  function handleSupportHash() {
    if (window.location.hash === "#ho-tro") {
      const sc = document.getElementById("support-container");
      if (!sc) return;
      sc.style.display = "block";
      setTimeout(() => sc.scrollIntoView({ behavior: "smooth" }), 100);
    }
    if (window.location.hash === "#lich-su") {
      const ls = document.getElementById("info-container");
      if (ls) {
        ls.style.display = "block";
        setTimeout(() => ls.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }

  function renderNavbar() {
    const root = document.getElementById(NAVBAR_ROOT_ID);
    if (!root) return;

    const paths = getPaths();
    root.innerHTML = buildNavbarHtml(paths);
    initCart();
    if (paths.page !== "main") {
      initDeposit();
    }
    if (paths.page === "main") {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", handleSupportHash);
      } else {
        handleSupportHash();
      }
    }
    setTimeout(() => {
      document.dispatchEvent(new CustomEvent("navbarReady"));
    }, 0);
  }

  function scheduleUserAuth() {
    initUserAuth();
  }

  renderNavbar();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scheduleUserAuth);
  } else {
    scheduleUserAuth();
  }
})();
