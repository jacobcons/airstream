document.addEventListener('DOMContentLoaded', () => {
  let hamburgerMenu = document.getElementById('js-hamburber-menu');
  let hasSubItem = document.querySelectorAll('.nav__item--has-sub');
  let hasSubLink = document.querySelectorAll('.nav__link--has-sub');
  let crossFader = document.querySelector('.cross-fader');
  let crossFaderImages = crossFader.querySelectorAll('.cross-fader__image');

  // toggles primary-nav
  hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('is-active');
  });

  // toggles sub-nav
  hasSubItem.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('is-active');
    });
  });

  // toggles permenant underline
  hasSubLink.forEach(link => {
    link.addEventListener('click', () => {
      link.classList.toggle('permenant-underline');
    });
  });

  // fade out top image periodically
  setInterval(() => crossFader.lastChild.style.opacity = 0, 4000);

  // event listener for when image fades out
  crossFaderImages.forEach(image => {
    image.addEventListener('transitionend', () => {
      // insert image that just faded out to the bottom
      crossFader.insertBefore(image, crossFader.firstChild);

      // make it visible for when it's at the front again
      image.style.opacity = 1;
    });
  });
});
