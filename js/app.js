!(function(){

  renderMap($);
  mason();

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



// Helper Functions
function mason(){
  debugger;
      // masonry for front page
      $('#grid').masonry({
        itemSelector : '.speaker-box',
        columnWidth: 900
      });

    //masonry for speaker pages
    $('#grid').masonry({
      itemSelector : '.company-card',
      columnWidth: 900
    });


  }


  function renderMap($){
    var mapbox = L.mapbox.map('mapwrap', 'brendanryan.i2gj4hln');

        // Menu settings
        $('#menuToggle, .menu-close').on('click', function(){
          $('#menuToggle').toggleClass('active');
          $('body').toggleClass('body-push-toleft');
          $('#theMenu').toggleClass('menu-open');
        });
      });
}