const pages = document.querySelectorAll(".page");
let currentPage = 0;

function nextPage() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.add("flipped");
        currentPage++;
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        pages[currentPage].classList.remove("flipped");
    }
}
const music = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicButton.textContent = "❚❚ Music";
        musicButton.classList.add("playing");
    } else {
        music.pause();
        musicButton.textContent = "♪ Music";
        musicButton.classList.remove("playing");
    }
}