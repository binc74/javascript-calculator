//Created by Houyi Fan 7/5/2018 - Added test cases for Calculation.js

console.log("Test cases for Calculation:");

function test1(){
	var tokens = [];
	var expected = 0;
	var actual = Calculation.getResult(tokens, false);

	console.log("Expected: 0, Actual: " + actual);
}

function test2(){
	var tokens = [1, "+", 2];
	var expected = 3;
	var actual = Calculation.getResult(tokens, false);

	console.log("Expected: 3, Actual: " + actual);
}

function test3(){
	var tokens = [3, "-", 2];
	var expected = 1;
	var actual = Calculation.getResult(tokens, false);

	console.log("Expected: 1, Actual: " + actual);
}

test1();
test2();
test3();

console.log("");