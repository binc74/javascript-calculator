// Created by Bin Chen 6/28/2018
// Modified by Bin Chen 6/28/2018 - Implemented the InputArea, append, submitNumber and toString functions
// Modified by Bin Chen 6/29/2018 - change the data from list to string


function InputArea() {
	this.data = "";				// the input number in string format
	this.finalArea = null;		// the finalArea
	this.hasPeriod = false;		// true if the input read a period (use to avoid adding multiple period into the data)
	this.isNegative = false;	// true if the input number is negative (use to deal with wired situation)
	this.isResult = false;		// true if current input number is a result (set by the calculation from finalArea)
	this.isFinalResult = false; // true if the user just press "=" button
}

/**
 * Set the finalArea for the inputArea.
 *
 * @param {FinalArea} finalArea		The finalArea
 * @author Bin Chen
 */
InputArea.prototype.setFinalArea = function (finalArea) {
	this.finalArea = finalArea;
};
/**
 * Set the data for the inputArea.
 *
 * @param {data} data		The data that is being set
 * @author Josh Wright
 */
InputArea.prototype.setData = function (data) {
    this.data = data;
};

/**
 * Push the num character into the end of data string.
 *
 * @param {string} num		The num character
 * @author Bin Chen
 */
InputArea.prototype.push = function (num) {	
	// if the current input is the result, then clear the input
	if (this.isResult) {		
		this.data = "";
		this.hasPeriod = false;
		this.isNegative = false;
		this.isFinalResult = false;
		
		// remove redundent data in the finalArea if necessary
		if (this.finalArea.endWithRightParen())
			this.finalArea.clear();
	}

	// deal with the number that have period
	if (num == ".") {
		if (!this.hasPeriod) {
			if (this.data.length == 0)
				this.data += "0";
			
			this.data += num;
			this.hasPeriod = true;			
		}
	} else {		
		this.data += num;
	}
	
	// since the user change the number, it now isn't a result
	this.isResult = false;
};

/**
 * Return the string representation of the data.
 *
 * @return {number} the evaluated value
 * @author Bin Chen
 */
InputArea.prototype.toString = function() {
	var res = "";
	var metPeriod = !this.data.includes(".");
	var count = 0;
	
	for (var i = this.data.length - 1; i > -1; --i) {
		var c = this.data[i];
		
		if (!metPeriod) {
			if (c == '.')
				metPeriod = true;
			
			res = c + res;
		} else if (i != 0 && ++count % 3 == 0) {
			res = "," + c + res;
		} else {
			res = c + res;
		}
	}
	
	if (this.isNegative)
		res = "-" + res;
	
	return res;
};

/**
 * Submit current data to the finalArea.
 *
 * @author Bin Chen
 */
InputArea.prototype.submit = function () {
	if (this.data.length == 0) {
		this.finalArea.push(0);
	} else {
		var res = parseFloat(this.data);
		this.finalArea.push(this.isNegative ? -res : res);	
	}
};

/**
 * Set the result to current data.
 *
 * @param {number} result				the result number
 * @param {boolean} isFinalResult		true if this is the final result (after pressing equal sign)
 * @author Bin Chen
 */
InputArea.prototype.setResult = function (result, isFinalResult) {
	this.data = result.toString();
	
	if (result < 0) {
		this.isNegative = true;
		this.data = this.data.slice(1);
	} else {
		this.isNegative = false;
	}	
	
	this.isResult = true;
	this.isFinalResult = isFinalResult;
};

/**
 * push a function to the finalArea with current data as parameter.
 *
 * @param {string} func		the name of the function
 * @author Bin Chen
 */
InputArea.prototype.addFunction = function (func) {
	this.finalArea.addLeftParen(func);
	this.submit();
	this.finalArea.addRightParen();
};

/**
 * clear the input area
 *
 * @author Houyi Fan
 */
InputArea.prototype.clearInputArea = function () {
	this.data = "";	
	this.hasPeriod = false;	
	this.isNegative = false;
	this.isResult = false;
	this.isFinalResult = false;
};

InputArea.prototype.setPi = function () {
	this.data = Math.PI.toString();
	this.hasPeriod = true;	
	this.isNegative = false;
	this.isResult = true;
	this.isFinalResult = true;
};

/**
 * Remove a digit.
 * @author Jeb Alawi
 * Modified by Houyi Fan 7/5/2018 - fix a syntax error
 */
InputArea.prototype.remove = function () {
	if (this.data.length == 0)
		this.isNegative = false;
	else
		this.data = this.data.slice(0,this.data.length-1);
};
/**
 * Return the string representation of the data.
 */
InputArea.prototype.returnData = function () {
	return this.data;
};
