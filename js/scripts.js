
$(document).ready(function(){

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' })

$('#nav .navbar-nav li>a').click(function(){
  var link = $(this).attr('href');
  var posi = $(link).offset().top+20;
  $('body,html').animate({scrollTop:posi},700);
})

});