// Created by Bin Chen 6/28/2018
// Modified by Bin Chen 6/28/2018 - Implemented registerNumButtons function

function registerNumButtons(numberArea, view) {
	var appendNum = function () {
		numberArea.append(this.value);	
		view.updateNumberView();		
	};	
	
	// get all the button tags with class "number"
	var elementList = document.getElementsByClassName("number");
	
	// register functions for these buttons
	for (var i = 0; i < elementList.length; ++i)
		elementList[i].addEventListener("click", appendNum, false);
}

function registerOpButtons() {
	var appendNum = function () {
		numberArea.append(this.value);	
		view.updateNumberView();		
	};
	
	var elementList = document.getElementsByClassName("op");
}

function registerFuncButtons() {
	
}

function registerButtons(numberArea, resultArea, view) {
	registerNumButtons(numberArea, view);
}