"use strict";
let qrBtn = document.querySelectorAll(".qrBtn");
let closeWindow = document.querySelector(".closeWindow");
let qrShow = document.querySelector(".qrShow");
let overlay = document.querySelector(".overlay");

let open = function () {
  qrShow.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
let close = function () {
  qrShow.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < qrBtn.length; i++) {
  qrBtn[i].addEventListener("click", open);
}

closeWindow.addEventListener("click", close);
overlay.addEventListener("click", close);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !qrShow.classList.contains("hidden")) close();
});
