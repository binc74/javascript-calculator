// Created by Bin Chen in 7/1/2018
// Modified by Jeb Alawi on 7/3/2018 - Added getHistoryHTML


function CalculatorModel() {
	this.inputArea = new InputArea();
	this.finalArea = new FinalArea();
	this.history = new History();
}

CalculatorModel.prototype.getHistoryHTML = function () {
    return this.history.entries.join("<br />")
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
	if (!this.inputArea.isResult || this.inputArea.isFinalResult)
		this.inputArea.submit();	
	
	this.finalArea.setPendingOperator(op);
	
	this.inputArea.setResult(this.finalArea.evaluate(), false);
}

/**
 * Add a function.
 *
 * @param {string} func		the function to be added
 * @author Bin Chen
 */
CalculatorModel.prototype.addFunction = function (func) {
	if (this.finalArea.endWithRightParen())
		this.finalArea.addFunction(func);
	else
		this.inputArea.addFunction(func);
	
	this.inputArea.setResult(this.finalArea.evaluate(), false);
}

/**
 * Add a left parenthesis, and then set the input to 0.
 *
 * @author Bin Chen
 */
CalculatorModel.prototype.addLeftParen = function () {
	this.finalArea.addLeftParen()
	
	this.inputArea.setResult("", false);
}

/**
 * Add a right parenthesis, and then evaluate the value inside the parenthesis.
 *
 * @author Bin Chen
 */
CalculatorModel.prototype.addRightParen = function () {
	this.inputArea.submit();
	this.inputArea.setResult(this.finalArea.addRightParen(), false);
}

/**
 * Evaluate the result of the expression and set it to the input area.
 *
 * @author Bin Chen
 */
CalculatorModel.prototype.evaluate = function () {	
	this.inputArea.setResult(this.finalArea.evaluate(), false);
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

/**
 * Submit the final equation.
 *
 * @author Bin Chen
 * Modified by Jeb Alawi 7/3/2018 - push expression and answer to history
 */
CalculatorModel.prototype.submit = function () {
	if (!this.inputArea.isResult || this.inputArea.isFinalResult)
		this.inputArea.submit();
	
    expression = this.finalArea.data.join(" ");
    answer = this.finalArea.submit();
    entry = expression + " = " + answer;
    this.history.entries.push(entry);
	this.inputArea.setResult(answer, true);
}

CalculatorModel.prototype.clear = function () {
	this.inputArea.clearInputArea();
	this.finalArea.clearFinalArea();
}

CalculatorModel.prototype.clearInputArea = function () {
	this.inputArea.clearInputArea();
}