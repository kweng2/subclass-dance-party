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
  // set this node's class to be something unique
  this.$node[0].className = 'player';

  var mouseX = 200, mouseY = 200;
  $(document).mousemove(function(e){
   mouseX = e.pageX - Number(that.$node.css('width').slice(0, -2))/2;
   mouseY = e.pageY - Number(that.$node.css('height').slice(0, -2))/2;
  });

  // cache the selector
  var follower = this.$node;
  var xp = Number(this.$node.css('left').slice(0, -2));
  var yp = Number(this.$node.css('top').slice(0, -2));
  var loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp += ((mouseX - xp) / 20);
    yp += ((mouseY - yp) / 20);
    // xp += Math.floor(((Math.random()*0.2 + 0.9)*mouseX - xp) / 50);
    // yp += Math.floor(((Math.random()*0.2 + 0.9)*mouseY - yp) / 50);
    if(mouseX - xp > 0) {
      // make the image face right
      that.$node.css('transform', 'scaleX(-1)');
    }
    else {
      // make image face left
      that.$node.css('transform', 'scaleX(1)');
    }
    follower.css({
      left:Math.floor(xp),
      top:Math.floor(yp),
      // 'border-color':co
    });
    
  }, 20);
};

makeFollowDancer.prototype = Object.create(makeDancer.prototype);
makeFollowDancer.prototype.constructor = makeFollowDancer;
