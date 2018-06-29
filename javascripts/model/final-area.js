// Created by Bin Chen 6/29/2018

function FinalArea() {
	this.data = [];
	this.numberArea = null;
}

ResultArea.prototype.setNumberArea = function (numberArea) {
	this.numberArea = numberArea;
}

ResultArea.prototype.toString = function() {
	return this.data.reduce(function (a, b) {
		return a + b.toString();
	}, "");
}