const hamburgerBtn = document.querySelector(".js-hamburger");
const gNav = document.querySelector(".l-header__nav");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  gNav.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1201) {
    hamburgerBtn.classList.remove("active");
    gNav.classList.remove("active");
  }
});
