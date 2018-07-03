// Created by Bin Chen 6/28/2018
// Modified by Bin Chen 6/28/2018 - Implemented registerNumButtons function
// Modified by Bin Chen 6/29/2018 - Implemented registerOpButtons function

// Controller for the calculator

function CalculatorController(model, view) {
	this.model = model;
	this.view = view;
}

/**
 * Initialize the controller.
 *
 * @author Bin Chen
 */
CalculatorController.prototype.initialize = function () {
	registerNumButtons(this.model, this.view);
	registerOpButtons(this.model, this.view);
	registerParenthesis(this.model, this.view);
	registerFuncButtons(this.model);
	registerGlobalFuncButtons(model, view);
}

/**
 * Register the number buttons with functions.
 *
 * @param {CalculatorModel} model	The calculator model
 * @param {CalculatorView} view		The calculator view
 * @author Bin Chen
 */
function registerNumButtons(model, view) {
	var appendNum = function () {
		model.addDigit(this.value);	
		view.update();	
	};	
	
	// get all the button tags with class "number"
	var numberButtonList = document.getElementsByClassName("number");
	
	// register functions for these buttons
	for (var i = 0; i < numberButtonList.length; ++i)
		numberButtonList[i].addEventListener("click", appendNum, false);
}

/**
 * Register the operator buttons with functions.
 *
 * @param {CalculatorModel} model	The calculator model
 * @param {CalculatorView} view		The calculator view
 * @author Bin Chen
 */
function registerOpButtons(model, view) {
	var appendOp = function () {
		model.addOperator(this.value);
		
		view.update();
	};
	
	// get all the button tags with class "op"
	var opButtonList = document.getElementsByClassName("op");
	
	// register functions for these buttons
	for (var i = 0; i < opButtonList.length; ++i)
		opButtonList[i].addEventListener("click", appendOp, false);
}

/**
 * Register the parenthesis buttons with functions.
 *
 * @param {CalculatorModel} model	The calculator model
 * @param {CalculatorView} view		The calculator view
 * @author Bin Chen
 */
function registerParenthesis(model, view) {
	var addLeftParen = function () { 
		model.addLeftParen();
		view.update();
	};
		
	var addRightParen = function () { 
		model.addRightParen();
		view.update();
	};
	
	document.getElementById("(").addEventListener("click", addLeftParen, false);
	document.getElementById(")").addEventListener("click", addRightParen, false);	
}	

/**
 * Register the functions buttons with functions.
 *
 * @param {CalculatorModel} model	The calculator model
 * @param {CalculatorView} view		The calculator view
 * @author Bin Chen
 */
function registerFuncButtons(model, view) {
	var addFunction = function () {
		model.addFunction(this.value);
		view.update();
	};
	
	var funcButtonList = document.getElementsByClassName("func");
	
	for (var i = 0; i < funcButtonList.length; ++i)
		funcButtonList[i].addEventListener("click", addFunction, false);
}

/**
 * Register the global functions buttons with functions.
 *
 * @param {CalculatorModel} model	The calculator model
 * @param {CalculatorView} view		The calculator view
 * @author Bin Chen
 */
function registerGlobalFuncButtons(model, view) {
	var submitEquation = function () {
		model.submit();
		view.update();
	}
	
	document.getElementById("=").addEventListener("click", submitEquation, false);
}