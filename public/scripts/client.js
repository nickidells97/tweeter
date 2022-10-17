
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [{}];


$(document).ready(function() {
  const createTweetElement = function(tweet) {
    const timeStamp = timeago.format(tweet.created_at)
    const $tweet = `
  <article class='tweets-container'>
  <header id="tweets">
    <pic class=${escape(tweet.user.avatars)}></pic>
    <user>${escape(tweet.user.name)}</user>
    <div1>${escape(tweet.user.handle)}</div1>
  </header>
  <p>
    ${escape(tweet.content.text)}
  </p>
  <footer>
    <span>${timeStamp}</span>
    <i class="fa-regular fa-flag"></i>
    <i class="fa-solid fa-retweet"></i>
    <i class="fa-solid fa-heart"></i>
  </footer>
</article>`;
    return $tweet;
  };

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const renderTweets = function(tweets) {
    tweets.forEach(element => {
      const tweet = createTweetElement(element);
      $('#tweets-container').prepend(tweet);
    });
  };

  const loadTweets = function () {
    $.ajax({method:"GET", url:'/tweets'})
    .then((res) => renderTweets(res));
  };

  $("form").on('submit', function(event) {
    event.preventDefault();

    const text = $("form").serialize();
    let input = document.getElementById("tweet-text").value;
    if (input === '' || input === null) {
      $("error1").slideDown(1500, "swing");
      $("error1").slideUp(1500);
      return false;
    } else if (input.length > 140) {
      $("error2").slideDown(1500, "swing");
      $("error2").slideUp(1500);
      return false;
    }
    
    return $.ajax({method:"POST", url:'/tweets', data: text})
      .then((res) => loadTweets())
  });

  
  return loadTweets();

});






