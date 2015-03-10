/*
	METHOD TWO
*/

// Create Namespace
var Base = Base || {};

Base.componentents = {

	variable: document.getElementById('variable');

}

Base.trueOrFalse = true;

Base.countUp = function(startingFrom) {

	this.startPoint = startingFrom;

	for(i = startingFrom; i < 101; i++) {

		if(this.trueOrFalse) {

			console.log(i);

		}

	}

}

Base.init = function() {

	this.countUp(1);

}

Base.init();