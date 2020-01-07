var Links = {
  setColor:function(color) {
    $('a').css('color', color);
  }
}
var Body = {
  setColor:function(color) {
    $('body').css('color', color);
  },
  setBackGroundColor:function(color) {
    $('body').css('backgroundColor', color);
  }
}
function nightDayHandler(self) {
  var target = $('body');
  var alist = $('a');
  if (self.value === 'night') {
    Body.setBackGroundColor('black');
    Body.setColor('white');
    self.value = 'day';
    Links.setColor('powderblue');
  }
  else {
    Body.setBackGroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('blue');
  }
}
