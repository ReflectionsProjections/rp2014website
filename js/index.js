!(function(){

  window.onresize = mason();


  $logos = $('#lg .sponsor-logo');
  $sponsorContainer = $('#lg .sponsors')[0];

  setInterval(function(){
    /*

    Grab five random unrendered logos

    fade out rendreed logos

    fade in unrendered logos
     */


  var $unrendered = $('.sponsor-logo.hidden').get().sort(function(){
    return Math.round(Math.random())-0.5;
  }).slice(0,5).map(function(e){return $(e)});

  var $rendered = $('.sponsor-logo.visible');

  $rendered.fadeOut(600);
  $unrendered.map(function(e){return e.fadeIn(600)});

  $rendered.toggleClass('hidden').toggleClass('visible');
  $unrendered.map(function(e){$(e).toggleClass('hidden').toggleClass('visible')});

  },7500 * 1);



})(jQuery);