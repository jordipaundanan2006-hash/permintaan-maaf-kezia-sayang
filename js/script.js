// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#message").onclick = () => {
  navbarNav.classList.toggle("active");
};

const message = document.querySelector("#message");

document.addEventListener("click", function (e) {
  if (!message.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const playButton = document.getElementById("playMusic");
const music = document.getElementById("music");

playButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (music.paused) {
        music.play();
        playButton.textContent = "🎵 Sedang Memutar...";
    } else {
        music.pause();
        playButton.textContent = "▶ Putar Lagi";
    }
});

const searchButton = document.getElementById("search-button");
const heartButton = document.getElementById("heart-button");

const searchPopup = document.getElementById("search-popup");
const heartPopup = document.getElementById("heart-popup");


// Search
searchButton.addEventListener("click", function (e) {
    e.preventDefault();

    searchPopup.classList.add("active");
});


// Heart
heartButton.addEventListener("click", function (e) {
    e.preventDefault();

    heartPopup.classList.add("active");
});


// Tombol X
document.querySelectorAll(".popup-close").forEach(function (button) {

    button.addEventListener("click", function () {

        const popupId = button.dataset.close;

        document.getElementById(popupId)
            .classList.remove("active");

    });

});


// Klik area luar popup untuk menutup
document.querySelectorAll(".popup").forEach(function (popup) {

    popup.addEventListener("click", function (e) {

        if (e.target === popup) {
            popup.classList.remove("active");
        }

    });

});