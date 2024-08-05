const hamburgerBtn = document.querySelector(".js-hamburger");
const gNav = document.querySelector(".l-header__nav");


hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  gNav.classList.toggle("active");
});

const gNavItems = document.querySelectorAll(".p-nav-global__item");

gNavItems.forEach((gNavItem) => {
  gNavItem.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    const gNavSub = gNavItem.querySelector('.l-header__nav__btn__sub');
    const link = gNavItem.querySelector('.p-nav-global__item__link');
    const subNav = gNavItem.querySelector('.l-header__nav__sub');

    const isActive = gNavItem.classList.contains("active");

    // 全てのアクティブクラスをリセット
    gNavItems.forEach((item) => {
      item.classList.remove("active");
      const sub = item.querySelector('.l-header__nav__btn__sub');
      const subLink = item.querySelector('.p-nav-global__item__link');
      const subNavItem = item.querySelector('.l-header__nav__sub');
      if (sub) {
        sub.classList.remove("active");
      }
      if (subLink) {
        subLink.classList.remove("active");
      }
      if (subNavItem) {
        subNavItem.classList.remove("active");
      }
    });

    // クリックされた要素がアクティブでない場合のみアクティブクラスを追加
    if (!isActive) {
      gNavItem.classList.add("active");
      if (gNavSub) {
        gNavSub.classList.add("active");
      }
      if (link) {
        link.classList.add("active");
      }
      if (subNav) {
        subNav.classList.add("active");
      }
    }
  });
});