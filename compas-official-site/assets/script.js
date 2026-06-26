const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const reservationForm = document.querySelector("#reservationForm");
const formNote = document.querySelector("#formNote");

if (reservationForm && formNote) {
  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(reservationForm);
    const name = data.get("name");
    const date = data.get("date");
    const time = data.get("time");
    const party = data.get("party");
    formNote.textContent = `${name}，已收到 ${date} ${time}、${party} 位的訂位展示資料。正式版可串接 Google Form、LINE 或後台資料庫。`;
  });
}
