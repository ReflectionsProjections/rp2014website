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



  window.onresize(function(){
    mason();
  });


  //initial page layout
  mason();


})(jQuery)

function mason(){

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


    window.onresize(function(){
      mason();
    })
  }