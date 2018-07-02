// Created by Bin Chen 6/29/2018
// Implemented by Bin Chen 6/29/2018 - Implement finalArea and its four prototype functions, implement parts of calculation

function FinalArea() {
	this.data = [];
	this.inputArea = null;	
}

FinalArea.prototype.setInputArea = function (inputArea) {
	this.inputArea = inputArea;
}

FinalArea.prototype.push = function (ele) {
	this.data.push(ele);
}

FinalArea.prototype.evaluate = function () {
	if (this.data.length > 0)
		return getResult(this.data.slice());
	
	return 0;
}

FinalArea.prototype.toString = function() {
	return this.data.reduce(function (a, b) {
		return a + b.toString() + " ";
	}, "");
}

