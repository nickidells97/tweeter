/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [{}];

$(document).ready(function() {
  const createTweetElement = function(tweet) {
    const $tweet = `
  <article class='tweets-container'>
  <header id="tweets">
    <pic class=${tweet.user.avatars}></pic>
    <user>${tweet.user.name}</user>
    <div1>${tweet.user.handle}</div1>
  </header>
  <p>
    ${tweet.content.text}
  </p>
  <footer>
    <span>${tweet.created_at}</span>
    <i class="fa-regular fa-flag"></i>
    <i class="fa-solid fa-retweet"></i>
    <i class="fa-solid fa-heart"></i>
  </footer>
</article>`;
    return $tweet;
  };

  const renderTweets = function(tweets) {
    tweets.forEach(element => {
      const tweet = createTweetElement(element);
      $('#tweets-container').append(tweet);
    });
  };
  renderTweets(data);
});

$(function() {
  //Post tweet without reloading page
  $("form").submit(function(event) {
    event.preventDefault();
    const text = $("form").serialize();
    $.ajax({method:"POST", url:'/tweets', data: text})
      .then((res) => console.log(res));
  });
})




