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

async function starRating(base) {
  try {
    let res = await fetch(base + '&fields=overall_star_rating')
    let data = await res.json();
    let rating = data.overall_star_rating;
    console.log(rating);
  } catch (err) {
    console.log(err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const base = 'https://graph.facebook.com/882543461878481?access_token=EAAYYSRcOKvcBAARSx9lIbGSE3Cj8X9BrvxAKeUDgxMN9cObKSinPraTDicZBT1vZAYsnIvsU5bDO5nX9g66B5xsFW5wRV7jxREtB52eumRG0swCZB3oe1vzjJhf4XpgtLUIhcIQRZCv9OHpidViI7q1XbjTQwDQgDZBtk1buRdgZDZD';

  crossFader();
  starRating(base);
});
