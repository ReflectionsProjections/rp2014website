;(function(){

  window.onresize = mason();


  $(document).on('ready', function(){

    var mapbox = L.mapbox.map('mapwrap', 'brendanryan.i2gj4hln');
        // Menu settings
        $('#menuToggle, .menu-close').on('click', function(){
          $('#menuToggle').toggleClass('active');
          $('body').toggleClass('body-push-toleft');
          $('#theMenu').toggleClass('menu-open');
        });
      });

  //initial page layout
  mason();

})(jQuery)

