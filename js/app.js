const titleEl = document.querySelector(".title");
const numEl = document.querySelector(".num");
const menWrapper = document.querySelector(".menu-wrapper");

let now = new Date();

setInterval(() => {
  let now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sekund = now.getSeconds();
  let year = now.getFullYear();
  let month = now.getMonth();
  let day = now.getDay();
  //   dateEl.textContent = `${year}/${month}/${day}`;
  if (sekund <= 9) {
    numEl.textContent = `${hour}:${min}:0${sekund}`;
  } else {
    numEl.textContent = `${hour}:${min}:${sekund}`;
  }

  if (min <= 9) {
    numEl.textContent = `${hour}:0${min}:${sekund}`;
  } else {
    numEl.textContent = `${hour}:${min}:${sekund}`;
  }
}, 1000);

function menuControl() {
  menWrapper.innerHTML = `
    <div onclick="menuBtnController(this)" class="alarm menu-border">
    <img  class="size" src="./image/budilnik.svg" alt="alarm" />
    </div>
    <div onclick="menuBtnController(this)" class="clock menu-border">
    <img class="size" src="./image/clock.svg" alt="clock" />
    </div>
    <div onclick="menuBtnController(this)" class="timer menu-border">
    <img class="size" src="./image/timer.svg" alt="timer" />
    </div>
    <div onclick="menuBtnController(this)" class="sekundomer menu-border">
    <img class="size" src="./image/sekundomer.svg" alt="sekundomer" />
    </div>
    </div>
    </div>
    `;
}
menuControl();

function menuBtnController(element) {
  const menuBtn = document.querySelectorAll(".menu-border");
  menuBtn.forEach((item) => item.classList.add("active"));
  element.classList.remove("active")
}
menuBtnController();
