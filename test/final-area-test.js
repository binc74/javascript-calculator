//Created by Houyi Fan 7/5/2018 - Added test cases for final-area.js

console.log("Test cases for Final-Area:");

var test = new FinalArea();

function testSetInputArea(){
	test.setInputArea("input");
	var expected = "input";
	var actual = test.inputArea;

	console.log("Expected: input, Actual: " + actual);
}

function testEndWithRightParen(){
	test.pendingOperator = null;
	test.data = [")"];
	var expected = true;
	var actual = test.endWithRightParen();

	console.log("Expected: true, Actual: " + actual);
}

function testPush(){
	test.data = [];
	test.pendingOperator = "-"
	var expected = "-";
	test.push(2);
	var actual = test.data;

	console.log("Expected: -,2, Actual: " + actual);
}

function testSetPendingOperator(){
	var expected = "+";
	test.setPendingOperator("+");
	var actual = test.pendingOperator;

	console.log("Expected: +, Actual: " + actual);
}

function testCountEndRightParen(){
	test.data = ["(", ")", "(", ")"];
	var expected = 1;
	var actual = test.countEndRightParen();

	console.log("Expected: 1, Actual: " + actual);
}

function testAddLeftParen(){
	test.pendingOperator = null;
	test.data = [];
	var expected = "(";
	test.addLeftParen();
	var actual = test.data;

	console.log("Expected: (, Actual: " + actual);
}

// function testAddRightParen(){
// 	test.data = [];
// 	var expected = ")";
// 	var actual = test.addRightParen();

// 	console.log("Expected: ), Actual: " + actual);
// }

function testGetEvaluationList(){
	test.data = ["(", 3];
	test.lastLeftParen = 1;
	var expected = ")";
	var actual = test.getEvaluationList();

	console.log("Expected: , Actual: " + actual);
}

function testClear(){
	test.data = ["(", 3, ")"];
	test.lastLeftParen = 1;
	var expected = "(";
	test.clear();
	var actual = test.data;

	console.log("Expected: (, Actual: " + actual);
}

// function testGetCalcString(){
// 	test.data = ["(", 3, "+", 1, ")"];
// 	test.lastLeftParen = 1;
// 	var expected = "3 + 1 ) = 4";
// 	var actual = test.getCalcString();

// 	console.log("Expected: 3 + 1 ) = 4, Actual: " + actual);
// }

testSetInputArea();
testEndWithRightParen();
testPush();
testSetPendingOperator();
testCountEndRightParen();
testAddLeftParen();
// testAddRightParen();
testGetEvaluationList();
testClear();
// testGetCalcString();

console.log("");