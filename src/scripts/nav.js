module.exports = {
  init() {
    this.hamburgerMenu();
    this.toggleSubNav();
    this.toggleUnderline();
  },

  hamburgerMenu() {
    let hamburgerMenu = document.getElementById('js-hamburber-menu');

    // click hamburger menu -> toggles primary-nav
    hamburgerMenu.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('is-active');
    });
  },

  toggleSubNav() {
    let hasSubItem = document.querySelectorAll('.nav__item--has-sub');

    // click nav item with sub nav -> toggles sub-nav (small screens)
    hasSubItem.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('is-active');
      });
    });
  },

  toggleUnderline() {
    let hasSubLink = document.querySelectorAll('.nav__link--has-sub');

    // click nav item with sub nav -> toggles permenant underline (small screens)
    hasSubLink.forEach(link => {
      link.addEventListener('click', () => {
        link.classList.toggle('permenant-underline');
      });
    });
  }
};
