const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupText = document.getElementById("popup-text");
const closeBtn = document.getElementById("close");

const images = [
  {
    src: "images/01.jpg",
    text: "Text",
    x: 120,
    y: 100,
    rotate: "-3deg"
  },
  {
    src: "images/02.jpg",
    text: "Text",
    x: 800,
    y: 320,
    rotate: "2deg"
  },
  {
    src: "images/03.jpg",
    text: "Text",
    x: 200,
    y: 700,
    rotate: "-5deg"
  },
  {
    src: "images/04.jpg",
    text: "Text",
    x: 520,
    y: 1100,
    rotate: "4deg"
  }
];

function renderImages() {
  images.forEach(item => {
    const div = document.createElement("div");
    div.className = "scrap-item";
    div.style.left = `${item.x}px`;
    div.style.top = `${item.y}px`;
    div.style.setProperty("--rotate", item.rotate);

    const img = document.createElement("img");
    img.src = item.src;
    img.dataset.text = item.text;

    const sticker = document.createElement("img");
    sticker.src = "images/sticker-heart.png";
    sticker.className = "sticker";

    div.appendChild(img);
    div.appendChild(sticker);
    gallery.appendChild(div);
  });
}

renderImages();

// Popup logic
gallery.addEventListener("click", (e) => {
  const img = e.target.closest(".scrap-item img");
  if (img) {
    popupText.textContent = img.dataset.text;
    popup.classList.remove("hidden");
  }
});

closeBtn.addEventListener("click", () => popup.classList.add("hidden"));
