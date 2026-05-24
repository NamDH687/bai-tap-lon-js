// ===== KHAI BÁO BIẾN DOM =====
const storeBtn = document.getElementById("storeBtn");
const gamesDiv = document.getElementById("games");
const searchInput = document.getElementById("searchInput");
const supportBtn = document.getElementById("supportBtn");
const supportContainer = document.getElementById("support-container");
const homeBtn = document.getElementById("homeBtn");
const ratingSection = document.getElementById("rating-section"); // Đưa lên đầu file
const ratingBtn = document.getElementById("ratingBtn"); // Nên đặt ID cho nút Đánh giá trong HTML thay vì dùng href=""

// ===== DANH SÁCH GAME CỐ ĐỊNH =====
const games = [
  {
    name: "GTA V",
    price: "500.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg",
    genre: "nhapvai",
  },
  {
    name: "EA FC 25",
    price: "1.200.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2669320/header.jpg",
    genre: "thethao",
  },
  {
    name: "Black Myth Wukong",
    price: "1.300.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg",
    genre: "nhapvai",
  },
  {
    name: "Counter-Strike 2",
    price: "Miễn phí",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1749053861720/header.jpg",
    genre: "bansung",
  },
  {
    name: "Genshin Impact",
    price: "Miễn phí",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.QOej3091XMbEqB5P8o2O9AHaHa?pid=Api&P=0&h=180",
    genre: "nhapvai",
  },
  {
    name: "Call of Duty®: Black Ops III ",
    price: "475.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/311210/header.jpg?t=1748022663",
    genre: "bansung",
  },
  {
    name: "Rust",
    price: "500.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg?t=1778597738",
    genre: "chiensuat",
  },
  {
    name: "Terraria",
    price: "142.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg?t=1769844435",
    genre: "chiensuat",
  },
  {
    name: "ICARUS",
    price: "445.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1149460/header.jpg?t=1772745915",
    genre: "chiensuat",
  },
  {
    name: "Forza Horizon 6",
    price: "1.499.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2483190/27abb1584a118d50d0e3950fd48d557c51981db7/header.jpg?t=1778870245",
    genre: "duaxe",
  },
  {
    name: "PUBG: BATTLEGROUNDS",
    price: "Miễn phí",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/578080/841ea38bc58cabb70aef65365cf50bc2d79329d9/header.jpg?t=1778634253",
    genre: "bansung",
  },
  {
    name: "Battlefield™ 6",
    price: "1.299.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2807960/c12d12ce3c7d217398d3fcad77427bfc9d57c570/header.jpg?t=1778612637",
    genre: "bansung",
  },
  {
    name: "Squad",
    price: "658.500đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/393380/aa36f6d31a74ca6b1949f35464305ac105e83c52/header_alt_assets_8.jpg?t=1778698936",
    genre: "bansung",
  },
  {
    name: "Marvel Rivals",
    price: "Miễn phí",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2767030/dabf1f6f9513340c90c154b3cf02c9661aeaeecb/header_alt_assets_7.jpg?t=1778835753",
    genre: "bansung",
  },
  {
    name: "Windrose",
    price: "385.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3041230/7e838d87d787735d5d29d72777c5ee55653dfb2b/header.jpg?t=1777529081",
    genre: "chiensuat",
  },
  {
    name: "Palworld",
    price: "385.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1623730/058bd87dc17a7179e07c446aa64d0574ca43ab9d/header.jpg?t=1773936597",
    genre: "chiensuat",
  },
  {
    name: "LEGO® Batman™: Legacy of the Dark Knight",
    price: "1.490.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215200/a07a9a6c0c9c1225f5b260b4f29fe40e6f099f6b/header.jpg?t=1778617453",
    genre: "nhapvai",
  },
  {
    name: "Marvel’s Spider-Man: Miles Morales",
    price: "1.159.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817190/header.jpg?t=1763569499",
    genre: "nhapvai",
  },
  {
    name: "Wuthering Waves",
    price: "Miễn phí",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3513350/86b44bb422a013c1510f029ca79ea7c4a8ffb9e8/header.jpg?t=1777505458",
    genre: "nhapvai",
  },
  {
    name: "ELDEN RING",
    price: "990.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg?t=1767883716",
    genre: "nhapvai",
  },
  {
    name: "Subnautica",
    price: "360.000đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/264710/header_292x136.jpg?t=1777456112",
    genre: "chiensuat",
  },
  {
    name: "Team Fight Tactics",
    price: "Miễn phí",
    image:
      "https://images.seeklogo.com/logo-png/38/2/teamfight-tactics-logo-png_seeklogo-387179.png",
    genre: "chiensuat",
  },
  {
    name: "Arena Of Valor",
    price: "Miễn phí",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShvJIcWWmq9HgJznaAYMGmFBT7C1dSPncVwQ&s",
    genre: "chiensuat",
  },
  {
    name: "NBA 2K26",
    price: "169.500đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3472040/3c8f3700289081daa466b27681cd08cd2eeff04d/header_292x136_alt_assets_5.jpg?t=1778857348",
    genre: "thethao",
  },
  {
    name: "Gamble With Your Friends",
    price: "115.000đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3892270/395e6d7972474333a698b26f8aa5597bf38109a1/header_292x136.jpg?t=1778274309",
    genre: "thethao",
  },
  {
    name: "Subnautica: Below Zero",
    price: "148.500đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/848450/header_292x136.jpg?t=1777456254",
    genre: "chiensuat",
  },
  {
    name: "Nine Sols",
    price: "154.000đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1809540/header_292x136.jpg?t=1762838904",
    genre: "nhapvai",
  },
  {
    name: "MISERY",
    price: "117.000đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2119830/f4aa2f3b4b352f7f373026fe592d32eef2c72fce/header_292x136.jpg?t=1779043039",
    genre: "bansung",
  },
  {
    name: "Phasmophobia",
    price: "175.000đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/739630/0a424398a10445bbb922b45771dab7118fe139d2/header_292x136_alt_assets_10.jpg?t=1778659672",
    genre: "bansung",
  },
  {
    name: "Everything is Vampires",
    price: "178.000đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/bundles/74928/ctl750vzp7zd7y1t/04efa8acdde02428165e45627516a24a08a8cb86/header_292x136.jpg?t=1777982271",
    genre: "nhapvai",
  },
  {
    name: "Kerbal Space Program",
    price: "124.500đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/220200/header_292x136.jpg?t=1738037585",
    genre: "chiensuat",
  },
  {
    name: "Space Haven",
    price: "124.500đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/979110/73529f7afc14ec281cad99fe0284cbed06c552f0/header_292x136.jpg?t=1778684449",
    genre: "chiensuat",
  },
  {
    name: "Everything is Crab: The Animal Evolution Roguelite",
    price: "178.000đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3526710/a5fb804268a798d5026a9a9d4c946cccc23b7420/header_292x136.jpg?t=1778230287",
    genre: "chiensuat",
  },
  {
    name: "RV There Yet?",
    price: "200.000đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3949040/cae24b4ed7f4531be51f0d63f785b7d253f92dc3/header_292x136.jpg?t=1778071815",
    genre: "chiensuat",
  },
  {
    name: "Deep Rock Galactic",
    price: "102.000đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/548430/header_292x136.jpg?t=1775555380",
    genre: "bansung",
  },
  {
    name: "Smalland: Survive the Wilds",
    price: "111.000đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/768200/c4d6a8769de55af18600a7bd8634d9133dc5f4b3/header_292x136_alt_assets_7.jpg?t=1776193569",
    genre: "chiensuat",
  },
  {
    name: "EA Play",
    price: "140.000đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1289670/49e5a469fef9e70e4f49e518986c07a5ae054212/header_292x136.jpg?t=1776976561",
    genre: "thethao",
  },
  {
    name: "YAPYAP",
    price: "113.000đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3834090/399b7aa5bd9ea359e6d77cec3032758ea27c597b/header_292x136.jpg?t=1775943797",
    genre: "chiensuat",
  },
  {
    name: "Far Cry® 5",
    price: "148.500đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/552520/header_292x136.jpg?t=1762190084",
    genre: "bansung",
  },
  {
    name: "World War Z",
    price: "100.000đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/699130/b35277055fbb7e07c26c5e31e4398684c6461d53/header_292x136.jpg?t=1772017589",
    genre: "bansung",
  },
  {
    name: "The Outer Worlds",
    price: "1.200.000đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578650/header.jpg?t=1776350110",
    genre: "nhapvai",
  },
  {
    name: "Shovel Knight: Treasure Trove",
    price: "149.000đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/bundles/63181/31j88g810ntngeud/3a26d44c27071a93e2c499b898b0696b9d474758/header_292x136.jpg?t=1776771125",
    genre: "nhapvai",
  },
  {
    name: "Age of Empires",
    price: "Miễn phí",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/40/Age_of_Empires_franchise_logo.png",
    genre: "chiensuat",
  },
  {
    name: "eFootball",
    price: "360.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1665460/0fb7eebc292768714f2b3be666d59b59a11b0031/header.jpg?t=1772677104",
    genre: "thethao",
  },
  {
    name: "Football, Tactics & Glory",
    price: "400.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/375530/header.jpg?t=1772636313",
    genre: "thethao",
  },
  {
    name: "Kopanito All-Stars Soccer",
    price: "200.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/399820/header.jpg?t=1506520477",
    genre: "thethao",
  },
  {
    name: "Football Drama",
    price: "140.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/876190/header.jpg?t=1725006050",
    genre: "thethao",
  },
  {
    name: "Street Power Football",
    price: "350.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1275760/header.jpg?t=1771250404",
    genre: "thethao",
  },
  {
    name: "Football Manager 2021 Touch - Unlimited Scouting",
    price: "22.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1436173/header.jpg?t=1641312996",
    genre: "thethao",
  },
  {
    name: "90 Minute Fever - Online Football (Soccer) Manager",
    price: "Miễn phí",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/468070/header.jpg?t=1738484847",
    genre: "thethao",
  },
  {
    name: "Pro 11 - Football Manager Game",
    price: "99.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/844960/header.jpg?t=1686569072",
    genre: "thethao",
  },
  {
    name: "Dream League Soccer",
    price: "Miễn phí",
    image: "https://cdn-media.sforum.vn/storage/app/media/dls-2025-13.jpg",
    genre: "thethao",
  },
  {
    name: "Final Soccer VR",
    price: "188.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/555060/header.jpg?t=1671597867",
    genre: "thethao",
  },
  {
    name: "Wreckfest - Đua Xe Đâm Va",
    price: "Miễn phí",
    image:
      "https://static0.anpoimages.com/wordpress/wp-content/uploads/2022/08/wreckfest.png?w=1600&h=900&fit=crop",
    genre: "duaxe",
  },
  {
    name: "Sekiro: Shadows Die Twice",
    price: "300.000đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg?t=1762888662",
    genre: "nhapvai",
  },
  {
    name: "Project CARS 2",
    price: "128.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/378860/header.jpg?t=1663714740",
    genre: "duaxe",
  },
  {
    name: "F1 2020",
    price: "200.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1080110/header.jpg?t=1678892552",
    genre: "duaxe",
  },
  {
    name: "Asphalt 8: Airborne",
    price: "Miễn phí",
    image:
      "https://upload.wikimedia.org/wikipedia/vi/8/87/Asphalt_8_Airborne_open_screenshot.jpg?utm_source=vi.wikipedia.org&utm_campaign=index&utm_content=original",
    genre: "duaxe",
  },
  {
    name: "Trackmania® Turbo",
    price: "264.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/375900/header.jpg?t=1680016593",
    genre: "duaxe",
  },
  {
    name: "Assetto Corsa Competizione",
    price: "460.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/805550/header.jpg?t=1766404577",
    genre: "duaxe",
  },
  {
    name: "GRID Autosport",
    price: "361.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/255220/header.jpg?t=1593617496",
    genre: "duaxe",
  },
  {
    name: "The Witcher 3: Wild Hunt",
    price: "400.000đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ad9240e088f953a84aee814034c50a6a92bf4516/header.jpg?t=1768303991",
    genre: "nhapvai",
  },
  {
    name: "TrackMania² Valley",
    price: "330.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/243360/header.jpg?t=1680016531",
    genre: "duaxe",
  },
  {
    name: "Burnout™ Paradise Remastered",
    price: "490.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1238080/header.jpg?t=1777392081",
    genre: "duaxe",
  },
  {
    name: "Sonic Racing: CrossWorlds",
    price: "1.020.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2486820/a5720c156c0cfbfaa11c2a5037ca414f0640f522/header_alt_assets_7.jpg?t=1777437605",
    genre: "duaxe",
  },
  {
    name: "Real Racing 3",
    price: "288.000đ",
    image: "https://upload.wikimedia.org/wikipedia/en/5/5d/Real_Racing_3.jpg",
    genre: "duaxe",
  },
  {
    name: "Hotshot Racing",
    price: "188.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/609920/header.jpg?t=1753707980",
    genre: "duaxe",
  },
  {
    name: "Forza Motorsport",
    price: "1.290.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2440510/header.jpg?t=1747073895",
    genre: "duaxe",
  },
  {
    name: "WRC Generations – The FIA WRC Official Game",
    price: "420.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1953520/header.jpg?t=1764149287",
    genre: "duaxe",
  },
  {
    name: "DiRT Rally 2.0",
    price: "220.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/690790/header.jpg?t=1777396417",
    genre: "duaxe",
  },
  {
    name: "Need for Speed™ Heat",
    price: "1.650.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222680/header.jpg?t=1777414224",
    genre: "duaxe",
  },
  {
    name: "Forza Horizon 4",
    price: "1.300.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1293830/header.jpg?t=1734336342",
    genre: "duaxe",
  },
  {
    name: "Forza Horizon 5",
    price: "1.360.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg?t=1746471508",
    genre: "duaxe",
  },
  {
    name: "Legend of Leagues",
    price: "Miễn phí",
    image:
      "https://i0.wp.com/highschool.latimes.com/wp-content/uploads/2021/09/league-of-legends.jpeg?fit=1607%2C895&ssl=1",
    genre: "chiensuat",
  },
  {
    name: "Valorant",
    price: "Miễn phí",
    image:
      "https://www.riotgames.com/darkroom/1200/1dbd7211e78ce5faa7a8af9d10afad47:2b5979e3922758399ba389561e797919/ps-f2p-val-console-launch-16x9.jpg",
    genre: "bansung",
  },
  {
    name: "Tom Clancy's Rainbow Six Siege",
    price: "690.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/359550/97ce482d2a8ec5d2beb1081e954ac1ec16eea1fb/header_alt_assets_21.jpg?t=1779209046",
    genre: "bansung",
  },
  {
    name: "Overwatch®",
    price: "360.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2357570/1f84e73b8095ab9f40b1bc2c81845330979afc09/header_alt_assets_20.jpg?t=1778610036",
    genre: "bansung",
  },
  {
    name: "Far Far West",
    price: "211.000đ",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3124540/21362a3efa8067bf28d0abf350c2a13cd39e61bc/header_alt_assets_3.jpg?t=1778234595",
    genre: "chiensuat",
  },
  {
    name: "Apex Legends™",
    price: "Miễn phí",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172470/0bd74245b869287a2dc7f682e6013f7ed08d98e3/header.jpg?t=1778502442",
    genre: "bansung",
  },
  {
    name: "Minecraft",
    price: "300.000đ",
    image:
      "https://store-images.s-microsoft.com/image/apps.21661.14216416494490173.9772fa78-5a01-45ce-9b9e-6ec61a10f4e2.f787fea4-1e7a-4458-a112-c5ac10fec5c0",
    genre: "nhapvai",
  },
  {
    name: "The Elder Scrolls V Skyrim Special Edition",
    price: "500.000đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/header.jpg?t=1753715778",
    genre: "nhapvai",
  },
  {
    name: "Disco Elysium - The Final Cut",
    price: "495.000đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632470/header.jpg?t=1778854831",
    genre: "nhapvai",
  },
  {
    name: "Madden NFL 24",
    price: "100.000đ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3EXFblxsqVsC8sCsJQ8Rl1t6z4AI2mib9g&s",
    genre: "thethao",
  },
  {
    name: "FC Online",
    price: "Miễn phí",
    image:
      "https://yt3.googleusercontent.com/4W8oATzTPHLlUha4Jk4WXGvvvnoEqvCXvEv88tBYDfWo1atYM7R4zXTgTqeD0R75PTu5vor0aQ=s900-c-k-c0x00ffffff-no-rj",
    genre: "thethao",
  },
  {
    name: "Mafia Definitive Edition",
    price: "1.200.000đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030840/header.jpg?t=1759852929",
    genre: "bansung",
  },
  {
    name: "Assetto Corsa",
    price: "260.000đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/244210/header.jpg?t=1754985171",
    genre: "duaxe",
  },
  {
    name: "StarCraft II",
    price: "128.000đ",
    image: "https://i.ytimg.com/vi/HWXFVv69YBU/sddefault.jpg",
    genre: "chiensuat",
  },
  {
    name: "Age of Empires II: Definitive Edition",
    price: "450.000đ",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/813780/header.jpg?t=1777577197",
    genre: "chiensuat",
  },
];

// ===== HỆ THỐNG ĐÁNH GIÁ CỐ ĐỊNH =====
let savedRatings = JSON.parse(localStorage.getItem("gameRatings")) || {};

function getGameRating(gameName) {
  if (!savedRatings[gameName]) {
    // Chỉ giữ lại các số nguyên chẵn từ 1 đến 5
    const starPool = [1, 2, 3, 4, 5];

    const randomStar = starPool[Math.floor(Math.random() * starPool.length)];

    savedRatings[gameName] = {
      stars: Number(randomStar),
      reviews: Math.floor(Math.random() * 5000) + 100,
    };

    localStorage.setItem("gameRatings", JSON.stringify(savedRatings));
  }

  return savedRatings[gameName];
}
// Hiển thị sao
function createStars(rate) {
  const full = Math.floor(rate);
  let result = "";
  for (let i = 0; i < 5; i++) {
    result += i < full ? "★" : "☆";
  }
  return result;
}

// Render game ra màn hình
// Render game ra màn hình (Đã xóa số hiển thị bên cạnh sao)
function renderGames(gamesList) {
  if (!gamesDiv) return;
  gamesDiv.innerHTML = "";

  gamesList.forEach((game) => {
    const rating = getGameRating(game.name);
    gamesDiv.innerHTML += `
            <div class="game-card">
                <img src="${game.image}">
                <div class="game-info">
                    <div class="game-title">${game.name}</div>
                    <div class="game-rating">
                        <span class="stars">${createStars(rating.stars)}</span>
                        <span class="review-count">(${rating.reviews.toLocaleString("vi-VN")} đánh giá)</span>
                    </div>
                    <div class="price">${game.price}</div>
                </div>
            </div>
        `;
  });
}

// ===== XỬ LÝ SỰ KIỆN KHI TẢI TRANG =====
window.onload = function () {
  // Mặc định khi vừa vào trang: Hiện game, Ẩn hỗ trợ, Ẩn thanh lọc sao
  if (gamesDiv) gamesDiv.style.display = "grid";
  if (supportContainer) supportContainer.style.display = "none";
  if (ratingSection) ratingSection.style.display = "none"; // Ẩn thanh sao đi, chỉ hiện ở trang Đánh giá

  renderGames(games);
};

// KHI CLICK TRANG CHỦ
if (homeBtn) {
  homeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (ratingSection) ratingSection.style.display = "none"; // Ẩn thanh sao
    if (supportContainer) supportContainer.style.display = "none"; // Ẩn hỗ trợ
    if (gamesDiv) {
      gamesDiv.style.display = "grid"; // Hiện game
      renderGames(games);
    }
  });
}

// KHI CLICK CỬA HÀNG
if (storeBtn) {
  storeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (ratingSection) ratingSection.style.display = "none"; // Ẩn thanh sao
    if (supportContainer) supportContainer.style.display = "none"; // Ẩn hỗ trợ
    if (gamesDiv) {
      gamesDiv.style.display = "grid"; // Hiện game
      renderGames(games);
    }
  });
}

// KHI CLICK NÚT HỖ TRỢ
if (supportBtn) {
  supportBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (gamesDiv) gamesDiv.style.display = "none"; // Ẩn khu vực game
    if (ratingSection) ratingSection.style.display = "none"; // Ẩn thanh sao
    if (supportContainer) supportContainer.style.display = "block"; // Hiện hỗ trợ
  });
}

// KHI CLICK NÚT ĐÁNH GIÁ (CHỈ HIỆN THANH SAO Ở ĐÂY)
if (ratingBtn) {
  ratingBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (supportContainer) supportContainer.style.display = "none"; // Ẩn hỗ trợ
    if (gamesDiv) gamesDiv.style.display = "grid"; // Hiện game
    if (ratingSection) ratingSection.style.display = "block"; // CHỈ HIỆN THANH SAO TẠI ĐÂY

    renderGames(games);
  });
}

// HIỆU ỨNG ĐÓNG/MỞ CHO PHẦN FAQ HỖ TRỢ
const faqQuestions = document.querySelectorAll(".sp-faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;
    item.classList.toggle("active");

    const span = question.querySelector("span");
    if (span) {
      span.textContent = item.classList.contains("active") ? "−" : "+";
    }
  });
});

// KIỂM TRA ĐĂNG NHẬP
window.addEventListener("DOMContentLoaded", () => {
  const authBtn = document.getElementById("userAuthLink");
  if (!authBtn) return;

  const currentUser = localStorage.getItem("currentUser");
  const balance = localStorage.getItem("balance") || "0";

  if (currentUser) {
    authBtn.innerHTML = `
            <span class="user-avatar">👤</span>
            <span>${currentUser} - ${Number(balance).toLocaleString("vi-VN")}đ</span>
        `;
    authBtn.href = "#";
    authBtn.classList.add("logged");
    authBtn.style.opacity = "0";

    setTimeout(() => {
      authBtn.style.transition = "0.6s";
      authBtn.style.opacity = "1";
    }, 200);

    authBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (confirm("Đăng xuất tài khoản?")) {
        localStorage.removeItem("currentUser");
        location.reload();
      }
    });
  }
});

// LỌC THEO ĐÁNH GIÁ SAO
const starBtns = document.querySelectorAll(".star-btn");
starBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".star-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const selected = btn.dataset.star;

    if (selected === "all") {
      renderGames(games);
      return;
    }

    const filtered = games.filter((game) => {
      const rating = parseFloat(getGameRating(game.name).stars);
      return Math.floor(rating) === Number(selected);
    });

    renderGames(filtered);
  });
});
