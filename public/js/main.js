$( document ).ready(function() {
  if($(window).width() <= 630) {
    $('.links').addClass("flex-col");
    $('.sponsors').addClass("flex-col");
  }

  $( window ).resize(function() {
    if($(window).width() <= 630) {
      $('.links').addClass("flex-col");
      $('.sponsors').addClass("flex-col");
    }
    else {
      $('.links').removeClass("flex-col");
      $('.sponsors').removeClass("flex-col");
    }
  });
})
