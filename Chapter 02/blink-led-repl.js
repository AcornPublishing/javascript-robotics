var five = require("johnny-five");

var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(11);

  this.repl.inject({
  	myLed: led
  });
  
  led.blink(500);
});