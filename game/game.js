// ==================== DỮ LIỆU GAME ====================
function getCartKey() {
  const user = localStorage.getItem("currentUser");
  return user ? `cart:${user}` : "cart:guest";
}

const gameData = {
  gta5: {
    id: "gta5",
    name: "GTA V",
    subtitle: "Tài Khoản Steam Online Mới + Mail",
    genre: "Hành động / Thế giới mở",
    developer: "Rockstar Games",
    price: "500.000đ",
    sold: "772",
    rating: "4.3",
    reviews: 3,
    accentColor: "#e8c73a",
    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg",
    images: [
      "https://phongnet.com/wp-content/uploads/2019/11/cau-hinh-gta-5.jpg",
      "https://longhungpc.vn/media/news/28-cau-hinh-choi-gta-5-1.jpg",
      "https://hoanghapc.vn/media/news/2505_cau-hinh-choi-gta-v-3.jpg",
      "https://photo.znews.vn/w660/Uploaded/spivovxi/2021_09_07/240443739_2945559315702740_2995327324342774909_n.jpg",
      "https://cdn.tgdd.vn/2020/05/content/nhanh-tay-nhan-ngay-gta-v-tri-gia-450000-vnd-dang-mien-phi-tren-epic-game-store-3-800x450.jpg",
      "https://images6.alphacoders.com/553/553248.jpg",
    ],
    tagline:
      "Thành phố Los Santos — Thế giới không có luật lệ, chỉ có sức mạnh.",
    description: `
      <p><span class="hl">Grand Theft Auto V</span> là kiệt tác thế giới mở của <span class="hl">Rockstar Games</span>, lấy bối cảnh tại thành phố hư cấu <span class="hl">Los Santos</span> — nơi ánh đèn neon che giấu những góc tối tăm nhất của xã hội.</p>
      <p>Bạn sẽ hóa thân vào <span class="hl">3 nhân vật chính</span> với số phận đan xen:</p>
      <ul>
        <li><span class="hl">Michael De Santa</span> — Tên tội phạm về hưu sống cuộc đời nhàm chán, cho đến khi quá khứ tìm lại hắn.</li>
        <li><span class="hl">Franklin Clinton</span> — Thanh niên đường phố khao khát thoát khỏi vòng lặp nghèo khó bằng mọi giá.</li>
        <li><span class="hl">Trevor Philips</span> — Kẻ điên loạn không kiểm soát được bản thân, nhưng lại là người trung thực nhất trong số họ.</li>
      </ul>
      <p>Với <span class="hl">GTA Online</span>, thế giới mở rộng vô tận — cùng bạn bè lên kế hoạch cướp ngân hàng, đua xe, xây đế chế buôn bán… tất cả trong một siêu đô thị không bao giờ ngủ.</p>
    `,
    features: [
      "Tài khoản Steam tạo mới, mua sẵn game bản quyền",
      "Bàn giao kèm Email đăng ký tài khoản",
      "Full bản quyền, chơi Offline & Online với bạn bè",
      "Sở hữu hoàn toàn (đổi được email, pass, SĐT)",
      "Bảo Hành Vĩnh Viễn",
    ],
    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 22H2 (64-bit) trở lên"],
        ["Vi xử lý", "Intel i5-8400 / AMD Ryzen 5 1600"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "Nvidia GTX 1650 / AMD RX 6500 XT"],
        ["DirectX", "Phiên bản 12"],
        ["Dung lượng", "167 GB (SSD bắt buộc)"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10 22H2 (64-bit) trở lên"],
        ["Vi xử lý", "Intel i5-12400F / AMD Ryzen 5 5600X"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "Nvidia RTX 2060 / AMD RX 6700 XT"],
        ["DirectX", "Phiên bản 12"],
        ["Dung lượng", "167 GB (SSD bắt buộc)"],
      ],
    },
  },

  eafc25: {
    id: "eafc25",
    name: "EA FC 25",
    subtitle: "Tài Khoản EA / Steam Bản Quyền + Mail",
    genre: "Thể thao / Bóng đá",
    developer: "EA Sports",
    price: "1.200.000đ",
    sold: "411",
    rating: "4.7",
    reviews: 12,
    accentColor: "#00c3ff",
    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2669320/header.jpg",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2669320/header.jpg",
      "https://cdn.mos.cms.futurecdn.net/BZELkEuHdAGPz4RoMSu6zf.jpg",
      "https://assetsio.gnwcdn.com/ea-sports-fc-25-review-2.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
      "https://cdn.mos.cms.futurecdn.net/KS3bqFa4emgkxgJ7MhzEkb.jpg",
    ],
    tagline: "Sân cỏ ảo — Cảm xúc thật. Kỹ thuật mới, bóng đá mới.",
    description: `
      <p><span class="hl">EA Sports FC 25</span> — kỷ nguyên mới của bóng đá điện tử sau khi EA chính thức tách khỏi thương hiệu FIFA. Với công nghệ <span class="hl">FC IQ</span> được cải tiến triệt để, từng cầu thủ giờ đây suy nghĩ và di chuyển như người thật.</p>
      <p>Điểm nhấn của phiên bản 25:</p>
      <ul>
        <li><span class="hl">FC IQ — Tactical AI</span>: Cầu thủ tự điều chỉnh vị trí theo chiến thuật thực tế, không còn máy móc như trước.</li>
        <li><span class="hl">Ultimate Team</span>: Xây dựng đội hình mơ ước với hàng nghìn thẻ cầu thủ từ khắp thế giới.</li>
        <li><span class="hl">Rush Mode</span>: Chế độ 5v5 mới, nhanh, kịch tính, phù hợp chơi nhanh cùng bạn bè.</li>
        <li><span class="hl">Career Mode</span> nâng cấp với hệ thống phát triển cầu thủ sâu hơn bao giờ hết.</li>
      </ul>
      <p>Hơn <span class="hl">700 đội bóng, 30 giải đấu</span> được cấp phép chính thức — trải nghiệm bóng đá đỉnh cao ngay trên màn hình của bạn.</p>
    `,
    features: [
      "Tài khoản EA/Steam bản quyền chính hãng",
      "Bàn giao kèm Email đăng ký tài khoản",
      "Truy cập đầy đủ Ultimate Team, Career, Rush Mode",
      "Sở hữu hoàn toàn (đổi được email, pass)",
      "Bảo Hành Vĩnh Viễn",
    ],
    specs: {
      min: [
        ["Hệ điều hành", "Windows 10/11 (64-bit)"],
        ["Vi xử lý", "Intel Core i5-6600k / AMD Ryzen 5 1600"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "Nvidia GTX 1050 Ti / AMD RX 570"],
        ["DirectX", "Phiên bản 12"],
        ["Dung lượng", "100 GB (SSD khuyến nghị)"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10/11 (64-bit)"],
        ["Vi xử lý", "Intel Core i7-6700 / AMD Ryzen 7 2700X"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "Nvidia GTX 1660 Ti / AMD RX 5700"],
        ["DirectX", "Phiên bản 12"],
        ["Dung lượng", "100 GB (SSD khuyến nghị)"],
      ],
    },
  },

  blackmyth: {
    id: "blackmyth",
    name: "Black Myth Wukong",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Nhập vai / Hành động",
    developer: "Game Science",
    price: "1.300.000đ",
    sold: "589",
    rating: "5.0",
    reviews: 28,
    accentColor: "#ff8c00",
    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg",
      "https://cdn.mos.cms.futurecdn.net/HBEdtHv9VEaAp4fqWJbvmZ.jpg",
      "https://www.gameinformer.com/sites/default/files/styles/full/public/2024/08/20/90949938/black_myth_wukong_review_2.jpg",
      "https://assets.gamepur.com/wp-content/uploads/2024/08/14162248/Black-Myth-Wukong-Review-1.jpg",
      "https://i.ytimg.com/vi/bJWml4c9M7Y/maxresdefault.jpg",
    ],
    tagline:
      "Hành trình của Thiên Mệnh Nhân — Giữa thần thoại và huyền sử Trung Hoa.",
    description: `
      <p><span class="hl">Black Myth: Wukong</span> là tựa game nhập vai hành động được chào đón như một <span class="hl">kỳ tích của làng game châu Á</span> — tác phẩm đầu tay của studio <span class="hl">Game Science</span> đã gây chấn động toàn cầu ngay khi ra mắt.</p>
      <p>Lấy cảm hứng từ tiểu thuyết cổ điển <span class="hl">Tây Du Ký</span>, bạn hóa thân thành <span class="hl">Thiên Mệnh Nhân</span> — kẻ thừa kế sức mạnh của Tề Thiên Đại Thánh, lên đường thu thập 6 di vật bị phân tán sau trận chiến thiên đình:</p>
      <ul>
        <li><span class="hl">Chiến đấu linh hoạt</span>: Hàng chục biến thể kỹ năng của Gậy Như Ý, kết hợp phép thuật 72 phép biến hóa.</li>
        <li><span class="hl">Boss cực đỉnh</span>: Hơn 80 trùm khổng lồ với thiết kế từ thần thoại phương Đông — mỗi trận là một cuộc đấu nghệ thuật.</li>
        <li><span class="hl">Đồ họa Unreal Engine 5</span>: Có thể nói là game đẹp nhất năm 2024 về mặt kỹ thuật hình ảnh.</li>
        <li>6 chương với <span class="hl">bối cảnh kiến trúc Trung Hoa cổ đại</span> được tái hiện chân thực đến từng chi tiết.</li>
      </ul>
      <p>Đây không chỉ là một game — đây là <span class="hl">một tuyên ngôn</span> của nền công nghiệp game châu Á với thế giới.</p>
    `,
    features: [
      "Tài khoản Steam tạo mới, mua sẵn game bản quyền",
      "Bàn giao kèm Email đăng ký tài khoản",
      "Trải nghiệm đầy đủ toàn bộ nội dung game",
      "Sở hữu hoàn toàn (đổi được email, pass, SĐT)",
      "Bảo Hành Vĩnh Viễn",
    ],
    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 (64-bit)"],
        ["Vi xử lý", "Intel Core i7-9700 / AMD Ryzen 5 5500"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "Nvidia GeForce RTX 2060 / AMD RX 5700 XT"],
        ["DirectX", "Phiên bản 12"],
        ["Dung lượng", "130 GB (SSD bắt buộc)"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 11 (64-bit)"],
        ["Vi xử lý", "Intel Core i7-12700K / AMD Ryzen 7 7800X3D"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "Nvidia GeForce RTX 2080 Ti / AMD RX 7900 XT"],
        ["DirectX", "Phiên bản 12"],
        ["Dung lượng", "130 GB (SSD bắt buộc)"],
      ],
    },
  },

  cs2: {
    id: "cs2",
    name: "Counter-Strike 2",
    subtitle: "Tài Khoản Steam Prime + Mail",
    genre: "Bắn súng / Chiến thuật",
    developer: "Valve Corporation",
    price: "Miễn phí",
    sold: "1204",
    rating: "4.5",
    reviews: 47,
    accentColor: "#ffd700",
    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_34090867f6f9a0a1e5aec0c74b9620c5e0d18090.jpg",
      "https://www.pcgamer.com/images/2023/09/counter-strike-2-review-2.jpg",
      "https://i.ytimg.com/vi/W_lZEyDLEkc/maxresdefault.jpg",
    ],
    tagline: "Một viên đạn. Một quyết định. Không có chỗ cho sai lầm.",
    description: `
      <p><span class="hl">Counter-Strike 2</span> — sự tiến hóa tất yếu của tựa game bắn súng <span class="hl">cạnh tranh hàng đầu thế giới</span>. Valve đã xây dựng lại toàn bộ từ nền tảng với <span class="hl">Source 2 Engine</span>, mang lại trải nghiệm chiến thuật chưa từng có.</p>
      <p>Điều gì làm CS2 khác biệt hoàn toàn so với CS:GO:</p>
      <ul>
        <li><span class="hl">Khói lựu đạn phản ứng thật</span>: Bắn xuyên khói, dùng lửa đốt khói — chiến thuật được viết lại hoàn toàn.</li>
        <li><span class="hl">Sub-tick server</span>: Độ chính xác của từng thao tác không còn phụ thuộc vào tick rate — mọi shot đều được ghi nhận tuyệt đối.</li>
        <li><span class="hl">Đồ họa Source 2</span>: Ánh sáng toàn cục, bề mặt vật liệu chi tiết — các map kinh điển được tái thiết kế đẹp hơn bao giờ hết.</li>
        <li><span class="hl">CS Rating</span>: Hệ thống xếp hạng minh bạch hơn, thay thế hoàn toàn hệ thống cũ.</li>
      </ul>
      <p>Với tài khoản <span class="hl">Prime Status</span>, bạn được ghép với người chơi đã xác minh, ít gặp cheater hơn và mở khóa phần thưởng độc quyền.</p>
    `,
    features: [
      "Tài khoản Steam với Prime Status kích hoạt sẵn",
      "Bàn giao kèm Email đăng ký tài khoản",
      "Ít gặp hacker, ghép trận ưu tiên người chơi có thứ hạng",
      "Sở hữu hoàn toàn (đổi được email, pass, SĐT)",
      "Bảo Hành Vĩnh Viễn",
    ],
    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 (64-bit)"],
        ["Vi xử lý", "Intel Core i5 / AMD Ryzen 5 (4 nhân trở lên)"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "Nvidia GTX 960 / AMD R9 290X (VRAM 2GB)"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "85 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10/11 (64-bit)"],
        ["Vi xử lý", "Intel Core i7 / AMD Ryzen 7"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "Nvidia GTX 1080 / AMD RX 6600"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "85 GB (SSD khuyến nghị)"],
      ],
    },
  },

  genshin: {
    id: "genshin",
    name: "Genshin Impact",
    subtitle: "Tài Khoản HoYoverse Reroll + Nhân Vật 5 Sao",
    genre: "Nhập vai / Gacha / Thế giới mở",
    developer: "miHoYo / HoYoverse",
    price: "Miễn phí",
    sold: "923",
    rating: "4.8",
    reviews: 56,
    accentColor: "#a78bfa",
    heroImage:
      "https://tse3.mm.bing.net/th/id/OIP.QOej3091XMbEqB5P8o2O9AHaHa?pid=Api&P=0&h=180",
    images: [
      "https://tse3.mm.bing.net/th/id/OIP.QOej3091XMbEqB5P8o2O9AHaHa?pid=Api&P=0&h=180",
      "https://cdn.mos.cms.futurecdn.net/hYJZBaAHeK5ruvGhFtRCmL.jpg",
      "https://i.ytimg.com/vi/sfXqkJgJcuQ/maxresdefault.jpg",
      "https://assets1.ignimgs.com/2020/09/28/genshin-impact---button-1601314700633.jpg",
    ],
    tagline:
      "Thế giới Teyvat mời gọi — Bảy nguyên tố, vô vàn phép màu đang chờ bạn.",
    description: `
      <p><span class="hl">Genshin Impact</span> là tựa game nhập vai thế giới mở <span class="hl">miễn phí</span> của <span class="hl">miHoYo</span> — cú hích làm thay đổi hoàn toàn tiêu chuẩn của thể loại game mobile và PC cross-platform.</p>
      <p>Bạn đến thế giới <span class="hl">Teyvat</span> — vùng đất nơi <span class="hl">7 nguyên tố</span> thống trị vạn vật, đi tìm người thân bị thất lạc trong một cuộc phiêu lưu không hồi kết:</p>
      <ul>
        <li><span class="hl">Đội hình 4 nhân vật</span> với hệ thống combo nguyên tố phong phú — Pyro + Hydro = Vaporize, Cryo + Electro = Superconduct...</li>
        <li>Thế giới mở <span class="hl">khổng lồ và liên tục mở rộng</span>: Mondstadt, Liyue, Inazuma, Sumeru, Fontaine, Natlan... mỗi vùng là một nền văn hóa riêng.</li>
        <li><span class="hl">Cốt truyện sâu sắc</span> với các quest quốc gia dài hàng chục giờ, đồ họa anime đẹp mắt.</li>
        <li>Tài khoản <span class="hl">Reroll</span> đi kèm nhân vật 5 sao sẵn — tiết kiệm hàng trăm giờ grind.</li>
      </ul>
      <p>Game được cập nhật <span class="hl">6 tuần một lần</span> với nội dung mới, sự kiện và nhân vật — không bao giờ hết thứ để khám phá.</p>
    `,
    features: [
      "Tài khoản HoYoverse reroll sẵn nhân vật 5 sao",
      "Bàn giao kèm Email đăng ký tài khoản",
      "Chơi miễn phí, cross-platform PC / Mobile",
      "Sở hữu hoàn toàn (đổi được email, pass)",
      "Bảo Hành Vĩnh Viễn",
    ],
    specs: {
      min: [
        ["Hệ điều hành", "Windows 7 SP1 / 8.1 / 10 (64-bit)"],
        ["Vi xử lý", "Intel Core i5 (4 nhân trở lên)"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "Nvidia GTX 1060 5GB / AMD RX 580 8GB"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "130 GB (SSD khuyến nghị)"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10/11 (64-bit)"],
        ["Vi xử lý", "Intel Core i7 / AMD Ryzen 7"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "Nvidia GTX 1070 8GB / AMD RX VEGA 56 8GB"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "130 GB (SSD khuyến nghị)"],
      ],
    },
  },
  codbo3: {
    id: "codbo3",
    name: "Call of Duty®: Black Ops III",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Bắn súng / Hành động",
    developer: "Treyarch",
    price: "475.000đ",
    sold: "512",
    rating: "4.6",
    reviews: 34,
    accentColor: "#ff6b00",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/311210/header.jpg?t=1748022663",

    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/311210/header.jpg?t=1748022663",
    ],

    tagline: "Chiến tranh tương lai — Khi con người trở thành vũ khí hoàn hảo.",

    description: `
    <p><span class="hl">Call of Duty: Black Ops III</span> đưa người chơi đến tương lai năm 2065, nơi công nghệ quân sự đã thay đổi hoàn toàn cách con người chiến đấu.</p>

    <p>Bạn là thành viên của lực lượng đặc nhiệm sở hữu <span class="hl">các nâng cấp sinh học tối tân</span>, có khả năng kết nối trực tiếp với hệ thống chiến trường thông qua DNI.</p>

    <ul>
      <li><span class="hl">Campaign Co-op</span> hỗ trợ tối đa 4 người chơi.</li>
      <li><span class="hl">Specialist System</span> với kỹ năng và trang bị riêng biệt.</li>
      <li><span class="hl">Zombie Mode</span> huyền thoại với cốt truyện độc lập.</li>
      <li><span class="hl">Vũ khí tương lai</span>, robot chiến đấu và drone hiện đại.</li>
    </ul>

    <p>Một trong những phiên bản Black Ops có nội dung đồ sộ nhất từng được phát hành.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Bàn giao kèm Email",
      "Chơi Multiplayer & Zombies",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 7 64-bit"],
        ["Vi xử lý", "Intel Core i3-530"],
        ["RAM", "6 GB"],
        ["Card đồ họa", "GTX 470 / HD 6970"],
        ["DirectX", "11"],
        ["Dung lượng", "100 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i5-2500K"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 970"],
        ["DirectX", "11"],
        ["Dung lượng", "100 GB SSD"],
      ],
    },
  },

  rust: {
    id: "rust",
    name: "Rust",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Sinh tồn / Thế giới mở",
    developer: "Facepunch Studios",
    price: "500.000đ",
    sold: "748",
    rating: "4.7",
    reviews: 58,
    accentColor: "#c56a32",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg?t=1778597738",

    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg?t=1778597738",
    ],

    tagline: "Không luật lệ. Không lòng thương hại. Chỉ có kẻ sống sót.",

    description: `
    <p><span class="hl">Rust</span> là tựa game sinh tồn nổi tiếng nơi mọi người bắt đầu với hai bàn tay trắng giữa một thế giới đầy nguy hiểm.</p>

    <p>Bạn phải tự tìm thức ăn, chế tạo công cụ, xây dựng căn cứ và chống lại cả môi trường lẫn những người chơi khác.</p>

    <ul>
      <li><span class="hl">PvP khốc liệt</span> nơi mọi tài sản đều có thể bị cướp.</li>
      <li><span class="hl">Xây dựng căn cứ</span> từ đơn giản đến pháo đài thép.</li>
      <li><span class="hl">Raid căn cứ</span> bằng thuốc nổ và chiến thuật.</li>
      <li><span class="hl">Server hàng trăm người chơi</span> cùng lúc.</li>
    </ul>

    <p>Rust là nơi chỉ những người thích nghi tốt nhất mới có thể tồn tại.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Online chính thức",
      "Tham gia server quốc tế",
      "Sở hữu vĩnh viễn",
      "Bảo hành trọn đời",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel i7-3770"],
        ["RAM", "10 GB"],
        ["Card đồ họa", "GTX 670"],
        ["DirectX", "11"],
        ["Dung lượng", "35 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10/11"],
        ["Vi xử lý", "Ryzen 5 2600"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "GTX 980"],
        ["DirectX", "11"],
        ["Dung lượng", "35 GB SSD"],
      ],
    },
  },

  terraria: {
    id: "terraria",
    name: "Terraria",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Sandbox / Phiêu lưu",
    developer: "Re-Logic",
    price: "142.000đ",
    sold: "1385",
    rating: "4.9",
    reviews: 97,
    accentColor: "#5bb94f",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg?t=1769844435",

    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg?t=1769844435",
    ],

    tagline: "Đào sâu hơn. Chiến đấu mạnh hơn. Khám phá vô tận.",

    description: `
    <p><span class="hl">Terraria</span> là tượng đài sandbox 2D với sự kết hợp hoàn hảo giữa xây dựng, khám phá và chiến đấu.</p>

    <ul>
      <li><span class="hl">Hơn 5000 vật phẩm</span> để thu thập.</li>
      <li><span class="hl">Hàng chục Boss</span> với độ khó tăng dần.</li>
      <li><span class="hl">Xây dựng tự do</span> mọi công trình bạn muốn.</li>
      <li><span class="hl">Multiplayer</span> cùng bạn bè.</li>
    </ul>

    <p>Mỗi thế giới Terraria đều chứa vô số bí mật và kho báu đang chờ được khám phá.</p>
  `,

    features: [
      "Steam bản quyền",
      "Hỗ trợ Multiplayer",
      "Cập nhật nội dung liên tục",
      "Lưu trữ Cloud",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 7"],
        ["Vi xử lý", "Dual Core 2.0 GHz"],
        ["RAM", "2 GB"],
        ["Card đồ họa", "128MB VRAM"],
        ["DirectX", "9.0c"],
        ["Dung lượng", "500 MB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10"],
        ["Vi xử lý", "Core i3"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "512MB VRAM"],
        ["DirectX", "11"],
        ["Dung lượng", "1 GB"],
      ],
    },
  },

  icarus: {
    id: "icarus",
    name: "ICARUS",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Sinh tồn / Khoa học viễn tưởng",
    developer: "RocketWerkz",
    price: "445.000đ",
    sold: "302",
    rating: "4.4",
    reviews: 21,
    accentColor: "#4db6ff",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1149460/header.jpg?t=1772745915",

    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1149460/header.jpg?t=1772745915",
    ],

    tagline: "Hành tinh thất bại đang chờ những người khai phá cuối cùng.",

    description: `
    <p><span class="hl">ICARUS</span> là game sinh tồn khoa học viễn tưởng nơi bạn thực hiện các nhiệm vụ trên một hành tinh xa lạ đầy hiểm nguy.</p>

    <ul>
      <li><span class="hl">Co-op tối đa 8 người</span>.</li>
      <li><span class="hl">Môi trường khắc nghiệt</span> với bão, thú dữ và thiếu tài nguyên.</li>
      <li><span class="hl">Hệ thống công nghệ</span> và chế tạo chuyên sâu.</li>
      <li><span class="hl">Nhiệm vụ đa dạng</span> thay đổi liên tục.</li>
    </ul>

    <p>Mỗi lần đổ bộ là một cuộc đua sinh tồn với thời gian.</p>
  `,

    features: [
      "Steam bản quyền",
      "Chơi Online Co-op",
      "Nhiều nhiệm vụ sinh tồn",
      "Sở hữu vĩnh viễn",
      "Bảo hành tài khoản",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10"],
        ["Vi xử lý", "Intel i5-8400"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "GTX 1060 6GB"],
        ["DirectX", "12"],
        ["Dung lượng", "70 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 11"],
        ["Vi xử lý", "Intel i7-9700"],
        ["RAM", "32 GB"],
        ["Card đồ họa", "RTX 3060"],
        ["DirectX", "12"],
        ["Dung lượng", "70 GB SSD"],
      ],
    },
  },

  forzahorizon6: {
    id: "forzahorizon6",
    name: "Forza Horizon 6",
    subtitle: "Tài Khoản Microsoft / Steam + Mail",
    genre: "Đua xe / Thế giới mở",
    developer: "Playground Games",
    price: "1.499.000đ",
    sold: "441",
    rating: "4.9",
    reviews: 52,
    accentColor: "#ff3f3f",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2483190/27abb1584a118d50d0e3950fd48d557c51981db7/header.jpg?t=1778870245",

    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2483190/27abb1584a118d50d0e3950fd48d557c51981db7/header.jpg?t=1778870245",
    ],

    tagline: "Tự do tăng tốc — Cả thế giới là đường đua của bạn.",

    description: `
    <p><span class="hl">Forza Horizon 6</span> tiếp tục mang đến trải nghiệm đua xe thế giới mở đỉnh cao với hàng trăm siêu xe và bản đồ rộng lớn.</p>

    <ul>
      <li><span class="hl">Hơn 500 mẫu xe</span> từ các thương hiệu nổi tiếng.</li>
      <li><span class="hl">Đồ họa thế hệ mới</span> chân thực đến từng chi tiết.</li>
      <li><span class="hl">Online Festival</span> với hàng nghìn người chơi.</li>
      <li><span class="hl">Tùy chỉnh xe</span> cực kỳ chuyên sâu.</li>
    </ul>

    <p>Đây là thiên đường dành cho những người đam mê tốc độ.</p>
  `,

    features: [
      "Tài khoản bản quyền",
      "Online đầy đủ",
      "Hàng trăm xe mở khóa",
      "Cross-platform",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10"],
        ["Vi xử lý", "Ryzen 5 3600"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "RTX 2060"],
        ["DirectX", "12"],
        ["Dung lượng", "150 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 11"],
        ["Vi xử lý", "Ryzen 7 5800X"],
        ["RAM", "32 GB"],
        ["Card đồ họa", "RTX 4070"],
        ["DirectX", "12"],
        ["Dung lượng", "150 GB SSD"],
      ],
    },
  },
  pubg: {
    id: "pubg",
    name: "PUBG: BATTLEGROUNDS",
    subtitle: "Tài Khoản Steam Chính Chủ + Mail",
    genre: "Battle Royale / Bắn súng",
    developer: "KRAFTON",
    price: "Miễn phí",
    sold: "1568",
    rating: "4.6",
    reviews: 88,
    accentColor: "#f4b400",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/578080/841ea38bc58cabb70aef65365cf50bc2d79329d9/header.jpg?t=1778634253",

    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/578080/841ea38bc58cabb70aef65365cf50bc2d79329d9/header.jpg?t=1778634253",
    ],

    tagline: "100 người nhảy dù. Một người sống sót.",

    description: `
    <p><span class="hl">PUBG: BATTLEGROUNDS</span> là tựa game tiên phong của thể loại Battle Royale hiện đại.</p>

    <p>Người chơi được thả xuống một hòn đảo rộng lớn và phải tìm kiếm trang bị, phương tiện để trở thành người cuối cùng còn sống sót.</p>

    <ul>
      <li><span class="hl">Bản đồ đa dạng</span> với nhiều môi trường chiến đấu khác nhau.</li>
      <li><span class="hl">Kho vũ khí đồ sộ</span> từ súng trường đến súng bắn tỉa.</li>
      <li><span class="hl">Chế độ Solo, Duo, Squad</span>.</li>
      <li><span class="hl">Cập nhật liên tục</span> với bản đồ và sự kiện mới.</li>
    </ul>

    <p>Mỗi trận đấu đều là một câu chuyện sinh tồn hoàn toàn khác biệt.</p>
  `,

    features: [
      "Tài khoản Steam",
      "Chơi Online đầy đủ",
      "Xếp hạng cạnh tranh",
      "Sở hữu vĩnh viễn",
      "Bảo hành tài khoản",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel i5-4430"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 960"],
        ["DirectX", "11"],
        ["Dung lượng", "50 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 11"],
        ["Vi xử lý", "Intel i7-9700K"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "RTX 2060"],
        ["DirectX", "12"],
        ["Dung lượng", "50 GB SSD"],
      ],
    },
  },

  battlefield6: {
    id: "battlefield6",
    name: "Battlefield™ 6",
    subtitle: "Tài Khoản EA App Bản Quyền + Mail",
    genre: "Bắn súng / Chiến tranh",
    developer: "DICE",
    price: "1.299.000đ",
    sold: "423",
    rating: "4.7",
    reviews: 42,
    accentColor: "#4fc3f7",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2807960/c12d12ce3c7d217398d3fcad77427bfc9d57c570/header.jpg?t=1778612637",

    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2807960/c12d12ce3c7d217398d3fcad77427bfc9d57c570/header.jpg?t=1778612637",
    ],

    tagline: "Chiến tranh tổng lực ở quy mô chưa từng có.",

    description: `
    <p><span class="hl">Battlefield 6</span> tái hiện những trận chiến quy mô lớn với hàng chục phương tiện và hàng trăm người chơi cùng lúc.</p>

    <ul>
      <li><span class="hl">Bản đồ khổng lồ</span> với môi trường có thể phá hủy.</li>
      <li><span class="hl">Xe tăng, trực thăng, chiến đấu cơ</span>.</li>
      <li><span class="hl">Chiến tranh hiện đại</span> với công nghệ quân sự tiên tiến.</li>
      <li><span class="hl">Đồ họa thế hệ mới</span> cực kỳ chân thực.</li>
    </ul>

    <p>Mọi trận chiến đều mang cảm giác như một bộ phim bom tấn Hollywood.</p>
  `,

    features: [
      "Tài khoản EA bản quyền",
      "Online Multiplayer",
      "Mở khóa đầy đủ",
      "Sở hữu vĩnh viễn",
      "Bảo hành tài khoản",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Ryzen 5 3600"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "RTX 2060"],
        ["DirectX", "12"],
        ["Dung lượng", "100 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 11"],
        ["Vi xử lý", "Ryzen 7 5800X"],
        ["RAM", "32 GB"],
        ["Card đồ họa", "RTX 4070"],
        ["DirectX", "12"],
        ["Dung lượng", "100 GB SSD"],
      ],
    },
  },

  squad: {
    id: "squad",
    name: "Squad",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Bắn súng / Chiến thuật",
    developer: "Offworld Industries",
    price: "658.500đ",
    sold: "294",
    rating: "4.8",
    reviews: 27,
    accentColor: "#8bc34a",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/393380/aa36f6d31a74ca6b1949f35464305ac105e83c52/header_alt_assets_8.jpg?t=1778698936",

    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/393380/aa36f6d31a74ca6b1949f35464305ac105e83c52/header_alt_assets_8.jpg?t=1778698936",
    ],

    tagline: "Không phải anh hùng. Chỉ có đồng đội.",

    description: `
    <p><span class="hl">Squad</span> là game bắn súng chiến thuật thực tế tập trung vào khả năng phối hợp đồng đội.</p>

    <ul>
      <li><span class="hl">100 người chơi</span> trên cùng chiến trường.</li>
      <li><span class="hl">Liên lạc bằng giọng nói</span> theo cấp chỉ huy.</li>
      <li><span class="hl">Chiến thuật quân sự thực tế</span>.</li>
      <li><span class="hl">Phương tiện chiến đấu</span> đa dạng.</li>
    </ul>

    <p>Một viên đạn đúng lúc có thể thay đổi toàn bộ cục diện trận chiến.</p>
  `,

    features: [
      "Steam bản quyền",
      "100 người chơi",
      "Voice Chat chiến thuật",
      "Server quốc tế",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10"],
        ["Vi xử lý", "Intel i5-7400"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 960"],
        ["DirectX", "11"],
        ["Dung lượng", "80 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 11"],
        ["Vi xử lý", "Intel i7-9700K"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "RTX 3060"],
        ["DirectX", "12"],
        ["Dung lượng", "80 GB SSD"],
      ],
    },
  },

  marvelrivals: {
    id: "marvelrivals",
    name: "Marvel Rivals",
    subtitle: "Tài Khoản Steam + Mail",
    genre: "Hero Shooter",
    developer: "NetEase Games",
    price: "18.000đ",
    sold: "897",
    rating: "4.8",
    reviews: 73,
    accentColor: "#ff1744",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2767030/dabf1f6f9513340c90c154b3cf02c9661aeaeecb/header_alt_assets_7.jpg?t=1778835753",

    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2767030/dabf1f6f9513340c90c154b3cf02c9661aeaeecb/header_alt_assets_7.jpg?t=1778835753",
    ],

    tagline: "Các siêu anh hùng Marvel bước vào cuộc chiến sinh tử.",

    description: `
    <p><span class="hl">Marvel Rivals</span> quy tụ hàng chục siêu anh hùng và phản diện nổi tiếng của Marvel trong những trận chiến 6v6 tốc độ cao.</p>

    <ul>
      <li><span class="hl">Spider-Man, Iron Man, Hulk</span> và nhiều nhân vật khác.</li>
      <li><span class="hl">Kỹ năng phối hợp</span> giữa các anh hùng.</li>
      <li><span class="hl">Bản đồ tương tác</span> có thể phá hủy.</li>
      <li><span class="hl">Đồ họa đậm chất truyện tranh</span>.</li>
    </ul>

    <p>Mỗi trận đấu đều là màn trình diễn sức mạnh siêu anh hùng mãn nhãn.</p>
  `,

    features: [
      "Online Multiplayer",
      "Nhiều nhân vật Marvel",
      "Chế độ xếp hạng",
      "Cập nhật liên tục",
      "Bảo hành tài khoản",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10"],
        ["Vi xử lý", "Intel i5"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 1060"],
        ["DirectX", "11"],
        ["Dung lượng", "70 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 11"],
        ["Vi xử lý", "Intel i7"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "RTX 3060"],
        ["DirectX", "12"],
        ["Dung lượng", "70 GB SSD"],
      ],
    },
  },

  windrose: {
    id: "windrose",
    name: "Windrose",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Sinh tồn / Phiêu lưu",
    developer: "Indie Studio",
    price: "385.000đ",
    sold: "186",
    rating: "4.5",
    reviews: 14,
    accentColor: "#03a9f4",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3041230/7e838d87d787735d5d29d72777c5ee55653dfb2b/header.jpg?t=1777529081",

    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3041230/7e838d87d787735d5d29d72777c5ee55653dfb2b/header.jpg?t=1777529081",
    ],

    tagline: "Khám phá vùng đất chưa ai từng đặt chân đến.",

    description: `
    <p><span class="hl">Windrose</span> là cuộc phiêu lưu sinh tồn trong một thế giới rộng lớn đầy bí ẩn.</p>

    <ul>
      <li><span class="hl">Khám phá bản đồ mở</span>.</li>
      <li><span class="hl">Thu thập tài nguyên</span> và chế tạo.</li>
      <li><span class="hl">Chiến đấu với sinh vật nguy hiểm</span>.</li>
      <li><span class="hl">Nâng cấp trang bị</span> và kỹ năng.</li>
    </ul>

    <p>Mỗi hành trình đều mở ra những bí mật mới đang chờ được khám phá.</p>
  `,

    features: [
      "Steam bản quyền",
      "Thế giới mở",
      "Nhiều nhiệm vụ",
      "Sở hữu vĩnh viễn",
      "Bảo hành tài khoản",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10"],
        ["Vi xử lý", "Intel i5"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 1050 Ti"],
        ["DirectX", "11"],
        ["Dung lượng", "40 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 11"],
        ["Vi xử lý", "Intel i7"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "RTX 2060"],
        ["DirectX", "12"],
        ["Dung lượng", "40 GB SSD"],
      ],
    },
  },
  palworld: {
    id: "palworld",
    name: "Palworld",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Sinh tồn / Thế giới mở",
    developer: "Pocketpair",
    price: "385.000đ",
    sold: "731",
    rating: "4.8",
    reviews: 61,
    accentColor: "#4caf50",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1623730/058bd87dc17a7179e07c446aa64d0574ca43ab9d/header.jpg?t=1773936597",

    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1623730/058bd87dc17a7179e07c446aa64d0574ca43ab9d/header.jpg?t=1773936597",
    ],

    tagline: "Thu phục, xây dựng và sinh tồn trong thế giới của Pal.",

    description: `
    <p><span class="hl">Palworld</span> là tựa game sinh tồn thế giới mở nơi bạn kết bạn với các sinh vật mang tên <span class="hl">Pal</span>.</p>

    <ul>
      <li><span class="hl">Hơn 100 Pal</span> để thu phục.</li>
      <li><span class="hl">Xây dựng căn cứ</span> và tự động hóa sản xuất.</li>
      <li><span class="hl">Co-op Online</span> cùng bạn bè.</li>
      <li><span class="hl">Khám phá thế giới rộng lớn</span> với nhiều bí mật.</li>
    </ul>

    <p>Một trải nghiệm độc đáo kết hợp giữa sinh tồn, phiêu lưu và xây dựng.</p>
  `,

    features: [
      "Steam bản quyền",
      "Online Co-op",
      "Sở hữu hoàn toàn",
      "Cập nhật liên tục",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel i5-3570K"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "GTX 1050"],
        ["DirectX", "11"],
        ["Dung lượng", "40 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 11"],
        ["Vi xử lý", "Intel i9-9900K"],
        ["RAM", "32 GB"],
        ["Card đồ họa", "RTX 2070"],
        ["DirectX", "12"],
        ["Dung lượng", "40 GB SSD"],
      ],
    },
  },

  legobatman: {
    id: "legobatman",
    name: "LEGO® Batman™: Legacy of the Dark Knight",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Phiêu lưu / Hành động",
    developer: "TT Games",
    price: "1.490.000đ",
    sold: "148",
    rating: "4.7",
    reviews: 15,
    accentColor: "#ffc107",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215200/a07a9a6c0c9c1225f5b260b4f29fe40e6f099f6b/header.jpg?t=1778617453",

    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215200/a07a9a6c0c9c1225f5b260b4f29fe40e6f099f6b/header.jpg?t=1778617453",
    ],

    tagline: "Gotham được xây lại bằng những viên gạch LEGO.",

    description: `
    <p><span class="hl">Batman</span> trở lại trong một cuộc phiêu lưu hoàn toàn mới với phong cách hài hước đặc trưng của LEGO.</p>

    <ul>
      <li><span class="hl">Nhiều nhân vật DC</span> nổi tiếng.</li>
      <li><span class="hl">Giải đố kết hợp hành động</span>.</li>
      <li><span class="hl">Co-op hai người</span>.</li>
      <li><span class="hl">Khám phá Gotham City</span>.</li>
    </ul>

    <p>Thích hợp cho cả trẻ em và người hâm mộ Batman lâu năm.</p>
  `,

    features: [
      "Steam bản quyền",
      "Chơi Offline và Online",
      "Hỗ trợ Co-op",
      "Lưu Cloud",
      "Bảo hành vĩnh viễn",
    ],
  },

  spidermanmm: {
    id: "spidermanmm",
    name: "Marvel's Spider-Man: Miles Morales",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Hành động / Thế giới mở",
    developer: "Insomniac Games",
    price: "1.159.000đ",
    sold: "512",
    rating: "4.9",
    reviews: 67,
    accentColor: "#ff1744",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817190/header.jpg?t=1763569499",

    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817190/header.jpg?t=1763569499",
    ],

    tagline: "Người Nhện mới của New York đã xuất hiện.",

    description: `
    <p><span class="hl">Miles Morales</span> bước lên phía trước để trở thành Người Nhện mới bảo vệ thành phố New York.</p>

    <ul>
      <li><span class="hl">Venom Powers</span> cực mạnh.</li>
      <li><span class="hl">Tàng hình sinh học</span>.</li>
      <li><span class="hl">Đồ họa Ray Tracing</span> tuyệt đẹp.</li>
      <li><span class="hl">Thế giới mở New York</span> sống động.</li>
    </ul>

    <p>Một trong những tựa game siêu anh hùng xuất sắc nhất hiện nay.</p>
  `,

    features: [
      "Steam bản quyền",
      "Full DLC",
      "Lưu Cloud",
      "Đổi thông tin tài khoản",
      "Bảo hành vĩnh viễn",
    ],
  },

  wutheringwaves: {
    id: "wutheringwaves",
    name: "Wuthering Waves",
    subtitle: "Tài Khoản Kuro Games + Mail",
    genre: "Nhập vai / Thế giới mở",
    developer: "Kuro Games",
    price: "Miễn phí",
    sold: "884",
    rating: "4.8",
    reviews: 79,
    accentColor: "#9c27b0",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3513350/86b44bb422a013c1510f029ca79ea7c4a8ffb9e8/header.jpg?t=1777505458",

    images: [
      "https://cdn-media.sforum.vn/storage/app/media/phuonganh/cantarella-wuthering-waves.jpg",
    ],

    tagline: "Thức tỉnh sau tận thế và khám phá thế giới mới.",

    description: `
    <p><span class="hl">Wuthering Waves</span> là game nhập vai thế giới mở với hệ thống chiến đấu tốc độ cao và đồ họa anime hiện đại.</p>

    <ul>
      <li><span class="hl">Combo hành động</span> cực kỳ mượt mà.</li>
      <li><span class="hl">Khám phá thế giới rộng lớn</span>.</li>
      <li><span class="hl">Thu thập Resonator</span>.</li>
      <li><span class="hl">Boss thử thách</span> đa dạng.</li>
    </ul>

    <p>Một trong những đối thủ lớn nhất của Genshin Impact.</p>
  `,

    features: [
      "Tài khoản Kuro Games",
      "Cross-platform",
      "Chơi miễn phí",
      "Đổi email",
      "Bảo hành tài khoản",
    ],
  },

  eldenring: {
    id: "eldenring",
    name: "ELDEN RING",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Nhập vai / Soulslike",
    developer: "FromSoftware",
    price: "990.000đ",
    sold: "1092",
    rating: "5.0",
    reviews: 136,
    accentColor: "#c9a227",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg?t=1767883716",

    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg?t=1767883716",
    ],

    tagline: "Đứng lên, Tarnished. Hãy trở thành Elden Lord.",

    description: `
    <p><span class="hl">ELDEN RING</span> là siêu phẩm thế giới mở của FromSoftware kết hợp giữa khám phá tự do và lối chơi Soulslike trứ danh.</p>

    <ul>
      <li><span class="hl">Bản đồ rộng lớn</span> với vô số bí mật.</li>
      <li><span class="hl">Hàng trăm Boss</span> độc đáo.</li>
      <li><span class="hl">Xây dựng nhân vật tự do</span>.</li>
      <li><span class="hl">Thử thách cực cao</span> nhưng đầy phần thưởng.</li>
    </ul>

    <p>Một trong những game nhập vai xuất sắc nhất mọi thời đại.</p>
  `,

    features: [
      "Steam bản quyền",
      "Online và Offline",
      "Full nội dung",
      "Sở hữu hoàn toàn",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10"],
        ["Vi xử lý", "Intel i5-8400"],
        ["RAM", "12 GB"],
        ["Card đồ họa", "GTX 1060 3GB"],
        ["DirectX", "12"],
        ["Dung lượng", "60 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 11"],
        ["Vi xử lý", "Intel i7-8700K"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "RTX 3060"],
        ["DirectX", "12"],
        ["Dung lượng", "60 GB SSD"],
      ],
    },
  },
  subnautica: {
    id: "subnautica",
    name: "Subnautica",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Sinh tồn / Khám phá đại dương",
    developer: "Unknown Worlds Entertainment",
    price: "360.000đ",
    sold: "621",
    rating: "4.9",
    reviews: 74,
    accentColor: "#00bcd4",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/264710/header_292x136.jpg?t=1777456112",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/264710/header_292x136.jpg?t=1777456112",
    ],

    tagline: "Một đại dương xa lạ. Hàng nghìn bí mật dưới đáy sâu.",

    description: `
    <p><span class="hl">Subnautica</span> đưa người chơi đến hành tinh đại dương 4546B sau một vụ tai nạn tàu vũ trụ.</p>

    <ul>
      <li><span class="hl">Khám phá đại dương mở</span> đầy sinh vật kỳ lạ.</li>
      <li><span class="hl">Xây dựng căn cứ dưới nước</span>.</li>
      <li><span class="hl">Chế tạo tàu ngầm</span> và thiết bị sinh tồn.</li>
      <li><span class="hl">Cốt truyện hấp dẫn</span> với nhiều bí ẩn.</li>
    </ul>

    <p>Một trong những game sinh tồn hay nhất từng được phát triển.</p>
  `,

    features: [
      "Steam bản quyền",
      "Cốt truyện hoàn chỉnh",
      "Lưu Cloud",
      "Sở hữu vĩnh viễn",
      "Bảo hành tài khoản",
    ],
  },

  tft: {
    id: "tft",
    name: "Teamfight Tactics",
    subtitle: "Tài Khoản Riot Games + Mail",
    genre: "Auto Chess / Chiến thuật",
    developer: "Riot Games",
    price: "Miễn phí",
    sold: "1531",
    rating: "4.7",
    reviews: 126,
    accentColor: "#673ab7",

    heroImage:
      "https://images.seeklogo.com/logo-png/38/2/teamfight-tactics-logo-png_seeklogo-387179.png",

    images: [
      "https://images.seeklogo.com/logo-png/38/2/teamfight-tactics-logo-png_seeklogo-387179.png",
    ],

    tagline: "Sắp xếp đội hình. Thống trị bàn cờ.",

    description: `
    <p><span class="hl">Teamfight Tactics</span> là tựa game chiến thuật Auto Chess nổi tiếng của Riot Games.</p>

    <ul>
      <li><span class="hl">Hàng trăm tướng</span> với nhiều tộc hệ.</li>
      <li><span class="hl">Chiến thuật đa dạng</span>.</li>
      <li><span class="hl">Cập nhật mùa giải thường xuyên</span>.</li>
      <li><span class="hl">Xếp hạng cạnh tranh</span>.</li>
    </ul>

    <p>Mỗi trận đấu là một thử thách về khả năng thích nghi và tư duy chiến thuật.</p>
  `,

    features: [
      "Tài khoản Riot",
      "Chơi miễn phí",
      "Đấu xếp hạng",
      "Cross-platform",
      "Bảo hành tài khoản",
    ],
  },

  aov: {
    id: "aov",
    name: "Arena Of Valor",
    subtitle: "Tài Khoản Garena + Mail",
    genre: "MOBA / Chiến thuật",
    developer: "TiMi Studio",
    price: "Miễn phí",
    sold: "2011",
    rating: "4.6",
    reviews: 204,
    accentColor: "#ff9800",

    heroImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShvJIcWWmq9HgJznaAYMGmFBT7C1dSPncVwQ&s",

    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShvJIcWWmq9HgJznaAYMGmFBT7C1dSPncVwQ&s",
    ],

    tagline: "5 đấu 5. Chiến thắng thuộc về chiến thuật tốt nhất.",

    description: `
    <p><span class="hl">Arena Of Valor</span> là một trong những tựa game MOBA phổ biến nhất tại châu Á.</p>

    <ul>
      <li><span class="hl">Hơn 100 tướng</span> đa dạng.</li>
      <li><span class="hl">Đấu hạng cạnh tranh</span>.</li>
      <li><span class="hl">Chơi cùng bạn bè</span>.</li>
      <li><span class="hl">Cập nhật liên tục</span>.</li>
    </ul>

    <p>Kỹ năng cá nhân và phối hợp đồng đội quyết định tất cả.</p>
  `,

    features: [
      "Tài khoản Garena",
      "Chơi miễn phí",
      "Xếp hạng",
      "Đổi thông tin",
      "Bảo hành tài khoản",
    ],
  },

  nba2k26: {
    id: "nba2k26",
    name: "NBA 2K26",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Thể thao / Bóng rổ",
    developer: "Visual Concepts",
    price: "169.500đ",
    sold: "284",
    rating: "4.5",
    reviews: 23,
    accentColor: "#e53935",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3472040/3c8f3700289081daa466b27681cd08cd2eeff04d/header_292x136_alt_assets_5.jpg?t=1778857348",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3472040/3c8f3700289081daa466b27681cd08cd2eeff04d/header_292x136_alt_assets_5.jpg?t=1778857348",
    ],

    tagline: "Sân đấu NBA chân thực hơn bao giờ hết.",

    description: `
    <p><span class="hl">NBA 2K26</span> tiếp tục là chuẩn mực của dòng game bóng rổ mô phỏng.</p>

    <ul>
      <li><span class="hl">Đồ họa thế hệ mới</span>.</li>
      <li><span class="hl">MyCareer</span> đầy chiều sâu.</li>
      <li><span class="hl">MyTeam</span> xây dựng đội hình mơ ước.</li>
      <li><span class="hl">Hàng trăm cầu thủ NBA</span>.</li>
    </ul>

    <p>Trải nghiệm bóng rổ đỉnh cao dành cho mọi người hâm mộ NBA.</p>
  `,

    features: [
      "Steam bản quyền",
      "Online Multiplayer",
      "MyCareer",
      "MyTeam",
      "Bảo hành vĩnh viễn",
    ],
  },

  gamblewithfriends: {
    id: "gamblewithfriends",
    name: "Gamble With Your Friends",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Party Game / Thể thao",
    developer: "Indie Studio",
    price: "115.000đ",
    sold: "117",
    rating: "4.4",
    reviews: 8,
    accentColor: "#4caf50",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3892270/395e6d7972474333a698b26f8aa5597bf38109a1/header_292x136.jpg?t=1778274309",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3892270/395e6d7972474333a698b26f8aa5597bf38109a1/header_292x136.jpg?t=1778274309",
    ],

    tagline: "Niềm vui nhân đôi khi chơi cùng bạn bè.",

    description: `
    <p><span class="hl">Gamble With Your Friends</span> là trò chơi giải trí nhiều người chơi với hàng loạt thử thách vui nhộn.</p>

    <ul>
      <li><span class="hl">Multiplayer Online</span>.</li>
      <li><span class="hl">Mini-game đa dạng</span>.</li>
      <li><span class="hl">Dễ chơi</span>.</li>
      <li><span class="hl">Thích hợp cho nhóm bạn</span>.</li>
    </ul>

    <p>Một lựa chọn tuyệt vời cho những buổi giải trí cùng bạn bè.</p>
  `,

    features: [
      "Steam bản quyền",
      "Online Multiplayer",
      "Party Game",
      "Lưu Cloud",
      "Bảo hành tài khoản",
    ],
  },
  belowzero: {
    id: "belowzero",
    name: "Subnautica: Below Zero",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Sinh tồn / Khám phá",
    developer: "Unknown Worlds Entertainment",
    price: "148.500đ",
    sold: "432",
    rating: "4.8",
    reviews: 51,
    accentColor: "#4fc3f7",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/848450/header_292x136.jpg?t=1777456254",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/848450/header_292x136.jpg?t=1777456254",
    ],

    tagline: "Sinh tồn giữa đại dương băng giá của hành tinh 4546B.",

    description: `
    <p><span class="hl">Subnautica: Below Zero</span> tiếp nối huyền thoại sinh tồn dưới nước với vùng cực lạnh đầy nguy hiểm.</p>

    <ul>
      <li><span class="hl">Khám phá vùng băng giá</span> hoàn toàn mới.</li>
      <li><span class="hl">Cốt truyện sâu sắc</span> hơn phiên bản gốc.</li>
      <li><span class="hl">Sinh vật biển kỳ lạ</span> và đáng sợ.</li>
      <li><span class="hl">Xây dựng căn cứ hiện đại</span>.</li>
    </ul>

    <p>Một chuyến phiêu lưu đầy bí ẩn nơi sự sống và cái chết chỉ cách nhau vài phút.</p>
  `,

    features: [
      "Steam bản quyền",
      "Offline hoàn chỉnh",
      "Cloud Save",
      "Đổi thông tin tài khoản",
      "Bảo hành vĩnh viễn",
    ],
  },

  ninesols: {
    id: "ninesols",
    name: "Nine Sols",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Hành động / Metroidvania",
    developer: "Red Candle Games",
    price: "154.000đ",
    sold: "289",
    rating: "4.9",
    reviews: 43,
    accentColor: "#f44336",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1809540/header_292x136.jpg?t=1762838904",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1809540/header_292x136.jpg?t=1762838904",
    ],

    tagline: "Hành trình báo thù trong thế giới thần thoại Taopunk.",

    description: `
    <p><span class="hl">Nine Sols</span> là tựa game Metroidvania nổi bật với cơ chế phản đòn lấy cảm hứng từ Sekiro.</p>

    <ul>
      <li><span class="hl">Chiến đấu tốc độ cao</span>.</li>
      <li><span class="hl">Boss thử thách</span> đầy tính chiến thuật.</li>
      <li><span class="hl">Đồ họa vẽ tay tuyệt đẹp</span>.</li>
      <li><span class="hl">Cốt truyện đậm chất phương Đông</span>.</li>
    </ul>

    <p>Mỗi trận chiến là một bài kiểm tra kỹ năng và sự tập trung tuyệt đối.</p>
  `,

    features: [
      "Steam bản quyền",
      "Offline hoàn chỉnh",
      "Đổi thông tin",
      "Cloud Save",
      "Bảo hành tài khoản",
    ],
  },

  misery: {
    id: "misery",
    name: "MISERY",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Bắn súng / Kinh dị",
    developer: "Platypus Entertainment",
    price: "117.000đ",
    sold: "174",
    rating: "4.5",
    reviews: 18,
    accentColor: "#616161",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2119830/f4aa2f3b4b352f7f373026fe592d32eef2c72fce/header_292x136.jpg?t=1779043039",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2119830/f4aa2f3b4b352f7f373026fe592d32eef2c72fce/header_292x136.jpg?t=1779043039",
    ],

    tagline: "Nơi nỗi sợ hãi là kẻ săn mồi thực sự.",

    description: `
    <p><span class="hl">MISERY</span> mang đến trải nghiệm kinh dị sinh tồn căng thẳng trong thế giới hậu tận thế.</p>

    <ul>
      <li><span class="hl">Không khí u ám</span> đầy áp lực.</li>
      <li><span class="hl">Quản lý tài nguyên khắc nghiệt</span>.</li>
      <li><span class="hl">Kẻ địch nguy hiểm</span>.</li>
      <li><span class="hl">Khám phá môi trường rộng lớn</span>.</li>
    </ul>

    <p>Mỗi bước tiến đều tiềm ẩn nguy cơ mất mạng bất cứ lúc nào.</p>
  `,

    features: [
      "Steam bản quyền",
      "Offline",
      "Cloud Save",
      "Đổi thông tin tài khoản",
      "Bảo hành vĩnh viễn",
    ],
  },

  phasmophobia: {
    id: "phasmophobia",
    name: "Phasmophobia",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Kinh dị / Co-op",
    developer: "Kinetic Games",
    price: "175.000đ",
    sold: "987",
    rating: "4.9",
    reviews: 142,
    accentColor: "#9c27b0",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/739630/0a424398a10445bbb922b45771dab7118fe139d2/header_292x136_alt_assets_10.jpg?t=1778659672",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/739630/0a424398a10445bbb922b45771dab7118fe139d2/header_292x136_alt_assets_10.jpg?t=1778659672",
    ],

    tagline: "Bạn không săn ma. Bạn tìm cách sống sót khỏi chúng.",

    description: `
    <p><span class="hl">Phasmophobia</span> là game kinh dị co-op nổi tiếng nơi người chơi vào vai thợ săn hiện tượng siêu nhiên.</p>

    <ul>
      <li><span class="hl">Co-op tối đa 4 người</span>.</li>
      <li><span class="hl">Nhiều loại ma</span> với hành vi khác nhau.</li>
      <li><span class="hl">Hệ thống nhận diện giọng nói</span>.</li>
      <li><span class="hl">Không khí cực kỳ căng thẳng</span>.</li>
    </ul>

    <p>Chỉ cần một sai lầm nhỏ, cả đội có thể trở thành nạn nhân tiếp theo.</p>
  `,

    features: [
      "Steam bản quyền",
      "Online Multiplayer",
      "Voice Chat",
      "Cloud Save",
      "Bảo hành tài khoản",
    ],
  },

  everythingisvampires: {
    id: "everythingisvampires",
    name: "Everything is Vampires",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Roguelike / Hành động",
    developer: "Indie Studio",
    price: "178.000đ",
    sold: "151",
    rating: "4.6",
    reviews: 14,
    accentColor: "#e91e63",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/bundles/74928/ctl750vzp7zd7y1t/04efa8acdde02428165e45627516a24a08a8cb86/header_292x136.jpg?t=1777982271",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/bundles/74928/ctl750vzp7zd7y1t/04efa8acdde02428165e45627516a24a08a8cb86/header_292x136.jpg?t=1777982271",
    ],

    tagline: "Khi màn đêm buông xuống, mọi thứ đều trở thành ma cà rồng.",

    description: `
    <p><span class="hl">Everything is Vampires</span> là game roguelike hành động với nhịp độ nhanh và hệ thống nâng cấp đa dạng.</p>

    <ul>
      <li><span class="hl">Hàng trăm kỹ năng</span>.</li>
      <li><span class="hl">Chiến đấu chống đàn quái vật</span>.</li>
      <li><span class="hl">Mỗi lần chơi là một trải nghiệm mới</span>.</li>
      <li><span class="hl">Tiến trình phát triển nhân vật sâu sắc</span>.</li>
    </ul>

    <p>Liệu bạn có thể sống sót trước làn sóng quái vật vô tận?</p>
  `,

    features: [
      "Steam bản quyền",
      "Offline hoàn chỉnh",
      "Cloud Save",
      "Đổi thông tin",
      "Bảo hành tài khoản",
    ],
  },

  kerbal: {
    id: "kerbal",
    name: "Kerbal Space Program",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Mô phỏng / Không gian",
    developer: "Squad",
    price: "124.500đ",
    sold: "327",
    rating: "4.8",
    reviews: 18,
    accentColor: "#4caf50",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/220200/header_292x136.jpg?t=1738037585",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/220200/header_292x136.jpg?t=1738037585",
    ],

    tagline: "Không gian vô tận — Mỗi vụ phóng đều là một bài học vật lý.",

    description: `
    <p><span class="hl">Kerbal Space Program</span> là tựa game mô phỏng chinh phục không gian nổi tiếng, nơi bạn tự thiết kế tên lửa, tàu vũ trụ và xây dựng chương trình khám phá thiên hà của riêng mình.</p>

    <p>Bạn sẽ lãnh đạo những phi hành gia Kerbal trong hành trình chinh phục bầu trời:</p>

    <ul>
        <li><span class="hl">Thiết kế tên lửa</span> với hàng trăm bộ phận khác nhau.</li>
        <li><span class="hl">Mô phỏng vật lý thực tế</span> dựa trên quỹ đạo và lực hấp dẫn.</li>
        <li><span class="hl">Khám phá hành tinh</span>, mặt trăng và các thiên thể trong hệ sao Kerbol.</li>
        <li><span class="hl">Career Mode</span> với hệ thống nghiên cứu và quản lý ngân sách.</li>
    </ul>

    <p>Từ những vụ phóng thất bại hài hước đến các sứ mệnh liên hành tinh đầy tham vọng, mọi thành công đều do chính bạn tạo nên.</p>
    `,

    features: [
      "Tài khoản Steam tạo mới, mua sẵn game bản quyền",
      "Bàn giao kèm Email đăng ký tài khoản",
      "Trải nghiệm đầy đủ toàn bộ nội dung game",
      "Sở hữu hoàn toàn (đổi được email, pass, SĐT)",
      "Bảo Hành Vĩnh Viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 (64-bit)"],
        ["Vi xử lý", "Intel Core i5-6400"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "GTX 770"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "6 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10/11 (64-bit)"],
        ["Vi xử lý", "Intel Core i7"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 1060"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "6 GB SSD"],
      ],
    },
  },

  spacehaven: {
    id: "spacehaven",
    name: "Space Haven",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Chiến thuật / Sinh tồn",
    developer: "Bugbyte Ltd",
    price: "124.500đ",
    sold: "214",
    rating: "4.7",
    reviews: 11,
    accentColor: "#6ec1ff",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/979110/73529f7afc14ec281cad99fe0284cbed06c552f0/header_292x136.jpg?t=1778684449",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/979110/73529f7afc14ec281cad99fe0284cbed06c552f0/header_292x136.jpg?t=1778684449",
    ],

    tagline:
      "Thuộc địa giữa các vì sao — Nơi sự sống phụ thuộc vào từng quyết định.",

    description: `
    <p><span class="hl">Space Haven</span> là tựa game xây dựng và quản lý thuộc địa không gian, nơi bạn điều hành một nhóm người sống sót giữa thiên hà rộng lớn.</p>

    <p>Từ con tàu nhỏ bé ban đầu, bạn sẽ từng bước phát triển thành một pháo đài bay thực thụ:</p>

    <ul>
        <li><span class="hl">Thiết kế tàu vũ trụ</span> theo phong cách riêng.</li>
        <li><span class="hl">Quản lý phi hành đoàn</span> với nhu cầu và tính cách khác nhau.</li>
        <li><span class="hl">Thu thập tài nguyên</span> từ các thiên thạch và trạm bỏ hoang.</li>
        <li><span class="hl">Chiến đấu với cướp không gian</span> để bảo vệ thuộc địa.</li>
    </ul>

    <p>Mỗi chuyến hành trình đều là một cuộc chiến sinh tồn giữa khoảng không vô tận.</p>
    `,

    features: [
      "Tài khoản Steam tạo mới, mua sẵn game bản quyền",
      "Bàn giao kèm Email đăng ký tài khoản",
      "Trải nghiệm đầy đủ toàn bộ nội dung game",
      "Sở hữu hoàn toàn (đổi được email, pass, SĐT)",
      "Bảo Hành Vĩnh Viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10"],
        ["Vi xử lý", "Intel Core i3"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "GTX 750 Ti"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "2 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10/11"],
        ["Vi xử lý", "Intel Core i5"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 1060"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "2 GB SSD"],
      ],
    },
  },

  everythingcrab: {
    id: "everythingcrab",
    name: "Everything is Crab: The Animal Evolution Roguelite",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Roguelite / Hành động",
    developer: "Odd Games",
    price: "178.000đ",
    sold: "91",
    rating: "4.5",
    reviews: 6,
    accentColor: "#ff8f5a",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3526710/a5fb804268a798d5026a9a9d4c946cccc23b7420/header_292x136.jpg?t=1778230287",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3526710/a5fb804268a798d5026a9a9d4c946cccc23b7420/header_292x136.jpg?t=1778230287",
    ],

    tagline: "Tiến hóa thành cua — Vì cuối cùng mọi thứ đều trở thành cua.",

    description: `
    <p><span class="hl">Everything is Crab</span> là tựa game roguelite hài hước lấy cảm hứng từ hiện tượng tiến hóa hội tụ nổi tiếng trong sinh học.</p>

    <p>Bạn sẽ liên tục tiến hóa và thích nghi để sinh tồn:</p>

    <ul>
        <li><span class="hl">Nâng cấp sinh vật</span> với nhiều đột biến khác nhau.</li>
        <li><span class="hl">Chiến đấu roguelite</span> với bản đồ ngẫu nhiên.</li>
        <li><span class="hl">Mở khóa khả năng mới</span> sau mỗi lần chơi.</li>
        <li><span class="hl">Phong cách đồ họa vui nhộn</span> đầy sáng tạo.</li>
    </ul>

    <p>Một trải nghiệm độc đáo dành cho người yêu thích sự kỳ quặc và giải trí.</p>
    `,

    features: [
      "Tài khoản Steam tạo mới, mua sẵn game bản quyền",
      "Bàn giao kèm Email đăng ký tài khoản",
      "Trải nghiệm đầy đủ toàn bộ nội dung game",
      "Sở hữu hoàn toàn (đổi được email, pass)",
      "Bảo Hành Vĩnh Viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10"],
        ["Vi xử lý", "Intel Core i3"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "GTX 750"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "4 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10/11"],
        ["Vi xử lý", "Intel Core i5"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 1060"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "4 GB SSD"],
      ],
    },
  },
  rvthereyet: {
    id: "rvthereyet",
    name: "RV There Yet?",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Mô phỏng / Phiêu lưu",
    developer: "Moon Ranger",
    price: "200.000đ",
    sold: "66",
    rating: "4.4",
    reviews: 4,
    accentColor: "#f0c45b",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3949040/cae24b4ed7f4531be51f0d63f785b7d253f92dc3/header_292x136.jpg?t=1778071815",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3949040/cae24b4ed7f4531be51f0d63f785b7d253f92dc3/header_292x136.jpg?t=1778071815",
    ],

    tagline: "Ngôi nhà trên bánh xe — Hành trình là đích đến.",

    description: `
    <p><span class="hl">RV There Yet?</span> là tựa game mô phỏng cuộc sống trên xe RV, nơi bạn rong ruổi qua những cung đường dài bất tận để khám phá thế giới.</p>

    <p>Mỗi chuyến đi đều mang đến những trải nghiệm mới:</p>

    <ul>
        <li><span class="hl">Quản lý tài nguyên</span> như nhiên liệu, thực phẩm và tiền bạc.</li>
        <li><span class="hl">Khám phá nhiều vùng đất</span> với cảnh quan đa dạng.</li>
        <li><span class="hl">Nâng cấp xe RV</span> để phục vụ hành trình dài ngày.</li>
        <li><span class="hl">Tận hưởng cuộc sống du mục</span> đầy tự do và phiêu lưu.</li>
    </ul>

    <p>Một trải nghiệm thư giãn dành cho những ai yêu thích du lịch và khám phá.</p>
    `,

    features: [
      "Tài khoản Steam tạo mới, mua sẵn game bản quyền",
      "Bàn giao kèm Email đăng ký tài khoản",
      "Trải nghiệm đầy đủ toàn bộ nội dung game",
      "Sở hữu hoàn toàn (đổi được email, pass)",
      "Bảo Hành Vĩnh Viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10"],
        ["Vi xử lý", "Intel Core i3"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "GTX 750 Ti"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "8 GB"],
      ],

      rec: [
        ["Hệ điều hành", "Windows 10/11"],
        ["Vi xử lý", "Intel Core i5"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 1060"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "8 GB SSD"],
      ],
    },
  },

  deeprock: {
    id: "deeprock",
    name: "Deep Rock Galactic",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Bắn súng / Co-op",
    developer: "Ghost Ship Games",
    price: "102.000đ",
    sold: "781",
    rating: "4.9",
    reviews: 54,
    accentColor: "#ffd54f",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/548430/header_292x136.jpg?t=1775555380",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/548430/header_292x136.jpg?t=1775555380",
    ],

    tagline: "Rock and Stone! Đào sâu hơn, chiến đấu mạnh hơn.",

    description: `
    <p><span class="hl">Deep Rock Galactic</span> là tựa game co-op huyền thoại nơi những người lùn không gian thực hiện các nhiệm vụ khai thác khoáng sản trong lòng hành tinh đầy quái vật.</p>

    <p>Bạn sẽ sát cánh cùng đồng đội trong những nhiệm vụ nguy hiểm:</p>

    <ul>
        <li><span class="hl">Co-op 4 người</span> với hệ thống lớp nhân vật độc đáo.</li>
        <li><span class="hl">Bản đồ ngẫu nhiên</span> thay đổi sau mỗi lần chơi.</li>
        <li><span class="hl">Kho vũ khí đa dạng</span> cùng hàng trăm nâng cấp.</li>
        <li><span class="hl">Chiến đấu với sinh vật ngoài hành tinh</span> khổng lồ dưới lòng đất.</li>
    </ul>

    <p>Một trong những tựa game co-op được yêu thích nhất trên Steam với cộng đồng vô cùng đông đảo.</p>
    `,

    features: [
      "Tài khoản Steam tạo mới, mua sẵn game bản quyền",
      "Bàn giao kèm Email đăng ký tài khoản",
      "Hỗ trợ Co-op Online đầy đủ",
      "Sở hữu hoàn toàn (đổi được email, pass, SĐT)",
      "Bảo Hành Vĩnh Viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 (64-bit)"],
        ["Vi xử lý", "Intel Core i5-4590"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 660"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "5 GB"],
      ],

      rec: [
        ["Hệ điều hành", "Windows 10/11 (64-bit)"],
        ["Vi xử lý", "Intel Core i7"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "GTX 1060"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "5 GB SSD"],
      ],
    },
  },

  smalland: {
    id: "smalland",
    name: "Smalland: Survive the Wilds",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Sinh tồn / Thế giới mở",
    developer: "Merge Games",
    price: "111.000đ",
    sold: "205",
    rating: "4.6",
    reviews: 12,
    accentColor: "#7bc96f",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/768200/c4d6a8769de55af18600a7bd8634d9133dc5f4b3/header_292x136_alt_assets_7.jpg?t=1776193569",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/768200/c4d6a8769de55af18600a7bd8634d9133dc5f4b3/header_292x136_alt_assets_7.jpg?t=1776193569",
    ],

    tagline:
      "Nhỏ bé giữa thiên nhiên khổng lồ — Sinh tồn chưa bao giờ khắc nghiệt đến thế.",

    description: `
    <p><span class="hl">Smalland: Survive the Wilds</span> đưa người chơi vào một thế giới nơi bạn chỉ cao bằng côn trùng và phải sinh tồn giữa khu rừng khổng lồ.</p>

    <p>Mọi thứ quen thuộc đều trở thành thử thách:</p>

    <ul>
        <li><span class="hl">Khám phá thế giới mở</span> rộng lớn dưới góc nhìn tí hon.</li>
        <li><span class="hl">Xây dựng căn cứ</span> trên cây và những vị trí độc đáo.</li>
        <li><span class="hl">Thuần hóa sinh vật</span> để làm thú cưỡi.</li>
        <li><span class="hl">Co-op cùng bạn bè</span> để sinh tồn hiệu quả hơn.</li>
    </ul>

    <p>Một cuộc phiêu lưu sinh tồn đầy sáng tạo trong môi trường quen thuộc nhưng hoàn toàn mới lạ.</p>
    `,

    features: [
      "Tài khoản Steam tạo mới, mua sẵn game bản quyền",
      "Bàn giao kèm Email đăng ký tài khoản",
      "Hỗ trợ Co-op Online",
      "Sở hữu hoàn toàn (đổi được email, pass, SĐT)",
      "Bảo Hành Vĩnh Viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 (64-bit)"],
        ["Vi xử lý", "Intel Core i5-8400"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 1060"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "20 GB"],
      ],

      rec: [
        ["Hệ điều hành", "Windows 10/11 (64-bit)"],
        ["Vi xử lý", "Intel Core i7-10700"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "RTX 2060"],
        ["DirectX", "Phiên bản 12"],
        ["Dung lượng", "20 GB SSD"],
      ],
    },
  },
  eaplay: {
    id: "eaplay",
    name: "EA Play",
    subtitle: "Tài Khoản EA Play Chính Hãng + Mail",
    genre: "Thể thao / Dịch vụ Game",
    developer: "Electronic Arts",
    price: "140.000đ",
    sold: "512",
    rating: "4.7",
    reviews: 26,
    accentColor: "#ff6b35",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1289670/49e5a469fef9e70e4f49e518986c07a5ae054212/header_292x136.jpg?t=1776976561",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1289670/49e5a469fef9e70e4f49e518986c07a5ae054212/header_292x136.jpg?t=1776976561",
    ],

    tagline: "Kho game EA trong tầm tay — Chơi nhiều hơn, tiết kiệm hơn.",

    description: `
    <p><span class="hl">EA Play</span> là dịch vụ thuê bao của Electronic Arts, cho phép người chơi truy cập hàng chục tựa game nổi tiếng với chi phí cực kỳ tiết kiệm.</p>

    <p>Bạn sẽ nhận được nhiều đặc quyền hấp dẫn:</p>

    <ul>
        <li><span class="hl">Truy cập thư viện game EA</span> với hàng chục tựa game nổi tiếng.</li>
        <li><span class="hl">Dùng thử sớm</span> các game mới trước ngày phát hành.</li>
        <li><span class="hl">Giảm giá độc quyền</span> khi mua game và DLC.</li>
        <li><span class="hl">Liên tục cập nhật</span> nội dung mới theo từng tháng.</li>
    </ul>

    <p>Giải pháp hoàn hảo dành cho người chơi yêu thích hệ sinh thái EA.</p>
    `,

    features: [
      "Tài khoản EA Play chính hãng",
      "Bàn giao kèm Email đăng ký tài khoản",
      "Truy cập kho game EA Play",
      "Sở hữu hoàn toàn (đổi được email, pass)",
      "Bảo Hành Vĩnh Viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10"],
        ["Vi xử lý", "Intel Core i3"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "GTX 750"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "Theo từng game"],
      ],

      rec: [
        ["Hệ điều hành", "Windows 10/11"],
        ["Vi xử lý", "Intel Core i5"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 1060"],
        ["DirectX", "Phiên bản 12"],
        ["Dung lượng", "SSD khuyến nghị"],
      ],
    },
  },

  yapyap: {
    id: "yapyap",
    name: "YAPYAP",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Chiến thuật / Indie",
    developer: "YAPYAP Studio",
    price: "113.000đ",
    sold: "87",
    rating: "4.5",
    reviews: 5,
    accentColor: "#8e44ad",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3834090/399b7aa5bd9ea359e6d77cec3032758ea27c597b/header_292x136.jpg?t=1775943797",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3834090/399b7aa5bd9ea359e6d77cec3032758ea27c597b/header_292x136.jpg?t=1775943797",
    ],

    tagline:
      "Nhỏ gọn nhưng đầy bất ngờ — Mỗi quyết định đều tạo nên khác biệt.",

    description: `
    <p><span class="hl">YAPYAP</span> là tựa game indie mang phong cách chiến thuật kết hợp yếu tố giải đố sáng tạo.</p>

    <p>Người chơi sẽ phải thích nghi với nhiều thử thách khác nhau:</p>

    <ul>
        <li><span class="hl">Lối chơi độc đáo</span> kết hợp chiến thuật và phản xạ.</li>
        <li><span class="hl">Nhiều màn chơi</span> với độ khó tăng dần.</li>
        <li><span class="hl">Phong cách nghệ thuật riêng biệt</span>.</li>
        <li><span class="hl">Cơ chế gameplay sáng tạo</span> mang lại cảm giác mới lạ.</li>
    </ul>

    <p>Một trải nghiệm indie thú vị dành cho những ai yêu thích khám phá điều mới.</p>
    `,

    features: [
      "Tài khoản Steam tạo mới, mua sẵn game bản quyền",
      "Bàn giao kèm Email đăng ký tài khoản",
      "Trải nghiệm đầy đủ nội dung game",
      "Sở hữu hoàn toàn (đổi được email, pass)",
      "Bảo Hành Vĩnh Viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10"],
        ["Vi xử lý", "Intel Core i3"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "GTX 750"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "3 GB"],
      ],

      rec: [
        ["Hệ điều hành", "Windows 10/11"],
        ["Vi xử lý", "Intel Core i5"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 1060"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "3 GB SSD"],
      ],
    },
  },

  farcry5: {
    id: "farcry5",
    name: "Far Cry® 5",
    subtitle: "Tài Khoản Ubisoft / Steam Bản Quyền + Mail",
    genre: "Bắn súng / Thế giới mở",
    developer: "Ubisoft",
    price: "148.500đ",
    sold: "693",
    rating: "4.8",
    reviews: 41,
    accentColor: "#f39c12",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/552520/header_292x136.jpg?t=1762190084",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/552520/header_292x136.jpg?t=1762190084",
    ],

    tagline:
      "Giải phóng Hope County — Chống lại giáo phái cuồng tín bằng mọi giá.",

    description: `
    <p><span class="hl">Far Cry 5</span> đưa người chơi đến Hope County, Montana, nơi một giáo phái cực đoan đang kiểm soát toàn bộ khu vực.</p>

    <p>Trong vai một cảnh sát trưởng tập sự, bạn phải đứng lên lãnh đạo cuộc kháng chiến:</p>

    <ul>
        <li><span class="hl">Thế giới mở rộng lớn</span> tự do khám phá.</li>
        <li><span class="hl">Kho vũ khí đa dạng</span> từ súng trường đến máy bay chiến đấu.</li>
        <li><span class="hl">Hệ thống đồng đội</span> hỗ trợ chiến đấu độc đáo.</li>
        <li><span class="hl">Co-op Online</span> cùng bạn bè xuyên suốt chiến dịch.</li>
    </ul>

    <p>Một trong những phiên bản Far Cry được yêu thích nhất nhờ thế giới mở đầy tự do.</p>
    `,

    features: [
      "Tài khoản Ubisoft/Steam bản quyền",
      "Bàn giao kèm Email đăng ký tài khoản",
      "Hỗ trợ Co-op Online",
      "Sở hữu hoàn toàn (đổi được email, pass)",
      "Bảo Hành Vĩnh Viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 (64-bit)"],
        ["Vi xử lý", "Intel Core i5-2400"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 670"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "40 GB"],
      ],

      rec: [
        ["Hệ điều hành", "Windows 10/11 (64-bit)"],
        ["Vi xử lý", "Intel Core i7-4770"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 970"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "40 GB SSD"],
      ],
    },
  },

  worldwarz: {
    id: "worldwarz",
    name: "World War Z",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Bắn súng / Co-op",
    developer: "Saber Interactive",
    price: "100.000đ",
    sold: "458",
    rating: "4.7",
    reviews: 23,
    accentColor: "#c0392b",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/699130/b35277055fbb7e07c26c5e31e4398684c6461d53/header_292x136.jpg?t=1772017589",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/699130/b35277055fbb7e07c26c5e31e4398684c6461d53/header_292x136.jpg?t=1772017589",
    ],

    tagline:
      "Hàng nghìn zombie đang lao tới — Bạn chỉ có một lựa chọn: chiến đấu.",

    description: `
    <p><span class="hl">World War Z</span> là tựa game bắn súng co-op lấy cảm hứng từ bộ phim cùng tên, nổi tiếng với những đàn zombie khổng lồ xuất hiện cùng lúc.</p>

    <p>Bạn và đồng đội phải sinh tồn trước ngày tận thế:</p>

    <ul>
        <li><span class="hl">Co-op 4 người</span> chống lại bầy zombie đông đảo.</li>
        <li><span class="hl">Hệ thống class</span> đa dạng với nhiều vai trò khác nhau.</li>
        <li><span class="hl">Vũ khí phong phú</span> cùng hàng trăm nâng cấp.</li>
        <li><span class="hl">Nhiều chiến dịch</span> diễn ra trên khắp thế giới.</li>
    </ul>

    <p>Những đợt zombie hàng nghìn con cùng xuất hiện là điểm đặc sắc tạo nên thương hiệu World War Z.</p>
    `,

    features: [
      "Tài khoản Steam tạo mới, mua sẵn game bản quyền",
      "Bàn giao kèm Email đăng ký tài khoản",
      "Hỗ trợ Co-op Online đầy đủ",
      "Sở hữu hoàn toàn (đổi được email, pass)",
      "Bảo Hành Vĩnh Viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 (64-bit)"],
        ["Vi xử lý", "Intel Core i3-3220"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 650 Ti"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "50 GB"],
      ],

      rec: [
        ["Hệ điều hành", "Windows 10/11 (64-bit)"],
        ["Vi xử lý", "Intel Core i7"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "GTX 1060"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "50 GB SSD"],
      ],
    },
  },
  outerworlds: {
    id: "outerworlds",
    name: "The Outer Worlds",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Nhập vai / Khoa học viễn tưởng",
    developer: "Obsidian Entertainment",
    price: "1.200.000đ",
    sold: "387",
    rating: "4.8",
    reviews: 29,
    accentColor: "#6f42c1",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578650/header.jpg?t=1776350110",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578650/header.jpg?t=1776350110",
    ],

    tagline:
      "Tương lai thuộc về các tập đoàn — Và bạn là người quyết định số phận của nó.",

    description: `
    <p><span class="hl">The Outer Worlds</span> là tựa game nhập vai khoa học viễn tưởng đến từ Obsidian Entertainment, nơi mọi lựa chọn của bạn đều có thể thay đổi cục diện thiên hà.</p>

    <p>Thức tỉnh sau nhiều năm ngủ đông ngoài kế hoạch, bạn bị cuốn vào một âm mưu đe dọa toàn bộ thuộc địa Halcyon:</p>

    <ul>
        <li><span class="hl">Hệ thống lựa chọn</span> ảnh hưởng trực tiếp đến cốt truyện.</li>
        <li><span class="hl">Đồng đội độc đáo</span> với nhiệm vụ và cá tính riêng.</li>
        <li><span class="hl">Chiến đấu linh hoạt</span> giữa súng đạn, cận chiến và kỹ năng.</li>
        <li><span class="hl">Khám phá nhiều hành tinh</span> với môi trường hoàn toàn khác nhau.</li>
    </ul>

    <p>Một trong những game RPG hiện đại được đánh giá cao nhất dành cho người yêu thích Fallout New Vegas.</p>
    `,

    features: [
      "Tài khoản Steam tạo mới, mua sẵn game bản quyền",
      "Bàn giao kèm Email đăng ký tài khoản",
      "Trải nghiệm đầy đủ toàn bộ nội dung game",
      "Sở hữu hoàn toàn (đổi được email, pass, SĐT)",
      "Bảo Hành Vĩnh Viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 (64-bit)"],
        ["Vi xử lý", "Intel Core i3-3225"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "GTX 650 Ti"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "40 GB"],
      ],

      rec: [
        ["Hệ điều hành", "Windows 10/11 (64-bit)"],
        ["Vi xử lý", "Intel Core i7-7700K"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 1060"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "40 GB SSD"],
      ],
    },
  },

  shovelknight: {
    id: "shovelknight",
    name: "Shovel Knight: Treasure Trove",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Nhập vai / Phiêu lưu",
    developer: "Yacht Club Games",
    price: "149.000đ",
    sold: "176",
    rating: "4.9",
    reviews: 18,
    accentColor: "#3498db",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/bundles/63181/31j88g810ntngeud/3a26d44c27071a93e2c499b898b0696b9d474758/header_292x136.jpg?t=1776771125",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/bundles/63181/31j88g810ntngeud/3a26d44c27071a93e2c499b898b0696b9d474758/header_292x136.jpg?t=1776771125",
    ],

    tagline: "Một chiếc xẻng — Một huyền thoại.",

    description: `
    <p><span class="hl">Shovel Knight: Treasure Trove</span> là bộ sưu tập hoàn chỉnh của một trong những tựa game indie thành công nhất mọi thời đại.</p>

    <p>Phong cách đồ họa 8-bit cổ điển kết hợp gameplay hiện đại tạo nên trải nghiệm khó quên:</p>

    <ul>
        <li><span class="hl">Nhiều chiến dịch</span> với các nhân vật khác nhau.</li>
        <li><span class="hl">Lối chơi platformer</span> đầy thử thách.</li>
        <li><span class="hl">Boss đa dạng</span> mang phong cách cổ điển.</li>
        <li><span class="hl">Âm nhạc tuyệt vời</span> lấy cảm hứng từ thời NES.</li>
    </ul>

    <p>Một kiệt tác indie dành cho mọi game thủ yêu thích game cổ điển.</p>
    `,

    features: [
      "Tài khoản Steam tạo mới, mua sẵn game bản quyền",
      "Bàn giao kèm Email đăng ký tài khoản",
      "Bao gồm toàn bộ DLC và Campaign",
      "Sở hữu hoàn toàn (đổi được email, pass)",
      "Bảo Hành Vĩnh Viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 7"],
        ["Vi xử lý", "Intel Core 2 Duo"],
        ["RAM", "2 GB"],
        ["Card đồ họa", "OpenGL 3.0"],
        ["DirectX", "Phiên bản 10"],
        ["Dung lượng", "1 GB"],
      ],

      rec: [
        ["Hệ điều hành", "Windows 10"],
        ["Vi xử lý", "Intel Core i3"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "GTX 750"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "1 GB"],
      ],
    },
  },

  aoe: {
    id: "aoe",
    name: "Age of Empires",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Chiến thuật thời gian thực",
    developer: "Xbox Game Studios",
    price: "210.000đ",
    sold: "863",
    rating: "4.9",
    reviews: 52,
    accentColor: "#b8860b",

    heroImage:
      "https://upload.wikimedia.org/wikipedia/commons/4/40/Age_of_Empires_franchise_logo.png",

    images: [
      "https://upload.wikimedia.org/wikipedia/commons/4/40/Age_of_Empires_franchise_logo.png",
    ],

    tagline: "Xây dựng đế chế — Viết lại lịch sử bằng chính đôi tay bạn.",

    description: `
    <p><span class="hl">Age of Empires</span> là tượng đài của dòng game chiến thuật thời gian thực, nơi người chơi xây dựng nền văn minh và chinh phục thế giới.</p>

    <ul>
        <li><span class="hl">Nhiều nền văn minh</span> với lối chơi riêng biệt.</li>
        <li><span class="hl">Thu thập tài nguyên</span> và phát triển công nghệ.</li>
        <li><span class="hl">Chiến đấu quy mô lớn</span> trên chiến trường lịch sử.</li>
        <li><span class="hl">Multiplayer</span> cạnh tranh với người chơi toàn cầu.</li>
    </ul>

    <p>Một trong những thương hiệu RTS thành công nhất lịch sử ngành game.</p>
    `,

    features: [
      "Tài khoản Steam tạo mới, mua sẵn game bản quyền",
      "Bàn giao kèm Email đăng ký tài khoản",
      "Hỗ trợ Multiplayer Online",
      "Sở hữu hoàn toàn (đổi được email, pass)",
      "Bảo Hành Vĩnh Viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i5"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 650"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "30 GB"],
      ],

      rec: [
        ["Hệ điều hành", "Windows 11 64-bit"],
        ["Vi xử lý", "Intel Core i7"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "GTX 1060"],
        ["DirectX", "Phiên bản 12"],
        ["Dung lượng", "30 GB SSD"],
      ],
    },
  },
  efootball: {
    id: "efootball",
    name: "eFootball",
    subtitle: "Tài Khoản Konami Chính Hãng + Mail",
    genre: "Thể thao / Bóng đá",
    developer: "Konami",
    price: "89.000đ",
    sold: "742",
    rating: "4.6",
    reviews: 39,
    accentColor: "#0057ff",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1665460/header.jpg",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1665460/header.jpg",
    ],

    tagline: "Trải nghiệm bóng đá chân thực thế hệ mới.",

    description: `
    <p><span class="hl">eFootball</span> là tựa game bóng đá trực tuyến miễn phí đến từ Konami, mang đến trải nghiệm thi đấu chân thực với hàng triệu người chơi trên toàn thế giới.</p>

    <p>Người chơi có thể xây dựng đội bóng trong mơ và cạnh tranh ở nhiều chế độ khác nhau:</p>

    <ul>
        <li><span class="hl">Dream Team</span> với hàng trăm cầu thủ nổi tiếng.</li>
        <li><span class="hl">Gameplay chân thực</span> sử dụng công nghệ vật lý hiện đại.</li>
        <li><span class="hl">Cập nhật mùa giải</span> liên tục theo bóng đá thực tế.</li>
        <li><span class="hl">Thi đấu Online</span> với người chơi toàn cầu.</li>
    </ul>

    <p>Một lựa chọn hấp dẫn dành cho người yêu bóng đá và cạnh tranh trực tuyến.</p>
    `,

    features: [
      "Tài khoản chính hãng",
      "Bàn giao kèm Email đăng ký tài khoản",
      "Hỗ trợ Online đầy đủ",
      "Sở hữu hoàn toàn (đổi được email, pass)",
      "Bảo Hành Vĩnh Viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i5-2300"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 660 Ti"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "50 GB"],
      ],

      rec: [
        ["Hệ điều hành", "Windows 11 64-bit"],
        ["Vi xử lý", "Intel Core i5-7600"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 1060"],
        ["DirectX", "Phiên bản 12"],
        ["Dung lượng", "50 GB SSD"],
      ],
    },
  },

  footballtactics: {
    id: "footballtactics",
    name: "Football, Tactics & Glory",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Chiến thuật / Thể thao",
    developer: "Creoteam",
    price: "126.000đ",
    sold: "154",
    rating: "4.7",
    reviews: 9,
    accentColor: "#27ae60",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/375530/header.jpg",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/375530/header.jpg",
    ],

    tagline: "Bóng đá là chiến thuật — Không chỉ là kỹ năng.",

    description: `
    <p><span class="hl">Football, Tactics & Glory</span> kết hợp quản lý bóng đá với chiến thuật theo lượt, tạo nên trải nghiệm hoàn toàn khác biệt so với các game bóng đá truyền thống.</p>

    <ul>
        <li><span class="hl">Chiến thuật theo lượt</span> độc đáo.</li>
        <li><span class="hl">Xây dựng đội bóng</span> từ hạng thấp đến đỉnh cao.</li>
        <li><span class="hl">Phát triển cầu thủ</span> với hệ thống RPG.</li>
        <li><span class="hl">Mùa giải dài hạn</span> với nhiều giải đấu.</li>
    </ul>

    <p>Dành cho những người yêu thích tư duy chiến thuật hơn là phản xạ.</p>
    `,

    features: [
      "Tài khoản Steam tạo mới",
      "Bàn giao Email đầy đủ",
      "Bao gồm toàn bộ nội dung game",
      "Sở hữu hoàn toàn",
      "Bảo Hành Vĩnh Viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 7"],
        ["Vi xử lý", "Intel Core 2 Duo"],
        ["RAM", "2 GB"],
        ["Card đồ họa", "512 MB VRAM"],
        ["DirectX", "Phiên bản 9"],
        ["Dung lượng", "1 GB"],
      ],

      rec: [
        ["Hệ điều hành", "Windows 10"],
        ["Vi xử lý", "Intel Core i3"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "GTX 750"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "1 GB SSD"],
      ],
    },
  },

  kopanito: {
    id: "kopanito",
    name: "Kopanito All-Stars Soccer",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Thể thao / Arcade",
    developer: "Merixgames",
    price: "84.000đ",
    sold: "113",
    rating: "4.6",
    reviews: 8,
    accentColor: "#f39c12",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/399820/header.jpg",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/399820/header.jpg",
    ],

    tagline: "Bóng đá arcade vui nhộn không có luật lệ rườm rà.",

    description: `
    <p><span class="hl">Kopanito All-Stars Soccer</span> mang đến những trận cầu tốc độ cao với phong cách arcade đầy vui nhộn.</p>

    <ul>
        <li><span class="hl">Không việt vị</span> và không phạm lỗi.</li>
        <li><span class="hl">Kỹ năng đặc biệt</span> cho từng đội bóng.</li>
        <li><span class="hl">Chế độ Multiplayer</span> cạnh tranh hấp dẫn.</li>
        <li><span class="hl">Lối chơi dễ tiếp cận</span> nhưng khó thành thạo.</li>
    </ul>

    <p>Một tựa game bóng đá giải trí phù hợp cho mọi lứa tuổi.</p>
    `,

    features: [
      "Tài khoản Steam tạo mới",
      "Bàn giao Email đầy đủ",
      "Multiplayer Online",
      "Sở hữu hoàn toàn",
      "Bảo Hành Vĩnh Viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 7"],
        ["Vi xử lý", "Dual Core 2 GHz"],
        ["RAM", "2 GB"],
        ["Card đồ họa", "512 MB VRAM"],
        ["DirectX", "Phiên bản 9"],
        ["Dung lượng", "500 MB"],
      ],

      rec: [
        ["Hệ điều hành", "Windows 10"],
        ["Vi xử lý", "Intel Core i3"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "GTX 750"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "500 MB"],
      ],
    },
  },

  footballdrama: {
    id: "footballdrama",
    name: "Football Drama",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Mô phỏng / Thể thao",
    developer: "Open Lab Games",
    price: "98.000đ",
    sold: "76",
    rating: "4.4",
    reviews: 4,
    accentColor: "#8e44ad",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/964650/header.jpg",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/964650/header.jpg",
    ],

    tagline: "Bóng đá không chỉ có trên sân cỏ.",

    description: `
    <p><span class="hl">Football Drama</span> là tựa game kể chuyện kết hợp quản lý bóng đá, nơi mỗi quyết định đều ảnh hưởng đến số phận đội bóng và huấn luyện viên.</p>

    <ul>
        <li><span class="hl">Cốt truyện độc đáo</span> lấy cảm hứng từ bóng đá hiện đại.</li>
        <li><span class="hl">Quản lý chiến thuật</span> theo phong cách tối giản.</li>
        <li><span class="hl">Nhiều lựa chọn</span> dẫn đến các kết thúc khác nhau.</li>
        <li><span class="hl">Phong cách nghệ thuật</span> đậm chất truyện tranh.</li>
    </ul>

    <p>Một góc nhìn mới lạ về thế giới bóng đá chuyên nghiệp.</p>
    `,

    features: [
      "Tài khoản Steam tạo mới",
      "Bàn giao Email đầy đủ",
      "Trải nghiệm đầy đủ nội dung",
      "Sở hữu hoàn toàn",
      "Bảo Hành Vĩnh Viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 7"],
        ["Vi xử lý", "Dual Core"],
        ["RAM", "2 GB"],
        ["Card đồ họa", "512 MB VRAM"],
        ["DirectX", "Phiên bản 9"],
        ["Dung lượng", "1 GB"],
      ],

      rec: [
        ["Hệ điều hành", "Windows 10"],
        ["Vi xử lý", "Intel Core i3"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "GTX 750"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "1 GB"],
      ],
    },
  },

  streetpowerfootball: {
    id: "streetpowerfootball",
    name: "Street Power Football",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Thể thao / Đường phố",
    developer: "Gamajun Games",
    price: "112.000đ",
    sold: "91",
    rating: "4.5",
    reviews: 6,
    accentColor: "#e74c3c",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1194410/header.jpg",

    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1194410/header.jpg",
    ],

    tagline: "Bóng đá đường phố với phong cách freestyle đỉnh cao.",

    description: `
    <p><span class="hl">Street Power Football</span> mang đến trải nghiệm bóng đá đường phố đầy màu sắc với những kỹ năng freestyle ngoạn mục.</p>

    <ul>
        <li><span class="hl">Nhiều chế độ chơi</span> từ biểu diễn kỹ thuật đến thi đấu đối kháng.</li>
        <li><span class="hl">Kỹ năng đặc biệt</span> mang đậm phong cách đường phố.</li>
        <li><span class="hl">Nhân vật nổi tiếng</span> trong cộng đồng freestyle football.</li>
        <li><span class="hl">Multiplayer</span> cạnh tranh hấp dẫn.</li>
    </ul>

    <p>Một làn gió mới cho những ai yêu thích bóng đá biểu diễn và giải trí.</p>
    `,

    features: [
      "Tài khoản Steam tạo mới",
      "Bàn giao Email đầy đủ",
      "Multiplayer Online",
      "Sở hữu hoàn toàn",
      "Bảo Hành Vĩnh Viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10"],
        ["Vi xử lý", "Intel Core i3"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "GTX 750 Ti"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "8 GB"],
      ],

      rec: [
        ["Hệ điều hành", "Windows 10/11"],
        ["Vi xử lý", "Intel Core i5"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 1060"],
        ["DirectX", "Phiên bản 11"],
        ["Dung lượng", "8 GB SSD"],
      ],
    },
  },
  // ==================== THỂ THAO ====================

  footballmanager2021: {
    id: "footballmanager2021",
    name: "Football Manager 2021 Touch - Unlimited Scouting",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Thể thao / Quản lý bóng đá",
    developer: "Sports Interactive",
    price: "22.000đ",
    accentColor: "#1a73e8",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1436173/header.jpg?t=1641312996",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1436173/header.jpg?t=1641312996",
    ],

    tagline: "Chiến lược trong tầm tay — Quản lý đội bóng mơ ước của bạn.",

    description: `
    <p><span class="hl">Football Manager 2021 Touch</span> là phiên bản tinh gọn của dòng game quản lý bóng đá hàng đầu thế giới, mang đến trải nghiệm nhanh gọn mà không mất đi chiều sâu chiến thuật.</p>

    <p>Với tính năng <span class="hl">Unlimited Scouting</span>, bạn có thể theo dõi và phát hiện tài năng từ khắp nơi trên thế giới mà không bị giới hạn.</p>

    <ul>
      <li><span class="hl">Unlimited Scouting</span> — khám phá tài năng toàn cầu không giới hạn.</li>
      <li><span class="hl">Tactics Board</span> đơn giản nhưng đủ sâu để thể hiện chiến thuật.</li>
      <li><span class="hl">Chuyển nhượng & hợp đồng</span> thực tế theo mùa giải.</li>
      <li><span class="hl">Giao diện tối ưu</span> cho màn hình lớn và nhỏ.</li>
    </ul>

    <p>Lý tưởng cho những ai muốn trải nghiệm FM mà không cần đầu tư hàng giờ mỗi ngày.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Bàn giao kèm Email",
      "Unlimited Scouting mở khóa sẵn",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 7 64-bit"],
        ["Vi xử lý", "Intel Core i5"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "Intel GMA X4500"],
        ["DirectX", "11"],
        ["Dung lượng", "7 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i5 (3.0GHz+)"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "AMD/Nvidia 2GB VRAM"],
        ["DirectX", "11"],
        ["Dung lượng", "7 GB SSD"],
      ],
    },
  },

  "90minutefever": {
    id: "90minutefever",
    name: "90 Minute Fever - Online Football Manager",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Thể thao / Quản lý bóng đá Online",
    developer: "GD Studios",
    price: "100.000đ",
    accentColor: "#00a651",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/468070/header.jpg?t=1738484847",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/468070/header.jpg?t=1738484847",
    ],

    tagline: "90 phút quyết định tất cả — Đối đầu thật sự, kết quả thật sự.",

    description: `
    <p><span class="hl">90 Minute Fever</span> là game quản lý bóng đá online nơi bạn đối đầu trực tiếp với các HLV thật từ khắp thế giới theo thời gian thực.</p>

    <p>Không phải AI, không phải bot — mỗi trận đấu là một cuộc chiến chiến thuật với một đối thủ người thật đang ngồi sau màn hình.</p>

    <ul>
      <li><span class="hl">PvP thời gian thực</span> với hàng nghìn HLV online.</li>
      <li><span class="hl">Hệ thống liên đoàn</span> và thăng hạng đầy đủ.</li>
      <li><span class="hl">Chuyển nhượng cầu thủ</span> trên chợ toàn cầu.</li>
      <li><span class="hl">Chiến thuật linh hoạt</span> điều chỉnh theo từng đối thủ.</li>
    </ul>

    <p>Đây là đấu trường dành cho những chiến lược gia bóng đá thực thụ.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Bàn giao kèm Email",
      "Chơi PvP Online đầy đủ",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 7"],
        ["Vi xử lý", "Dual Core 2.0 GHz"],
        ["RAM", "2 GB"],
        ["Card đồ họa", "256MB VRAM"],
        ["DirectX", "9.0"],
        ["Dung lượng", "2 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10"],
        ["Vi xử lý", "Core i3 3.0 GHz"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "512MB VRAM"],
        ["DirectX", "11"],
        ["Dung lượng", "2 GB"],
      ],
    },
  },

  pro11: {
    id: "pro11",
    name: "Pro 11 - Football Manager Game",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Thể thao / Quản lý bóng đá",
    developer: "Bit By Bit Studios",
    price: "99.000đ",
    accentColor: "#e63946",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/844960/header.jpg?t=1686569072",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/844960/header.jpg?t=1686569072",
    ],

    tagline: "Xây dựng triều đại của bạn — Từ sân tập đến chức vô địch.",

    description: `
    <p><span class="hl">Pro 11</span> là game quản lý bóng đá đơn giản, thân thiện với người mới nhưng vẫn đủ chiều sâu để giữ chân những người chơi kỳ cựu.</p>

    <p>Hãy dẫn dắt câu lạc bộ của bạn vươn lên từ hạng thấp nhất đến đỉnh cao của bóng đá thế giới.</p>

    <ul>
      <li><span class="hl">Quản lý toàn diện</span> — tuyển dụng, chiến thuật, tài chính.</li>
      <li><span class="hl">Hệ thống phát triển cầu thủ</span> theo thời gian thực.</li>
      <li><span class="hl">Nhiều giải đấu</span> và cúp quốc tế.</li>
      <li><span class="hl">Giao diện trực quan</span>, dễ làm quen.</li>
    </ul>

    <p>Lựa chọn hoàn hảo cho ai mới bước chân vào thể loại football manager.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Bàn giao kèm Email",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 7"],
        ["Vi xử lý", "Dual Core 1.8 GHz"],
        ["RAM", "2 GB"],
        ["Card đồ họa", "128MB VRAM"],
        ["DirectX", "9.0"],
        ["Dung lượng", "1 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10"],
        ["Vi xử lý", "Core i3"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "256MB VRAM"],
        ["DirectX", "11"],
        ["Dung lượng", "1 GB"],
      ],
    },
  },

  dreamleaguesoccer: {
    id: "dreamleaguesoccer",
    name: "Dream League Soccer",
    subtitle: "Miễn phí",
    genre: "Thể thao / Bóng đá",
    developer: "First Touch Games",
    price: "Miễn phí",
    accentColor: "#0077c8",

    heroImage: "https://cdn-media.sforum.vn/storage/app/media/dls-2025-13.jpg",
    images: ["https://cdn-media.sforum.vn/storage/app/media/dls-2025-13.jpg"],

    tagline: "Tạo dựng đội hình trong mơ — Chinh phục mọi giải đấu.",

    description: `
    <p><span class="hl">Dream League Soccer</span> là tựa game bóng đá di động cực kỳ phổ biến, nơi bạn tự xây dựng đội hình từ những cầu thủ bình thường lên đến siêu sao thế giới.</p>

    <p>Thu thập, nâng cấp và đặt cầu thủ vào đúng vị trí để tạo nên đội bóng của riêng bạn.</p>

    <ul>
      <li><span class="hl">600+ cầu thủ được cấp phép</span> từ FIFPro.</li>
      <li><span class="hl">Xây dựng sân vận động</span> và cơ sở vật chất riêng.</li>
      <li><span class="hl">Chế độ Dream League</span> với nhiều mùa giải thú vị.</li>
      <li><span class="hl">Online PvP</span> đấu với bạn bè và toàn cầu.</li>
    </ul>

    <p>Hoàn toàn miễn phí — bắt đầu ngay hành trình chinh phục bóng đá của bạn.</p>
  `,

    features: [
      "Hoàn toàn miễn phí",
      "Cầu thủ FIFPro có bản quyền",
      "Online PvP đầy đủ",
      "Cập nhật thường xuyên",
      "Không cần tài khoản Steam",
    ],

    specs: {
      min: [
        ["Nền tảng", "Android / iOS"],
        ["RAM", "2 GB"],
        ["Dung lượng", "500 MB"],
        ["Kết nối", "Internet ổn định"],
      ],
      rec: [
        ["Nền tảng", "Android / iOS mới nhất"],
        ["RAM", "4 GB"],
        ["Dung lượng", "1 GB"],
        ["Kết nối", "WiFi hoặc 4G/5G"],
      ],
    },
  },

  finalsoccervr: {
    id: "finalsoccervr",
    name: "Final Soccer VR",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Thể thao / Bóng đá VR",
    developer: "Ivolution Sports",
    price: "188.000đ",
    accentColor: "#ff6b00",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/555060/header.jpg?t=1671597867",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/555060/header.jpg?t=1671597867",
    ],

    tagline: "Bước thẳng vào sân cỏ — Trải nghiệm bóng đá chưa từng có.",

    description: `
    <p><span class="hl">Final Soccer VR</span> đưa bạn trực tiếp lên sân cỏ với công nghệ thực tế ảo, nơi mỗi cú sút, mỗi pha đỡ bóng đều là cảm giác thật.</p>

    <p>Đây không chỉ là game — đây là trải nghiệm bóng đá hoàn toàn mới mà không thiết bị thông thường nào có thể mang lại.</p>

    <ul>
      <li><span class="hl">Thực tế ảo toàn diện</span> với VR headset.</li>
      <li><span class="hl">Cảm giác vật lý chân thực</span> khi sút và đỡ bóng.</li>
      <li><span class="hl">Nhiều chế độ chơi</span> từ tập luyện đến thi đấu.</li>
      <li><span class="hl">Góc nhìn cầu thủ</span> hoàn toàn immersive.</li>
    </ul>

    <p>Dành cho những game thủ muốn bước sang một chiều trải nghiệm hoàn toàn khác.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Hỗ trợ VR headset",
      "Bàn giao kèm Email",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10"],
        ["Vi xử lý", "Intel i5-4590"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 970"],
        ["DirectX", "11"],
        ["Dung lượng", "5 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10/11"],
        ["Vi xử lý", "Intel i7-6700"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "GTX 1080"],
        ["DirectX", "12"],
        ["Dung lượng", "5 GB SSD"],
      ],
    },
  },

  maddennfl24: {
    id: "maddennfl24",
    name: "Madden NFL 24",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Thể thao / Bóng bầu dục Mỹ",
    developer: "EA Tiburon",
    price: "100.000đ",
    accentColor: "#003594",

    heroImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3EXFblxsqVsC8sCsJQ8Rl1t6z4AI2mib9g&s",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3EXFblxsqVsC8sCsJQ8Rl1t6z4AI2mib9g&s",
    ],

    tagline: "Chạm tay vào Super Bowl — Từng đường chuyền đều mang ý nghĩa.",

    description: `
    <p><span class="hl">Madden NFL 24</span> là tựa game bóng bầu dục Mỹ đỉnh cao từ EA Sports, mang đến trải nghiệm NFL chân thực nhất từ trước đến nay.</p>

    <p>Với hệ thống vật lý FieldSENSE được cải tiến, mỗi pha va chạm, mỗi đường chuyền đều cảm giác như đang xem trực tiếp trên sân.</p>

    <ul>
      <li><span class="hl">FieldSENSE</span> — hệ thống vật lý va chạm thế hệ mới.</li>
      <li><span class="hl">Franchise Mode</span> quản lý đội bóng chuyên sâu.</li>
      <li><span class="hl">Ultimate Team</span> xây dựng đội hình trong mơ.</li>
      <li><span class="hl">Face of the Franchise</span> tạo cầu thủ và sống cuộc đời NFL.</li>
    </ul>

    <p>Tựa game bắt buộc phải có cho mọi fan của môn thể thao vua nước Mỹ.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Bàn giao kèm Email",
      "Đầy đủ chế độ chơi",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i5-6600k"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 1050 Ti"],
        ["DirectX", "12"],
        ["Dung lượng", "50 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10/11 64-bit"],
        ["Vi xử lý", "Intel Core i7-6700"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "RTX 2070"],
        ["DirectX", "12"],
        ["Dung lượng", "50 GB SSD"],
      ],
    },
  },

  fconline: {
    id: "fconline",
    name: "FC Online",
    subtitle: "Miễn phí",
    genre: "Thể thao / Bóng đá Online",
    developer: "EA Sports",
    price: "Miễn phí",
    accentColor: "#5b2d8e",

    heroImage:
      "https://yt3.googleusercontent.com/4W8oATzTPHLlUha4Jk4WXGvvvnoEqvCXvEv88tBYDfWo1atYM7R4zXTgTqeD0R75PTu5vor0aQ=s900-c-k-c0x00ffffff-no-rj",
    images: [
      "https://yt3.googleusercontent.com/4W8oATzTPHLlUha4Jk4WXGvvvnoEqvCXvEv88tBYDfWo1atYM7R4zXTgTqeD0R75PTu5vor0aQ=s900-c-k-c0x00ffffff-no-rj",
    ],

    tagline: "Đội hình huyền thoại trong tay bạn — Miễn phí, không giới hạn.",

    description: `
    <p><span class="hl">FC Online</span> là phiên bản free-to-play của dòng game bóng đá EA Sports, nơi bạn thu thập những siêu sao bóng đá huyền thoại và thi đấu cùng hàng triệu người chơi toàn cầu.</p>

    <p>Từ Ronaldo thời đỉnh cao đến Messi hiện tại — tất cả đều có thể hiện diện trong đội bóng của bạn.</p>

    <ul>
      <li><span class="hl">Cầu thủ bản quyền</span> từ các giải đấu lớn trên thế giới.</li>
      <li><span class="hl">Squad Building</span> tùy biến chiến thuật linh hoạt.</li>
      <li><span class="hl">Mùa giải Online</span> xếp hạng theo kỹ năng.</li>
      <li><span class="hl">Cập nhật liên tục</span> theo lịch thi đấu thực tế.</li>
    </ul>

    <p>Hoàn toàn miễn phí — hãy bắt đầu xây dựng đội bóng trong mơ ngay hôm nay.</p>
  `,

    features: [
      "Hoàn toàn miễn phí",
      "Online đầy đủ",
      "Cầu thủ bản quyền FIFA/FC",
      "Cập nhật theo mùa giải",
      "Không cần tài khoản Steam",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 7 64-bit"],
        ["Vi xử lý", "Intel Core i3"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "GTX 460"],
        ["DirectX", "11"],
        ["Dung lượng", "30 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i5"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 970"],
        ["DirectX", "11"],
        ["Dung lượng", "30 GB SSD"],
      ],
    },
  },

  // ==================== ĐUA XE ====================

  wreckfest: {
    id: "wreckfest",
    name: "Wreckfest - Đua Xe Đâm Va",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Đua xe / Hành động",
    developer: "Bugbear Entertainment",
    price: "30.000đ",
    accentColor: "#d62828",

    heroImage:
      "https://static0.anpoimages.com/wordpress/wp-content/uploads/2022/08/wreckfest.png?w=1600&h=900&fit=crop",
    images: [
      "https://static0.anpoimages.com/wordpress/wp-content/uploads/2022/08/wreckfest.png?w=1600&h=900&fit=crop",
    ],

    tagline: "Không cần luật lệ — Chỉ cần là người cuối cùng còn chạy được.",

    description: `
    <p><span class="hl">Wreckfest</span> là game đua xe phá hoại nơi mục tiêu không chỉ là về đích trước — mà là đảm bảo đối thủ không bao giờ đến đích.</p>

    <p>Với hệ thống vật lý hư hỏng xe chi tiết đến từng mảnh ghép, mỗi va chạm đều để lại dấu ấn rõ ràng trên thân xe.</p>

    <ul>
      <li><span class="hl">Vật lý hư hỏng</span> siêu thực tế — xe bẹp, móp, gãy vỡ từng phần.</li>
      <li><span class="hl">Derby phá hoại</span> — thi đấu đến xe cuối cùng còn hoạt động.</li>
      <li><span class="hl">Tùy chỉnh xe</span> tập trung vào giáp bảo vệ và độ bền.</li>
      <li><span class="hl">Multiplayer Online</span> và LAN.</li>
    </ul>

    <p>Nếu bạn muốn xả stress sau một ngày dài — đây là lựa chọn hoàn hảo.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Bàn giao kèm Email",
      "Multiplayer Online đầy đủ",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 7 64-bit"],
        ["Vi xử lý", "Intel Core i5-2500K"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 660"],
        ["DirectX", "11"],
        ["Dung lượng", "25 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i7-4770"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "GTX 1070"],
        ["DirectX", "11"],
        ["Dung lượng", "25 GB SSD"],
      ],
    },
  },

  projectcars2: {
    id: "projectcars2",
    name: "Project CARS 2",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Đua xe / Mô phỏng",
    developer: "Slightly Mad Studios",
    price: "128.000đ",
    accentColor: "#c0392b",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/378860/header.jpg?t=1663714740",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/378860/header.jpg?t=1663714740",
    ],

    tagline:
      "Mô phỏng đua xe đỉnh cao — Cảm giác thật như đang ngồi sau vô lăng.",

    description: `
    <p><span class="hl">Project CARS 2</span> là một trong những game đua xe mô phỏng chân thực nhất hiện có, được tạo ra bởi và cho những người thực sự đam mê tốc độ.</p>

    <p>Với hơn 180 chiếc xe và 60 đường đua, bạn có thể tham gia vào đủ mọi giải đua từ GT đến Endurance, từ xe thể thao đến xe đua chuyên nghiệp.</p>

    <ul>
      <li><span class="hl">180+ xe</span> được tái tạo tỉ mỉ từng chi tiết kỹ thuật.</li>
      <li><span class="hl">LiveTrack 3.0</span> — thời tiết và mặt đường thay đổi theo thời gian thực.</li>
      <li><span class="hl">Vô lăng lực & Wheel support</span> cho trải nghiệm sim racing.</li>
      <li><span class="hl">Online Multiplayer</span> với hệ thống xếp hạng chuyên nghiệp.</li>
    </ul>

    <p>Lựa chọn hàng đầu cho những ai muốn tìm hiểu thế giới sim racing.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Bàn giao kèm Email",
      "Hỗ trợ vô lăng đua xe",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 7 64-bit SP1"],
        ["Vi xử lý", "Intel Core i5-2300"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 680"],
        ["DirectX", "11"],
        ["Dung lượng", "50 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i7-6700K"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "GTX 1080"],
        ["DirectX", "11"],
        ["Dung lượng", "50 GB SSD"],
      ],
    },
  },

  f12020: {
    id: "f12020",
    name: "F1 2020",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Đua xe / Formula 1",
    developer: "Codemasters",
    price: "200.000đ",
    accentColor: "#e10600",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1080110/header.jpg?t=1678892552",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1080110/header.jpg?t=1678892552",
    ],

    tagline: "Tốc độ của F1 trong tầm tay — Hãy trở thành nhà vô địch.",

    description: `
    <p><span class="hl">F1 2020</span> là game đua xe Formula 1 chính thức mang đến trải nghiệm chân thực nhất của môn thể thao tốc độ đỉnh cao nhất thế giới.</p>

    <p>Lần đầu tiên trong lịch sử dòng game F1, bạn có thể tự tạo đội đua riêng của mình và cạnh tranh với các đội lớn.</p>

    <ul>
      <li><span class="hl">My Team</span> — lập đội đua riêng, tuyển tài xế, phát triển xe.</li>
      <li><span class="hl">Career Mode</span> theo đuổi sự nghiệp F1 chuyên nghiệp.</li>
      <li><span class="hl">22 đường đua chính thức</span> mùa giải 2020.</li>
      <li><span class="hl">Split-screen & Online Multiplayer</span> đầy đủ.</li>
    </ul>

    <p>Tốc độ, chiến lược và áp lực đua đỉnh cao — tất cả gói gọn trong một tựa game.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Bàn giao kèm Email",
      "Online Multiplayer đầy đủ",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 7/8.1/10 64-bit"],
        ["Vi xử lý", "Intel Core i3-2130"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 960 / R9 280X"],
        ["DirectX", "11"],
        ["Dung lượng", "80 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i5-9600K"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "GTX 1070"],
        ["DirectX", "12"],
        ["Dung lượng", "80 GB SSD"],
      ],
    },
  },

  asphalt8: {
    id: "asphalt8",
    name: "Asphalt 8: Airborne",
    subtitle: "Miễn phí",
    genre: "Đua xe / Arcade",
    developer: "Gameloft",
    price: "Miễn phí",
    accentColor: "#f5a623",

    heroImage:
      "https://upload.wikimedia.org/wikipedia/vi/8/87/Asphalt_8_Airborne_open_screenshot.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/vi/8/87/Asphalt_8_Airborne_open_screenshot.jpg",
    ],

    tagline: "Bay lên, đua xuống — Vật lý không còn là rào cản.",

    description: `
    <p><span class="hl">Asphalt 8: Airborne</span> là tựa game đua xe arcade đình đám với những pha bứt tốc, nhào lộn và drift mãn nhãn trên các đường đua khắp thế giới.</p>

    <p>Quên đi vật lý thực tế — ở đây, xe có thể bay qua dốc, lộn nhào trên không và vẫn về đích trước đối thủ.</p>

    <ul>
      <li><span class="hl">300+ siêu xe</span> có bản quyền từ các thương hiệu hàng đầu.</li>
      <li><span class="hl">Nitro System</span> với các chiêu drift và bay đặc trưng.</li>
      <li><span class="hl">Multiplayer Online</span> tám người cùng lúc.</li>
      <li><span class="hl">40+ đường đua</span> tại những địa danh nổi tiếng thế giới.</li>
    </ul>

    <p>Đây là điểm khởi đầu hoàn hảo cho bất kỳ ai mới bước vào thế giới game đua xe.</p>
  `,

    features: [
      "Hoàn toàn miễn phí",
      "300+ xe có bản quyền",
      "Online Multiplayer",
      "Cập nhật nội dung liên tục",
      "Không cần tài khoản Steam",
    ],

    specs: {
      min: [
        ["Nền tảng", "Android / iOS / Windows"],
        ["RAM", "2 GB"],
        ["Dung lượng", "1.5 GB"],
        ["Kết nối", "Internet ổn định"],
      ],
      rec: [
        ["Nền tảng", "Android / iOS mới nhất"],
        ["RAM", "4 GB"],
        ["Dung lượng", "2 GB"],
        ["Kết nối", "WiFi hoặc 4G/5G"],
      ],
    },
  },

  trackmaniacturbo: {
    id: "trackmaniacturbo",
    name: "Trackmania® Turbo",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Đua xe / Arcade",
    developer: "Ubisoft Nadeo",
    price: "264.000đ",
    accentColor: "#f7c948",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/375900/header.jpg?t=1680016593",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/375900/header.jpg?t=1680016593",
    ],

    tagline:
      "Những đường đua điên rồ nhất từ trước đến nay — Bạn dám thử không?",

    description: `
    <p><span class="hl">Trackmania Turbo</span> là game đua xe arcade với những đường đua vật lý bất chấp mọi quy luật — vòng lặp thẳng đứng, nhảy qua vực thẳm, trần nhà đảo ngược...</p>

    <p>Tốc độ phản xạ và trí nhớ đường đua là tất cả những gì bạn cần để chinh phục những track huyền thoại này.</p>

    <ul>
      <li><span class="hl">200 đường đua chính thức</span> trong 4 môi trường khác nhau.</li>
      <li><span class="hl">Track Editor</span> — tự tạo đường đua và chia sẻ cộng đồng.</li>
      <li><span class="hl">200 người Online</span> đua cùng lúc trong một phòng.</li>
      <li><span class="hl">Double Driver</span> — hai người điều khiển một xe.</li>
    </ul>

    <p>Đơn giản để học, nhưng cực kỳ khó để thành thạo — đây là bản chất của Trackmania.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Bàn giao kèm Email",
      "Track Editor & Workshop",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 7 64-bit"],
        ["Vi xử lý", "Intel Core 2 Duo E6600"],
        ["RAM", "2 GB"],
        ["Card đồ họa", "GTX 260"],
        ["DirectX", "11"],
        ["Dung lượng", "18 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i7 2600"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 970"],
        ["DirectX", "11"],
        ["Dung lượng", "18 GB SSD"],
      ],
    },
  },

  assettocorsacomp: {
    id: "assettocorsacomp",
    name: "Assetto Corsa Competizione",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Đua xe / Sim Racing GT",
    developer: "Kunos Simulazioni",
    price: "460.000đ",
    accentColor: "#00b4d8",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/805550/header.jpg?t=1766404577",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/805550/header.jpg?t=1766404577",
    ],

    tagline: "GT World Challenge chính thức — Đua xe GT3 đỉnh cao nhất.",

    description: `
    <p><span class="hl">Assetto Corsa Competizione</span> là game sim racing chính thức của giải GT World Challenge, mang đến trải nghiệm lái xe GT3 chân thực đến mức các tay đua chuyên nghiệp cũng sử dụng để luyện tập.</p>

    <p>Được xây dựng trên Unreal Engine 4 với vật lý mô phỏng chi tiết từng đặc tính lốp, nhiệt độ và hành vi khí động học.</p>

    <ul>
      <li><span class="hl">Xe GT3 & GT4 chính thức</span> được cấp phép từ các nhà sản xuất.</li>
      <li><span class="hl">Laser-scanned circuits</span> — đường đua tái tạo từ dữ liệu thực tế.</li>
      <li><span class="hl">Mô phỏng thời tiết & đêm ngày</span> ảnh hưởng đến lốp và xử lý xe.</li>
      <li><span class="hl">Multiplayer rating system</span> theo chuẩn esport.</li>
    </ul>

    <p>Đây là lựa chọn số một của cộng đồng sim racing GT toàn cầu.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Game GT chính thức",
      "Hỗ trợ vô lăng đua xe",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10"],
        ["Vi xử lý", "Intel Core i5-8600"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "GTX 1070"],
        ["DirectX", "11"],
        ["Dung lượng", "55 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10/11"],
        ["Vi xử lý", "Intel Core i7-9700K"],
        ["RAM", "32 GB"],
        ["Card đồ họa", "RTX 2080"],
        ["DirectX", "11"],
        ["Dung lượng", "55 GB SSD"],
      ],
    },
  },

  gridautosport: {
    id: "gridautosport",
    name: "GRID Autosport",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Đua xe / Racing",
    developer: "Codemasters",
    price: "361.000đ",
    accentColor: "#e63946",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/255220/header.jpg?t=1593617496",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/255220/header.jpg?t=1593617496",
    ],

    tagline: "Năm thể loại đua — Một sự nghiệp duy nhất.",

    description: `
    <p><span class="hl">GRID Autosport</span> là game đua xe toàn diện nhất của Codemasters, gộp tất cả các phong cách đua xe vào một tựa game duy nhất với sự nghiệp career mode đầy đủ.</p>

    <p>Từ Touring Car đến Open Wheel, từ Endurance đến Tuner — không có giới hạn nào cho những tay đua thực thụ.</p>

    <ul>
      <li><span class="hl">5 ngành đua</span>: Touring, Endurance, Open Wheel, Tuner, Street.</li>
      <li><span class="hl">100+ xe</span> từ nhiều thương hiệu nổi tiếng.</li>
      <li><span class="hl">Career mode</span> với hệ thống đồng đội và đội đua riêng.</li>
      <li><span class="hl">Online Multiplayer</span> cho đến 12 người.</li>
    </ul>

    <p>GRID Autosport là định nghĩa hoàn chỉnh nhất của thể loại racing game.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Bàn giao kèm Email",
      "Online Multiplayer đầy đủ",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows Vista 64-bit"],
        ["Vi xử lý", "Intel Core 2 Duo"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "ATI HD5770 / Nvidia GTX 460"],
        ["DirectX", "11"],
        ["Dung lượng", "22 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i5"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 680"],
        ["DirectX", "11"],
        ["Dung lượng", "22 GB SSD"],
      ],
    },
  },

  trackmania2valley: {
    id: "trackmania2valley",
    name: "TrackMania² Valley",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Đua xe / Arcade",
    developer: "Ubisoft Nadeo",
    price: "330.000đ",
    accentColor: "#2d6a4f",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/243360/header.jpg?t=1680016531",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/243360/header.jpg?t=1680016531",
    ],

    tagline:
      "Những con đường núi gập ghềnh — Và chiếc xe không bao giờ chịu dừng lại.",

    description: `
    <p><span class="hl">TrackMania² Valley</span> đưa bạn đến những con đường đua uốn lượn qua những thung lũng và đồi núi xanh tươi, nơi kiểm soát xe ở tốc độ cao là tất cả kỹ năng bạn cần.</p>

    <p>Đây là môi trường có cảm giác lái độc đáo nhất trong series TrackMania — xe phản ứng linh hoạt và bay bổng trên từng khúc cua hiểm trở.</p>

    <ul>
      <li><span class="hl">Môi trường Valley</span> — đường núi, rừng cây và cầu vượt ngoạn mục.</li>
      <li><span class="hl">ManiaPlanet</span> — cộng đồng chia sẻ track lớn mạnh.</li>
      <li><span class="hl">Time Attack mode</span> đua với chính bản thân qua từng lần.</li>
      <li><span class="hl">Track Editor</span> tạo đường đua chia sẻ cộng đồng.</li>
    </ul>

    <p>Với cộng đồng TM lâu năm và vô số track fan-made, nội dung ở đây gần như vô tận.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Bàn giao kèm Email",
      "Track Editor & Workshop",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows Vista 64-bit"],
        ["Vi xử lý", "Intel Core 2 Duo E4500"],
        ["RAM", "2 GB"],
        ["Card đồ họa", "GeForce 8800 / HD 3870"],
        ["DirectX", "9.0"],
        ["Dung lượng", "10 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i5"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "GTX 560"],
        ["DirectX", "11"],
        ["Dung lượng", "10 GB SSD"],
      ],
    },
  },

  burnoutparadise: {
    id: "burnoutparadise",
    name: "Burnout™ Paradise Remastered",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Đua xe / Thế giới mở",
    developer: "Criterion Games",
    price: "490.000đ",
    accentColor: "#ff6b00",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1238080/header.jpg?t=1777392081",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1238080/header.jpg?t=1777392081",
    ],

    tagline: "Tự do tuyệt đối — Paradise City không có luật, chỉ có tốc độ.",

    description: `
    <p><span class="hl">Burnout Paradise Remastered</span> là bản tái sinh hoàn hảo của tượng đài đua xe thế giới mở, nơi toàn bộ thành phố Paradise City là sân chơi không giới hạn của bạn.</p>

    <p>Lao vào giao lộ, gây tai nạn có chủ đích, hay dẫn đầu đoàn đua hàng trăm km — mọi thứ đều được phép ở đây.</p>

    <ul>
      <li><span class="hl">Thế giới mở Paradise City</span> rộng lớn, khám phá tự do.</li>
      <li><span class="hl">Crash Mode</span> huyền thoại — gây tai nạn để ghi điểm.</li>
      <li><span class="hl">Online Multiplayer</span> cho đến 8 người cùng thành phố.</li>
      <li><span class="hl">Remastered 4K</span> — đồ họa nâng cấp hoàn toàn.</li>
    </ul>

    <p>Một trong những game đua xe được yêu thích nhất mọi thời đại, nay còn đẹp hơn bao giờ hết.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Bàn giao kèm Email",
      "Đồ họa 4K Remastered",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i5-4430"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 660"],
        ["DirectX", "11"],
        ["Dung lượng", "18 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i7-3770"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "GTX 1060"],
        ["DirectX", "11"],
        ["Dung lượng", "18 GB SSD"],
      ],
    },
  },

  sonicracingcrossworlds: {
    id: "sonicracingcrossworlds",
    name: "Sonic Racing: CrossWorlds",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Đua xe / Arcade",
    developer: "Sega",
    price: "1.020.000đ",
    accentColor: "#006fcc",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2486820/a5720c156c0cfbfaa11c2a5037ca414f0640f522/header_alt_assets_7.jpg?t=1777437605",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2486820/a5720c156c0cfbfaa11c2a5037ca414f0640f522/header_alt_assets_7.jpg?t=1777437605",
    ],

    tagline:
      "Sonic tăng tốc vượt mọi chiều không gian — Không ai đua được với nhím xanh.",

    description: `
    <p><span class="hl">Sonic Racing: CrossWorlds</span> là tựa game đua xe arcade mới nhất trong vũ trụ Sonic, nơi các nhân vật huyền thoại của Sega lao qua những đường đua xuyên nhiều thế giới khác nhau.</p>

    <p>Kết hợp giữa tốc độ điên cuồng đặc trưng của Sonic với những cơ chế đua xe sáng tạo và đa dạng về môi trường.</p>

    <ul>
      <li><span class="hl">CrossWorlds Racing</span> — đường đua trải dài qua nhiều chiều không gian.</li>
      <li><span class="hl">Team mechanics</span> — hợp tác với đồng đội để khuếch đại sức mạnh.</li>
      <li><span class="hl">Dàn nhân vật Sonic</span> với kỹ năng và xe đặc trưng riêng.</li>
      <li><span class="hl">Online Multiplayer</span> và chế độ local co-op.</li>
    </ul>

    <p>Tựa game hoàn hảo cho fan Sonic và những ai yêu thích đua xe arcade sôi động.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Bàn giao kèm Email",
      "Online & Local Multiplayer",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i5-8400"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 1060 6GB"],
        ["DirectX", "12"],
        ["Dung lượng", "30 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 11"],
        ["Vi xử lý", "Intel Core i7-10700"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "RTX 2070"],
        ["DirectX", "12"],
        ["Dung lượng", "30 GB SSD"],
      ],
    },
  },

  realracing3: {
    id: "realracing3",
    name: "Real Racing 3",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Đua xe / Mobile Racing",
    developer: "Electronic Arts",
    price: "288.000đ",
    accentColor: "#e63946",

    heroImage:
      "https://upload.wikimedia.org/wikipedia/en/5/5d/Real_Racing_3.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/en/5/5d/Real_Racing_3.jpg",
    ],

    tagline:
      "Siêu xe thật, đường đua thật — Cảm giác thật ngay trên màn hình của bạn.",

    description: `
    <p><span class="hl">Real Racing 3</span> là tựa game đua xe di động với tiêu chuẩn đồ họa và bản quyền xe hàng đầu trong thể loại mobile racing.</p>

    <p>Với hơn 250 chiếc xe được cấp phép chính thức và các đường đua thực tế nổi tiếng thế giới, đây là trải nghiệm đua xe chân thực nhất trên thiết bị di động.</p>

    <ul>
      <li><span class="hl">250+ xe bản quyền</span> từ Ferrari, Lamborghini, McLaren và nhiều hãng khác.</li>
      <li><span class="hl">Đường đua thực tế</span> bao gồm Le Mans, Silverstone và nhiều nơi khác.</li>
      <li><span class="hl">Time-shifted Multiplayer</span> — đua với ghost của bạn bè.</li>
      <li><span class="hl">Vật lý xe thực tế</span> mô phỏng chính xác từng mẫu xe.</li>
    </ul>

    <p>Tựa game đua xe mobile đã định nghĩa lại tiêu chuẩn của cả thể loại.</p>
  `,

    features: [
      "Tài khoản bản quyền",
      "250+ xe có bản quyền",
      "Bàn giao kèm Email",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Nền tảng", "Android / iOS"],
        ["RAM", "2 GB"],
        ["Dung lượng", "1 GB"],
        ["Kết nối", "Internet ổn định"],
      ],
      rec: [
        ["Nền tảng", "Android / iOS mới nhất"],
        ["RAM", "4 GB"],
        ["Dung lượng", "2 GB"],
        ["Kết nối", "WiFi hoặc 4G/5G"],
      ],
    },
  },

  hotshotracing: {
    id: "hotshotracing",
    name: "Hotshot Racing",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Đua xe / Arcade Retro",
    developer: "Lucky Mountain Games",
    price: "188.000đ",
    accentColor: "#f77f00",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/609920/header.jpg?t=1753707980",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/609920/header.jpg?t=1753707980",
    ],

    tagline: "Tốc độ cổ điển — Cảm giác arcade xưa nay sống lại.",

    description: `
    <p><span class="hl">Hotshot Racing</span> là bức thư tình gửi đến thời hoàng kim của game đua xe arcade thập niên 90, với phong cách low-poly đặc trưng và gameplay cực kỳ sảng khoái.</p>

    <p>Đây là trải nghiệm thuần arcade: tốc độ cao, drift mượt mà, không cần quan tâm đến vật lý phức tạp.</p>

    <ul>
      <li><span class="hl">Phong cách retro low-poly</span> đầy màu sắc và năng lượng.</li>
      <li><span class="hl">Grand Prix, Elimination, Time Trial</span> — nhiều chế độ đua.</li>
      <li><span class="hl">8 nhân vật</span> với xe và lịch sử riêng.</li>
      <li><span class="hl">Local & Online Multiplayer</span> cho đến 8 người.</li>
    </ul>

    <p>Chơi một mình hay cùng bạn bè — Hotshot Racing đảm bảo niềm vui thuần túy mỗi lần ngồi vào.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Bàn giao kèm Email",
      "Local & Online Multiplayer",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10"],
        ["Vi xử lý", "Intel Core i3-6100"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 950"],
        ["DirectX", "11"],
        ["Dung lượng", "5 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10/11"],
        ["Vi xử lý", "Intel Core i5-8400"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "GTX 1060"],
        ["DirectX", "11"],
        ["Dung lượng", "5 GB SSD"],
      ],
    },
  },

  forzamotorsport: {
    id: "forzamotorsport",
    name: "Forza Motorsport",
    subtitle: "Tài Khoản Microsoft / Steam + Mail",
    genre: "Đua xe / Mô phỏng",
    developer: "Turn 10 Studios",
    price: "1.290.000đ",
    accentColor: "#c0392b",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2440510/header.jpg?t=1747073895",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2440510/header.jpg?t=1747073895",
    ],

    tagline:
      "Đỉnh cao của đua xe mô phỏng — Từng vòng đua là một bài học hoàn hảo.",

    description: `
    <p><span class="hl">Forza Motorsport</span> (2023) là sự tái sinh của dòng game đua xe sim racing hàng đầu thế giới từ Turn 10, xây dựng lại hoàn toàn từ nền tảng với vật lý xe tiên tiến nhất từ trước đến nay.</p>

    <p>Mỗi chiếc xe được mô phỏng với hơn 300 thông số vật lý riêng biệt, từ hành vi lốp đến phân phối trọng lượng.</p>

    <ul>
      <li><span class="hl">500+ xe</span> được mô phỏng chi tiết với vật lý thế hệ mới.</li>
      <li><span class="hl">Car Mastery System</span> — phát triển và học thuộc từng chiếc xe.</li>
      <li><span class="hl">Dynamic Track Surface</span> — đường đua thay đổi theo từng vòng đua.</li>
      <li><span class="hl">Online Multiplayer</span> với hệ thống xếp hạng chuyên nghiệp.</li>
    </ul>

    <p>Forza Motorsport 2023 là chuẩn mực mới của sim racing trên PC và Xbox.</p>
  `,

    features: [
      "Tài khoản bản quyền",
      "Online Multiplayer đầy đủ",
      "Bàn giao kèm Email",
      "Cross-platform Xbox/PC",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Ryzen 5 1600X / Core i7-3820"],
        ["RAM", "12 GB"],
        ["Card đồ họa", "RX 5500 XT / GTX 1060"],
        ["DirectX", "12"],
        ["Dung lượng", "100 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 11"],
        ["Vi xử lý", "Ryzen 5 5600X / Core i5-12600K"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "RX 6800 XT / RTX 3080"],
        ["DirectX", "12"],
        ["Dung lượng", "100 GB SSD"],
      ],
    },
  },

  wrcgenerations: {
    id: "wrcgenerations",
    name: "WRC Generations – The FIA WRC Official Game",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Đua xe / Rally",
    developer: "KT Racing",
    price: "420.000đ",
    accentColor: "#e63946",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1953520/header.jpg?t=1764149287",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1953520/header.jpg?t=1764149287",
    ],

    tagline: "Rally chính thức FIA WRC — Bùn, đá và tốc độ không lồng được.",

    description: `
    <p><span class="hl">WRC Generations</span> là tựa game rally chính thức cuối cùng của KT Racing với bản quyền FIA WRC, đánh dấu sự kết thúc của một kỷ nguyên trước khi EA Sports tiếp quản thương hiệu.</p>

    <p>Đây là bản hoàn thiện nhất của dòng game WRC, với nội dung phong phú và mô phỏng rally xe hybrid lần đầu tiên.</p>

    <ul>
      <li><span class="hl">Xe Hybrid Rally1</span> — lần đầu tiên trong lịch sử game rally.</li>
      <li><span class="hl">WRC, WRC2, Junior WRC</span> — đầy đủ các hạng đấu chính thức.</li>
      <li><span class="hl">Club Online</span> — thành lập câu lạc bộ và thi đấu cùng bạn bè.</li>
      <li><span class="hl">Roadbook kỹ thuật</span> — co-driver và ghi chú đường đua thực tế.</li>
    </ul>

    <p>Lựa chọn rally hoàn hảo cho những ai muốn trải nghiệm đua xe địa hình chân thực.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Bản quyền FIA WRC chính thức",
      "Bàn giao kèm Email",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i5-4460"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 970 / RX 480"],
        ["DirectX", "11"],
        ["Dung lượng", "50 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10/11"],
        ["Vi xử lý", "Ryzen 5 3600 / Core i5-9600"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "RTX 2070 / RX 5700 XT"],
        ["DirectX", "12"],
        ["Dung lượng", "50 GB SSD"],
      ],
    },
  },

  dirtrally2: {
    id: "dirtrally2",
    name: "DiRT Rally 2.0",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Đua xe / Rally Mô phỏng",
    developer: "Codemasters",
    price: "220.000đ",
    accentColor: "#e63946",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/690790/header.jpg?t=1777396417",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/690790/header.jpg?t=1777396417",
    ],

    tagline:
      "Rally không khoan nhượng — Một sai lầm nhỏ, cả chặng đua tiêu tan.",

    description: `
    <p><span class="hl">DiRT Rally 2.0</span> là tựa game rally mô phỏng khắc nghiệt và chân thực nhất của Codemasters, được cộng đồng sim racing đánh giá là tiêu chuẩn vàng của thể loại rally.</p>

    <p>Mỗi con đường đất, mỗi khúc cua mù và mỗi vũng bùn đều đòi hỏi sự tập trung tuyệt đối — không có chỗ cho sai lầm.</p>

    <ul>
      <li><span class="hl">Vật lý rally chi tiết</span> — cảm nhận từng loại bề mặt đường.</li>
      <li><span class="hl">6 quốc gia</span> với địa hình và thời tiết khác nhau.</li>
      <li><span class="hl">FIA WRC & Rallycross</span> — hai phong cách đua trong một game.</li>
      <li><span class="hl">Car damage system</span> — hư hỏng ảnh hưởng trực tiếp đến hiệu năng.</li>
    </ul>

    <p>Nếu bạn nghiêm túc về rally, DiRT Rally 2.0 là điểm đến không thể bỏ qua.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Bàn giao kèm Email",
      "Hỗ trợ vô lăng đua xe",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 7 64-bit"],
        ["Vi xử lý", "Intel Core i5-2300"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 680 / R9 280X"],
        ["DirectX", "11"],
        ["Dung lượng", "60 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i7-6700K"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "GTX 1080"],
        ["DirectX", "11"],
        ["Dung lượng", "60 GB SSD"],
      ],
    },
  },

  needforspeedheat: {
    id: "needforspeedheat",
    name: "Need for Speed™ Heat",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Đua xe / Thế giới mở",
    developer: "Ghost Games / EA",
    price: "1.650.000đ",
    accentColor: "#ff4500",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222680/header.jpg?t=1777414224",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222680/header.jpg?t=1777414224",
    ],

    tagline: "Ban ngày kiếm tiền, ban đêm đánh cược tất cả.",

    description: `
    <p><span class="hl">Need for Speed Heat</span> đưa bạn đến Palm City rực rỡ, nơi ban ngày bạn tham gia các giải đua hợp pháp để kiếm tiền, còn ban đêm là thế giới của những cuộc đua bất hợp pháp với cảnh sát rượt đuổi gay cấn.</p>

    <p>Hệ thống ngày/đêm tạo ra hai phong cách chơi hoàn toàn khác biệt, mang lại sự đa dạng hiếm có trong thể loại đua xe thế giới mở.</p>

    <ul>
      <li><span class="hl">Hệ thống Ngày/Đêm</span> với cơ chế và phần thưởng khác nhau.</li>
      <li><span class="hl">Tùy chỉnh xe sâu rộng</span> — cả ngoại hình lẫn hiệu năng.</li>
      <li><span class="hl">Police Chase</span> căng thẳng với AI cảnh sát thông minh.</li>
      <li><span class="hl">Online Co-op & Multiplayer</span> trong thế giới mở.</li>
    </ul>

    <p>NFS Heat là sự trở lại đúng nghĩa của series đua xe huyền thoại — phong cách, tốc độ và nguy hiểm.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Bàn giao kèm Email",
      "Online Multiplayer đầy đủ",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i5-3570"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 760 / R9 270"],
        ["DirectX", "11"],
        ["Dung lượng", "50 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i7-4790"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "GTX 1080"],
        ["DirectX", "11"],
        ["Dung lượng", "50 GB SSD"],
      ],
    },
  },

  forzahorizon4: {
    id: "forzahorizon4",
    name: "Forza Horizon 4",
    subtitle: "Tài Khoản Microsoft / Steam + Mail",
    genre: "Đua xe / Thế giới mở",
    developer: "Playground Games",
    price: "1.300.000đ",
    accentColor: "#3a86ff",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1293830/header.jpg?t=1734336342",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1293830/header.jpg?t=1734336342",
    ],

    tagline: "Bốn mùa. Một nước Anh. Vô số con đường để chinh phục.",

    description: `
    <p><span class="hl">Forza Horizon 4</span> đưa bạn đến nước Anh tuyệt đẹp với hệ thống thời tiết bốn mùa thay đổi theo tuần — mỗi mùa mang đến đường đua, thử thách và cảm giác lái hoàn toàn khác biệt.</p>

    <p>Mùa xuân mưa nhẹ, mùa hè nắng vàng, mùa thu lá rơi và mùa đông tuyết phủ — thế giới Forza Horizon 4 chưa bao giờ nhàm chán.</p>

    <ul>
      <li><span class="hl">Dynamic Seasons</span> — thế giới thay đổi mỗi tuần thực tế.</li>
      <li><span class="hl">450+ xe</span> từ các thương hiệu danh tiếng nhất thế giới.</li>
      <li><span class="hl">Online Shared World</span> — cùng tồn tại với hàng trăm người chơi.</li>
      <li><span class="hl">Horizon Life</span> — sự kiện và thử thách mới liên tục mỗi tuần.</li>
    </ul>

    <p>Forza Horizon 4 vẫn là một trong những game đua xe được yêu thích nhất mọi thời đại.</p>
  `,

    features: [
      "Tài khoản bản quyền",
      "Online đầy đủ",
      "Cross-platform Xbox/PC",
      "Bàn giao kèm Email",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i5-4460"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 970 / AMD R9 290X"],
        ["DirectX", "12"],
        ["Dung lượng", "80 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10/11"],
        ["Vi xử lý", "Intel Core i7-8700"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "RTX 2080"],
        ["DirectX", "12"],
        ["Dung lượng", "80 GB SSD"],
      ],
    },
  },

  forzahorizon5: {
    id: "forzahorizon5",
    name: "Forza Horizon 5",
    subtitle: "Tài Khoản Microsoft / Steam + Mail",
    genre: "Đua xe / Thế giới mở",
    developer: "Playground Games",
    price: "1.360.000đ",
    accentColor: "#e63946",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg?t=1746471508",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg?t=1746471508",
    ],

    tagline: "Mexico rực lửa — Bản đồ đẹp nhất trong lịch sử Forza Horizon.",

    description: `
    <p><span class="hl">Forza Horizon 5</span> đưa series Horizon đến đỉnh cao với bản đồ Mexico đa dạng nhất từ trước đến nay — từ núi lửa, rừng nhiệt đới, bờ biển đến sa mạc khô cằn trong cùng một thế giới.</p>

    <p>Được đánh giá là game đua xe đẹp nhất trên PC, FH5 còn sở hữu cộng đồng và nội dung cập nhật liên tục.</p>

    <ul>
      <li><span class="hl">Bản đồ Mexico</span> với 11 biome địa hình hoàn toàn khác biệt.</li>
      <li><span class="hl">500+ xe</span> bao gồm cả xe điện và siêu xe mới nhất.</li>
      <li><span class="hl">EventLab</span> — tự tạo thử thách và chia sẻ cộng đồng.</li>
      <li><span class="hl">Accessibility features</span> hàng đầu ngành — chơi được dù mọi trình độ.</li>
    </ul>

    <p>Forza Horizon 5 không chỉ là game đua xe — đây là một thế giới sống động bạn muốn khám phá mãi.</p>
  `,

    features: [
      "Tài khoản bản quyền",
      "Online đầy đủ",
      "Cross-platform Xbox/PC",
      "Bàn giao kèm Email",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i5-4460"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 970 / AMD RX 470"],
        ["DirectX", "12"],
        ["Dung lượng", "110 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10/11"],
        ["Vi xử lý", "Intel Core i7-8700K"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "RTX 2070 Super"],
        ["DirectX", "12"],
        ["Dung lượng", "110 GB SSD"],
      ],
    },
  },

  assettocorsa: {
    id: "assettocorsa",
    name: "Assetto Corsa",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Đua xe / Sim Racing",
    developer: "Kunos Simulazioni",
    price: "260.000đ",
    accentColor: "#ffffff",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/244210/header.jpg?t=1754985171",
    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/244210/header.jpg?t=1754985171",
    ],

    tagline: "Chuẩn mực vàng của sim racing — Nơi vật lý xe là tôn giáo.",

    description: `
    <p><span class="hl">Assetto Corsa</span> là tựa game sim racing huyền thoại từ Kunos Simulazioni, được hàng triệu người trong cộng đồng đua xe xem là tiêu chuẩn vàng cho cảm giác lái chân thực.</p>

    <p>Với mod support khổng lồ từ cộng đồng, Assetto Corsa có thực tế nội dung gần như vô tận — từ xe thể thao hiện đại đến xe đua lịch sử cổ điển.</p>

    <ul>
      <li><span class="hl">Vật lý tire model tiên tiến</span> — mô phỏng hành vi lốp chi tiết nhất.</li>
      <li><span class="hl">Laser-scanned circuits</span> từ dữ liệu thực tế.</li>
      <li><span class="hl">Mod support</span> khổng lồ — hàng nghìn xe và đường đua từ cộng đồng.</li>
      <li><span class="hl">VR support</span> với độ trầm immersive cao.</li>
    </ul>

    <p>Nếu bạn chỉ mua một game sim racing, Assetto Corsa là câu trả lời không cần bàn cãi.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Mod community khổng lồ",
      "Hỗ trợ VR & vô lăng",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows Vista SP2"],
        ["Vi xử lý", "AMD Athlon 64 X2 5000+"],
        ["RAM", "2 GB"],
        ["Card đồ họa", "GeForce GT 430"],
        ["DirectX", "10"],
        ["Dung lượng", "25 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i5 / i7"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 780 / R9 290"],
        ["DirectX", "11"],
        ["Dung lượng", "25 GB SSD"],
      ],
    },
  },

  // ==================== NHẬP VAI ====================

  sekiro: {
    id: "sekiro",
    name: "Sekiro: Shadows Die Twice",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Nhập vai / Hành động Nhật Bản",
    developer: "FromSoftware",
    price: "300.000đ",
    accentColor: "#c0392b",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg?t=1762888662",
    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg?t=1762888662",
    ],

    tagline: "Chết đi. Sống lại. Mạnh hơn. — Nhưng không phải lần này.",

    description: `
    <p><span class="hl">Sekiro: Shadows Die Twice</span> là kiệt tác hành động của FromSoftware đưa bạn vào vai Người Sói — một shinobi tàn phế thề trả thù và giải cứu chủ nhân của mình trong bối cảnh Nhật Bản thời Sengoku.</p>

    <p>Không giống bất kỳ game FromSoftware nào khác, Sekiro tập trung hoàn toàn vào hệ thống chiến đấu kiếm thuật với cơ chế Posture độc đáo — nghệ thuật đỡ đòn, phản công và tấn công thần tốc.</p>

    <ul>
      <li><span class="hl">Posture System</span> — đỡ đòn và phá vỡ tư thế kẻ địch thay vì mài HP.</li>
      <li><span class="hl">Shinobi Prosthetic</span> — cánh tay giả với vũ khí bí mật đa dạng.</li>
      <li><span class="hl">Nghệ thuật chiến đấu Shinabi</span> — bí kỹ, đòn đánh đặc biệt.</li>
      <li><span class="hl">Thế giới Nhật Bản cổ đại</span> đầy bí ẩn và hiểm nguy.</li>
    </ul>

    <p>Sekiro là thử thách khắc nghiệt nhất và cũng là phần thưởng ngọt ngào nhất mà gaming có thể trao cho bạn.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Bàn giao kèm Email",
      "GOTY 2019 — Game of the Year",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 7 64-bit"],
        ["Vi xử lý", "Intel Core i3-2100"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "GTX 760 / AMD Radeon HD 7950"],
        ["DirectX", "11"],
        ["Dung lượng", "25 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i7-7700K"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 1070 8GB / AMD RX 5500 XT"],
        ["DirectX", "12"],
        ["Dung lượng", "25 GB SSD"],
      ],
    },
  },

  witcher3: {
    id: "witcher3",
    name: "The Witcher 3: Wild Hunt",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Nhập vai / Open World",
    developer: "CD Projekt RED",
    price: "400.000đ",
    accentColor: "#c9a84c",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ad9240e088f953a84aee814034c50a6a92bf4516/header.jpg?t=1768303991",
    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ad9240e088f953a84aee814034c50a6a92bf4516/header.jpg?t=1768303991",
    ],

    tagline: "Không có người tốt hay kẻ xấu — Chỉ có lựa chọn và hậu quả.",

    description: `
    <p><span class="hl">The Witcher 3: Wild Hunt</span> là một trong những RPG vĩ đại nhất lịch sử gaming, nơi mỗi quyết định của bạn đều thực sự thay đổi thế giới xung quanh.</p>

    <p>Bạn vào vai Geralt of Rivia — thợ săn quái vật chuyên nghiệp đang tìm kiếm con gái đỡ đầu trong một châu lục đang bị chiến tranh và quái vật tàn phá.</p>

    <ul>
      <li><span class="hl">Thế giới mở khổng lồ</span> với hàng trăm giờ nội dung chất lượng.</li>
      <li><span class="hl">Hệ thống lựa chọn</span> ảnh hưởng thực sự đến kết cục câu chuyện.</li>
      <li><span class="hl">Side quests chất lượng AAA</span> — không thua kém cốt truyện chính.</li>
      <li><span class="hl">2 DLC đồ sộ</span>: Hearts of Stone và Blood & Wine.</li>
    </ul>

    <p>Bạn có thể tốn 200+ giờ trong thế giới này mà vẫn chưa thấy đủ.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Bao gồm 2 DLC lớn",
      "Bàn giao kèm Email",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 7 64-bit"],
        ["Vi xử lý", "Intel Core i5-2500K"],
        ["RAM", "6 GB"],
        ["Card đồ họa", "GTX 660 / AMD Radeon HD 7870"],
        ["DirectX", "11"],
        ["Dung lượng", "50 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i7-3770"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 770 / AMD Radeon RX 470"],
        ["DirectX", "11"],
        ["Dung lượng", "50 GB SSD"],
      ],
    },
  },

  minecraft: {
    id: "minecraft",
    name: "Minecraft",
    subtitle: "Tài Khoản Java/Bedrock Bản Quyền + Mail",
    genre: "Sandbox / Nhập vai",
    developer: "Mojang Studios",
    price: "300.000đ",
    accentColor: "#5d8a3c",

    heroImage:
      "https://store-images.s-microsoft.com/image/apps.21661.14216416494490173.9772fa78-5a01-45ce-9b9e-6ec61a10f4e2.f787fea4-1e7a-4458-a112-c5ac10fec5c0",
    images: [
      "https://store-images.s-microsoft.com/image/apps.21661.14216416494490173.9772fa78-5a01-45ce-9b9e-6ec61a10f4e2.f787fea4-1e7a-4458-a112-c5ac10fec5c0",
    ],

    tagline: "Không giới hạn. Không hướng dẫn. Chỉ có trí tưởng tượng của bạn.",

    description: `
    <p><span class="hl">Minecraft</span> là tựa game bán chạy nhất lịch sử — không phải vì nó hoàn hảo, mà vì nó cho bạn tự do tuyệt đối để tạo ra thứ hoàn hảo của riêng mình.</p>

    <p>Khai thác tài nguyên, xây dựng thế giới, sinh tồn qua đêm hay khám phá những chiều không gian bí ẩn — ở Minecraft, bạn là người đặt ra luật chơi.</p>

    <ul>
      <li><span class="hl">Survival Mode</span> — sinh tồn, xây dựng và chiến đấu với quái vật.</li>
      <li><span class="hl">Creative Mode</span> — xây dựng không giới hạn với toàn bộ tài nguyên.</li>
      <li><span class="hl">Multiplayer Server</span> — chơi cùng hàng triệu người trên toàn cầu.</li>
      <li><span class="hl">Mod & Marketplace</span> — mở rộng trải nghiệm vô tận.</li>
    </ul>

    <p>Từ trẻ em 6 tuổi đến kỹ sư xây dựng thành phố thu nhỏ — Minecraft dành cho tất cả mọi người.</p>
  `,

    features: [
      "Tài khoản Java / Bedrock bản quyền",
      "Multiplayer Server toàn cầu",
      "Bàn giao kèm Email",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10"],
        ["Vi xử lý", "Intel Core i3-3210"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "Intel HD 4000 / AMD Radeon HD 6450"],
        ["DirectX", "Không yêu cầu"],
        ["Dung lượng", "4 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10/11"],
        ["Vi xử lý", "Intel Core i5-4690"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 1060 / AMD RX 580"],
        ["DirectX", "11"],
        ["Dung lượng", "8 GB"],
      ],
    },
  },

  skyrim: {
    id: "skyrim",
    name: "The Elder Scrolls V Skyrim Special Edition",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Nhập vai / Open World Fantasy",
    developer: "Bethesda Game Studios",
    price: "500.000đ",
    accentColor: "#5c7a99",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/header.jpg?t=1753715778",
    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/header.jpg?t=1753715778",
    ],

    tagline:
      "FUS RO DAH — Số phận của cả thế giới nằm trong tiếng thét của bạn.",

    description: `
    <p><span class="hl">The Elder Scrolls V: Skyrim Special Edition</span> là huyền thoại RPG thế giới mở mà hơn một thập kỷ sau vẫn được hàng triệu người tiếp tục chơi mỗi ngày.</p>

    <p>Bạn là Dragonborn — người duy nhất có thể hấp thụ linh hồn rồng và sử dụng sức mạnh ngôn từ cổ đại để cứu Skyrim khỏi thảm họa tận thế.</p>

    <ul>
      <li><span class="hl">Thế giới Skyrim</span> rộng lớn với hàng trăm dungeon và hang động.</li>
      <li><span class="hl">Dragon Shouts</span> — sức mạnh ngôn từ cổ đại độc đáo.</li>
      <li><span class="hl">Hệ thống kỹ năng</span> tự do phát triển theo phong cách của bạn.</li>
      <li><span class="hl">Mod support khổng lồ</span> — hàng nghìn mod thay đổi hoàn toàn trải nghiệm.</li>
    </ul>

    <p>Với Special Edition remaster và kho mod vô tận, Skyrim của 2024 vẫn tốt hơn nhiều game RPG mới ra.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Special Edition Remastered",
      "Bàn giao kèm Email",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 7/8.1/10 64-bit"],
        ["Vi xử lý", "Intel Core i5-750"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 470 1GB / AMD HD 7870 2GB"],
        ["DirectX", "11"],
        ["Dung lượng", "12 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10/11 64-bit"],
        ["Vi xử lý", "Intel Core i5-6600K"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 780 3GB / AMD R9 290 4GB"],
        ["DirectX", "11"],
        ["Dung lượng", "12 GB SSD"],
      ],
    },
  },

  discoelysium: {
    id: "discoelysium",
    name: "Disco Elysium - The Final Cut",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Nhập vai / CRPG Triết học",
    developer: "ZA/UM",
    price: "495.000đ",
    accentColor: "#8338ec",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632470/header.jpg?t=1778854831",
    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632470/header.jpg?t=1778854831",
    ],

    tagline: "Bạn không nhớ mình là ai — Nhưng cả thành phố nhớ rất rõ.",

    description: `
    <p><span class="hl">Disco Elysium: The Final Cut</span> là trải nghiệm RPG không giống bất cứ thứ gì bạn từng chơi — một cuộc điều tra giết người biến thành cuộc khám phá triết học, chính trị và bản sắc bản thân sâu sắc nhất trong lịch sử game.</p>

    <p>Bạn là thám tử không tên, tỉnh dậy mà không nhớ gì cả — danh tính, quá khứ, thậm chí tên mình. Và rồi, chính những mảnh vỡ trong đầu bạn bắt đầu cất tiếng nói.</p>

    <ul>
      <li><span class="hl">24 kỹ năng nội tâm</span> — từng kỹ năng là một giọng nói trong đầu bạn.</li>
      <li><span class="hl">Không có chiến đấu</span> — mọi thứ được giải quyết qua đối thoại và lựa chọn.</li>
      <li><span class="hl">Thế giới Revachol</span> — thành phố hư cấu với chiều sâu văn hóa khổng lồ.</li>
      <li><span class="hl">Lồng tiếng hoàn chỉnh</span> trong The Final Cut.</li>
    </ul>

    <p>Disco Elysium không chỉ là game — đây là tác phẩm văn học tương tác thực thụ.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "The Final Cut — lồng tiếng đầy đủ",
      "Bàn giao kèm Email",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 7/8/10 64-bit"],
        ["Vi xử lý", "Intel Core i5 2.3GHz"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GeForce GTX 950"],
        ["DirectX", "11"],
        ["Dung lượng", "22 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i7 3.0GHz"],
        ["RAM", "12 GB"],
        ["Card đồ họa", "GeForce GTX 1060"],
        ["DirectX", "11"],
        ["Dung lượng", "22 GB SSD"],
      ],
    },
  },

  // ==================== BẮN SÚNG ====================

  valorant: {
    id: "valorant",
    name: "Valorant",
    subtitle: "Miễn phí",
    genre: "Bắn súng / Tactical Shooter",
    developer: "Riot Games",
    price: "Miễn phí",
    accentColor: "#ff4655",

    heroImage:
      "https://www.riotgames.com/darkroom/1200/1dbd7211e78ce5faa7a8af9d10afad47:2b5979e3922758399ba389561e797919/ps-f2p-val-console-launch-16x9.jpg",
    images: [
      "https://www.riotgames.com/darkroom/1200/1dbd7211e78ce5faa7a8af9d10afad47:2b5979e3922758399ba389561e797919/ps-f2p-val-console-launch-16x9.jpg",
    ],

    tagline: "5 vs 5. Một viên đạn thay đổi tất cả. Bạn có đủ bản lĩnh không?",

    description: `
    <p><span class="hl">Valorant</span> là tựa game tactical shooter 5v5 từ Riot Games — kết hợp độ chính xác cao của CS với năng lực đặc biệt của từng Agent.</p>

    <p>Mỗi pha đấu súng đều mang tính quyết định sinh tử, nhưng kỹ năng sử dụng Ability đúng lúc mới là thứ phân biệt người thắng và kẻ thua.</p>

    <ul>
      <li><span class="hl">25+ Agent</span> với kỹ năng độc đáo và vai trò chiến thuật riêng.</li>
      <li><span class="hl">Hit-registration chuẩn xác</span> — kỹ năng cầm súng là trên hết.</li>
      <li><span class="hl">Hệ thống xếp hạng</span> từ Iron đến Radiant.</li>
      <li><span class="hl">Map pool đa dạng</span> — mỗi bản đồ yêu cầu chiến thuật khác nhau.</li>
    </ul>

    <p>Hoàn toàn miễn phí và được cân bằng liên tục — Valorant xứng đáng là king của tactical shooter hiện tại.</p>
  `,

    features: [
      "Hoàn toàn miễn phí",
      "Cân bằng và cập nhật thường xuyên",
      "Esport scene cực lớn",
      "Anti-cheat Vanguard mạnh",
      "Không cần tài khoản Steam",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 7/8/10 64-bit"],
        ["Vi xử lý", "Intel Core 2 Duo E8400"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "Intel HD 4000"],
        ["DirectX", "11"],
        ["Dung lượng", "30 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i5-4460"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 1050 Ti"],
        ["DirectX", "11"],
        ["Dung lượng", "30 GB SSD"],
      ],
    },
  },

  r6siege: {
    id: "r6siege",
    name: "Tom Clancy's Rainbow Six Siege",
    subtitle: "Tài Khoản Ubisoft Bản Quyền + Mail",
    genre: "Bắn súng / Tactical Shooter",
    developer: "Ubisoft Montreal",
    price: "690.000đ",
    accentColor: "#f5a623",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/359550/97ce482d2a8ec5d2beb1081e954ac1ec16eea1fb/header_alt_assets_21.jpg?t=1779209046",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/359550/97ce482d2a8ec5d2beb1081e954ac1ec16eea1fb/header_alt_assets_21.jpg?t=1779209046",
    ],

    tagline: "Phá tường. Cài bẫy. Mỗi góc phòng đều là chiến trường.",

    description: `
    <p><span class="hl">Rainbow Six Siege</span> là tựa game tactical shooter độc đáo nhất trên thị trường, nơi việc phá hủy môi trường không phải tai nạn — đó là chiến thuật.</p>

    <p>Tấn công hay phòng thủ, mỗi pha đấu 5v5 là một bài toán chiến thuật bạn phải giải trong vòng chưa đầy 3 phút.</p>

    <ul>
      <li><span class="hl">60+ Operator</span> với gadget và kỹ năng độc quyền.</li>
      <li><span class="hl">Destruction System</span> — tường, sàn, trần đều có thể bị phá vỡ.</li>
      <li><span class="hl">Tactical depth</span> cực cao — học mãi không hết meta.</li>
      <li><span class="hl">Esport scene mạnh</span> với Six Invitational hàng năm.</li>
    </ul>

    <p>Một trong những game tactical shooter có chiều sâu chiến thuật cao nhất từng được tạo ra.</p>
  `,

    features: [
      "Tài khoản Ubisoft bản quyền",
      "Bàn giao kèm Email",
      "Online Multiplayer đầy đủ",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i3-560 / AMD Phenom II X4 945"],
        ["RAM", "6 GB"],
        ["Card đồ họa", "GTX 460 / AMD HD 5870"],
        ["DirectX", "11"],
        ["Dung lượng", "85 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10/11 64-bit"],
        ["Vi xử lý", "Intel Core i5-2500K"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 670 / AMD HD 7970"],
        ["DirectX", "11"],
        ["Dung lượng", "85 GB SSD"],
      ],
    },
  },

  overwatch2: {
    id: "overwatch2",
    name: "Overwatch® 2",
    subtitle: "Miễn phí",
    genre: "Bắn súng / Hero Shooter",
    developer: "Blizzard Entertainment",
    price: "Miễn phí",
    accentColor: "#fa9c1e",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/1f84e73b8095ab9f40b1bc2c81845330979afc09/header_alt_assets_20.jpg?t=1778610036",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/1f84e73b8095ab9f40b1bc2c81845330979afc09/header_alt_assets_20.jpg?t=1778610036",
    ],

    tagline:
      "Mỗi Hero một thế giới — Tìm ra phong cách chiến đấu của riêng bạn.",

    description: `
    <p><span class="hl">Overwatch 2</span> là game hero shooter đội nhóm từ Blizzard, nơi 35+ nhân vật với năng lực siêu nhiên đối đầu nhau trong những trận chiến 5v5 mãn nhãn.</p>

    <p>Từ Tracer bứt tốc xuyên không gian đến Ana chữa lành từ xa — mỗi hero là một phong cách chơi hoàn toàn khác biệt.</p>

    <ul>
      <li><span class="hl">35+ Hero</span> chia 3 vai trò: Tank, DPS, Support.</li>
      <li><span class="hl">PvP Ranked & Casual</span> với nhiều chế độ đa dạng.</li>
      <li><span class="hl">Season Pass</span> với nội dung cosmetic và hero mới liên tục.</li>
      <li><span class="hl">PvE Story Mode</span> khám phá lịch sử của từng hero.</li>
    </ul>

    <p>Hoàn toàn miễn phí và được cập nhật theo mùa — Overwatch 2 là sân chơi hero shooter dành cho tất cả mọi người.</p>
  `,

    features: [
      "Hoàn toàn miễn phí",
      "Cross-platform đầy đủ",
      "Season Pass với nội dung mới",
      "Cập nhật liên tục",
      "Không cần tài khoản Steam",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i3 / AMD Phenom X3"],
        ["RAM", "6 GB"],
        ["Card đồ họa", "NVIDIA GTX 600 / AMD HD 7000"],
        ["DirectX", "11"],
        ["Dung lượng", "50 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10/11 64-bit"],
        ["Vi xử lý", "Intel Core i7 / AMD Ryzen 5"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "NVIDIA GTX 1060 / AMD R9 380"],
        ["DirectX", "11"],
        ["Dung lượng", "50 GB SSD"],
      ],
    },
  },

  apexlegends: {
    id: "apexlegends",
    name: "Apex Legends™",
    subtitle: "Miễn phí",
    genre: "Bắn súng / Battle Royale",
    developer: "Respawn Entertainment",
    price: "Miễn phí",
    accentColor: "#da3e52",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172470/0bd74245b869287a2dc7f682e6013f7ed08d98e3/header.jpg?t=1778502442",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172470/0bd74245b869287a2dc7f682e6013f7ed08d98e3/header.jpg?t=1778502442",
    ],

    tagline: "Đội ba. Không để lại ai phía sau. Cuộc chiến cuối cùng bắt đầu.",

    description: `
    <p><span class="hl">Apex Legends</span> là tựa game battle royale hero-based từ Respawn — những người tạo ra Titanfall — với cơ chế di chuyển và chiến đấu mượt mà bậc nhất thể loại.</p>

    <p>Không chỉ bắn giỏi, ở Apex bạn còn cần chọn Legend phù hợp, phối hợp đội và đọc được từng tình huống chiến trường đang thay đổi liên tục.</p>

    <ul>
      <li><span class="hl">25+ Legend</span> với kỹ năng và lối chơi đặc trưng riêng.</li>
      <li><span class="hl">Ping System</span> — giao tiếp đội nhóm không cần mic.</li>
      <li><span class="hl">Respawn Mechanic</span> — hồi sinh đồng đội ngay trong trận.</li>
      <li><span class="hl">Ranked Mode</span> — leo rank từ Bronze đến Predator.</li>
    </ul>

    <p>Hoàn toàn miễn phí — nhảy vào ngay và cảm nhận battle royale đỉnh nhất hiện tại.</p>
  `,

    features: [
      "Hoàn toàn miễn phí",
      "Cross-platform PC/Console",
      "Season mới định kỳ",
      "Anti-cheat mạnh",
      "Không cần tài khoản Steam",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 7/8/10 64-bit"],
        ["Vi xử lý", "Intel Core i3-6300"],
        ["RAM", "6 GB"],
        ["Card đồ họa", "NVIDIA GTX 970 / AMD R9 290"],
        ["DirectX", "11"],
        ["Dung lượng", "56 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10/11 64-bit"],
        ["Vi xử lý", "Intel Core i5-3570K"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "NVIDIA GTX 1060 / AMD RX 580"],
        ["DirectX", "11"],
        ["Dung lượng", "56 GB SSD"],
      ],
    },
  },

  mafia: {
    id: "mafia",
    name: "Mafia: Definitive Edition",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Hành động / Bắn súng",
    developer: "Hangar 13 / 2K Games",
    price: "1.200.000đ",
    accentColor: "#c8a84b",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030840/header.jpg?t=1759852929",
    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030840/header.jpg?t=1759852929",
    ],

    tagline: "Lost Heaven, 1930 — Bạn không gia nhập mafia. Mafia chọn bạn.",

    description: `
    <p><span class="hl">Mafia: Definitive Edition</span> là bản làm lại hoàn toàn của tượng đài hành động tội phạm từ 2002, được xây dựng lại từ đầu với đồ họa hiện đại, lồng tiếng đầy đủ và cốt truyện được mở rộng đáng kể.</p>

    <p>Bạn là Tommy Angelo — tài xế taxi bình thường bỗng dưng bị cuốn vào thế giới tội ác hào hoa và nguy hiểm của mafia thành phố Lost Heaven thập niên 1930.</p>

    <ul>
      <li><span class="hl">Cốt truyện điện ảnh</span> — được viết lại và lồng tiếng hoàn chỉnh.</li>
      <li><span class="hl">Lost Heaven thập niên 30</span> — thành phố mở tái tạo đẹp mê hồn.</li>
      <li><span class="hl">Xe cổ điển</span> với vật lý lái xe đặc trưng thời đại.</li>
      <li><span class="hl">Gunplay & Cover System</span> được cải tiến hoàn toàn so với bản gốc.</li>
    </ul>

    <p>Một trong những câu chuyện hay nhất trong lịch sử gaming, nay còn trở nên hấp dẫn hơn bao giờ hết.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Remake hoàn toàn từ bản gốc 2002",
      "Bàn giao kèm Email",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i5-2550K / AMD FX-8120"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 960 / R9 380"],
        ["DirectX", "11"],
        ["Dung lượng", "50 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10/11 64-bit"],
        ["Vi xử lý", "Intel Core i7-4770 / Ryzen 5 1600X"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "GTX 1070 / RX 5700"],
        ["DirectX", "12"],
        ["Dung lượng", "50 GB SSD"],
      ],
    },
  },

  // ==================== CHIẾN THUẬT ====================

  legendofleagues: {
    id: "legendofleagues",
    name: "Legend of Leagues",
    subtitle: "Miễn phí",
    genre: "Chiến thuật / MOBA",
    developer: "Riot Games",
    price: "Miễn phí",
    accentColor: "#c89b3c",

    heroImage:
      "https://i0.wp.com/highschool.latimes.com/wp-content/uploads/2021/09/league-of-legends.jpeg?fit=1607%2C895&ssl=1",
    images: [
      "https://i0.wp.com/highschool.latimes.com/wp-content/uploads/2021/09/league-of-legends.jpeg?fit=1607%2C895&ssl=1",
    ],

    tagline:
      "Phá hủy Nexus kẻ thù trước. Đơn giản là vậy. Không đơn giản chút nào.",

    description: `
    <p><span class="hl">League of Legends</span> là tựa game MOBA phổ biến nhất thế giới với hàng triệu người chơi mỗi ngày, được vận hành bởi Riot Games suốt hơn 15 năm qua.</p>

    <p>Hai đội 5 người đối đầu nhau trên bản đồ Summoner's Rift, mỗi người chọn một champion với kỹ năng độc đáo và cùng nhau phá hủy Nexus của đối thủ.</p>

    <ul>
      <li><span class="hl">160+ Champion</span> mỗi người có bộ kỹ năng hoàn toàn khác biệt.</li>
      <li><span class="hl">Hệ thống xếp hạng</span> từ Iron đến Challenger.</li>
      <li><span class="hl">Cập nhật định kỳ</span> với patch cân bằng và champion mới.</li>
      <li><span class="hl">Esport scene lớn nhất thế giới</span> — World Championship hàng năm.</li>
    </ul>

    <p>Hoàn toàn miễn phí với nội dung cập nhật liên tục — LoL luôn có thứ gì đó mới để khám phá.</p>
  `,

    features: [
      "Hoàn toàn miễn phí",
      "160+ Champion đa dạng",
      "Esport scene toàn cầu",
      "Cập nhật liên tục",
      "Không cần tài khoản Steam",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 7/8/10 64-bit"],
        ["Vi xử lý", "Intel Core i5-3300"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "Nvidia GeForce 560 / AMD RX 410"],
        ["DirectX", "11"],
        ["Dung lượng", "22 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10/11 64-bit"],
        ["Vi xử lý", "Intel Core i5-3300"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "Nvidia GeForce 560 / AMD RX 410"],
        ["DirectX", "11"],
        ["Dung lượng", "22 GB SSD"],
      ],
    },
  },

  farfarwest: {
    id: "farfarwest",
    name: "Far Far West",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Chiến thuật / Strategy",
    developer: "Indie Developer",
    price: "211.000đ",
    accentColor: "#c67c3b",

    heroImage:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3124540/21362a3efa8067bf28d0abf350c2a13cd39e61bc/header_alt_assets_3.jpg?t=1778234595",
    images: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3124540/21362a3efa8067bf28d0abf350c2a13cd39e61bc/header_alt_assets_3.jpg?t=1778234595",
    ],

    tagline: "Miền Tây hoang dã — Nơi chỉ kẻ khôn ngoan mới sống sót.",

    description: `
    <p><span class="hl">Far Far West</span> là tựa game chiến thuật lấy bối cảnh miền Tây hoang dã, nơi bạn phải đưa ra những quyết định chiến lược trong môi trường khắc nghiệt và đầy nguy hiểm.</p>

    <p>Xây dựng thế lực, quản lý tài nguyên và đối phó với các phe phái cạnh tranh trong bối cảnh western đặc trưng.</p>

    <ul>
      <li><span class="hl">Bối cảnh Western</span> độc đáo và ít thấy trong thể loại strategy.</li>
      <li><span class="hl">Hệ thống phe phái</span> phức tạp với quan hệ đồng minh và kẻ thù.</li>
      <li><span class="hl">Quản lý tài nguyên</span> và phát triển thế lực theo thời gian.</li>
      <li><span class="hl">Cốt truyện phân nhánh</span> theo từng quyết định của người chơi.</li>
    </ul>

    <p>Một trải nghiệm chiến thuật tươi mới với hương vị miền Tây chưa từng thấy.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Bàn giao kèm Email",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i5-6500"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 970"],
        ["DirectX", "11"],
        ["Dung lượng", "10 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10/11"],
        ["Vi xử lý", "Intel Core i7-8700"],
        ["RAM", "16 GB"],
        ["Card đồ họa", "RTX 2060"],
        ["DirectX", "12"],
        ["Dung lượng", "10 GB SSD"],
      ],
    },
  },

  starcraft2: {
    id: "starcraft2",
    name: "StarCraft II",
    subtitle: "Tài Khoản Battle.net Bản Quyền + Mail",
    genre: "Chiến thuật / RTS",
    developer: "Blizzard Entertainment",
    price: "128.000đ",
    accentColor: "#1a73e8",

    heroImage: "https://i.ytimg.com/vi/HWXFVv69YBU/sddefault.jpg",
    images: ["https://i.ytimg.com/vi/HWXFVv69YBU/sddefault.jpg"],

    tagline: "Terran. Zerg. Protoss. Ba chủng tộc — Một chiến trường vũ trụ.",

    description: `
    <p><span class="hl">StarCraft II</span> là tựa game RTS kinh điển từ Blizzard, được xem là môn thể thao điện tử trí tuệ cao nhất thế giới với yêu cầu APM (Actions per Minute) và tư duy chiến lược đến mức các đại học dạy SC2 như môn học chính thức.</p>

    <p>Ba chủng tộc với đặc điểm hoàn toàn bất đối xứng — mỗi trận đấu là một bài toán chiến lược mới.</p>

    <ul>
      <li><span class="hl">Ba chủng tộc</span> Terran, Zerg, Protoss với gameplay hoàn toàn khác biệt.</li>
      <li><span class="hl">Campaign Story</span> đồ sộ theo dõi suốt 3 phần game.</li>
      <li><span class="hl">Ladder 1v1, 2v2, 3v3, 4v4</span> — leo rank đòi hỏi kỹ năng thực sự.</li>
      <li><span class="hl">Co-op Missions</span> cùng bạn bè với Commander độc đáo.</li>
    </ul>

    <p>Bất kể bạn ở trình độ nào, SC2 luôn có thứ gì đó để thách thức và phần thưởng cho bạn.</p>
  `,

    features: [
      "Tài khoản Battle.net bản quyền",
      "Bàn giao kèm Email",
      "Online Ladder đầy đủ",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 7 64-bit"],
        ["Vi xử lý", "Intel Core 2 Duo E6600"],
        ["RAM", "2 GB"],
        ["Card đồ họa", "GeForce 7600 GT"],
        ["DirectX", "10"],
        ["Dung lượng", "30 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i5 2.5GHz"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "GTX 650 Ti"],
        ["DirectX", "11"],
        ["Dung lượng", "30 GB SSD"],
      ],
    },
  },

  aoe2: {
    id: "aoe2",
    name: "Age of Empires II: Definitive Edition",
    subtitle: "Tài Khoản Steam Bản Quyền + Mail",
    genre: "Chiến thuật / RTS Lịch sử",
    developer: "Forgotten Empires / Xbox Game Studios",
    price: "450.000đ",
    accentColor: "#8b6914",

    heroImage:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/813780/header.jpg?t=1777577197",
    images: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/813780/header.jpg?t=1777577197",
    ],

    tagline: "Xây dựng đế chế. Chinh phục thế giới. Ghi tên vào lịch sử.",

    description: `
    <p><span class="hl">Age of Empires II: Definitive Edition</span> là bản phục sinh hoàn hảo của tượng đài RTS hơn 25 năm tuổi — và điều kỳ diệu là nó vẫn tươi mới và hấp dẫn như lần đầu tiên.</p>

    <p>Dẫn dắt một trong 42 nền văn minh lịch sử qua các thời đại, từ Đại Anh Hùng đến Đế Quốc — mỗi quốc gia với đặc điểm và quân lính độc quyền riêng.</p>

    <ul>
      <li><span class="hl">42 nền văn minh</span> với kiến trúc và quân sự đặc trưng.</li>
      <li><span class="hl">Campaign lịch sử</span> theo chân các đế chế vĩ đại nhất thế giới.</li>
      <li><span class="hl">4K Remastered</span> với đồ họa và âm thanh làm mới hoàn toàn.</li>
      <li><span class="hl">Online Multiplayer</span> với cộng đồng active sau 25 năm.</li>
    </ul>

    <p>Đây là bằng chứng sống rằng game hay không bao giờ cũ — AoE2 DE vẫn đang được hàng chục nghìn người chơi mỗi ngày.</p>
  `,

    features: [
      "Tài khoản Steam bản quyền",
      "Definitive Edition 4K",
      "Bàn giao kèm Email",
      "Sở hữu hoàn toàn tài khoản",
      "Bảo hành vĩnh viễn",
    ],

    specs: {
      min: [
        ["Hệ điều hành", "Windows 10 64-bit"],
        ["Vi xử lý", "Intel Core i3-2105"],
        ["RAM", "4 GB"],
        ["Card đồ họa", "Intel HD 4000 / Radeon HD 6850"],
        ["DirectX", "11"],
        ["Dung lượng", "50 GB"],
      ],
      rec: [
        ["Hệ điều hành", "Windows 10/11 64-bit"],
        ["Vi xử lý", "Intel Core i5-4570"],
        ["RAM", "8 GB"],
        ["Card đồ họa", "GTX 650 Ti / Radeon HD 7700"],
        ["DirectX", "11"],
        ["Dung lượng", "50 GB SSD"],
      ],
    },
  },
};

const gameIndexMap = { gta5: 0, eafc25: 1, blackmyth: 2, cs2: 3, genshin: 4 };

// ==================== ĐỌC PARAMS ====================
function getGameId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("game") || "gta5";
}

// ==================== SLIDER ====================
let currentSlide = 0;
let animating = false;
let slides = [];

function initSlider(images) {
  const wrap = document.getElementById("sliderWrap");
  const dotsEl = document.getElementById("dots");
  const thumbsEl = document.getElementById("thumbs");
  const prevBtn = document.getElementById("prevBtn");

  slides = images.map((src, i) => {
    const div = document.createElement("div");
    div.className = "slide " + (i === 0 ? "active" : "next");
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Screenshot " + (i + 1);
    div.appendChild(img);
    wrap.insertBefore(div, prevBtn);
    return div;
  });

  images.forEach((src, i) => {
    const dot = document.createElement("div");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.onclick = () => goTo(i);
    dotsEl.appendChild(dot);

    const th = document.createElement("div");
    th.className = "thumb" + (i === 0 ? " active" : "");
    const tImg = document.createElement("img");
    tImg.src = src;
    tImg.alt = "";
    th.appendChild(tImg);
    th.onclick = () => goTo(i);
    thumbsEl.appendChild(th);
  });
}

function updateSliderUI() {
  document
    .querySelectorAll(".dot")
    .forEach((d, i) => d.classList.toggle("active", i === currentSlide));
  document
    .querySelectorAll(".thumb")
    .forEach((t, i) => t.classList.toggle("active", i === currentSlide));
  const activeThumb = document.querySelectorAll(".thumb")[currentSlide];
  if (activeThumb)
    activeThumb.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
}

function goTo(next) {
  if (animating || next === currentSlide || slides.length === 0) return;
  animating = true;
  const dir = next > currentSlide ? 1 : -1;
  const prev = currentSlide;
  currentSlide = next;

  slides[next].className = "slide";
  slides[prev].className = "slide active";

  requestAnimationFrame(() => {
    slides[prev].classList.add(dir > 0 ? "slide-out-left" : "slide-out-right");
    slides[next].style.transform =
      dir > 0 ? "translateX(100%)" : "translateX(-100%)";
    slides[next].style.opacity = "0";
    slides[next].classList.add(dir > 0 ? "slide-in-left" : "slide-in-right");

    setTimeout(() => {
      slides.forEach((s, i) => {
        s.className = "slide";
        s.style.transform = "";
        s.style.opacity = "";
        if (i === currentSlide) s.classList.add("active");
        else if (i < currentSlide) s.classList.add("prev");
        else s.classList.add("next");
      });
      animating = false;
      updateSliderUI();
    }, 460);
  });
}

// ==================== FAQ / ACCORDION ====================
function initFAQ() {
  document.querySelectorAll(".sp-faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const wasActive = item.classList.contains("active");
      document
        .querySelectorAll(".sp-faq-item")
        .forEach((i) => i.classList.remove("active"));
      if (!wasActive) item.classList.add("active");
      btn.querySelector("span").textContent = item.classList.contains("active")
        ? "−"
        : "+";
    });
  });
}

// ==================== FILTER REVIEW ====================
function initFilterBtns() {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

// ==================== RENDER PAGE ====================
function renderPage(game) {
  document.documentElement.style.setProperty("--accent", game.accentColor);

  document.title = game.name;
  document.getElementById("pageTitle").textContent = game.name;
  document.getElementById("gameSubtitle").textContent = game.subtitle;
  document.getElementById("tagline").textContent = game.tagline;
  document.getElementById("heroTagline").textContent = game.tagline;

  document.getElementById("soldCount").style.display = "none";
  document.getElementById("ratingText").style.display = "none";

  // Stars
  const starsEl = document.querySelector(".stars");
  if (starsEl) {
    const idx = gameIndexMap[getGameId()] ?? 0;
    const r = parseFloat((4.3 + (idx % 7) * 0.1).toFixed(1));
    const full = Math.floor(r);
    const frac = r - full;

    let partial = 0;
    if (frac >= 0.1 && frac < 0.4) partial = 0.33;
    else if (frac >= 0.4 && frac < 0.6) partial = 0.5;
    else if (frac >= 0.6 && frac < 0.9) partial = 0.66;
    else if (frac >= 0.9) partial = 1;

    const empty = 5 - full - (partial > 0 ? 1 : 0);

    let html = '<span style="font-size:20px;letter-spacing:2px;">';
    for (let i = 0; i < full; i++)
      html += '<span style="color:#f5c518;">★</span>';
    if (partial > 0)
      html += `<span style="position:relative;display:inline-block;color:#444;">★<span style="position:absolute;left:0;top:0;overflow:hidden;width:${partial * 100}%;color:#f5c518;">★</span></span>`;
    for (let i = 0; i < empty; i++)
      html += '<span style="color:#444;">★</span>';
    html += "</span>";
    html +=
      '<span style="color:#f5c518;font-size:16px;font-weight:700;margin-left:8px;">' +
      r.toFixed(1) +
      "</span>";
    starsEl.innerHTML = html;
  }

  // Price
  const priceToShow = game.price || "Liên hệ";
  document.getElementById("priceNew").textContent = priceToShow;
  if (priceToShow === "Miễn phí") {
    document.getElementById("priceNew").style.color = "#2ecc71";
    document.getElementById("priceNew").style.fontSize = "28px";
  }

  const featList = document.getElementById("featureList");
  featList.innerHTML = game.features
    .map((f) => `<li><span class="check">✓</span><span>${f}</span></li>`)
    .join("");

  document.getElementById("descContent").innerHTML = game.description;

  function renderSpecs(id, rows) {
    document.getElementById(id).innerHTML = rows
      .map(
        ([label, val]) => `
      <div class="spec-row">
        <div class="spec-label">${label}</div>
        <div class="spec-value">${val}</div>
      </div>`,
      )
      .join("");
  }
  renderSpecs("specMin", game.specs.min);
  renderSpecs("specRec", game.specs.rec);

  initSlider(game.images);
  document.getElementById("prevBtn").onclick = () =>
    goTo((currentSlide - 1 + game.images.length) % game.images.length);
  document.getElementById("nextBtn").onclick = () =>
    goTo((currentSlide + 1) % game.images.length);

  initFAQ();
  initFilterBtns();

  // Kiểm tra game đã mua -> đổi nút thành "ĐÃ SỞ HỮU"
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    const purchased =
      JSON.parse(localStorage.getItem(`purchasedGames:${currentUser}`)) || [];
    const alreadyOwned = purchased.some((item) => item.name === game.name);
    if (alreadyOwned) {
      const btnCart = document.getElementById("btnCart");
      if (btnCart) {
        btnCart.textContent = "✓ ĐÃ SỞ HỮU";
        btnCart.disabled = true;
        btnCart.style.background = "#2ecc71";
        btnCart.style.cursor = "not-allowed";
        btnCart.style.opacity = "0.7";
      }
    }
  }

  function showCartToast(msg, success) {
    const old = document.getElementById("cartToast");
    if (old) old.remove();

    const toast = document.createElement("div");
    toast.id = "cartToast";
    toast.innerHTML = `
      <span style="font-size:18px">${success ? "🛒" : "⚠️"}</span>
      <span>${msg}</span>
    `;
    Object.assign(toast.style, {
      position: "fixed",
      bottom: "28px",
      right: "28px",
      background: success ? "#1a2e1a" : "#2e1a1a",
      border: `1px solid ${success ? "#2ecc71" : "#e74c3c"}`,
      color: success ? "#2ecc71" : "#e74c3c",
      padding: "14px 20px",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      zIndex: "99999",
      boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
      animation: "slideInToast 0.3s ease",
    });
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = "opacity 0.4s, transform 0.4s";
      toast.style.opacity = "0";
      toast.style.transform = "translateY(20px)";
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  }

  document.getElementById("btnCart").addEventListener("click", () => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      const purchased =
        JSON.parse(localStorage.getItem(`purchasedGames:${user}`)) || [];
      if (purchased.some((item) => item.name === game.name)) {
        showCartToast("Bạn đã sở hữu " + game.name + " rồi!", false);
        return;
      }
    }

    let cart = [];
    try {
      cart = JSON.parse(localStorage.getItem(getCartKey())) || [];
    } catch {
      cart = [];
    }

    const existed = cart.some((item) => item.id === game.id);
    if (existed) {
      showCartToast(game.name + " đã có trong giỏ hàng rồi!", false);
      return;
    }

    cart.push({
      id: game.id,
      name: game.name,
      price: game.price,
      image: game.images?.[0] || game.heroImage || "",
    });
    localStorage.setItem(getCartKey(), JSON.stringify(cart));

    const cartCount = document.getElementById("cartCount");
    if (cartCount) cartCount.innerText = cart.length;

    showCartToast("Đã thêm " + game.name + " vào giỏ hàng!", true);
  });

  document.getElementById("btnBuy").addEventListener("click", () => {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      alert("Vui lòng đăng nhập trước khi mua game!");
      return;
    }

    const purchasedKey = `purchasedGames:${currentUser}`;
    const purchased = JSON.parse(localStorage.getItem(purchasedKey)) || [];
    if (purchased.some((g) => g.name === game.name)) {
      alert("Bạn đã sở hữu game này rồi!");
      return;
    }

    const priceText = game.price || "0đ";
    const isFree = game.price === "Miễn phí";
    const price = isFree
      ? 0
      : Number(priceText.replaceAll(".", "").replace("đ", "").trim());

    const balanceKey = `balance:${currentUser}`;
    const balance = Number(localStorage.getItem(balanceKey) || 0);

    if (!isFree && balance < price) {
      alert(
        `Số dư không đủ!\n\nGiá game: ${priceText}\nSố dư hiện tại: ${balance.toLocaleString("vi-VN")}đ\n\nVui lòng nạp thêm tiền.`,
      );
      return;
    }

    const newBalance = isFree ? balance : balance - price;
    localStorage.setItem(balanceKey, String(newBalance));

    const gameImage = game.images?.[0] || game.heroImage || "";
    purchased.unshift({ name: game.name, image: gameImage });
    localStorage.setItem(purchasedKey, JSON.stringify(purchased));

    let cart = JSON.parse(localStorage.getItem(getCartKey())) || [];
    cart = cart.filter((item) => item.name !== game.name);
    localStorage.setItem(getCartKey(), JSON.stringify(cart));

    const btnCart = document.getElementById("btnCart");
    const btnBuy = document.getElementById("btnBuy");
    if (btnCart) {
      btnCart.textContent = "✓ ĐÃ SỞ HỮU";
      btnCart.disabled = true;
      btnCart.style.background = "#2ecc71";
      btnCart.style.cursor = "not-allowed";
      btnCart.style.opacity = "0.7";
    }
    if (btnBuy) {
      btnBuy.textContent = "✓ Đã mua";
      btnBuy.disabled = true;
      btnBuy.style.opacity = "0.5";
      btnBuy.style.cursor = "not-allowed";
    }

    alert(
      isFree
        ? `✅ Thêm game thành công!\n\n"${game.name}" đã được lưu vào thư viện.`
        : `✅ Thanh toán thành công!\n\n"${game.name}" đã được lưu vào thư viện.\nSố dư còn lại: ${newBalance.toLocaleString("vi-VN")}đ`,
    );
  });
}

// ==================== INIT ====================
document.addEventListener("DOMContentLoaded", () => {
  const id = getGameId();
  const game = gameData[id] || gameData["gta5"];
  renderPage(game);
});

document.addEventListener("navbarReady", () => {});
window.addEventListener("load", () => {});

// ==================== REVIEW SYSTEM ====================
document.addEventListener("DOMContentLoaded", () => {
  // ---------- helpers ----------
  // THAY BẰNG:
  function getRatingFromParam() {
    const params = new URLSearchParams(window.location.search);
    const gameId = params.get("game");
    if (!gameId || !gameData[gameId]) return null;
    const allIds = Object.keys(gameData);
    const idx = allIds.indexOf(gameId);
    return parseFloat((4.3 + (idx % 7) * 0.1).toFixed(1));
  }

  // THAY BẰNG:
  function buildDistribution(rating) {
    const params = new URLSearchParams(window.location.search);
    const gameId = params.get("game");
    const game = gameData[gameId];
    const sold = game && game.sold ? Number(game.sold) : 250;
    const total = sold * 2;

    const r = rating;
    const p5 = Math.round(45 + ((r - 4.3) / 0.6) * 40);
    const p4 = Math.round(30 - ((r - 4.3) / 0.6) * 14);
    const p3 = Math.round(14 - ((r - 4.3) / 0.6) * 9);
    const p2 = Math.round(7 - ((r - 4.3) / 0.6) * 5);
    const p1 = 100 - p5 - p4 - p3 - p2;

    const counts = {
      5: Math.round((p5 / 100) * total),
      4: Math.round((p4 / 100) * total),
      3: Math.round((p3 / 100) * total),
      2: Math.round((p2 / 100) * total),
      1: Math.round((p1 / 100) * total),
    };
    return { counts, total };
  }

  // ---------- pool review giả ----------
  const fakeReviewPool = [
    {
      name: "Jack 5 củ",
      star: 5,
      text: "Game cực kỳ đỉnh, đồ họa đẹp mê hồn, gameplay mượt mà. Xứng đáng từng đồng bỏ ra!",
    },
    {
      name: "Trần Bình",
      star: 5,
      text: "Một trong những tựa game hay nhất mình từng chơi. Cốt truyện cuốn hút, không thể bỏ xuống được.",
    },
    {
      name: "kakaka",
      star: 4,
      text: "Game rất hay, nhưng hơi nặng máy. Cần PC khá mới chơi mượt. Nhìn chung vẫn đáng tiền.",
    },
    {
      name: "Trần Minh Hiếu",
      star: 5,
      text: "Đã mua và không hối hận. Shop giao hàng nhanh, tài khoản ổn định, chơi mượt từ đầu.",
    },
    {
      name: "khongNghiDuocTen",
      star: 4,
      text: "Gameplay thú vị, nhiều giờ chơi không chán. Chỉ tiếc bản Việt hóa chưa hoàn thiện lắm.",
    },
    {
      name: "vlxx",
      star: 5,
      text: "Tuyệt vời! Đây là lần đầu mình mua game online và trải nghiệm rất tốt. Sẽ ủng hộ shop dài dài.",
    },
    {
      name: "choXinCaiTen",
      star: 3,
      text: "Game ổn, không quá xuất sắc nhưng chơi được. Giá hơi cao so với giá trị mang lại.",
    },
    {
      name: "Tokuda",
      star: 5,
      text: "Đồ họa đẹp không có gì để chê. Âm thanh sống động, cảm giác như đang xem phim bom tấn.",
    },
    {
      name: "biContent",
      star: 4,
      text: "Mình chơi được khoảng 50 tiếng rồi mà vẫn chưa chán. Độ dài game rất ổn, nội dung phong phú.",
    },
    {
      name: "Phùng Thanh Độ",
      star: 5,
      text: "Shop uy tín, acc chuẩn, chơi không lag. Recommend cho tất cả ae yêu thích thể loại này.",
    },
    {
      name: "Donald Trump",
      star: 2,
      text: "Game có tiếng nhưng với mình thì không hợp lắm. Gameplay khá khó, cần kiên nhẫn.",
    },
    {
      name: "abcxyz",
      star: 5,
      text: "Mua lần 2 rồi, lần nào cũng ổn. Shop luôn hỗ trợ nhanh khi có vấn đề phát sinh.",
    },
    {
      name: "Virus",
      star: 4,
      text: "Chơi cùng bạn bè rất vui. Chế độ multiplayer mượt, ít lag dù server quốc tế.",
    },
    {
      name: "PTIT",
      star: 5,
      text: "Xứng danh game của năm. Từ hình ảnh đến âm nhạc đều đẳng cấp thế giới.",
    },
    {
      name: "Vladimir Putin",
      star: 3,
      text: "Chơi được nhưng tôi kỳ vọng hơn. Vài bug nhỏ ảnh hưởng trải nghiệm, hy vọng sẽ được vá sớm.",
    },
    {
      name: "Đầu cắt moi",
      star: 5,
      text: "Mình mua cho người yêu, bạn ấy thích lắm. Acc kích hoạt ngay, không phải chờ lâu.",
    },
    {
      name: "Bộ PC",
      star: 4,
      text: "Nội dung chính dài khoảng 30 tiếng, thêm side quest thì cả trăm tiếng. Rất đáng đồng tiền.",
    },
    {
      name: "Trần Dần",
      star: 5,
      text: "Lần đầu chơi thể loại này và bị cuốn luôn. Cảm ơn shop đã tư vấn nhiệt tình!",
    },
    {
      name: "Minh Tuấn",
      star: 5,
      text: "Mua lần đầu mà quá ổn, acc kích hoạt ngay, không chờ lâu. Shop xịn thật sự!",
    },
    {
      name: "GamersVN",
      star: 5,
      text: "Đồ họa đỉnh cao, âm thanh sống động. Xứng đáng là game hay nhất năm!",
    },
    {
      name: "Thành Long",
      star: 4,
      text: "Chơi mấy hôm rồi, rất ổn định. Shop hỗ trợ nhiệt tình khi mình hỏi.",
    },
    {
      name: "QuangHuy99",
      star: 5,
      text: "Giá tốt hơn hẳn các nơi khác, acc full bản quyền, bảo hành vĩnh viễn. 10/10!",
    },
    {
      name: "pc_gaming_vn",
      star: 4,
      text: "Frame rate ổn định, không giật lag. Cấu hình máy mình tầm trung mà chơi vẫn mượt.",
    },
    {
      name: "Hoàng Phúc",
      star: 5,
      text: "Đã mua 3 game ở đây rồi, lần nào cũng hài lòng. Shop uy tín số 1!",
    },
    {
      name: "NamDepTrai",
      star: 5,
      text: "Tài khoản bàn giao nhanh, chơi ổn định từ ngày đầu. Không lo bị thu hồi acc.",
    },
    {
      name: "heocon2k5",
      star: 4,
      text: "Game hay hơn mình nghĩ nhiều. Side quest phong phú, khám phá thế giới rất thú vị.",
    },
    {
      name: "Lê Văn Toàn",
      star: 5,
      text: "Chất lượng tuyệt vời, giá hợp lý. Đây là lần thứ 4 mình mua game của shop này rồi!",
    },
    {
      name: "gaming4ever",
      star: 5,
      text: "Đồ họa quá đẹp, mượt như mơ trên máy RTX 4070 của mình. Bảo hành vĩnh viễn rất yên tâm.",
    },
    {
      name: "Nguyễn Thị Hoa",
      star: 4,
      text: "Mua cho chồng chơi, ảnh thích lắm. Shop tư vấn nhiệt tình, giao acc đúng hẹn.",
    },
  ];

  // ---------- render fake reviews ----------
  function renderFakeReviews(rating) {
    const list = document.getElementById("reviewList");
    if (!list) return;

    // Ẩn "Chưa có đánh giá nào"
    const noMsg = document.getElementById("noReviewMsg");
    if (noMsg) noMsg.style.display = "none";
    document.querySelectorAll("*").forEach((el) => {
      if (
        el.children.length === 0 &&
        el.textContent.trim() === "Chưa có đánh giá nào"
      ) {
        el.style.display = "none";
      }
    });

    const count = rating >= 4.6 ? 8 : rating >= 4.4 ? 7 : 6;

    const params = new URLSearchParams(window.location.search);
    const gameId = params.get("game") || "default";
    const seed = gameId.split("").reduce((a, c) => a + c.charCodeAt(0), 0);

    const shuffled = [...fakeReviewPool].sort((a, b) => {
      const hashA = (seed + a.name.charCodeAt(0) * 31) % 100;
      const hashB = (seed + b.name.charCodeAt(0) * 31) % 100;
      return hashA - hashB;
    });
    const selected = shuffled.slice(0, count);

    const starWeights =
      rating >= 4.6
        ? [5, 5, 5, 5, 5, 4, 4, 4]
        : rating >= 4.4
          ? [5, 5, 5, 4, 4, 4, 3]
          : [5, 5, 4, 4, 4, 3, 3];

    const timeLabels = [
      "30 phút trước",
      "2 giờ trước",
      "5 giờ trước",
      "1 ngày trước",
      "2 ngày trước",
      "4 ngày trước",
      "1 tuần trước",
      "2 tuần trước",
    ];

    list.innerHTML = selected
      .map((r, i) => {
        const star = starWeights[i] || 5;
        const timeAgo = timeLabels[i] || "1 tháng trước";
        return `
        <div style="background:#1e1e1e;border:1px solid #2a2a2a;border-radius:8px;padding:16px;margin-bottom:12px;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
            <div style="display:flex;align-items:center;gap:10px;">
              <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#c8a84b,#8b6914);display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;font-size:14px;">
                ${r.name.charAt(0)}
              </div>
              <div>
                <div style="font-size:13px;font-weight:600;color:#ddd;">${r.name}</div>
                <div style="font-size:11px;color:#666;">${timeAgo}</div>
              </div>
            </div>
            <div style="color:#c8a84b;font-size:15px;">${"★".repeat(star)}${"☆".repeat(5 - star)}</div>
          </div>
          <p style="font-size:13px;color:#aaa;line-height:1.7;margin:0;">${r.text}</p>
        </div>
      `;
      })
      .join("");
  }

  // ---------- chạy sau khi DOM ổn định ----------
  setTimeout(() => {
    let rating = getRatingFromParam();
    if (!rating) {
      const rt = document.getElementById("ratingText");
      if (rt) {
        const match = rt.textContent.match(/([\d.]+)/);
        if (match) rating = parseFloat(match[1]);
      }
    }
    if (!rating) return;

    const { counts, total } = buildDistribution(rating);

    // Cập nhật score
    const scoreEl = document.querySelector(".rating-score");
    if (scoreEl) scoreEl.textContent = rating.toFixed(1);

    // Cập nhật tiêu đề section
    document.querySelectorAll(".section-title").forEach((el) => {
      if (el.textContent.startsWith("Đánh giá")) {
        el.textContent = `Đánh giá (${total.toLocaleString("vi-VN")})`;
      }
    });

    // Cập nhật ratingText
    const ratingText = document.getElementById("ratingText");
    if (ratingText)
      ratingText.textContent = `(${total.toLocaleString("vi-VN")} đánh giá)`;

    // Cập nhật stars trong rating-row
    const starsEl = document.querySelector(".rating-row .stars");
    if (starsEl) {
      const r = rating;
      const full = Math.floor(r);
      const frac = r - full;
      let partial = 0;
      if (frac >= 0.1 && frac < 0.4) partial = 0.33;
      else if (frac >= 0.4 && frac < 0.6) partial = 0.5;
      else if (frac >= 0.6 && frac < 0.9) partial = 0.66;
      else if (frac >= 0.9) partial = 1;
      const empty = 5 - full - (partial > 0 ? 1 : 0);
      let html = '<span style="font-size:20px;letter-spacing:2px;">';
      for (let i = 0; i < full; i++)
        html += '<span style="color:#f5c518;">★</span>';
      if (partial > 0)
        html += `<span style="position:relative;display:inline-block;color:#444;">★<span style="position:absolute;left:0;top:0;overflow:hidden;width:${partial * 100}%;color:#f5c518;">★</span></span>`;
      for (let i = 0; i < empty; i++)
        html += '<span style="color:#444;">★</span>';
      html += "</span>";
      html += `<span style="color:#f5c518;font-size:16px;font-weight:700;margin-left:8px;">${r.toFixed(1)}</span>`;
      starsEl.innerHTML = html;
    }

    // Cập nhật bars
    const barRows = document.querySelectorAll(".rating-bars .bar-row");
    [5, 4, 3, 2, 1].forEach((star, i) => {
      const row = barRows[i];
      if (!row) return;
      const count = counts[star];
      const pct = Math.round((count / total) * 100);
      const fill = row.querySelector(".bar-fill");
      const label = row.querySelectorAll("span")[1];
      if (fill) fill.style.width = pct + "%";
      if (label)
        label.textContent = `${pct}% | ${count.toLocaleString("vi-VN")} đánh giá`;
    });

    // Ẩn "Chưa có đánh giá nào" lần cuối
    const noMsg = document.getElementById("noReviewMsg");
    if (noMsg) noMsg.style.display = "none";
    document.querySelectorAll("*").forEach((el) => {
      if (
        el.children.length === 0 &&
        el.textContent.trim() === "Chưa có đánh giá nào"
      ) {
        el.style.display = "none";
      }
    });

    // Render fake reviews
    renderFakeReviews(rating);
  }, 300);

  // ==================== REVIEW SUBMIT ====================
  (function () {
    let selectedStar = 0;

    function getGameId() {
      return new URLSearchParams(window.location.search).get("game") || "gta5";
    }

    function getStorageKey() {
      return "reviews_" + getGameId();
    }

    function getUserName() {
      const allEls = document.querySelectorAll("*");
      for (const el of allEls) {
        if (
          el.children.length === 0 &&
          el.textContent.includes(" - ") &&
          el.textContent.includes("đ")
        ) {
          return el.textContent.split(" - ")[0].trim();
        }
      }
      return "Người dùng";
    }

    function loadSavedReviews() {
      try {
        return JSON.parse(localStorage.getItem(getStorageKey()) || "[]");
      } catch {
        return [];
      }
    }

    function saveReview(review) {
      const reviews = loadSavedReviews();
      reviews.unshift(review);
      localStorage.setItem(getStorageKey(), JSON.stringify(reviews));
    }

    function renderReviewCard(r) {
      return `
        <div style="background:#1e1e1e;border:1px solid #2a2a2a;border-radius:8px;padding:16px;margin-bottom:12px;border-left:3px solid #e74c3c;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
            <div style="display:flex;align-items:center;gap:10px;">
              <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#e74c3c,#c0392b);display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;font-size:14px;">
                ${r.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <div style="font-size:13px;font-weight:600;color:#ddd;">${r.name}</div>
                <div style="font-size:11px;color:#666;">${r.time}</div>
              </div>
            </div>
            <div style="color:#e74c3c;font-size:15px;">${"★".repeat(r.star)}${"☆".repeat(5 - r.star)}</div>
          </div>
          <p style="font-size:13px;color:#aaa;line-height:1.7;margin:0;">${r.text}</p>
        </div>`;
    }

    function prependSavedReviews() {
      const list = document.getElementById("reviewList");
      if (!list) return;
      const saved = loadSavedReviews();
      if (saved.length === 0) return;

      const old = document.getElementById("savedReviewsWrapper");
      if (old) old.remove();

      const wrapper = document.createElement("div");
      wrapper.id = "savedReviewsWrapper";
      wrapper.innerHTML = saved.map(renderReviewCard).join("");
      list.prepend(wrapper);
    }

    function initStarSelector() {
      const filterBtns = document.querySelectorAll(".filter-btn");
      filterBtns.forEach((btn, idx) => {
        const starVal = 5 - idx;
        btn.addEventListener("click", () => {
          selectedStar = starVal;
          filterBtns.forEach((b) => {
            b.style.background = "";
            b.style.color = "";
            b.style.borderColor = "";
          });
          btn.style.background = "#e74c3c";
          btn.style.color = "#fff";
          btn.style.borderColor = "#e74c3c";
        });
      });
    }

    function initSubmitBtn() {
      let submitBtn = null;
      document.querySelectorAll("button, .btn, [class*='btn']").forEach((b) => {
        if (b.textContent.trim().includes("ĐÁNH GIÁ NGAY")) submitBtn = b;
      });
      if (!submitBtn) return;

      submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const textarea = document.querySelector(".comment-box");
        const text = textarea ? textarea.value.trim() : "";

        if (selectedStar === 0) {
          alert("⚠️ Vui lòng chọn số sao đánh giá!");
          return;
        }
        if (!text) {
          alert("⚠️ Vui lòng nhập nội dung đánh giá!");
          return;
        }

        const name = getUserName();
        const now = new Date();
        const time = now.toLocaleString("vi-VN", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });

        const review = { name, star: selectedStar, text, time };
        saveReview(review);

        if (textarea) textarea.value = "";
        selectedStar = 0;
        document.querySelectorAll(".filter-btn").forEach((b) => {
          b.style.background = "";
          b.style.color = "";
          b.style.borderColor = "";
        });

        const noMsg = document.getElementById("noReviewMsg");
        if (noMsg) noMsg.style.display = "none";

        prependSavedReviews();
        alert("✅ Đánh giá của bạn đã được gửi thành công!");
      });
    }
    setTimeout(() => {
      initStarSelector();
      initSubmitBtn();
      prependSavedReviews();
    }, 400);
  })();
});