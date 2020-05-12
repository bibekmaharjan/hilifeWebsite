const body = document.querySelector("body");
const modals = document.querySelector(".modals");
const modalButton = document.querySelector(".modals-button");
const closeButton = document.querySelector(".close-button");
const scrollDown = document.querySelector(".scroll-down");

let isOpened = false;

const openModal = () => {
  modals.classList.add("is-open");
  body.style.overflow = "hidden";
};

const closeModal = () => {
  modals.classList.remove("is-open");
  body.style.overflow = "initial";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight/7 && !isOpened) {
    isOpened = true;
    scrollDown.style.display = "none";
    openModal();
  }
});

modalButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

document.onkeydown = evt => {
  evt = evt || window.event;
  evt.keyCode === 27 ? closeModal() : false;
};


