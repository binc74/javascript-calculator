// Created by Bin Chen 6/28/2018
// Modified by Bin Chen 6/28/2018 - Implemented the NumberArea, append, submitNumber and toString functions
// Modified by Bin Chen 6/29/2018 - change the data from list to string

function NumberArea(resultArea) {
	this.data = "0";
	this.resultArea = resultArea;
	this.hasPeriod = false;
}

NumberArea.prototype.append = function (num) {
	if (this.data == "0" && num != ".") {
		this.data = num;		
	} else {
		if (num == ".")
			this.hasPeriod = true;
		
		this.data += num;
	}
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
	
	return res;
}

NumberArea.prototype.submitNumber = function () {
	alert();
	// merge the numbers in the data list and push the number into the list in resultArea 
	this.resultArea.data.push(parseFloat(this.data));
	
	// initialize the data list
	this.data = "0";
}

