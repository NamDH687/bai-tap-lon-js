if (window.location.hash === "#lich-su") {
  document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const games = document.getElementById("games");
    if (slider) slider.style.display = "none";
    if (games) games.style.display = "none";
  });
}

const gamesDiv = document.getElementById("games");
const supportContainer = document.getElementById("support-container");
const sliderBlock = document.querySelector(".slider");
const infoContainer = document.getElementById("info-container");
let currentView = "home";

function getCurrentUser() {
  return localStorage.getItem("currentUser");
}

function getBalanceKey(username = getCurrentUser()) {
  return username ? `balance:${username}` : "balance";
}

function getPurchasedKey(username = getCurrentUser()) {
  return username ? `purchasedGames:${username}` : "purchasedGames";
}

function getCartKey(username = getCurrentUser()) {
  return username ? `cart:${username}` : "cart:guest";
}

function getPurchasedGames(username = getCurrentUser()) {
  return JSON.parse(localStorage.getItem(getPurchasedKey(username))) || [];
}

function getUserBalance(username = getCurrentUser()) {
  return Number(localStorage.getItem(getBalanceKey(username)) || 0);
}

function setUserBalance(balance, username = getCurrentUser()) {
  localStorage.setItem(getBalanceKey(username), String(balance));
}

// Định nghĩa danh sách game đầy đủ kèm thể loại (genre)
// Thêm vào đầu script.js, sau phần khai báo const games = [...]
const gamePageMap = {
  "GTA V": "gta5",
  "EA FC 25": "eafc25",
  "Black Myth Wukong": "blackmyth",
  "Counter-Strike 2": "cs2",
  "Genshin Impact": "genshin",
  "Call of Duty®: Black Ops III": "codbo3",
  Rust: "rust",
  Terraria: "terraria",
  ICARUS: "icarus",
  "Forza Horizon 6": "forzahorizon6",
  "PUBG: BATTLEGROUNDS": "pubg",
  "Battlefield™ 6": "battlefield6",
  Squad: "squad",
  "Marvel Rivals": "marvelrivals",
  Windrose: "windrose",
  Palworld: "palworld",
  "LEGO® Batman™: Legacy of the Dark Knight": "legobatman",
  "Marvel's Spider-Man: Miles Morales": "spidermanmm",
  "Wuthering Waves": "wutheringwaves",
  "ELDEN RING": "eldenring",
  Subnautica: "subnautica",
  "Teamfight Tactics": "tft",
  "Arena Of Valor": "aov",
  "NBA 2K26": "nba2k26",
  "Gamble With Your Friends": "gamblewithfriends",
  "Subnautica: Below Zero": "belowzero",
  "Nine Sols": "ninesols",
  MISERY: "misery",
  Phasmophobia: "phasmophobia",
  "Everything is Vampires": "everythingisvampires",
  "Kerbal Space Program": "kerbal",
  "Space Haven": "spacehaven",
  "Everything is Crab: The Animal Evolution Roguelite": "everythingcrab",
  "RV There Yet?": "rvthereyet",
  "Deep Rock Galactic": "deeprock",
  "Smalland: Survive the Wilds": "smalland",
  "EA Play": "eaplay",
  YAPYAP: "yapyap",
  "Far Cry® 5": "farcry5",
  "World War Z": "worldwarz",
  "The Outer Worlds": "outerworlds",
  "Shovel Knight: Treasure Trove": "shovelknight",
  "Age of Empires": "aoe",
  eFootball: "efootball",
  "Football, Tactics & Glory": "footballtactics",
  "Kopanito All-Stars Soccer": "kopanito",
  "Football Drama": "footballdrama",
  "Street Power Football": "streetpowerfootball",
  "Football Manager 2021 Touch - Unlimited Scouting": "footballmanager2021",
  "90 Minute Fever - Online Football (Soccer) Manager": "90minutefever",
  "Pro 11 - Football Manager Game": "pro11",
  "Dream League Soccer": "dreamleaguesoccer",
  "Final Soccer VR": "finalsoccervr",
  "Madden NFL 24": "maddennfl24",
  "FC Online": "fconline",
  "Wreckfest - Đua Xe Đâm Va": "wreckfest",
  "Project CARS 2": "projectcars2",
  "F1 2020": "f12020",
  "Asphalt 8: Airborne": "asphalt8",
  "Trackmania® Turbo": "trackmaniacturbo",
  "Assetto Corsa Competizione": "assettocorsacomp",
  "GRID Autosport": "gridautosport",
  "TrackMania² Valley": "trackmania2valley",
  "Burnout™ Paradise Remastered": "burnoutparadise",
  "Sonic Racing: CrossWorlds": "sonicracingcrossworlds",
  "Real Racing 3": "realracing3",
  "Hotshot Racing": "hotshotracing",
  "Forza Motorsport": "forzamotorsport",
  "WRC Generations – The FIA WRC Official Game": "wrcgenerations",
  "DiRT Rally 2.0": "dirtrally2",
  "Need for Speed™ Heat": "needforspeedheat",
  "Forza Horizon 4": "forzahorizon4",
  "Forza Horizon 5": "forzahorizon5",
  "Assetto Corsa": "assettocorsa",
  "Sekiro: Shadows Die Twice": "sekiro",
  "The Witcher 3: Wild Hunt": "witcher3",
  Minecraft: "minecraft",
  "The Elder Scrolls V Skyrim Special Edition": "skyrim",
  "Disco Elysium - The Final Cut": "discoelysium",
  Valorant: "valorant",
  "Tom Clancy's Rainbow Six Siege": "r6siege",
  "Overwatch®": "overwatch2",
  "Apex Legends™": "apexlegends",
  "Mafia Definitive Edition": "mafia",
  "Legend of Leagues": "legendofleagues",
  "Far Far West": "farfarwest",
  "StarCraft II": "starcraft2",
  "Age of Empires II: Definitive Edition": "aoe2",
};

function getGamePageUrl(gameName) {
  const id = gamePageMap[gameName];
  if (id) return `./game/game.html?game=${id}`; // chỉnh đường dẫn cho đúng cấu trúc thư mục
  return null;
}
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
    name: "Call of Duty®: Black Ops III",
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
    price: "18.000đ",
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
    name: "Teamfight Tactics",
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
    price: "210.000đ",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/40/Age_of_Empires_franchise_logo.png",
    genre: "chiensuat",
  },
  {
    name: "eFootball",
    price: "Miễn phí",
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
    price: "100.000đ",
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
    price: "30.000đ",
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
    price: "Miễn phí",
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
games.forEach((game, index) => {
  game.rating = (4.3 + (index % 7) * 0.1).toFixed(1);
});

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderGames(gamesList) {
  gamesDiv.innerHTML = "";

  gamesList.forEach((game) => {
    const title = String(game.name).trim();
    const pageUrl = getGamePageUrl(title);

    const clickableOpen = pageUrl
      ? `style="cursor:pointer;" onclick="window.location.href='${pageUrl}'"`
      : "";

    gamesDiv.innerHTML += `
      <div class="game-card">
        <div ${clickableOpen}>
          <img src="${game.image}" alt="${escapeHtml(title)}">
          <div class="game-info">
            <h3 class="game-title">
              ${escapeHtml(title)}
              <span class="game-rating">⭐ ${game.rating}</span>
            </h3>
            <p class="price">${escapeHtml(game.price)}</p>
          </div>
        </div>
        <div style="padding: 0 16px 16px;">
          <button
            class="btn btn-success add-cart-btn"
            data-cart-name="${escapeHtml(title)}"
            data-cart-price="${escapeHtml(game.price)}"
            data-cart-image="${game.image}">
            Thêm vào giỏ
          </button>
        </div>
      </div>
    `;
  });
}

function setSliderVisible(isVisible) {
  if (!sliderBlock) return;

  isSliderActive = isVisible;
  sliderBlock.style.setProperty(
    "display",
    isVisible ? "block" : "none",
    "important",
  );

  if (!isVisible) {
    clearTimeout(imageTimer);
    if (player && typeof player.pauseVideo === "function") player.pauseVideo();
    return;
  }

  showMedia();
}

function showHomeView() {
  currentView = "home";

  gamesDiv.style.display = "grid";
  supportContainer.style.display = "none";

  if (infoContainer) {
    infoContainer.style.display = "none";
  }

  setSliderVisible(true);
}

function showSupportView() {
  if (!gamesDiv || !supportContainer) return;

  currentView = "support";

  gamesDiv.style.display = "none";
  supportContainer.style.display = "block";

  if (infoContainer) {
    infoContainer.style.display = "none";
  }

  setSliderVisible(false);
  window.location.hash = "ho-tro";
}

function showInfoView() {
  currentView = "info";

  gamesDiv.style.display = "none";
  supportContainer.style.display = "none";

  if (infoContainer) {
    infoContainer.style.display = "block";
  }

  setSliderVisible(false);
}

function showGamesView() {
  if (!gamesDiv || !supportContainer) return;
  currentView = "store";

  gamesDiv.style.display = "grid";
  supportContainer.style.display = "none";

  if (infoContainer) {
    infoContainer.style.display = "none";
  }

  setSliderVisible(false);
}

let mainPageInitialized = false;

function initMainPage() {
  if (mainPageInitialized || !gamesDiv) return;
  mainPageInitialized = true;

  const storeBtn = document.getElementById("storeBtn");
  const searchInput = document.getElementById("searchInput");
  const supportBtn = document.getElementById("supportBtn");
  const homeBtn = document.getElementById("homeBtn");
  const infoBtn = document.getElementById("infoBtn");
  const genreDropdown = document.getElementById("genreDropdown");

  function renderGamesFromHash() {
    const hash = window.location.hash;
    if (hash.startsWith("#genre-")) {
      const genre = hash.slice(7);
      if (genre === "all") {
        renderGames(games);
      } else {
        renderGames(games.filter((game) => game.genre === genre));
      }
      showGamesView();
      return true;
    }
    return false;
  }
  window.onload = function () {
    if (window.location.hash === "#ho-tro") {
      showSupportView();
    } else if (window.location.hash === "#store") {
      renderGames(games);
      showGamesView();
    } else if (
      window.location.hash === "#danh-gia" ||
      window.location.hash === "#lich-su"
    ) {
      const currentUser = getCurrentUser();
      if (!currentUser) {
        alert("Vui lòng đăng nhập để xem thư viện game!");
        renderGames(games);
        showHomeView();
      } else {
        showInfoView();
        renderPurchasedGames();
      }
    } else if (!renderGamesFromHash()) {
      renderGames(games);
      showHomeView();
    }
  };

  if (storeBtn) {
    storeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      showGamesView();
      renderGames(games);
    });
  }

  if (genreDropdown && searchInput) {
    const dropdownLinks = genreDropdown.querySelectorAll("a");
    dropdownLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const selectedGenre = this.getAttribute("data-genre");
        searchInput.value = "";
        showGamesView();

        if (selectedGenre === "all") {
          renderGames(games);
        } else {
          renderGames(games.filter((game) => game.genre === selectedGenre));
        }
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener("keyup", function () {
      const keyword = searchInput.value.toLowerCase();
      document.querySelectorAll(".game-card").forEach((card) => {
        const title = card
          .querySelector(".game-title")
          .textContent.toLowerCase();
        card.style.display = title.includes(keyword) ? "block" : "none";
      });
    });
  }

  if (supportBtn && supportContainer) {
    supportBtn.addEventListener("click", function (e) {
      e.preventDefault();
      showSupportView();
    });
  }

  if (homeBtn) {
    homeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      renderGames(games);
      showHomeView();
    });
  }

  if (infoBtn) {
    infoBtn.addEventListener("click", function (e) {
      e.preventDefault();

      const currentUser = getCurrentUser();

      if (!currentUser) {
        alert("Vui lòng đăng nhập để xem thư viện game!");
        return;
      }

      showInfoView();
      renderPurchasedGames();
    });
  }
}

document.addEventListener("navbarReady", initMainPage, { once: true });
if (document.getElementById("storeBtn")) {
  initMainPage();
}

//  HIỆU ỨNG ĐÓNG/MỞ CHO PHẦN FAQ HỖ TRỢ
const faqQuestions = document.querySelectorAll(".sp-faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;
    item.classList.toggle("active");

    const span = question.querySelector("span");
    if (item.classList.contains("active")) {
      span.textContent = "−";
    } else {
      span.textContent = "+";
    }
  });
});

const mediaList = [
  // VIDEO
  {
    type: "video",
    id: "u83VdXAVq08",
  },

  // ẢNH
  {
    type: "image",
    src: "https://game8.vn/media/202208/images/wukong-3195.jpg",
  },

  {
    type: "image",
    src: "https://motionbgs.com/media/6470/black-myth-wukong.jpg",
  },

  {
    type: "video",
    id: "592If-pP2_A",
  },

  {
    type: "image",
    src: "https://cdn1.epicgames.com/item/9773aa1aa54f4f7b80e44bef04986cea/EGS_RocketLeague_PsyonixLLC_S1_2560x1440-4c231557ef0a0626fbb97e0bd137d837",
  },

  {
    type: "image",
    src: "https://wallpaperaccess.com/full/2403437.jpg",
  },

  {
    type: "video",
    id: "14FfhVQrrAo",
  },

  {
    type: "image",
    src: "https://genk.mediacdn.vn/2019/2/12/1-15499467961211158891152.jpg",
  },

  {
    type: "image",
    src: "https://i.pinimg.com/originals/cf/a8/21/cfa821cd8213ac508b9fe968d1dbcb43.jpg",
  },

  {
    type: "video",
    id: "QdBZY2fkU-0",
  },

  {
    type: "image",
    src: "https://images.hdqwalls.com/download/gta-6-game-5k-cn-1920x1200.jpg",
  },

  {
    type: "image",
    src: "https://images.hdqwalls.com/wallpapers/gta-6-game-2026-94.jpg",
  },

  {
    type: "video",
    id: "4ViBoFiHYlI",
  },

  {
    type: "image",
    src: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/10/dead-by-dayllight-movie-update.jpg",
  },

  {
    type: "image",
    src: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/07/dead-by-daylight-survivors-official-artwork.jpeg",
  },

  {
    type: "video",
    id: "WS9aGypJPJ4",
  },

  {
    type: "image",
    src: "https://www.insidexbox.de/wp-content/uploads/2025/08/bf6-phantom.webp",
  },

  {
    type: "image",
    src: "https://cdn.mos.cms.futurecdn.net/2mC9MmkMN6oKTUhgYbYe28.jpg",
  },

  {
    type: "video",
    id: "LTqczRnNqDc",
  },

  {
    type: "image",
    src: "https://image.api.playstation.com/vulcan/img/rnd/202011/0714/cKD24Gt2wgE2FeMf5HfqONeV.jpg",
  },

  {
    type: "image",
    src: "https://4kwallpapers.com/images/wallpapers/marvels-spider-man-3840x2160-12434.jpeg",
  },
];

let currentMedia = 0;
let player = null;
let imageTimer = null;
let isSliderActive = true;

function hasSlider() {
  return document.getElementById("media") !== null;
}

function onYouTubeIframeAPIReady() {
  if (hasSlider() && isSliderActive) {
    showMedia();
  }
}

function showMedia() {
  if (!hasSlider() || !isSliderActive) return;

  clearTimeout(imageTimer);
  if (typeof mediaList === "undefined" || mediaList.length === 0) return;

  const media = mediaList[currentMedia];
  const container = document.getElementById("media");
  if (!container) return;

  if (media.type === "video") {
    if (typeof YT === "undefined" || !YT.Player) return;
    container.innerHTML = `<div id="player"></div>`;
    player = new YT.Player("player", {
      videoId: media.id,
      playerVars: { autoplay: 1, mute: 1 },
      events: { onStateChange: onPlayerStateChange },
    });
  } else {
    container.innerHTML = `<img src="${media.src}">`;
    imageTimer = setTimeout(() => {
      if (isSliderActive) nextMedia();
    }, 5000);
  }
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED && isSliderActive) {
    nextMedia();
  }
}

function nextMedia() {
  if (!hasSlider() || !isSliderActive || typeof mediaList === "undefined")
    return;
  currentMedia++;
  if (currentMedia >= mediaList.length) currentMedia = 0;
  showMedia();
}

function prevMedia() {
  if (!hasSlider() || !isSliderActive || typeof mediaList === "undefined")
    return;
  currentMedia--;
  if (currentMedia < 0) currentMedia = mediaList.length - 1;
  showMedia();
}

// BỘ TỰ ĐỘNG THEO DÕI ĐỂ ẨN/HIỆN VÀ TẮT SLIDER CHẠY NGẦM
function startWatchingSupportPage() {
  const supportContainer = document.getElementById("support-container");

  if (!supportContainer) return;

  // Hàm thực hiện tắt/bật slider dựa trên trạng thái ẩn hiện của form Hỗ Trợ
  function checkAndToggle() {
    // Nếu khu vực Hỗ trợ ĐANG HIỆN (không phải display: none)
    if (supportContainer.style.display !== "none") {
      setSliderVisible(false);
    }
    // Nếu khu vực Hỗ trợ ĐANG ẨN (Trang chủ đang hiện)
    else {
      if (currentView === "home" && !isSliderActive) {
        setSliderVisible(true);
      }
    }
  }

  // Chạy kiểm tra ngay lần đầu load trang
  checkAndToggle();

  // Cấu hình bộ theo dõi sự thay đổi thuộc tính style của trang Hỗ Trợ
  const observer = new MutationObserver(checkAndToggle);
  observer.observe(supportContainer, {
    attributes: true,
    attributeFilter: ["style"],
  });
}

// Kích hoạt khi toàn bộ tài nguyên trang sẵn sàng
window.addEventListener("load", () => {
  startWatchingSupportPage();
  if (hasSlider() && isSliderActive) {
    if (
      typeof mediaList !== "undefined" &&
      mediaList[currentMedia] &&
      mediaList[currentMedia].type !== "video"
    ) {
      showMedia();
    }
  }
});

// giỏ hàng

// Nap tien
document.addEventListener("click", function (e) {
  if (e.target.id !== "confirmDeposit") return;

  const amountInput = document.getElementById("depositAmount");
  const rawAmount = amountInput
    ? amountInput.value
    : prompt("Nhập số tiền muốn nạp:");
  const amount = Number(rawAmount);

  if (!amount || amount <= 0) {
    alert("Nhập số tiền hợp lệ");
    return;
  }

  const currentUser = getCurrentUser();

  if (!currentUser) {
    alert("Vui lòng đăng nhập trước khi nạp tiền");
    return;
  }

  const balance = getUserBalance(currentUser) + amount;
  setUserBalance(balance, currentUser);

  alert("Nạp tiền thành công!");
  location.reload();
});

// Danh gia
function loadReviews() {
  const reviewList = document.getElementById("reviewList");
  if (!reviewList) return;

  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviewList.innerHTML = "";

  reviews.forEach((review) => {
    reviewList.innerHTML += `
            <div class="review-item">
                <div class="review-name">${review.name}</div>
                <div class="review-star">${"⭐".repeat(review.star)}</div>
                <div class="review-text">${review.text}</div>
            </div>
        `;
  });
}

const sendReviewBtn = document.getElementById("sendReviewBtn");

if (sendReviewBtn) {
  sendReviewBtn.addEventListener("click", () => {
    const name = document.getElementById("reviewName").value.trim();
    const star = document.getElementById("reviewStar").value;
    const text = document.getElementById("reviewText").value.trim();

    if (!name || !text) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.unshift({ name, star, text });
    localStorage.setItem("reviews", JSON.stringify(reviews));

    document.getElementById("reviewName").value = "";
    document.getElementById("reviewText").value = "";
    loadReviews();
  });
}

loadReviews();

// Gio hang
let cart = JSON.parse(localStorage.getItem(getCartKey())) || [];

function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  if (!cartCount) return;

  cart = JSON.parse(localStorage.getItem(getCartKey())) || [];
  cartCount.innerText = cart.length;
}

function openCartModal() {
  document.getElementById("cartSidebar").style.display = "flex";
  renderCart();
}

document.addEventListener("click", function (e) {
  const addCartBtn = e.target.closest(".add-cart-btn");

  if (addCartBtn) {
    addToCart(
      addCartBtn.dataset.cartName,
      addCartBtn.dataset.cartPrice,
      addCartBtn.dataset.cartImage,
    );
    return;
  }

  const openCartBtn = e.target.closest("#openCartBtn");

  if (openCartBtn) {
    openCartModal();
  }
});

function addToCart(name, price, image) {
  // chặn nếu đã mua
  if (isGamePurchased(name)) {
    alert("Bạn đã sở hữu game này rồi!");
    return;
  }

  const exists = cart.find((item) => item.name === name);

  if (exists) {
    alert("Game này đã có trong giỏ hàng");
    return;
  }

  cart.push({ name, price, image });
  localStorage.setItem(getCartKey(), JSON.stringify(cart));

  updateCartCount();

  const cartSidebar = document.getElementById("cartSidebar");
  if (cartSidebar && cartSidebar.style.display !== "none") {
    renderCart();
  }
}

function parsePrice(price) {
  if (price === "Miễn phí") {
    return 0;
  }
  return Number(
    String(price).replaceAll(".", "").replace("đ", "").replace("Ä‘", ""),
  );
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  if (!cartItems || !cartTotal) return;

  const userBalance = document.getElementById("userBalance");

  cart = JSON.parse(localStorage.getItem(getCartKey())) || [];
  cartItems.innerHTML = "";

  let total = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="text-muted mb-0">Giỏ hàng trống</p>`;
  }

  cart.forEach((item, index) => {
    total += parsePrice(item.price);

    cartItems.innerHTML += `
<div class="cart-item">

    <img src="${item.image}" class="cart-img">

    <div class="cart-info">
        <div class="cart-name">${item.name}</div>
        <div class="cart-price">${item.price}</div>
    </div>

    <button class="btn btn-sm btn-danger"
        onclick="removeCartItem(${index})">
        X
    </button>

</div>
`;
  });

  cartTotal.innerText = total.toLocaleString("vi-VN") + "đ";

  if (userBalance) {
    const balance = getUserBalance();
    userBalance.innerText = balance.toLocaleString("vi-VN") + "đ";
  }

  updateCartCount();
}

function removeCartItem(index) {
  cart.splice(index, 1);
  localStorage.setItem(getCartKey(), JSON.stringify(cart));
  renderCart();
}

function clearCart() {
  localStorage.removeItem(getCartKey());
  cart = [];
  renderCart();
}

function checkoutCart() {
  cart = JSON.parse(localStorage.getItem(getCartKey())) || [];

  if (cart.length === 0) {
    alert("Giỏ hàng trống");
    return;
  }

  const total = cart.reduce((sum, item) => sum + parsePrice(item.price), 0);
  const currentUser = getCurrentUser();

  if (!currentUser) {
    alert("Vui lòng đăng nhập trước khi thanh toán");
    return;
  }

  let balance = getUserBalance(currentUser);

  if (balance < total) {
    alert("Số dư không đủ, vui lòng nạp thêm tiền");
    return;
  }
  cart.forEach((item) => {
    if (isGamePurchased(item.name)) {
      return; // đã mua rồi thì bỏ qua
    }

    addPurchasedGame({
      name: item.name,
      image: item.image,
    });
  });

  balance -= total;
  setUserBalance(balance, currentUser);
  localStorage.removeItem(getCartKey());
  cart = [];
  renderCart();

  alert("Thanh toán thành công!\nTài khoản game đã được gửi.");
  location.reload();
}

updateCartCount();
document.addEventListener("click", function (e) {
  if (e.target.id === "closeCartBtn") {
    document.getElementById("cartSidebar").style.display = "none";
  }
});

function getPurchasedGames(username = getCurrentUser()) {
  return JSON.parse(localStorage.getItem(getPurchasedKey(username))) || [];
}

function renderPurchasedGames() {
  const container = document.getElementById("purchaseList");
  if (!container) return;

  const currentUser = getCurrentUser();

  // CHƯA ĐĂNG NHẬP -> KHÔNG HIỂN THỊ GÌ
  if (!currentUser) {
    container.innerHTML = "<p>Vui lòng đăng nhập để xem thư viện game.</p>";
    return;
  }

  const list = getPurchasedGames(currentUser);

  if (!list || list.length === 0) {
    container.innerHTML = "<p>Thư viện trống.</p>";
    return;
  }

  container.innerHTML = list
    .map(
      (game) => `
      <div class="purchased-item">
        <img src="${game.image}" />
        <div>
          <h3>${game.name}</h3>
        </div>
      </div>
    `,
    )
    .join("");
}

function addPurchasedGame(game) {
  const key = getPurchasedKey();
  let list = JSON.parse(localStorage.getItem(key)) || [];

  list.unshift(game);

  localStorage.setItem(key, JSON.stringify(list));
}

function isGamePurchased(gameName) {
  const currentUser = getCurrentUser();

  // chưa login thì KHÔNG BAO GIỜ coi là đã mua
  if (!currentUser) return false;

  const list = getPurchasedGames(currentUser);
  return list.some((game) => game.name === gameName);
}

function logout() {
  localStorage.removeItem("currentUser");
  localStorage.removeItem(getCartKey());
  cart = [];
  updateCartCount();
  location.reload();
}

function clearSessionData() {
  cart = [];
  currentView = "home";
}
window.addEventListener("load", () => {
  cart = JSON.parse(localStorage.getItem(getCartKey())) || [];
  updateCartCount();
  renderCart();
});
