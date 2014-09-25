!(function(){

  renderMap($);

  var $regularGrid = $('#regular-grid');
  var $startupGrid = $('#startup-grid');
  var $mainGrid = $('#main-grid');
  var $speakerGrid = $('#speaker-grid');

  $('#menuToggle, .menu-close').on('click', function(){
    $('#menuToggle').toggleClass('active');
    $('body').toggleClass('body-push-toleft');
    $('#theMenu').toggleClass('menu-open');
  });

    //startup grid
    if($startupGrid.length){
      $startupGrid.imagesLoaded(function(){
        $startupGrid.masonry({
          'gutter': 0,
          'itemSelector': '.company-card',
        });
      });
    }

    //larger company grid
    if($regularGrid.length){
      $regularGrid.imagesLoaded(function(){
        $regularGrid.masonry({
          'gutter': 0,
          'itemSelector': '.company-card',
        });
      });
    }

  })(jQuery);

  function renderMap($){


    var mapbox = L.mapbox.map('mapwrap', 'brendanryan.i2gj4hln', {
      doubleClickZoom: false,
      boxZoom: false,
      scrollWheelZoom: false,
    });
  }
