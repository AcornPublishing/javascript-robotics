var five = require('johnny-five')

var board = new five.Board()

board.on('ready', function(){
	var servos = new five.Servos([3, 5, 6])
	var animation = new five.Animation(servos)
})