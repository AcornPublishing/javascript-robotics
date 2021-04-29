var five = require('johnny-five')

var board = new five.Board({
	port: '/dev/cu.usbmodem14131'
})

board.on('ready', function(){
	var myServos = new five.Servos([3,5,6])
	this.repl.inject({
		servos: myServos
	})
})