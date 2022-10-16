$(document).ready(function() {
  $("#tweet-text").keyup(function(event){
    let x = $(this).val().length;
    
    const results = $(".counter").text(140 - x);

    if (results < 0) {
      $(".counter").addClass("active");
    }
  });
});