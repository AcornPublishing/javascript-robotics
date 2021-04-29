var five = require('johnny-five');
var barcli = require('barcli');
var board = new five.Board();

board.on('ready', function(){
	//set up our accelerometer
	var accel = new five.Accelerometer({
		controller: 'ADXL345'
	});

	//set up our graphs
	var pitch = new barcli({
		label: 'Pitch',
		range: [-180, 180]
	});
	var roll = new barcli({
		label: 'Roll',
		range: [-180, 180]
	});
	var acceleration = new barcli({
		label: 'Acceleration',
		range: [-2, 2]
	});
	var inclination = new barcli({
		label: 'Inclination',
		range: [-180, 180]
	});
	var orientation = new barcli({
		label: 'Orientation',
		range: [-3, 3]
	});

	accel.on('change', function(){ 		pitch.update(this.pitch);
		roll.update(this.roll);
		acceleration.update(this.acceleration);
		inclination.update(this.inclination);
		orientation.update(this.orientation);
	});
});