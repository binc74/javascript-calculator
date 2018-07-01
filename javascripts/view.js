// Created by Bin Chen 6/28/2018
// Modified by Bin Chen 6/28/2018 - Implemented the View and updateNumberView function

/**
 * 
 */
function CalculatorView(model) {
	this.model = model;
	this.inputAreaId = null;
	this.finalAreaId = null;
}

CalculatorView.prototype.initialize = function (inputAreaId, finalAreaId) {
	this.inputAreaId = inputAreaId;
	this.finalAreaId = finalAreaId;
	this.updateNumberView();
}

/**
 * update the input area's view
 */
CalculatorView.prototype.updateNumberView = function () {
	document.getElementById(this.inputAreaId).innerHTML = this.model.getInputString();
}

/**
 * update the result area's view
 */
CalculatorView.prototype.updateFinalView = function () {
	document.getElementById(this.finalAreaId).innerHTML = this.model.getFinalString();	
}