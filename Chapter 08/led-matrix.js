var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // our first defined character-- using string maps
  var checkerboard1 = [
    "01010101",
    "10101010",
    "01010101",
    "10101010",
    "01010101",
    "10101010",
    "01010101",
    "10101010"
  ];

  //our second defined character-- using hex values
  var checkerboard2 = [ 0xAA, 0x55, 0xAA, 0x55, 0xAA, 0x55, 0xAA, 0x55];

  var matrix = new five.Led.Matrix({
    pins: {
      data: 2,
      clock: 3,
      cs: 4
    }
  });

  matrix.on();
  matrix.draw(checkerboard1); //draw our first character

  this.repl.inject({
    matrix: matrix,
    check1: checkerboard1,
    check2: checkerboard2
  });
});