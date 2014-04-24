;(function(){

      $(document).on('ready', function(){

        L.mapbox.map('mapwrap', 'brendanryan.i2gj4hln');
        // Menu settings
        $('#menuToggle, .menu-close').on('click', function(){
          $('#menuToggle').toggleClass('active');
          $('body').toggleClass('body-push-toleft');
          $('#theMenu').toggleClass('menu-open');
        });
      });



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






  })(jQuery)