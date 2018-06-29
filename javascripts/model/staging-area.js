// Created by Bin Chen 6/29/2018

function StagingArea() {
	this.data = [];
	this.finalArea = null;
	this.paramDifference = 0;
}

StagingArea.prototype.opSet = new Set("+-*/");

StagingArea.prototype.setResultArea = function (finalArea) {
	this.finalArea = finalArea;
}

StagingArea.prototype.submitArea = function () {
	for (var i = 0; i < this.data.length; ++i)
		this.finalArea.append(this.data[i]);
	
	this.data.length = 0;
}

StagingArea.prototype.append = function (op) {
	if (this.opSet.has(op) && this.paramDifference == 0)
		this.submitArea();
	
	this.data.push(op);
}

StagingArea.prototype.clear = function () {
	this.data.length = 0;
}

StagingArea.prototype.toString = function() {
	return this.data.reduce(function (a, b) {
		return a + b.toString();
	}, "");
}