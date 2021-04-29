var five = require('johnny-five')

var board = new five.Board({
	port: '/dev/tty.usbmodem1421'
})

board.on('ready', function(){
	var servos = new five.Servos([3, 5, 6])
	var animation = new five.Animation(servos)
	//For I2C LCDs, uncomment these lines:
	var lcd = new five.LCD({
		controller: 'PCF8574A'
	})
	//NOTE: for standard LCDs, uncomment these lines:
	// var lcd = new five.LCD({
		// pins: [8, 9, 10, 11, 12, 13]
	// })


	var mySegment = {
		easing: 'inOutCirc',
		duration: 3000,
		cuePoints: [0, .25, .75, 1],
		keyFrames: [
			[{degrees: 45}, 45, 45, -45],
			[{degrees: 30}, 30, 30, 30],
			[{degrees: 20}, 40, 40, 40]
		],
		onstart: function(){
			lcd.clear()
			lcd.print('Segment started!')
		},
		onpause: function(){
			lcd.clear()
			lcd.print('Segment paused!')
		},
		onstop: function(){
			lcd.clear()
			lcd.print('Segment stopped!')
		},
		onloop: function(){
			lcd.clear()
			lcd.print('Segment looped!')
		},
		oncomplete: function(){
			lcd.clear()
			lcd.print('Segment completed!')
		}
	}

	this.repl.inject({
		lcd,
		animation,
		mySegment
	})

	animation.enqueue(mySegment)
})