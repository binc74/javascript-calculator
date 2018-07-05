// Created by Bin Chen 6/29/2018
// Implemented by Bin Chen 6/29/2018 - Implement finalArea and its four prototype functions, implement parts of calculation
// Implemented by Bin Chen 7/2/2018 - merge the stagingArea into the FinalArea
// Modified by Houyi Fan 7/5/2018 - add clearFinalArea function

function FinalArea() {
	this.data = [];
	this.pendingOperator = null;
	this.lastLeftParen = 0;
	this.parenthesisPos = [];
	this.inputArea = null;	
	this.isRadian = false;
}

/**
 * Set the inputArea for the finalArea.
 *
 * @param {InputArea} inputArea		The inputArea
 * @author Bin Chen
 */
FinalArea.prototype.setInputArea = function (inputArea) {
	this.inputArea = inputArea;
};

/**
 * returns true if there is data need to be clear.
 *
 * @return {boolean} whether there is some data need to be clear
 * @author Bin Chen
 */
FinalArea.prototype.endWithRightParen = function () {
	return this.data.length > 0 && this.pendingOperator == null &&
		this.data[this.data.length - 1] == ')';
};

/**
 * Push the element into the data list.
 *
 * @param {string or number} ele		The element
 * @author Bin Chen
 */
FinalArea.prototype.push = function (ele) {
	if (this.pendingOperator != null) {
		this.data.push(this.pendingOperator);		
		this.pendingOperator = null;
	}
	
	this.data.push(ele);
};

/**
 * The the operator that may be changed or used in the future.
 *
 * @param {string} op		The operator
 * @author Bin Chen
 */
FinalArea.prototype.setPendingOperator = function (op) {
	if (this.parenthesisPos.length > 0)
		this.lastLeftParen = this.parenthesisPos[this.parenthesisPos.length - 1];
	else
		this.lastLeftParen = 0;
	
	this.pendingOperator = op;
};

/**
 * Add the function to its appropriate position.
 *
 * @param {string} func		The function to be add
 * @author Bin Chen
 */
FinalArea.prototype.addFunction = function (func) {
	if (this.data[this.lastLeftParen] == "(") {
		this.data[this.lastLeftParen] = func;
	} else {
		var parenPosition = this.lastLeftParen;
		
		this.addLeftParen(func, parenPosition);	
		this.addRightParen();
	}
};

/**
 * Count the number of right parenthesis at the end of data array.
 *
 * @return {number} the number of right parenthesis at the end of data array
 * @author Bin Chen
 */
FinalArea.prototype.countEndRightParen = function () {
	var count = 0;
	
	for (var i = this.data.length - 1; i > -1; --i) {
		if (this.data[i] != ')')
			break;
		
		count++;
	}
	
	return count;
};

/**
 * Add a left parenthesis with or without function name at the intend position.
 *
 * @param {string} func			The function to be add (optional)
 * @param {number} position		The position of the function (optional)
 * @author Bin Chen
 */
FinalArea.prototype.addLeftParen = function (funcName, position) {
	if (this.pendingOperator != null) {
		this.data.push(this.pendingOperator);
		this.pendingOperator = null;
	}
	
	var currParenPosition = this.data.length;
	
	switch (arguments.length) {
		case 0:
			this.data.push("(");			
			break;
			
		case 1:
			this.data.push(funcName);			
			break;
			
		case 2:			
			for (var i = position; i < this.parenthesisPos.length; ++i)
				this.parenthesisPos[i]++;
		
			this.data.splice(position, 0, funcName);			
			currParenPosition = position;
			break;
	}
	
	this.parenthesisPos.push(currParenPosition);
	this.lastLeftParen = currParenPosition;
};

/**
 * Append the left parenthesis to the end of data, then evaluate the value inside the parenthesis.
 *
 * @author Bin Chen
 */
FinalArea.prototype.addRightParen = function () {
	this.data.push(")");	
	this.lastLeftParen = this.parenthesisPos.pop();
	
	return this.evaluate();
};

/**
 * get the list for the evaluation.
 *
 * @return {array of strings and numbers} the list to be evaluate
 * @author Bin Chen
 */
FinalArea.prototype.getEvaluationList = function () {
	if (this.lastLeftParen > 0) {
		if (this.data[this.data.length - 1] == ')')
			return this.data.slice(this.lastLeftParen);
		else
			return this.data.slice(this.lastLeftParen + 1);
	}
	
	return this.data.slice();
};

/**
 * Evaluate the value of data(expression).
 *
 * @return {number} the evaluated value
 * @author Bin Chen
 */
FinalArea.prototype.evaluate = function () {
	console.log("////////");
	console.log("current paren pos: [" + this.parenthesisPos.join(" ") + "]");
	console.log("Last paren: " + this.lastLeftParen);
	console.log("Current expr: " + this.getEvaluationList().join(" "));
	
	return Calculation.getResult(this.getEvaluationList(), this.isRadian);
};

/**
 * Clear the parenthesis that match the end parenthesis, and the inside content.
 *
 * @author Bin Chen
 */
FinalArea.prototype.clear = function () {
	this.data = this.data.slice(0, this.lastLeftParen);
};

/**
 * Return the string representation of the data.
 *
 * @return {number} the evaluated value
 * @author Bin Chen
 */
FinalArea.prototype.toString = function () {
	return this.data.reduce(function (a, b) {
		return a + b.toString() + " ";
	}, "") + (this.pendingOperator == null ? "" : this.pendingOperator + " ");
};

/**
 * Return the expression and result of current calculation.
 *
 * @return {number} the evaluated value
 * @author Bin Chen
 */
FinalArea.prototype.getCalcString = function () {
	var list = this.getEvaluationList();
	
	if (list.length == 0 || this.data.length == 0)
		return "No Temporary Calculation.";
	
	return this.getEvaluationList().join(" ") + " = " + this.evaluate();
};


/**
 * Filling parenthesis for unclosed parens.
 *
 * @author Bin Chen
 */
FinalArea.prototype.fillingParen = function () {
	for (var i = 0; i < this.parenthesisPos.length; ++i)
		this.data.push(")");
};

/**
 * Submit the final expression and clear the expression.
 *
 * @return {number} the result
 * @author Bin Chen
 */
FinalArea.prototype.submit = function () {
	// auto filling the missing parenthesis
	for (var i = 0; i < this.parenthesisPos.length; ++i)
		this.data.push(")");
	
	// get the result
	var res = Calculation.getResult(this.data, this.isRadian);
	
	// clear the data
	this.data = [];
	this.pendingOperator = null;	
	
	return res;
};

/**
 * Clear the final area
 *
 * @author Houyi Fan
 */
FinalArea.prototype.clearFinalArea = function () {
	this.data = [];
	this.pendingOperator = null;
	this.parenthesisPos = [];
	this.lastLeftParen = 0;
};
