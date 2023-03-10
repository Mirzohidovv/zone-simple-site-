const headerburger = document.querySelector(".header-burger");
const headerMenu = document.querySelector(".header-menu");

headerburger.addEventListener("click", () => {
  if (headerMenu.style.display != "flex") {
    headerMenu.style.display = "flex";
  } else {
    headerMenu.style.display = "none";
  }
});



