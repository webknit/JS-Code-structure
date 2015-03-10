/*
	METHOD ONE
*/

// Create Namespace
var Base = Base || {};

Base.countUp = function(startingFrom) {

	this.startPoint = startingFrom;

	for(i = startingFrom; i < 101; i++) {

		console.log(i);

	}

}

// Seperate functions within the object Base 
Base.functionOne = function() {

	// Only accessible within this function
	var variable = document.getElementById('variable')

	// Calls the initial code within this function
	function init() {

		countDown(100);
		Base.countUp(1);

	}

	var countDown = function(startingFrom) {

		this.startPoint = startingFrom;

		for(i = startingFrom; i > 0; i--) {

			console.log(i);

		}

	}

	init();

};

Base.functionTwo = function() {

	// Can I access the countdown in here?

}

// Create the new Object
new Base.functionOne();