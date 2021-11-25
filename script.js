"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");

const openModal = function (e) {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Add the click handlers to both the closeModal button and the overlay
// Do not use closeModadl(), it will execute immediately.
for (let i = 0; i < 3; i++) {
  btnShowModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

// Pass the event parameter to the function, using e.
// e contains event information.
document.body.addEventListener("keydown", function (e) {
  !modal.classList.contains("hidden") && e.code === "Escape"
    ? closeModal()
    : console.log("A button other than Esc was typed.");
});
