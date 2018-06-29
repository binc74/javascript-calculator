// Created by Bin Chen 6/29/2018

function StagingArea() {
	this.data = [];
	this.finalArea = null;
	this.numLeftParam = 0;
}

StagingArea.prototype.ops = new Set("+-*/");

StagingArea.prototype.setResultArea = function (finalArea) {
	this.finalArea = finalArea;
}

StagingArea.prototype.append = function (op) {
	this.data.push(op);
}

StagingArea.prototype.clear = function () {
	this.data.length = 0;
}

StagingArea.prototype.submitArea = function () {
	for (var i = 0; i < this.data.length; ++i) {
		this.finalArea.append(this.data[i]);
	}
}

StagingArea.prototype.toString = function() {
	return this.data.reduce(function (a, b) {
		return a + b.toString();
	}, "");
}