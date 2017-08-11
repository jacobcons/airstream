module.exports = {
  init() {
    let container = document.querySelector('.cross-fader');
    let images = container.querySelectorAll('.cross-fader__image');

    // fade out top image periodically
    setInterval(() => container.lastChild.style.opacity = 0, 4000);

    // event listener for when image fades out
    images.forEach(image => {
      image.addEventListener('transitionend', () => {
        // insert image that just faded out to the bottom
        container.insertBefore(image, container.firstChild);

        // make it visible for when it's at the front again
        image.style.opacity = 1;
      });
    });
  },
};
