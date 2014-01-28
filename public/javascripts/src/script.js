(function(){

  function makeTimeString(s){
    s = s.split(":");

    var days = parseInt(s[0]);
    var hours = parseInt(s[1]);
    var seconds = parseInt(s[1]);

    return days + " days left!";

  }



  var now  = "04/09/2013";
  var then = "02/09/2013 ";

  var ms = moment(now,"DD/MM/YYYY").diff(moment(then,"DD/MM/YYYY"));
  var d = moment.duration(ms);
  var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
  var timeString = makeTimeString(s);


  var cd = document.getElementById('countdown');
  cd.innerText = timeString;

})();

