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
  var flip = randX > 0 ? 'scaleX(-1)' : 'scaleX(1)';
  this.$node.css('transform', flip);
  var back = ["#ff0000","blue","gray", 'yellow', 'green'];
  var randColor = back[Math.floor(Math.random() * back.length)];
  this.$node.css('background-image', 'url("https://lh5.ggpht.com/Fgo0qJlWs_kKUYldkRf-4Cp1gz4AXuJF9lsDsKvyNmLQYgqYkGcTLxUrhl1Hq_P_37g=w300")');
  this.$node.css('border', '0px solid red');
  this.$node.css('border-radius', '0px');
  this.$node.css('background-size', '100%');
  this.$node.css('height', '50px');
  this.$node.css('width', '50px');
  this.$node.animate({
    left: stX,
    top: stY,
  }, 150);
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
  this.$node.css('border', '0px solid red');
  this.$node.css('border-radius', '0px');
  this.$node.css('background-image', 'url("http://www.clipartbest.com/cliparts/xTg/o5e/xTgo5e9Lc.png")');
  this.$node.css('background-size', '100%');
  this.$node.css('height', '100px');
  this.$node.css('width', '100px');

  // cache the selector
  var follower = this.$node;
  var xp = Math.floor(Number(this.$node.css('left').slice(0, -2)));
  var yp = Math.floor(Number(this.$node.css('top').slice(0, -2)));
  var loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp += Math.floor((mouseX - xp) / 50);
    yp += Math.floor((mouseY - yp) / 50);
    if(mouseX - xp > 0) {
      // make the image face right
      that.$node.css('transform', 'scaleX(-1)');
    }
    else {
      // make image face left
      that.$node.css('transform', 'scaleX(1)');
    }
    follower.css({
      left:xp,
      top:yp,
      // 'border-color':co
    });
    
  }, 20);
};

makeFollowDancer.prototype = Object.create(makeDancer.prototype);
makeFollowDancer.prototype.constructor = makeFollowDancer;
