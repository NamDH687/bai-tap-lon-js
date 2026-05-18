const storeBtn = document.getElementById("storeBtn");
const gamesDiv = document.getElementById("games");


storeBtn.addEventListener("click", function(e){

    e.preventDefault();

    const games = [
        {
            name:"GTA V",
            price:"500.000đ",
            image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg"
        },

        {
            name:"EA FC 25",
            price:"1.200.000đ",
            image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2669320/header.jpg"
        },

        {
            name:"Black Myth Wukong",
            price:"1.300.000đ",
            image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg"
        },

        {
            name:"Counter-Strike 2",
            price:"Miễn phí",
            image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1749053861720/header.jpg"
        },

        {
            name:"Genshin Impact",
            price:"Miễn phí",
            image:"https://tse3.mm.bing.net/th/id/OIP.QOej3091XMbEqB5P8o2O9AHaHa?pid=Api&P=0&h=180"
        },

        {
            name:"Call of Duty®: Black Ops III ",
            price:"475.000đ",
            image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/311210/header.jpg?t=1748022663"
        },

        {
            name:"Rust",
            price:"500.000đ",
            image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg?t=1778597738"
        },

        {
            name:"Terraria",
            price:"142.000đ",
            image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg?t=1769844435"
        },

        {
            name:"ICARUS",
            price:"445.000đ",
            image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1149460/header.jpg?t=1772745915"

        },

        {
            name:"Forza Horizon 6",
            price:"1.499.000đ",
            image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2483190/27abb1584a118d50d0e3950fd48d557c51981db7/header.jpg?t=1778870245"

        },

        {
            name:"PUBG: BATTLEGROUNDS",
            price:"Miễn phí",
            image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/578080/841ea38bc58cabb70aef65365cf50bc2d79329d9/header.jpg?t=1778634253"

        },

        {
            name:"Battlefield™ 6",
            price:"1.299.000đ",
            image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2807960/c12d12ce3c7d217398d3fcad77427bfc9d57c570/header.jpg?t=1778612637"

        },

        {
            name:"Squad",
            price:"658.500đ",
            image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/393380/aa36f6d31a74ca6b1949f35464305ac105e83c52/header_alt_assets_8.jpg?t=1778698936"

        },

        {
            name:"Marvel Rivals",
            price:"Miễn phí",
            image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2767030/dabf1f6f9513340c90c154b3cf02c9661aeaeecb/header_alt_assets_7.jpg?t=1778835753"

        },

        {
            name:"Windrose",
            price:"385.000đ",
            image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3041230/7e838d87d787735d5d29d72777c5ee55653dfb2b/header.jpg?t=1777529081"

        },

        {
            name:"Palworld",
            price:"385.000đ",
            image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1623730/058bd87dc17a7179e07c446aa64d0574ca43ab9d/header.jpg?t=1773936597"

        },

        {
            name:"LEGO® Batman™: Legacy of the Dark Knight",
            price:"1.490.000đ",
            image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215200/a07a9a6c0c9c1225f5b260b4f29fe40e6f099f6b/header.jpg?t=1778617453"

        },

        {
            name:"Marvel’s Spider-Man: Miles Morales",
            price:"1.159.000đ",
            image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817190/header.jpg?t=1763569499"

        },

        {
            name:"Wuthering Waves",
            price:"Miễn phí",
            image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3513350/86b44bb422a013c1510f029ca79ea7c4a8ffb9e8/header.jpg?t=1777505458"

        },

        {
            name:"ELDEN RING",
            price:"990.000đ",
            image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg?t=1767883716"

        }
    ];


    gamesDiv.innerHTML = "";


    games.forEach(game => {

        gamesDiv.innerHTML += `
            <div class="game-card">

                <img src="${game.image}">

                <div class="game-info">
                    <div class="game-title">${game.name}</div>
                    <div class="price">${game.price}</div>
                </div>

            </div>
        `;

    });

});