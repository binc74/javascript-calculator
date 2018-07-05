//Created by Houyi Fan 7/5/2018 - Added test cases for input-area.js

console.log("Test cases for Input-Area:");

var test = new InputArea();

function testSetFinalArea(){
	test.setFinalArea("final");
	var expected = "final";
	var actual = test.finalArea;

	console.log("Expected: final, Actual: " + actual);
}

function testSetData(){
	test.setData("12");
	var expected = "12";
	var actual = test.data;

	console.log("Expected: 12, Actual: " + actual);
}

function testPush(){
	test.data = "12";
	var expected = "122";
	test.push(2);
	var actual = test.data;

	console.log("Expected: 122, Actual: " + actual);
}

function testToString(){
	test.data = "12333"
	var expected = "12,333";
	var actual = test.toString();

	console.log("Expected: 12,333, Actual: " + actual);
}

// function testSubmit(){
// 	test.data = "1";
// 	var expected = 1;
// 	test.submit();
// 	var actual = test.finalArea;

// 	console.log("Expected: 1, Actual: " + actual);
// }

function testSetPi(){
	test.setPi();
	var expected = "3.141592653589793";
	var actual = test.data;

	console.log("Expected: 3.141592653589793, Actual: " + actual);
}

function testRemove(){
	test.data = "12";
	test.remove();
	var expected = "1";
	var actual = test.data;

	console.log("Expected: 1, Actual: " + actual);
}

function testReturnData(){
	test.data = "12";
	var expected = "12";
	var actual = test.returnData();

	console.log("Expected: 12, Actual: " + actual);
}


testSetFinalArea();
testSetData();
testPush();
testToString();
// testSubmit();
testSetPi();
testRemove();
testReturnData();

console.log("");