let menu_bar = document.querySelector(".menu-bar");
let nav = document.querySelector(".links");
let overlay = document.querySelector(".overlay");
let all_navigaters = document.querySelectorAll(".nav-el");

menu_bar?.addEventListener("click", function () {
  menu_bar.classList.toggle("active");
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
});

all_navigaters?.forEach(function (i) {
  i.addEventListener("click", function () {
    menu_bar.classList.remove("active");
    nav.classList.remove("active");
    overlay.classList.remove("active");
  });
});
console.log(all_navigaters);
