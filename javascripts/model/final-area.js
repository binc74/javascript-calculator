// Created by Bin Chen 6/29/2018
// Implemented by Bin Chen 6/29/2018 - Implement finalArea and its four prototype functions, implement parts of calculation

function FinalArea() {
	this.data = [];
	this.inputArea = null;	
}

/**
 * Set the inputArea for the finalArea.
 *
 * @param {InputArea} inputArea		The inputArea
 * @author Bin Chen
 */
FinalArea.prototype.setInputArea = function (inputArea) {
	this.inputArea = inputArea;
}

/**
 * Push the element into the data of FinalArea.
 *
 * @param {string or number} ele		The element
 * @author Bin Chen
 */
FinalArea.prototype.push = function (ele) {
	this.data.push(ele);
}

/**
 * Evaluate the data(expression) storing in the FinalArea.
 *
 * @return {number} the evaluated value
 * @author Bin Chen
 */
FinalArea.prototype.evaluate = function () {
	if (this.data.length > 0)
		return getResult(this.data.slice());
	
	return 0;
}

/**
 * return the string representation of the data.
 *
 * @return {number} the evaluated value
 * @author Bin Chen
 */
FinalArea.prototype.toString = function() {
	return this.data.reduce(function (a, b) {
		return a + b.toString() + " ";
	}, "");
}

