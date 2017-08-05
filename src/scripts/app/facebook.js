const base = 'https://graph.facebook.com/882543461878481';
const token = '?access_token=EAAYYSRcOKvcBAARSx9lIbGSE3Cj8X9BrvxAKeUDgxMN9cObKSinPraTDicZBT1vZAYsnIvsU5bDO5nX9g66B5xsFW5wRV7jxREtB52eumRG0swCZB3oe1vzjJhf4XpgtLUIhcIQRZCv9OHpidViI7q1XbjTQwDQgDZBtk1buRdgZDZD';
const numberOfReviews = 8;

// tweet sized templating engine
function t(s, d) {
  for (var p in d)
    s = s.replace(new RegExp('{' + p + '}', 'g'), d[p]);
  return s;
}

export async function fetchStarRating() {
  const res = await(await fetch(base + token + '&fields=overall_star_rating')).json();
  const rating = (res.overall_star_rating / 5) * 100 + '%';
  return rating;
}

export function renderStarRating(rating) {
  // add style to set width when aos-animate class is added
  let sheet = window.document.styleSheets[0];
  sheet.insertRule(`[data-aos="rating"].aos-animate { width: ${rating}; }`, 1);
}

const fetchReviews = async() => await(await fetch(base + '/ratings' + token)).json();
const fetchReviewsOpenGraph = async() => await(await fetch(base + '/ratings' + token + '&fields=open_graph_story')).json();

export async function buildUrls() {
  let [reviews, reviewsOpenGraph] = await Promise.all([fetchReviews(), fetchReviewsOpenGraph()]);

  // get post id for each review
  const postIds = reviewsOpenGraph.data
              .filter((review, i) => {
                if (review.open_graph_story.data.review_text) {
                  return true;
                } else {
                  reviews.data.splice(i, 1);
                  return false;
                }
              })
              .slice(0, numberOfReviews)
              .map(review => review.open_graph_story.id);

  // get user id for each review
  const userIds = reviews.data
              .slice(0, numberOfReviews)
              .map(review => review.reviewer.id);

  // build fully qualified urls from user and post id's
  let urls = [];
  for (let i = 0; i < numberOfReviews; i++) {
    urls.push('https://www.facebook.com/' + userIds[i] + '/posts/' + postIds[i]);
  }

  return urls;
}

export async function renderReviews(urls, cb) {
  let reviewContainer = document.querySelector('.facebook__container');
  const half = Math.floor(numberOfReviews / 2);
  const reviewTemplate = `
                          <div class="facebook__review" data-aos="fade-down" data-aos-offset="400">
                            <div class="fb-post" data-href={url} data-width="auto"></div>
                          </div>
                          `;

  // append half of the reviews to the first column
  for (let i = 0; i < half; i++) {
    reviewContainer.firstChild.insertAdjacentHTML('beforeEnd', t(reviewTemplate, { url: urls[i] }));
  }

  // append half of the reviews to the second column
  for (let i = half; i < numberOfReviews; i++) {
    reviewContainer.lastChild.insertAdjacentHTML('beforeEnd', t(reviewTemplate, { url: urls[i] }));
  }

  // embed social plugins and run callback when done
  FB.XFBML.parse(reviewContainer, cb);
}

export function hideLoader() {
  let loader = document.querySelector('.facebook__loader');
  loader.style.display = 'none';
}
