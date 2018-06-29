// Created by Bin Chen 6/29/2018

function StagingArea() {
	this.data = [];
	this.finalArea = null;
}

StagingArea.prototype.setResultArea = function (finalArea) {
	this.finalArea = finalArea;
}

StagingArea.prototype.append = function (op) {
	this.data.push(op);
}

StagingArea.prototype.toString = function() {
	return this.data.reduce(function (a, b) {
		return a + b.toString();
	}, "");
}