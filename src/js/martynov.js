"use strict";
window.addEventListener("DOMContentLoaded", () => {
  let treeWrap = document.querySelector(".tree__wrap");
  let treeElement = document.querySelectorAll(".tree__elem");

  treeWrap.addEventListener("mousedown", function (event) {
    let target = event.target;
    let bigImage = target.firstElementChild;
    console.log(bigImage);

    if (!target.closest(".tree__elem")) return;

    bigImage.style.display = "";
    bigImage.classList.add("tree__elem-img");

    treeWrap.addEventListener("mouseup", function () {
      bigImage.style.display = "none";
      bigImage.classList.remove("tree__elem-img");
    });
  });
});
