const base = 'https://graph.facebook.com/882543461878481';
const token = '?access_token=EAAYYSRcOKvcBAARSx9lIbGSE3Cj8X9BrvxAKeUDgxMN9cObKSinPraTDicZBT1vZAYsnIvsU5bDO5nX9g66B5xsFW5wRV7jxREtB52eumRG0swCZB3oe1vzjJhf4XpgtLUIhcIQRZCv9OHpidViI7q1XbjTQwDQgDZBtk1buRdgZDZD';
const numberOfReviews = 4;

document.addEventListener('DOMContentLoaded', async () => {
  initCrossFader();

  const [rating, qualifiedUrls] = await Promise.all([fetchStarRating(), buildUrls()]);
  renderStarRating(rating);
  renderReviews(qualifiedUrls);
});

// tweet sized templating engine
function t(s, d) {
  for (var p in d)
    s = s.replace(new RegExp('{' + p + '}', 'g'), d[p]);
  return s;
}

function initFacebookSDK() {
  window.fbAsyncInit = function() {
  FB.init({
    appId            : '247871935641546',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v2.10'
  });
  FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_GB/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
}

function initCrossFader() {
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
}

async function fetchStarRating() {
  const res = await(await fetch(base + token + '&fields=overall_star_rating')).json();
  const rating = (res.overall_star_rating / 5) * 100 + '%';
  return rating;
}

function renderStarRating(rating) {
  // add style to set width when aos-animate class is added
  let sheet = window.document.styleSheets[0];
  sheet.insertRule(`[data-aos="rating"].aos-animate { width: ${rating}; }`, 1);
}

const fetchReviews = async() => await(await fetch(base + '/ratings' + token)).json();
const fetchReviewsOpenGraph = async() => await(await fetch(base + '/ratings' + token + '&fields=open_graph_story')).json();

async function buildUrls() {
  let [reviews, reviewsOpenGraph] = await Promise.all([fetchReviews(), fetchReviewsOpenGraph()]);

  // get user id for each review
  const userIds = reviews.data
              .slice(0, numberOfReviews)
              .map(review => review.reviewer.id);

  // get post id for each review
  const postIds = reviewsOpenGraph.data
              .slice(0, numberOfReviews)
              .map(review => review.open_graph_story.id);

  // build fully qualified urls from user and post id's
  let urls = [];
  for (let i = 0; i < numberOfReviews; i++) {
    urls.push('https://www.facebook.com/' + userIds[i] + '/posts/' + postIds[i]);
  }

  return urls;
}

async function renderReviews(urls) {
  initFacebookSDK();

  let reviewContainer = document.querySelector('.facebook__container');
  const reviewTemplate = '<div class="facebook__review aos-init aos-animate" data-aos="fade-down"><div class="fb-post " data-href={url} data-width="auto"></div></div>';
  const half = Math.floor(numberOfReviews / 2);

  // append half of the reviews to the first column
  for (let i = 0; i < half; i++) {
    reviewContainer.firstChild.insertAdjacentHTML('beforeend', t(reviewTemplate, { url: urls[i] }));
  }

  // append half of the reviews to the second column
  for (let i = half; i < numberOfReviews; i++) {
    reviewContainer.lastChild.insertAdjacentHTML('beforeend', t(reviewTemplate, { url: urls[i] }));
  }

  reviewContainer.style.visibility = 'visible';
}
