const hamburgerBtn = document.querySelector(".js-hamburger");
const gNav = document.querySelector(".l-header__nav");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  gNav.classList.toggle("active");
});

const gNavItems = document.querySelectorAll(".p-nav-global__item");

// ウィンドウサイズに応じてイベントリスナーを設定
const handleNavEvents = () => {
  const mediaQuery = window.matchMedia("(min-width: 1021px)");

  gNavItems.forEach((gNavItem) => {
    const gNavSub = gNavItem.querySelector('.l-header__nav__btn__sub');
    const link = gNavItem.querySelector('.p-nav-global__item__link');
    const subNav = gNavItem.querySelector('.l-header__nav__sub');

    // 既存のイベントリスナーをクリア
    gNavItem.removeEventListener("click", handleNavClick);
    gNavItem.removeEventListener("mouseover", handleNavMouseOver);
    gNavItem.removeEventListener("mouseout", handleNavMouseOut);

    if (mediaQuery.matches) {
      // 1021px以上の場合はmouseoverでactiveを付与
      gNavItem.addEventListener("mouseover", handleNavMouseOver);
      gNavItem.addEventListener("mouseout", handleNavMouseOut);
    } else {
      // 1021px以下の場合はclickでactiveを付与
      gNavItem.addEventListener("click", handleNavClick);
    }
  });
};

const handleNavClick = (event) => {
  event.preventDefault();
  event.stopPropagation();

  const gNavItem = event.currentTarget;
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
    if (sub) sub.classList.remove("active");
    if (subLink) subLink.classList.remove("active");
    if (subNavItem) subNavItem.classList.remove("active");
  });

  // クリックされた要素がアクティブでない場合のみアクティブクラスを追加
  if (!isActive) {
    gNavItem.classList.add("active");
    if (gNavSub) gNavSub.classList.add("active");
    if (link) link.classList.add("active");
    if (subNav) subNav.classList.add("active");
  }
};

const handleNavMouseOver = (event) => {
  const gNavItem = event.currentTarget;
  gNavItem.classList.add("active");
  const gNavSub = gNavItem.querySelector('.l-header__nav__btn__sub');
  const link = gNavItem.querySelector('.p-nav-global__item__link');
  const subNav = gNavItem.querySelector('.l-header__nav__sub');

  if (link) link.classList.add("active");
  if (gNavSub) gNavSub.classList.add("active");
  if (subNav) subNav.classList.add("active");
};

const handleNavMouseOut = (event) => {
  const gNavItem = event.currentTarget;
  gNavItem.classList.remove("active");
  const gNavSub = gNavItem.querySelector('.l-header__nav__btn__sub');
  const link = gNavItem.querySelector('.p-nav-global__item__link');
  const subNav = gNavItem.querySelector('.l-header__nav__sub');

  if (link) link.classList.remove("active");
  if (gNavSub) gNavSub.classList.remove("active");
  if (subNav) subNav.classList.remove("active");
};

// 初期ロード時にイベントを設定
handleNavEvents();

// ウィンドウサイズが変更されたときにイベント設定を更新
window.addEventListener("resize", handleNavEvents);
