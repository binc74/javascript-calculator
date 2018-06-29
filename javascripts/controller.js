// Created by Bin Chen 6/28/2018
// Modified by Bin Chen 6/28/2018 - Implemented registerNumButtons function

function registerNumButtons(numberArea, view) {
	var appendNum = function () {
		numberArea.append(this.value);	
		view.updateNumberView();		
	};	
	
	
	
	var elementList = document.getElementsByClassName("number");
	
	for (let i = 0; i < elementList.length; ++i)
		elementList[i].addEventListener("click", appendNum, false);
}
	
function registerButtons(numberArea, resultArea, view) {
	registerNumButtons(numberArea, view);
}