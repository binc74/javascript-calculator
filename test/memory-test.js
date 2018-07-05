//Created by Houyi Fan 7/5/2018 - Added test cases for memory.js

console.log("Test cases for Memory:");

var test = new Memory();

function testMemoryStore(){
	test.memory = [1];
	test.memoryStore(2);
	var expected = [1, 2];
	var actual = test.memory;

	console.log("Expected: 2,1, Actual: " + actual);
}

function testMemoryClear(){
	test.memory = [1, 2];
	test.memoryClear();
	var expected = [2];
	var actual = test.memory;

	console.log("Expected: 2, Actual: " + actual);
}

function testMemoryClearAll(){
	test.memory = [1, 2, 3];
	test.memoryClear();
	var expected = [];
	var actual = test.memory;

	console.log("Expected: 2,3, Actual: " + actual);
}

function testMemoryAdd(){
	test.memory = [1];
	test.memoryAdd(2);
	var expected = [3];
	var actual = test.memory;

	console.log("Expected: 3, Actual: " + actual);
}

function testMemorySubtract(){
	test.memory = [1];
	test.memorySubtract(2);
	var expected = [-1];
	var actual = test.memory;

	console.log("Expected: -1, Actual: " + actual);
}

testMemoryStore();
testMemoryClear();
testMemoryClearAll();
testMemoryAdd();
testMemorySubtract();

console.log("");