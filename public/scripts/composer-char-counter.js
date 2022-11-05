$(document).ready(function() {
  $("#tweet-text").keyup(function(event) {
    let x = $(this).val().length;
    const results = $(".counter").text(140 - x);

    if (x > 140) {
      console.log(x);
      $(".counter").addClass('counterRed');
    } else {
      $(".counter").removeClass('counterRed');
    }
  });
});