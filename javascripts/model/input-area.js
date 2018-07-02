// Created by Bin Chen 6/28/2018
// Modified by Bin Chen 6/28/2018 - Implemented the InputArea, append, submitNumber and toString functions
// Modified by Bin Chen 6/29/2018 - change the data from list to string

function InputArea() {
	this.data = "";
	this.stagingArea = null;
	this.hasPeriod = false;
	this.isNegative = false;
	this.haveSubmitted = false;
}

InputArea.prototype.setStagingArea = function (stagingArea) {
	this.stagingArea = stagingArea;
}

InputArea.prototype.push = function (num) {	
	if (this.haveSubmitted) {
		this.stagingArea.clear();
		this.data = "";
		this.hasPeriod = false;
		this.isNegative = false;
	}

	if (num == ".") {
		if (!this.hasPeriod) {
			if (this.data.length == 0)
				this.data += "0";
			
			this.data += num;
			this.hasPeriod = true;			
		}
	} else {		
		this.data += num;
	}
	
	this.haveSubmitted = false;
}

InputArea.prototype.toString = function() {
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
	
	if (this.isNegative)
		res = "-" + res;
	
	return res;
}

InputArea.prototype.submit = function () {
	//if (!this.haveSubmitted) {
	if (this.data.length == 0) {
		this.stagingArea.push(0);
	} else {
		var res = parseFloat(this.data);
		this.stagingArea.push(this.isNegative ? -res : res);	
	}
	//}
	
	this.haveSubmitted = true;
}

InputArea.prototype.setResult = function (result) {
	this.data = result.toString();
	
	if (result < 0) {
		this.isNegative = true;
		this.data = this.data.slice(1);
	} else {
		this.isNegative = false;
	}	
}

InputArea.prototype.addFunction = function (func) {
	this.stagingArea.addLeftParen(func);
	this.submit();
	this.stagingArea.addRightParen();
}