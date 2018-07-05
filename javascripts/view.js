// Created by Bin Chen 6/28/2018
// Modified by Bin Chen 6/28/2018 - Implemented the View and updateNumberView function
// Modified by Jeb Alawi 7/3/2018 - Implemented history
// Modified by Josh Wright 7/4/2018 - Implemented memory

function CalculatorView(model) {
	this.model = model;
	this.inputAreaId = null;
	this.finalAreaId = null;
	this.historyId = null;
	this.memoryId = null;
}

/**
 * Initiaize the view for calculator.
 *
 * @param {string} inputAreaId		The id for the inputArea tag
 * @param {string} finalAreaId		The id for the finalArea tag
 * @author Bin Chen
 */
CalculatorView.prototype.initialize = function (inputAreaId, finalAreaId, calcAreaId, historyId,memoryId) {
	this.inputAreaId = inputAreaId;
	this.finalAreaId = finalAreaId;
	this.calcAreaId = calcAreaId;
	this.historyId = historyId;
	this.memoryId = memoryId;
	this.update();
};

/**
 * Update the view.
 *
 * @author Bin Chen
 */
CalculatorView.prototype.update = function () {
	document.getElementById(this.inputAreaId).innerHTML = this.model.getInputString();
	document.getElementById(this.finalAreaId).innerHTML = this.model.getFinalString();
	document.getElementById(this.calcAreaId).innerHTML = this.model.getLastCalcString();
    document.getElementById(this.historyId).innerHTML = this.model.getHistoryHTML();
    document.getElementById(this.memoryId).innerHTML = this.model.getMemoryHTML();
    document.getElementById("units").innerHTML = this.model.getUnits();

};