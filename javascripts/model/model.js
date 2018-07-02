// Created by Bin Chen in 7/1/2018

function CalculatorModel() {
	this.inputArea = new InputArea();
	this.stagingArea = new StagingArea();
	this.finalArea = new FinalArea();
}

CalculatorModel.prototype.initialize = function () {
	this.inputArea.setStagingArea(this.stagingArea);
	this.stagingArea.setFinalArea(this.finalArea);
	this.finalArea.setInputArea(this.inputArea);
}

CalculatorModel.prototype.addNumber = function (num) {
	this.inputArea.push(num);
}

CalculatorModel.prototype.addOperator = function (op) {	
	if (!this.stagingArea.isCompleted())
		this.inputArea.submit();	
	
	this.stagingArea.setPendingOperator(op);
	
	this.inputArea.setResult(this.stagingArea.evaluate());
}

CalculatorModel.prototype.getNumberString = function () {
	var str = this.inputArea.toString();
	
	return str == "" ? "0" : str;
}

CalculatorModel.prototype.addLeftParan = function () {
	this.stagingArea.addLeftParan()
	
	this.inputArea.setResult("");
}

CalculatorModel.prototype.addRightParan = function () {
	this.inputArea.submit();
	this.inputArea.setResult(this.stagingArea.addRightParan());
}

CalculatorModel.prototype.evaluate = function () {	
	this.inputArea.setResult(this.stagingArea.evaluate());
}

CalculatorModel.prototype.getInputString = function () {
	return this.inputArea.toString();
}

CalculatorModel.prototype.getFinalString = function () {
	return this.finalArea.toString() + " // " + this.stagingArea.toString();
}

CalculatorModel.prototype.addFunction = function (func) {
	if (this.stagingArea.isCompleted())
		this.stagingArea.addFunction(func);
	else
		this.inputArea.addFunction(func);
	
	this.inputArea.setResult(this.stagingArea.evaluate());
}