$(document).ready(function() {
  $(window).scroll(function(){
    if(this.scrollY > 500){
      $('.scroll-btn').addClass('show-btn');
    }else{
      $('.scroll-btn').removeClass('show-btn');
    }
  });
  $('.scroll-btn').click(function(){
    $('html').animate({scrollTop:0});
  });
});


