var five = require('johnny-five')

var board = new five.Board()

board.on('ready', function(){
	var servos = new five.Servos([3, 5, 6])
	var animation = new five.Animation(servos)

	var mySegment = {
		easing: 'inOutCirc',
		duration: 3000,
		cuePoints: [0, .25, .75, 1]
		keyframes: [{degrees: 45}, 45, 45, -45]
	}

	animation.enqueue(mySegment)
})