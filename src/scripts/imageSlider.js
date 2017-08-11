module.exports = {
  init() {
    let slider = document.querySelector('.image-slider__scroll');
    const image = slider.firstChild;
    const leftControl = document.querySelector('.image-slider__left-control');
    const rightControl = document.querySelector('.image-slider__right-control');

    leftControl.addEventListener('click', () => {
      // if slider isn't at beginning
      if (slider.scrollLeft != 0) {
        // value needed to adjust scrollLeft so image is centered
        let centerAlign = this.calcCenterAlign(slider.offsetWidth, image.offsetWidth);

        // calculate which image is centered in slider as float
        let imageNumber = this.calcImageNumber(slider.scrollLeft, centerAlign, image.offsetWidth);

        // convert imageNumber to previous image
        imageNumber = this.prevImageNumber(imageNumber);

        // set scroll left of slider to center new image
        slider.scrollLeft = this.calcScrollLeft(imageNumber, image.offsetWidth, centerAlign);
      }
    });

    rightControl.addEventListener('click', () => {
      // if slider hasn't reached end
      if (slider.scrollLeft != (slider.scrollWidth - slider.offsetWidth)) {
        // value needed to adjust scrollLeft so image is centered
        let centerAlign = this.calcCenterAlign(slider.offsetWidth, image.offsetWidth);

        // calculate which image is centered in slider as float
        let imageNumber = this.calcImageNumber(slider.scrollLeft, centerAlign, image.offsetWidth);

        // convert imageNumber to next image
        imageNumber = this.nextImageNumber(imageNumber);

        // set scroll left of slider to center new image
        slider.scrollLeft = this.calcScrollLeft(imageNumber, image.offsetWidth, centerAlign);
      }
    });
  },

  prevImageNumber(n) {
    return (n % 1 == 0) ? n - 1 : Math.floor(n);
  },

  nextImageNumber(n) {
    return (n % 1 == 0) ? n + 1 : Math.ceil(n);
  },

  calcScrollLeft(n, imageWidth, centerAlign) {
    return (n * imageWidth) - centerAlign;
  },

  calcCenterAlign(sliderWidth, imageWidth) {
    return (sliderWidth - imageWidth) / 2;
  },

  calcImageNumber(sliderScrollLeft, centerAlign, imageWidth) {
    return (sliderScrollLeft + centerAlign) / imageWidth;
  },
};
