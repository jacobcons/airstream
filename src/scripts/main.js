const Nav = require('./Nav.js');
const AOS = require('aos');
const lscache = require('lscache');

document.addEventListener('DOMContentLoaded', async () => {
  AOS.init();
  Nav.init();
  if (document.querySelector('.date')) {
    document.querySelector('.date').textContent = (new Date()).getFullYear();
  }

  if (document.querySelector('.input-field')) {
    const InputField = require('./InputField.js');
    InputField.init();
  }

  if (document.querySelector('.modal')) {
    const Modal = require('./Modal.js');
    Modal.init();
  }

  if (document.querySelector('.contact-form')) {
    const ContactForm = require('./ContactForm.js');
    ContactForm.init();
  }

  if (document.querySelector('.copy-link')) {
    const CopyLink = require('./CopyLink.js');
    CopyLink.init();
  }

  if (document.querySelector('.image-slider')) {
    const ImageSlider = require('./ImageSlider.js');
    ImageSlider.init();
  }

  if (document.querySelector('.cross-fader')) {
    const CrossFader = require('./CrossFader.js');
    CrossFader.init();
  }

  if (document.body.classList.contains('home')) {
    const FacebookAPI = require('./FacebookAPI.js');
    const FacebookStars = require('./FacebookStars.js');
    const FacebookReviews = require('./FacebookReviews.js');
    let cache = lscache.get('facebook');

    if (cache) {
      var { urls, rating } = cache;
      urls = JSON.parse(urls);
      console.log('in cache');
    } else {
      var [rating, ratings, ratingsOpenGraph] = await Promise.all([
        FacebookStars.getRating(),
        FacebookReviews.getRatings(),
        FacebookReviews.getRatingsOpenGraph(),
      ]);
      var urls = FacebookReviews.buildUrls(ratings.data, ratingsOpenGraph.data);
      lscache.set('facebook', { urls: JSON.stringify(urls), rating: rating }, 60);
      console.log('not in cache');
    }

    FacebookReviews.render(urls, () => {
      FacebookReviews.hideLoader();
      FacebookReviews.showContainer();
      FacebookStars.render(rating);
      setTimeout(() => AOS.refreshHard(), 1000);
    });
  }
});
