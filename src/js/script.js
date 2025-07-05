"use strict";
window.addEventListener("DOMContentLoaded", function () {
  //*поочередный показ фото*\\
  let photos = Array.from(document.querySelectorAll(".photo"));
  let delayPhoto = 2000;

  photos.sort(function () {
    return Math.random() - 0.5;
  });

  setTimeout(function () {
    for (let i = 0; i < photos.length; i++) {
      (function (i) {
        setTimeout(function () {
          console.log(photos[i]);
          photos[i].classList.toggle("animation-photo");
        }, delayPhoto * i);
      })(i);
    }
  }, 7000);
});
