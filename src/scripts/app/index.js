// tweet sized templating engine
function t(s,d){
 for(var p in d)
   s=s.replace(new RegExp('{'+p+'}','g'), d[p]);
 return s;
}

function crossFader() {
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

async function starRating(base, token) {
  try {
    let res = await fetch(base + token + '&fields=overall_star_rating');
    res = await res.json();
    let rating = res.overall_star_rating;
    let percentageRating = (rating / 5) * 100 + '%';

    // add style to set width when aos-animate class is added
    let sheet = window.document.styleSheets[0];
    sheet.insertRule(`[data-aos="rating"].aos-animate { width: ${percentageRating}; }`, 1);
  } catch (err) {
    console.log(err);
  }
}

async function reviews(base, token, numberOfReviews) {
  try {
    // get user id's for last 5 reviews
    let userReview = await fetch(base + '/ratings' + token);
    userReview = await userReview.json();
    userReview = userReview.data.slice(0, numberOfReviews);
    let userIds = userReview.map(review => review.reviewer.id);

    // get post id's for last 5 reviews
    let postReview = await fetch(base + '/ratings' + token + '&fields=open_graph_story');
    postReview = await postReview.json();
    postReview = postReview.data.slice(0, numberOfReviews);
    let postIds = postReview.map(review => review.open_graph_story.id);

    // build fully qualified urls from user and post id's
    let urls = [];
    for (let i = 0; i < numberOfReviews; i++) {
      urls.push('https://www.facebook.com/' + userIds[i] + '/posts/' + postIds[i]);
    }

    // init facebook sdk
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

    // append reviews to first and second columns
    let reviewContainer = document.getElementById('js-reviews');
    const reviewTemplate = '<div class="facebook__review"><div class="fb-post" data-href={url} data-width="auto" data-aos="fade-in" data-aos-delay="{delay}" data-aos-once="true"></div></div>';
    let half = Math.floor(numberOfReviews / 2);

    for (let i = 0; i < half; i++) {
      reviewContainer.firstChild.insertAdjacentHTML('beforeend', t(reviewTemplate, { url: urls[i], delay: i * 100 }));
    }

    for (let i = half; i < numberOfReviews; i++) {
      reviewContainer.lastChild.insertAdjacentHTML('beforeend', t(reviewTemplate, { url: urls[i], delay: i * 100 }));
    }
  } catch (err) {
    console.log(err);
  }
}

const base = 'https://graph.facebook.com/882543461878481';
const accessToken = '?access_token=EAAYYSRcOKvcBAARSx9lIbGSE3Cj8X9BrvxAKeUDgxMN9cObKSinPraTDicZBT1vZAYsnIvsU5bDO5nX9g66B5xsFW5wRV7jxREtB52eumRG0swCZB3oe1vzjJhf4XpgtLUIhcIQRZCv9OHpidViI7q1XbjTQwDQgDZBtk1buRdgZDZD';

crossFader();
starRating(base, accessToken);
reviews(base, accessToken, 4);
