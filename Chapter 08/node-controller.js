var five = require("johnny-five");
var GamePad = require( 'node-gamepad' );
var board = new five.Board();

var controller = new GamePad( 'ps3/dualshock3' );
controller.connect();

board.on("ready", function() {
  // Controller: PCF8574A (Generic I2C)
  // Locate the controller chip model number on the chip itself.
  var l = new five.LCD({
    controller: "PCF8574A",
  });

  //If you're using a regular LCD, comment the previous three
  // lines and uncomment these lines:
  // var l = new five.LCD({
  //   pins: [8, 9, 10, 11, 12, 13]
  // });
  
  var x, y;

  controller.on( 'left:move', function(data) {
  	x = data.x;
  	y = data.y;
	});

	// Updates on an interval to not overwhelm the LCD!
  setInterval(function(){ 		
    l.clear();
    l.cursor(0, 0).print('X: ' + x);
    l.cursor(1, 0).print('Y: ' + y);
  }, 250)
});