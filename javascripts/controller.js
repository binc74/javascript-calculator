// Created by Bin Chen 6/28/2018
// Modified by Bin Chen 6/28/2018 - Implemented registerNumButtons function
// Modified by Bin Chen 6/29/2018 - Implemented registerOpButtons function
// Modified by Jeb Alawi 7/4/2018 - added pi and back global functions
// Modified by Houyi Fan 7/4/2018 - added equals, C and CE global functions

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
	registerFuncButtons(this.model, this.view);
	registerGlobalFuncButtons(this.model, this.view);
    registerMemoryButtons(this.model, this.view);
    registerHistoryClearButton(this.model, this.view);
    registerUnitsButton(this.model, this.view);
    showHideMemHist(this.model, this.view, "historyBox", "showHistory");
    showHideMemHist(this.model, this.view, "memBox", "showMem");

};

/**
 * Register the history clear button with a function.
 *
 * @param {CalculatorModel} model	The calculator model
 * @param {CalculatorView} view		The calculator view
 * @author Josh Wright
 */
function registerHistoryClearButton(model, view) {
    var historyClear = function () {
        model.historyClear();
        view.update();
    };
    document.getElementById("hClear").addEventListener("click", historyClear, false);
}

/**
 * Register the units buttons with a function.
 *
 * @param {CalculatorModel} model	The calculator model
 * @param {CalculatorView} view		The calculator view
 * @author Josh Wright
 */
function registerUnitsButton(model, view) {

    var setUnits = function () {
        model.setUnits();
        view.update();
    };
    document.getElementById("units").addEventListener("click", setUnits, false);
}

/**
 * Register the memory buttons with a function.
 *
 * @param {CalculatorModel} model	The calculator model
 * @param {CalculatorView} view		The calculator view
 * @author Josh Wright
 */
function registerMemoryButtons(model, view) {
    var memoryAdd = function () {
        model.memoryAdd(parseInt(model.inputArea.returnData()));
        view.update();
    };
    var memorySubtract = function () {
        model.memorySubtract(parseInt(model.inputArea.returnData()));
        view.update();
    };
    var memoryStore = function () {
        model.memoryStore(parseInt(model.inputArea.returnData()));
        view.update();
    };
    var memoryRecall = function () {
        model.memoryRecall();
        view.update();
    };
    var memoryClear = function () {
        model.memoryClear();
        view.update();
    };
    var memoryClearAll = function () {
        model.memoryClearAll();
        view.update();
    };
    // get all the button tags with class "number"
    document.getElementById("M+").addEventListener("click", memoryAdd, false);
    document.getElementById("M-").addEventListener("click", memorySubtract, false);
    document.getElementById("MS").addEventListener("click", memoryStore, false);
    document.getElementById("MR").addEventListener("click", memoryRecall, false);
    document.getElementById("MC").addEventListener("click", memoryClear, false);
    document.getElementById("MCA").addEventListener("click", memoryClearAll, false);
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
 *
 * Modified by Jeb Alawi 7/4/2018 - added pi and back
 */
function registerGlobalFuncButtons(model, view) {
	var submitEquation = function () {
		model.submit();
		view.update();
	}

	var clearInputArea = function () {
		model.clearInputArea();
		view.update();
	}

	var clearAreas = function () {
		model.clear();
		view.update();
	}

	var pi = function () {
		model.setPi();
		view.update();
	}

	var back = function () {
		model.removeDigit();
		view.update();
	}

	document.getElementById("equals").addEventListener("click", submitEquation, false);
	document.getElementById("C").addEventListener("click", clearAreas, false);
	document.getElementById("CE").addEventListener("click", clearInputArea, false);
    document.getElementById("pi").addEventListener("click", pi, false);
    document.getElementById("back").addEventListener("click", back, false);

}


/**
 * shows or hides the memory section
 * @param {CalculatorModel} model	The calculator model
 * @param {CalculatorView} view		The calculator view
 *
 * @author Jeb Alawi
 */
function showHideMemHist(model, view, boxId, buttonId) {
    var showHideHistory = function () {
        // show the history or memory
        if (document.getElementById(boxId).style.display == "none") {
            document.getElementById(boxId).style.display = "table-cell";

            //hide the history or memory
        }else{
            document.getElementById(boxId).style.display = "none";
        }



        if(document.getElementById("historyBox").style.display == "none" && document.getElementById("memBox").style.display == "none"){
            document.getElementById("result").style.margin = "1%";
            document.getElementById("result").style.marginLeft = "3%";

            document.getElementById("input").style.margin = "1%";
            document.getElementById("input").style.marginLeft = "3%";

            document.getElementById("lastCalc").style.margin = "1%";
            document.getElementById("lastCalc").style.marginTop = "1%";
            document.getElementById("lastCalc").style.marginLeft = "3%";

            document.getElementById("buttonTableDiv").style.height = "46%";
            document.getElementById("buttonTableDiv").style.marginTop = "5%";
            document.getElementById("calculator").style.paddingBottom = "200px";


        } else if(document.getElementById("historyBox").style.display == "none" || document.getElementById("memBox").style.display == "none"){
            document.getElementById("result").style.margin = "3%";
            document.getElementById("input").style.margin = "3%";
            document.getElementById("lastCalc").style.margin = "3%";
            document.getElementById("buttonTableDiv").style.marginTop = "7%";
            document.getElementById("buttonTableDiv").style.height = "52%";
            document.getElementById("calculator").style.paddingBottom = "150px";
        }else{
            document.getElementById("calculator").style.paddingBottom = "50px";

        }
    };


    document.getElementById(buttonId).addEventListener("click", showHideHistory, false);

}
