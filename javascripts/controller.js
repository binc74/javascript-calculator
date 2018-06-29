// Created by Bin Chen 6/28/2018
// Modified by Bin Chen 6/28/2018 - Implemented registerNumButtons function
// Modified by Bin Chen 6/29/2018 - Implemented registerOpButtons function

function registerNumButtons(numberArea, view) {
	var appendNum = function () {
		numberArea.append(this.value);	
		view.updateNumberView();		
	};	
	
	// get all the button tags with class "number"
	var numberButtonList = document.getElementsByClassName("number");
	
	// register functions for these buttons
	for (var i = 0; i < numberButtonList.length; ++i)
		numberButtonList[i].addEventListener("click", appendNum, false);
}

function registerOpButtons(numberArea, stagingArea, view) {
	var appendOp = function () {
		numberArea.submitNumber();
		stagingArea.append(this.value);
		view.updateResultView();
	};
	
	// get all the button tags with class "op"
	var opButtonList = document.getElementsByClassName("op");
	
	// register functions for these buttons
	for (var i = 0; i < opButtonList.length; ++i)
		opButtonList[i].addEventListener("click", appendOp, false);
}

function registerFuncButtons() {
	
}

function registerButtons(numberArea, stagingArea, finalArea, view) {
	registerNumButtons(numberArea, view);
	registerOpButtons(numberArea, stagingArea, view);
}