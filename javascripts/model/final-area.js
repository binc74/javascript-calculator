// Created by Bin Chen 6/29/2018

function FinalArea() {
	this.data = [];
	this.numberArea = null;
}

FinalArea.prototype.setNumberArea = function (numberArea) {
	this.numberArea = numberArea;
}

FinalArea.prototype.append = function (ele) {
	this.data.push(ele);
}

FinalArea.prototype.toString = function() {
	return this.data.reduce(function (a, b) {
		return a + b.toString();
	}, "");
}