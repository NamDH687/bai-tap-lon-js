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
        intro: "../intro.html",
        policy: "../chinhsach.html",
        login: "../login/login.html",
        logo: "../logo.jpg",
        showSearch: true,
      };
    }
    return {
      page,
      home: "main/index.html",
      main: "main/index.html",
      support: "main/index.html#ho-tro",
      intro: "intro.html",
      policy: "chinhsach.html",
      login: "login/login.html",
      logo: "logo.jpg",
      showSearch: false,
    };
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
<<<<<<< HEAD
        (g) => `<a href="#" data-genre="${g.id}">${g.label}</a>`,
=======
        (g) =>
          `<a href="#" data-genre="${g.id}">${g.label}</a>`,
>>>>>>> 5adfabf11f4347ba497bd231a399a16ebac4453f
      ).join("");
    }
    return GENRES.map((g) => {
      const hash = g.id === "all" ? "" : `#genre-${g.id}`;
      return `<a href="${p.main}${hash}">${g.label}</a>`;
    }).join("");
  }

  function buildStoreMenu(p) {
    const storeHref = p.page === "main" ? "#" : p.main;
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

  function buildNavbarHtml(p) {
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
<<<<<<< HEAD
              <a href="https://www.tiktok.com/@shopgametuat.vnuytin?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
=======
              <a href="https://www.tiktok.com/@shopgametuat.vnuytin?is_from_webapp=1&amp;sender_device=pc" target="_blank" rel="noopener noreferrer">
>>>>>>> 5adfabf11f4347ba497bd231a399a16ebac4453f
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
<<<<<<< HEAD
          <img src="https://img.freepik.com/premium-vector/gct-letter-logo-design-technology-company-gct-logo-design-black-white-color-combination-gct-logo-gct-vector-gct-design-gct-icon-gct-alphabet-gct-typography-logo-design_229120-150392.jpg?w=1380" class="logo" alt="Logo" />
=======
          <img src="https://img.freepik.com/premium-vector/gct-letter-logo-design-technology-company-gct-logo-design-black-white-color-combination-gct-logo-gct-vector-gct-design-gct-icon-gct-alphabet-gct-typography-logo-design_229120-150392.jpg?w=1380" class="logo" alt="Logo Tuat.vn" />
>>>>>>> 5adfabf11f4347ba497bd231a399a16ebac4453f
        </a>
        <div class="menu-item">
          <a href="${p.home}" id="homeBtn">TRANG CHỦ</a>
        </div>
        ${buildStoreMenu(p)}
        <div class="menu-item">
<<<<<<< HEAD
          <a href="#" id="infoBtn">THÔNG TIN</a>
=======
          <a href="#">THÔNG TIN</a>
>>>>>>> 5adfabf11f4347ba497bd231a399a16ebac4453f
        </div>
        <div class="menu-item">
          ${buildSupportLink(p)}
        </div>
        <div class="login">
          <a href="${p.login}" id="userAuthLink">ĐĂNG NHẬP / ĐĂNG KÝ</a>
        </div>
      </div>
    `;
  }

  function initUserAuth() {
    if (authInitialized) return;

    const authBtn = document.getElementById("userAuthLink");
    if (!authBtn) return;

    const currentUser = localStorage.getItem("currentUser");
    const balance = localStorage.getItem("balance") || "0";

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
          <li><a class="dropdown-item" href="#">Thông tin</a></li>
          <li><a class="dropdown-item" href="#">Nạp tiền</a></li>
          <li><a class="dropdown-item" href="#">Cài đặt</a></li>
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

    const logoutBtn = authBtn.querySelector("#logoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (confirm("Đăng xuất tài khoản?")) {
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

  function renderNavbar() {
    const root = document.getElementById(NAVBAR_ROOT_ID);
    if (!root) return;

    const paths = getPaths();
    root.innerHTML = buildNavbarHtml(paths);
    document.dispatchEvent(new CustomEvent("navbarReady"));
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
<<<<<<< HEAD
})();
=======
})();
>>>>>>> 5adfabf11f4347ba497bd231a399a16ebac4453f
