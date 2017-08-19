class CrossFader {
  constructor() {
    this.elContainer = document.querySelector('.cross-fader');
    this.elImages = this.elContainer.querySelectorAll('.cross-fader__image');
  }

  init() {
    // fade out top image periodically
    setInterval(() => this.elContainer.lastChild.style.opacity = 0, 4000);

    // event listener for when image fades out
    this.elImages.forEach(image => {
      image.addEventListener('transitionend', () => {
        // insert image that just faded out to the bottom
        this.elContainer.insertBefore(image, this.elContainer.firstChild);

        // make it visible for when it's at the front again
        image.style.opacity = 1;
      });
    });
  }
}

module.exports = new CrossFader();
