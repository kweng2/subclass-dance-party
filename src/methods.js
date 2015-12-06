var lineUp = function() {
  $('.dancer').css('top', '100px'); 
  var dots = $('.dancer');
  var total = dots.length;
  var increment = ($('body').width() - 200)/(total-1);
  var pos = 20;
  for(var i=0; i<total; i++) {
    var position = pos+'px';
    $(dots[i]).css('left', position);
    pos+=increment;
  }
}