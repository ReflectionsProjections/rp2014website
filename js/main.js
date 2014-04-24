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

    /*
     function initialize() {
      var myLatLong = new google.maps.LatLng(40.114312,-88.22484);
      var mapOptions = {
        center: myLatLong,
        scrollwheel: false,
        zoom: 15,
      };

      var map = new google.maps.Map(document.getElementById("mapwrap"),
        mapOptions);

      var marker = new google.maps.Marker({
        position: myLatLong,
        map: map,
        title:"Thomas M. Siebel Center for Computer Science"
      });

    }
    google.maps.event.addDomListener(window, 'load', initialize);

    */






  })(jQuery)