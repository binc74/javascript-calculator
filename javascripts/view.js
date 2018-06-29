// Created by Bin Chen 6/28/2018
// Modified by Bin Chen 6/28/2018 - Implemented the View and updateNumberView function

/**
 * 
 */
function View(numberArea, stagingArea, resultArea, numberAreaId, resultAreaId) {
	this.numberArea = numberArea;
	this.stagingArea = stagingArea;
	this.resultArea = resultArea;
	this.numberAreaId = numberAreaId;
	this.resultAreaId = resultAreaId;
}

/**
 * update the number area's view
 */
View.prototype.updateNumberView = function () {
	document.getElementById(this.numberAreaId).innerHTML = this.numberArea.toString();	
}

/**
 * update the result area's view
 */
View.prototype.updateResultView = function () {
	document.getElementById(this.resultAreaId).innerHTML = this.resultArea.toString() + this.stagingArea.toString();	
}

View.prototype.initialize = function () {
	this.updateNumberView();
	this.updateResultView();
}