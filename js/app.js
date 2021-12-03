$('.navbar ul li a').click(function(e){
  e.preventDefault();
  var id = $(this).attr('href'),
          targetOffset = $(id).offset().top-100;
  $('html, body').animate({
    scrollTop: targetOffset
  }, 600);
});

$('.header-logo a').click(function(e){
  e.preventDefault();
  var id = $(this).attr('href'),
          targetOffset = $(id).offset().top;
  $('html, body').animate({
    scrollTop: targetOffset
  }, 600);
});