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
  var that = this;
  // var mouseX = 0, mouseY = 0;
  $(document).mousemove(function(e){
   mouseX = e.pageX;
   mouseY = e.pageY; 
  });

  // cache the selector
  var follower = this.$node;
  var xp = Math.floor(Number(this.$node.css('left').slice(0, -2)));
  var yp = Math.floor(Number(this.$node.css('top').slice(0, -2)));
  var loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp += Math.floor((mouseX - xp) / 12);
    yp += Math.floor((mouseY - yp) / 12);
    follower.css({left:xp, top:yp});
    
  }, 20);
};

makeFollowDancer.prototype = Object.create(makeDancer.prototype);
makeFollowDancer.prototype.constructor = makeFollowDancer;
makeFollowDancer.prototype.step = function() {

  // this.$node.css('border-width','50px');
  // this.$node.css('border-color', 'teal');
};
