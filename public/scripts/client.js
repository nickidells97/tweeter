/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

$(document).ready(function() {
  const createTweetElement = function (tweet) {
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
</article>`
return $tweet;
}

const renderTweets = function(tweets) {
  tweets.forEach(element => {
    const tweet = createTweetElement(element)
  $('#tweets-container').append(tweet);
});
}

renderTweets(data);

  // to add it to the page so we can make sure it's got all the right elements, classes, et
});

