const exitMenu = document.querySelector(".header__navbar__exit");
const openMenu = document.querySelector(".header__hamburguer");
const navBar = document.querySelector(".header__navbar");

openMenu.addEventListener("click", () => {
  navBar.classList.toggle("open");
});

exitMenu.addEventListener("click", () => {
  navBar.classList.toggle("open");
});
