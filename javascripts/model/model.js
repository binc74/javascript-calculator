// Created by Bin Chen in 7/1/2018


function CalculatorModel() {
	this.inputArea = new InputArea();
	this.finalArea = new FinalArea();
}

/**
 * Initialize the Model for the calculator.
 *
 * @author Bin Chen
 */
CalculatorModel.prototype.initialize = function () {
	this.inputArea.setFinalArea(this.finalArea);
	this.finalArea.setInputArea(this.inputArea);
}

/**
 * Add a digit.
 *
 * @param {string} digit		the string rep of the digit
 * @author Bin Chen
 */
CalculatorModel.prototype.addDigit = function (digit) {
	this.inputArea.push(digit);
}

/**
 * Add an operator.
 *
 * @param {string} op		the string rep of the operator
 * @author Bin Chen
 */
CalculatorModel.prototype.addOperator = function (op) {	
	if (!(this.finalArea.needClear() || this.inputArea.isTheResult()))
		this.inputArea.submit();	
	
	this.finalArea.setPendingOperator(op);
	
	this.inputArea.setResult(this.finalArea.evaluate());
}

/**
 * Add a function.
 *
 * @param {string} func		the function to be added
 * @author Bin Chen
 */
CalculatorModel.prototype.addFunction = function (func) {
	if (this.finalArea.needClear())
		this.finalArea.addFunction(func);
	else
		this.inputArea.addFunction(func);
	
	this.inputArea.setResult(this.finalArea.evaluate());
}

/**
 * Add a left parenthesis, and then set the input to 0.
 *
 * @author Bin Chen
 */
CalculatorModel.prototype.addLeftParen = function () {
	this.finalArea.addLeftParen()
	
	this.inputArea.setResult("");
}

/**
 * Add a right parenthesis, and then evaluate the value inside the parenthesis.
 *
 * @author Bin Chen
 */
CalculatorModel.prototype.addRightParen = function () {
	this.inputArea.submit();
	this.inputArea.setResult(this.finalArea.addRightParen());
}

/**
 * Evaluate the result of the expression and set it to the input area.
 *
 * @author Bin Chen
 */
CalculatorModel.prototype.evaluate = function () {	
	this.inputArea.setResult(this.finalArea.evaluate());
}

/**
 * Get the string that represents the number stored in input area.
 *
 * @return {string} the number
 * @author Bin Chen
 */
CalculatorModel.prototype.getInputString = function () {
	return this.inputArea.toString();
}

/**
 * Get the string that represents the expression stored in the final area and staging area.
 *
 * @return {string} the expression
 * @author Bin Chen
 */
CalculatorModel.prototype.getFinalString = function () {
	return this.finalArea.toString();
}

/**
 * Get the string that represents the expression stored in the final area and staging area.
 *
 * @return {string} the expression
 * @author Bin Chen
 */
CalculatorModel.prototype.getLastCalcString = function () {
	return this.finalArea.getCalcString();
}