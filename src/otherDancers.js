var makeMovingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.timeBetweenSteps = timeBetweenSteps;
};

makeMovingDancer.prototype = Object.create(makeDancer.prototype);
makeMovingDancer.prototype.constructor = makeMovingDancer;

makeMovingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var randX = (Math.floor(Math.random()*100)) - 50;
  var randY = (Math.floor(Math.random()*100)) - 50;
  var stX = '+=' + randX;
  var stY = '+=' + randY;

  var back = ["#ff0000","blue","gray", 'yellow', 'green'];
  var randColor = back[Math.floor(Math.random() * back.length)];
  this.$node.css('border-color', 'white');
  this.$node.animate({
    left: stX,
    top: stY,
  }, 50);
};

var makeColorDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.timeBetweenSteps = timeBetweenSteps;
};

makeColorDancer.prototype = Object.create(makeDancer.prototype);
makeColorDancer.prototype.constructor = makeColorDancer;

makeColorDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var back = ["blue","gray", 'yellow', 'green', 'white', 'red', 'purple', 'black'];
  var randColor = back[Math.floor(Math.random() * back.length)];
  var randSize = Math.floor(Math.random()*50);
  var randBorder = randSize + 'px';
  // this.$node.css('border', randBorder + ' solid red');
  // this.$node.css('border-radius', randBorder);
  this.$node.css('border-color',randColor);
};

var makeFollowDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeFollowDancer.prototype = Object.create(makeDancer.prototype);
makeFollowDancer.prototype.constructor = makeFollowDancer;
makeFollowDancer.prototype.step = function() {
  var mousePos;
  $('window').mousemove(function(){
    mousePos[0] = event.pageX;
    mousePos[1] = event.pageY;
  });
  this.$node.css('border-width','50px');
  this.$node.css('border-color', 'teal');
  this.$node.animate({
    $("#logPos").html( "pageX: " + event.pageX + ", pageY: " + event.pageY);
    // left: mousePos[0],
    // top: mousePos[0]
  },(this.timeBetweenSteps)/3);
};
