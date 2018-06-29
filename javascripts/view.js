// Created by Bin Chen 6/28/2018
// Modified by Bin Chen 6/28/2018 - Implemented the View and updateNumberView function

/**
 * 
 */
function View(numberArea, stagingArea, finalArea, numberAreaId, finalAreaId) {
	this.numberArea = numberArea;
	this.stagingArea = stagingArea;
	this.finalArea = finalArea;
	this.numberAreaId = numberAreaId;
	this.finalAreaId = finalAreaId;
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
	document.getElementById(this.finalAreaId).innerHTML = this.finalArea.toString() + this.stagingArea.toString();	
}

View.prototype.initialize = function () {
	this.updateNumberView();
	this.updateResultView();
}