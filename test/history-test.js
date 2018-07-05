//Created by Houyi Fan 7/5/2018 - Added test cases for history.js

console.log("Test cases for History:");

function test1(){
	var test = new History();

	test.entries = ["a", "b", "c"];
	var expected = [];
	test.historyClear();

	function compare(expected, actual){
		if(expected.length == actual.length){
			for(var i = 0; i < expected.length; ++i){
				if(expected[i] != actual[i]){
					return false;
				}
			}
		}else{
			return false;
		}
		return true;
	}

	console.log("Expected: true, Actual: " + compare(expected, test.entries));
}

function test2(){
	var test = new History();

	test.entries = ["a", "b", "c"];
	var expected = ["a"];
	test.historyClear();

	function compare(expected, actual){
		if(expected.length == actual.length){
			for(var i = 0; i < expected.length; ++i){
				if(expected[i] != actual[i]){
					return false;
				}
			}
		}else{
			return false;
		}
		return true;
	}

	console.log("Expected: false, Actual: " + compare(expected, test.entries));
}

test1();
test2();

console.log("");