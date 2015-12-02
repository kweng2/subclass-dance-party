$(document).ready(function() {
  window.dancers = [];
  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make 10 dancer with a random position
    for(var i=0; i<10; i++){
      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        (Math.random() * 2000)+500
      );
      $('body').append(dancer.$node);
    }
  });
  $(".addPlayerButton").on("click", function(event) {
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a fish player
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      (Math.random() * 2000)+500
    );
    $('body').append(dancer.$node);
  });
});

// Check for object collision
var collision = function() {
  // find the pos of player
  var player = $('.player');
  var playerH = Number($(player[0]).css('height').slice(0,-2))*0.6;
  var playerW = Number($(player[0]).css('width').slice(0,-2))*0.6;
  var playerX = Number($(player[0]).css('left').slice(0,-2)) + 0.2 * playerW/0.6;
  var playerY = Number($(player[0]).css('top').slice(0,-2)) + 0.2 * playerH/0.6;

  var fishes = $('.dancer');


  // look at all the pos of the other fish
  for (var i = 0; i < fishes.length; i++) {
    // find position of this fish 
    var fishX = Number($(fishes[i]).css('left').slice(0,-2));
    var fishY = Number($(fishes[i]).css('top').slice(0,-2));
    var fishH = Number($(fishes[i]).css('height').slice(0,-2))*0.6;
    var fishW = Number($(fishes[i]).css('width').slice(0,-2))*0.6;

    // if player is sufficiently close to this fish position, remove this fish  
    // Collision detection logic:
    // if P is above f
    if (fishY - playerY > 0) {
      // P is left of f
      if (playerX - fishX < 0) {
        if (fishX - playerX < playerW && fishY - playerY < playerH) {
          eat(player, fishes[i], playerW, playerH);
        }
      } 
      // P is right of f
      else {
        if (playerX - fishX < fishW && fishY - playerY < playerH) {
          eat(player, fishes[i], playerW, playerH);
        }
      }
    }
    // P is below f
    else {
      // P is left of f
      if (playerX - fishX < 0) {
        if (fishX - playerX < playerW && playerY - fishY < fishH) {
          eat(player, fishes[i], playerW, playerH);
        }
      }
      // P is right of f
      else {
        if (playerX - fishX < fishW && playerY - fishY < fishH) {
          eat(player, fishes[i], playerW, playerH);
        }
      } 
    }
  }
};

var eat = function(player, fish, playerW, playerH) { 
  var newW = ''+(playerW/0.6 +(150/playerW))+'px';
  var newH = ''+(playerH/0.6 +(150/playerH))+'px';
  $(player[0]).css('width',newW);
  $(player[0]).css('height',newH);
  fish.remove();
  console.log('collided'); 
};

// Wrap the above function in setInterval to check every few milliseconds
setInterval(collision, 50);





// MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

// var observer = new MutationObserver(function(mutations, observer) {
//     // fired when a mutation occurs
//   $('.dancer').on("mouseover", function(){
//     $(this).css('border', '20px dashed purple');
//     $(this).css('border-radius', '20px');
//   });
//   var dots = $('.dancer');
//   var counter = 0;
//   for(var i=0; i<dots.length; i++) {
//     if($(dots[i]).css('border-color')==='rgb(255, 0, 0)') counter++;
//   }
//   if(counter>5) {
//     console.log('Too many red dots');
//     $(dots).css('border-color', 'yellow');
//   }
// });

// // define what element should be observed by the observer
// // and what types of mutations trigger the callback
// observer.observe(document, {
//   subtree: true,
//   childList: true
//   //...
// });

/*
//Mouse tracking
(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        // Use event.pageX / event.pageY here
        console.log(event.pageX);
        console.log(event.pageY);
    }
})();
*/