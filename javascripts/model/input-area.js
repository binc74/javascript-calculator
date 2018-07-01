// Created by Bin Chen 6/28/2018
// Modified by Bin Chen 6/28/2018 - Implemented the InputArea, append, submitNumber and toString functions
// Modified by Bin Chen 6/29/2018 - change the data from list to string

function InputArea() {
	this.data = "";
	this.stagingArea = null;
	this.hasPeriod = false;
	this.isResult = false;
}

InputArea.prototype.setStagingArea = function (stagingArea) {
	this.stagingArea = stagingArea;
}

InputArea.prototype.push = function (num) {	
	if (this.isResult) {
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
	
	this.isResult = false;
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
	
	if (res[0] == '.')
		res = "0" + res;
	
	return res;
}

InputArea.prototype.process = function (op) {
	if (Consts.OP_SET.has(op) && !this.isResult)
		this.stagingArea.push(this.data.length == 0 ? 0 : parseFloat(this.data));
	
	this.isResult = true;
}

InputArea.prototype.setResult = function (result) {
	if (this.isResult)
		this.data = result.toString();
	
	this.isResult = true;
}