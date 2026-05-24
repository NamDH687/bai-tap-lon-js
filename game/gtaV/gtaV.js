const images = [
    "https://phongnet.com/wp-content/uploads/2019/11/cau-hinh-gta-5.jpg",
    "https://cellphones.com.vn/sforum/wp-content/uploads/2023/04/cau-hinh-choi-gta-5-1.gif",
    "https://longhungpc.vn/media/news/28-cau-hinh-choi-gta-5-1.jpg",
    "https://hoanghapc.vn/media/news/2505_cau-hinh-choi-gta-v-3.jpg",
    "https://photo.znews.vn/w660/Uploaded/spivovxi/2021_09_07/240443739_2945559315702740_2995327324342774909_n.jpg",
    "https://inkythuatso.com/uploads/thumbnails/800/2022/03/842463-17-14-31-57.jpg",
    "https://cdn.tgdd.vn/2020/05/content/nhanh-tay-nhan-ngay-gta-v-tri-gia-450000-vnd-dang-mien-phi-tren-epic-game-store-3-800x450.jpg",
    "https://play-lh.googleusercontent.com/UYs2-rVysk0Bsy8I--vLv4giPs98RIasmQzz9Lo4YBuwU8w0xHO8KW2d5BVt00YqC6s=w526-h296-rw",
    "https://file.hstatic.net/1000231532/file/mua_game_grand_theft_auto_v_gta_5_ps5_gia_re_7a5748ec2f44433db9544dade752f263_grande.jpg",
    "https://play-lh.googleusercontent.com/1X5mKSNLxm5at6mSEwCaUCPGYG_F5oncon5SqvaEfQew1_cNrh_mrxLcmJ65KvdGc5dhRvgCCApMkuE_Rq49aw=w526-h296-rw",
    "https://images6.alphacoders.com/553/553248.jpg",
    "https://i.vietgiaitri.com/2014/10/11/gta-5-voi-nhung-buc-anh-cuc-hot-phan-2-9e22ab.jpg"
];

const total = images.length;
let current = 0;
let animating = false;

const wrap = document.getElementById('sliderWrap');
const dotsEl = document.getElementById('dots');
const thumbsEl = document.getElementById('thumbs');

// Inject slides TRƯỚC nút prevBtn
const prevBtn = document.getElementById('prevBtn');
const slides = images.map((src, i) => {
    const div = document.createElement('div');
    div.className = 'slide ' + (i === 0 ? 'active' : 'next');
    div.id = 'slide-' + i;
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'GTA V ảnh ' + (i + 1);
    div.appendChild(img);
    wrap.insertBefore(div, prevBtn); // chèn trước nút, nút luôn ở trên cùng
    return div;
});

// Dots & thumbnails
images.forEach((src, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goTo(i);
    dotsEl.appendChild(dot);

    const th = document.createElement('div');
    th.className = 'thumb' + (i === 0 ? ' active' : '');
    const tImg = document.createElement('img');
    tImg.src = src;
    tImg.alt = '';
    th.appendChild(tImg);
    th.onclick = () => goTo(i);
    thumbsEl.appendChild(th);
});

function updateUI() {
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === current));
    document.querySelectorAll('.thumb').forEach((t, i) => t.classList.toggle('active', i === current));
    const activeThumb = thumbsEl.querySelectorAll('.thumb')[current];
    if (activeThumb) activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

function goTo(next) {
    if (animating || next === current) return;
    animating = true;
    const dir = next > current ? 1 : -1;
    const prev = current;
    current = next;

    slides[next].className = 'slide';
    slides[prev].className = 'slide active';

    requestAnimationFrame(() => {
        slides[prev].classList.add(dir > 0 ? 'slide-out-left' : 'slide-out-right');
        slides[next].style.transform = dir > 0 ? 'translateX(100%)' : 'translateX(-100%)';
        slides[next].style.opacity = '0';
        slides[next].classList.add(dir > 0 ? 'slide-in-left' : 'slide-in-right');

        setTimeout(() => {
            slides.forEach((s, i) => {
                s.className = 'slide';
                s.style.transform = '';
                s.style.opacity = '';
                if (i === current) s.classList.add('active');
                else if (i < current) s.classList.add('prev');
                else s.classList.add('next');
            });
            animating = false;
            updateUI();
        }, 460);
    });
}

document.getElementById('prevBtn').onclick = () => goTo((current - 1 + total) % total);
document.getElementById('nextBtn').onclick = () => goTo((current + 1) % total);
// Tab switching
const tabs = document.querySelectorAll('.nav-tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-tab');

    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    contents.forEach(c => {
      if (c.id === target) {
        c.classList.remove('hidden');
      } else {
        c.classList.add('hidden');
      }
    });
  });
});

// Filter buttons
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});