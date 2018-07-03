// Created by Bin Chen 6/28/2018
// Modified by Bin Chen 6/28/2018 - Implemented the View and updateNumberView function
// Modified by Jeb Alawi 7/3/2018 - Implemented history

function CalculatorView(model) {
	this.model = model;
	this.inputAreaId = null;
	this.finalAreaId = null;
	this.historyId = null;
}

/**
 * Initiaize the view for calculator.
 *
 * @param {string} inputAreaId		The id for the inputArea tag
 * @param {string} finalAreaId		The id for the finalArea tag
 * @author Bin Chen
 */
CalculatorView.prototype.initialize = function (inputAreaId, finalAreaId, calcAreaId, historyId) {
	this.inputAreaId = inputAreaId;
	this.finalAreaId = finalAreaId;
	this.calcAreaId = calcAreaId;
	this.historyId = historyId;
	this.update();
}

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

}