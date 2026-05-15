const storeBtn = document.getElementById("storeBtn");
const gamesDiv = document.getElementById("games");


storeBtn.addEventListener("click", function(e){

    // chặn reload trang
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