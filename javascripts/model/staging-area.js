// Created by Bin Chen 6/29/2018
// Implemented by Bin Chen 6/29/2018 - Implement StagingArea and four of its prototype funtions

function StagingArea() {
	this.data = [];
	this.finalArea = null;
	this.pendingOperator = null;
	this.parenthesisPos = [];
}

StagingArea.prototype.isCompleted = function () {
	return this.data.length > 0 && this.pendingOperator == null &&
		this.data[this.data.length - 1] == ')';
}

StagingArea.prototype.setFinalArea = function (finalArea) {
	this.finalArea = finalArea;
}

StagingArea.prototype.submit = function () {
	while (this.data.length > 0)
		this.finalArea.push(this.data.shift());
}

StagingArea.prototype.evaluate = function () {
	if (this.data.length == 0) {
		return this.finalArea.evaluate();
	} else if (this.parenthesisPos.length > 0) {
		if (this.data[this.data.length - 1] == ')')
			return getResult(this.data.slice(this.parenthesisPos[this.parenthesisPos.length - 1]));
		else
			return getResult(this.data.slice(this.parenthesisPos[this.parenthesisPos.length - 1] + 1));

	}
		
	console.log("cal: " + this.data);
	
	return getResult(this.data.slice());
}

StagingArea.prototype.push = function (ele) {	
	if (this.pendingOperator != null) {
		this.data.push(this.pendingOperator);		
		this.pendingOperator = null;
	}
	
	if (this.parenthesisPos.length == 0)
		this.submit();
	
	
	this.data.push(ele);	
}

StagingArea.prototype.setPendingOperator = function (op) {
	if (this.data[this.data.length - 1] == ')') this.parenthesisPos.pop();
	if (this.parenthesisPos.length == 0) this.submit();
	
	this.pendingOperator = op;
}

StagingArea.prototype.addFunction = function (func) {
	this.data[this.parenthesisPos[this.parenthesisPos.length - 1]] = func;
}

StagingArea.prototype.addLeftParen = function (funcName) {
	if (this.pendingOperator != null) {
		this.data.push(this.pendingOperator);
		this.pendingOperator = null;
	}
	
	if (this.parenthesisPos.length == 0)
		this.submit();
	
	this.parenthesisPos.push(this.data.length);
	
	if (arguments.length == 0)
		this.data.push("(");
	else
		this.data.push(funcName);
}

StagingArea.prototype.addRightParen = function () {
	this.data.push(")");	
	
	return this.evaluate();
}

StagingArea.prototype.clear = function () {
	if (this.isCompleted())
		this.data = this.data.slice(0, this.parenthesisPos.pop());
}

StagingArea.prototype.toString = function() {
	return this.data.reduce(function (a, b) {
		return a + b.toString() + " ";
	}, "") + (this.pendingOperator == null ? "" : this.pendingOperator + " ");
}