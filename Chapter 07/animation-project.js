var five = require('johnny-five')

var board = new five.Board()

board.on('ready', function(){
	var servos = new five.Servos([3, 5, 6])
	var animation = new five.Animation(servos)

	var mySegment = {
		easing: 'inOutCirc',
		duration: 3000,
		cuePoints: [0, .25, .75, 1],
		keyFrames: [
			[{degrees: 45}, 45, 45, -45],
			[{degrees: 30}, 30, 30, 30],
			[{degrees: 20}, 40, 40, 40]
		]
	}

	this.repl.inject({
		animation,
		mySegment
	})

	animation.enqueue(mySegment)
})