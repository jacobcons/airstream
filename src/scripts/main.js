const crossFader = require('./crossFader.js');
const nav = require('./nav.js');
const facebook = require('./facebook.js');
const imageSlider = require('./imageSlider.js');
const AOS = require('aos');

document.addEventListener('DOMContentLoaded', async () => {
  AOS.init();
  nav.init();
  if (document.querySelector('.image-slider')) imageSlider.init();
  if (document.querySelector('.cross-fader')) crossFader.init();
  if (document.body.classList.contains('home')) facebook.render();
});
