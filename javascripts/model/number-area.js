// Created by Bin Chen 6/28/2018
// Modified by Bin Chen 6/28/2018 - Implemented the NumberArea, append, submitNumber and toString functions
// Modified by Bin Chen 6/29/2018 - change the data from list to string

function NumberArea() {
	this.data = "";
	this.stagingArea = null;
	this.hasPeriod = false;
	this.shouldClear = true;
}

NumberArea.prototype.setStagingArea = function (stagingArea) {
	this.stagingArea = stagingArea;
}

NumberArea.prototype.append = function (num) {	
	if (this.shouldClear) {
		this.stagingArea.clear();
		this.data = "";
		this.hasPeriod = false;
	}

	if (num == ".") {
		if (!this.hasPeriod) {
			this.data += num;
			this.hasPeriod = true;			
		}
	} else {		
		this.data += num;
	}
	
	this.shouldClear = false;
}

NumberArea.prototype.toString = function() {
	var res = "";
	var metPeriod = false || !this.hasPeriod;
	var count = 0;
	
	for (var i = this.data.length - 1; i > -1; --i) {
		var c = this.data[i];
		
		if (!metPeriod) {
			if (c == '.')
				metPeriod = true;
			
			res = c + res;
		} else if (i != 0 && ++count % 3 == 0) {
			res = "," + c + res;
		} else {
			res = c + res;
		}
	}
	
	if (res[0] == '.')
		res = "0" + res;
	
	return res;
}

NumberArea.prototype.submitNumber = function () {
	// merge the numbers in the data list and push the number into the list in resultArea 
	this.stagingArea.append(parseFloat(this.data));
	
	// initialize the data list
	this.shouldClear = true;
}

NumberArea.prototype.setResult = function (result) {
	this.data = result.toString();
	this.shouldClear = true;
}