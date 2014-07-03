!(function(){

    renderMap($);

})(jQuery);


function renderMap($){
  var mapbox = L.mapbox.map('mapwrap', 'brendanryan.i2gj4hln');
  $('#menuToggle, .menu-close').on('click', function(){
    $('#menuToggle').toggleClass('active');
    $('body').toggleClass('body-push-toleft');
    $('#theMenu').toggleClass('menu-open');
  });
}