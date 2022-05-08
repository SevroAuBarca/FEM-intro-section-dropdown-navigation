const exitMenu = document.querySelector(".header__navbar__exit");
const openMenu = document.querySelector(".header__hamburguer");
const navBar = document.querySelector(".header__navbar");
const arrow = [...document.querySelectorAll(".details__summary")];
openMenu.addEventListener("click", () => {
  navBar.classList.toggle("open");
});

exitMenu.addEventListener("click", () => {
  navBar.classList.toggle("open");
});

arrow.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.classList.contains("down")) {
      el.classList.remove("down");
      el.classList.add("up");
    } else {
      el.classList.remove("up");
      el.classList.add("down");
    }
  });
});
