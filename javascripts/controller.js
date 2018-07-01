// Created by Bin Chen 6/28/2018
// Modified by Bin Chen 6/28/2018 - Implemented registerNumButtons function
// Modified by Bin Chen 6/29/2018 - Implemented registerOpButtons function

// Controller for the calculator

function CalculatorController(model, view) {
	this.model = model;
	this.view = view;
}

CalculatorController.prototype.initialize = function () {
	registerNumButtons(this.model, this.view);
	registerOpButtons(this.model, this.view);
	registerParanthesis(this.model);
}


function registerNumButtons(model, view) {
	var appendNum = function () {
		model.addNumber(this.value);	
		view.update();	
	};	
	
	// get all the button tags with class "number"
	var numberButtonList = document.getElementsByClassName("number");
	
	// register functions for these buttons
	for (var i = 0; i < numberButtonList.length; ++i)
		numberButtonList[i].addEventListener("click", appendNum, false);
}

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

function registerParanthesis(model) {
	var addLeftParan = function () { 
		model.addLeftParan();
		view.update();
	};
		
	var addRightParan = function () { 
		model.addRightParan();
		view.update();
	};
	
	document.getElementById("(").addEventListener("click", addLeftParan, false);
	document.getElementById(")").addEventListener("click", addRightParan, false);	
}	

function registerFuncButtons() {
	
}