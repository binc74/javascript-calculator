// Created by Bin Chen 6/28/2018
// Modified by Bin Chen 6/28/2018 - Implemented the NumberArea, append, submitNumber, toString and ResultArea functions

// For the number area

function NumberArea(resultArea) {
	this.data = [];
	this.resultArea = resultArea;
}

NumberArea.prototype.append = function (num) {
	this.data.push(parseInt(num));
}

NumberArea.prototype.submitNumber = function () {
	// merge the numbers in the data list and push the number into the list in resultArea 
	this.resultArea.data.push(this.data.reduce(function (a, b) {
		return a * 10 + b;
	}, 0));
	
	// empty the data list
	this.data.length = 0;
}

NumberArea.prototype.toString = function() {
	return this.data.reduce(function (a, b) {
		return a + b.toString();
	}, "");
}

// For the result area

function ResultArea() {
	this.data = [];
}
