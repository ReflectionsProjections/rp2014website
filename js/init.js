(function($){
	$(function(){

    var navbarHeight = 80;

    // Slide in Functionality
    $(window).scroll(function() {
      var top = $(window).scrollTop();
      $(".slide-in").each(function () {
        var thisTop = $(this).offset().top;
        var height = $(this).height();
        if ((top > (thisTop - (height * 1.5))) && !$(this).hasClass("slid")) {
          $(this).addClass("slid");
        }
      });
      $('body').scrollspy({ offset: navbarHeight+10, target: '#navbar' });
    });



    // Navbar Affix
    $('#navbar').affix({
      offset: {
        top: function () {
          return (this.top = $(window).height() - navbarHeight)
        }
      }
    });


    // Parallax Scripts
    function updateParallax() {
      if ($(window).width() > 768) {
        $(".parallax").each(function () {
          var bottom = $(this).offset().top + $(this).height();
          var top = $(this).offset().top;
          var windowHeight = $(window).height();
          var scrollTop = $(window).scrollTop() + windowHeight;
          var fromTop = 0;
          var isHome = true;
          if (top === 0) {
            fromTop = $(window).scrollTop() - top;
            isHome = true;
          }
          else {
            fromTop = $(window).scrollTop() - top + windowHeight;
            isHome = false;
          }
          if ((bottom > $(window).scrollTop()) && (top < scrollTop)) {
            var parallax = -1 * (fromTop / 3);
            var revParallax = parallax;
            var percent = 1 - 1.3 *($(window).scrollTop() / $(window).height());
            if (isHome) {
              revParallax += navbarHeight;
              $("#home .logo").css('marginTop', parallax + "px");
              $("#home .logo, #home .welcome, #home .call-to-action, #home .macbook-preview").css('opacity', percent);
            }
            $(this).children("img").first().css('bottom', revParallax + "px");
          }
        });
}
}
updateParallax();

$(window).scroll(function() {
  updateParallax();

});

	}); // end of document ready
})(jQuery); // end of jQuery name space