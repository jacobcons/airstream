class Nav {
  constructor() {
    this.elHamburgerMenu = document.getElementById('js-hamburber-menu');
    this.hasSubItem = document.querySelectorAll('.nav__item--has-sub');
    this.hasSubLink = document.querySelectorAll('.nav__link--has-sub');
  }

  hamburgerMenu() {
    // click hamburger menu -> toggles primary-nav
    this.elHamburgerMenu.addEventListener('click', () => {
      this.elHamburgerMenu.classList.toggle('is-active');
    });
  }

  toggleSubNav() {
    // click nav item with sub nav -> toggles sub-nav (small screens)
    this.hasSubItem.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('is-active');
      });
    });
  }

  toggleUnderline() {
    // click nav item with sub nav -> toggles permenant underline (small screens)
    this.hasSubLink.forEach(link => {
      link.addEventListener('click', () => {
        link.classList.toggle('permenant-underline');
      });
    });
  }

  init() {
    this.hamburgerMenu();
    this.toggleSubNav();
    this.toggleUnderline();
  }
}

module.exports = new Nav();
