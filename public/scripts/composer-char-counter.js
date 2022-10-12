$(document).ready(function() {
  $("tweet-text").keyup(function(event){
    $("counter").text($(this).val().length);
    let x = $(this).val().length;
  });
});