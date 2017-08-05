import * as crossFader from './crossFader.js';
import * as nav from './nav.js';
import * as facebook from './facebook.js';
import * as imageSlider from './imageSlider.js';

document.addEventListener('DOMContentLoaded', async () => {
  AOS.init();

  // nav
  nav.hamburgerMenu();
  nav.toggleSubNav();
  nav.toggleUnderline();

  // image slider
  imageSlider.init();

  if (document.body.classList.contains('home')) {
    // cross fader
    crossFader.init();

    // facebook
    const [rating, qualifiedUrls] = await Promise.all([facebook.fetchStarRating(), facebook.buildUrls()]);
    facebook.renderReviews(qualifiedUrls, () => {
      facebook.hideLoader();
      facebook.renderStarRating(rating);
      AOS.refreshHard();
    });
  }
});
