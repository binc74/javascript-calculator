// Created by Bin Chen 6/29/2018
// Implemented by Bin Chen 6/29/2018 - Implement StagingArea and four of its prototype funtions

function StagingArea() {
	this.data = [];
	this.finalArea = null;
	this.operator = null;
	this.paranthesisPos = [];
}

StagingArea.prototype.setFinalArea = function (finalArea) {
	this.finalArea = finalArea;
}

StagingArea.prototype.submit = function (index) {
	for (var i = 0; i < index; ++i)
		this.finalArea.push(this.data.shift());
}

StagingArea.prototype.calculate = function () {
	if (this.data.length == 0)
		return this.finalArea.calculate();
	else if (this.paranthesisPos.length > 0)
		return getResult(this.data.slice(this.paranthesisPos[this.paranthesisPos.length - 1] + 1));

		
	console.log("cal: " + this.data);
	
	return getResult(this.data.slice());
}

StagingArea.prototype.push = function (ele) {	
	if (this.operator != null && this.data.length > 0) {
		this.data.push(this.operator);
		this.operator = null;
	}

	this.data.push(ele);	
}

StagingArea.prototype.setOperator = function (op) {
	this.operator = op;
}

StagingArea.prototype.startParan = function () {
	if (this.operator != null) {
		this.data.push(this.operator);
		this.operator = null;
	}
	
	this.paranthesisPos.push(this.data.length);
	this.data.push("(");
	
	return "";
}

StagingArea.prototype.endParan = function () {
	this.data.push(")");	
	
	return getResult(this.data.slice(this.paranthesisPos.pop()));
}

StagingArea.prototype.clear = function () {
	if (this.data.length > 0 && this.operator == null && this.paranthesisPos.length == 0)
		this.data.length = 0;
}

StagingArea.prototype.toString = function() {
	return this.data.reduce(function (a, b) {
		return a + b.toString() + " ";
	}, "") + (this.operator == null ? "" : this.operator + " ");
}