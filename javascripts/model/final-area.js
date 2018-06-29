// Created by Bin Chen 6/29/2018
// Implemented by Bin Chen 6/29/2018 - Implement FinalArea and its four prototype functions, implement parts of calculation

function FinalArea() {
	this.data = [];
	this.numberArea = null;
}

FinalArea.prototype.setNumberArea = function (numberArea) {
	this.numberArea = numberArea;
}

FinalArea.prototype.append = function (ele) {
	this.data.push(ele);
}

FinalArea.prototype.calculate = function () {
	if (this.data.length > 0)
		this.numberArea.setResult(parseExpr(this.data.slice()));

}

FinalArea.prototype.toString = function() {
	return this.data.reduce(function (a, b) {
		return a + b.toString() + " ";
	}, "");
}

// Calculatioin

/* (Not yet completely implemented)
 * cfg:	
 * expr -> term { add-op term }
 * term -> factor { mult-op factor }
 * factor -> sub-factor | number
 * sub-factor -> param | front-op param
 * param -> ( expr )
 * front-op -> neg | root | log
 * add-op -> + | -
 * mult-op -> * | / | %
 */
 var addOpSet = new Set("+-");
 var multOpSet = new Set("*/%");
 
 function parseExpr(tokens) {
	var value = parseTerm(tokens);
	
	if (tokens.length > 0) {
		while (addOpSet.has(tokens[0])) {			
			switch (tokens.shift()) {
				case '+':
					value += parseTerm(tokens);
					break;
					
				case '-':
					value -= parseTerm(tokens);
					break;
			}
		}
	}		
	
	return value;
}

function parseTerm(tokens) {
	var value = parseFactor(tokens);
	
	if(tokens.length > 0) {
		while (multOpSet.has(tokens[0])) {
			switch (tokens.shift()) {
				case '*':
					value *= parseFactor(tokens);
					break;
					
				case '/':
					value /= parseFactor(tokens);
					break;
					
				case '%':
					value %= parseFactor(tokens);
					break;
			}		
		}
	}
	
	return value;
}

function parseFactor(tokens) {	
	if (tokens[0] == '(') {
		tokens.shift();
		var value = parseExpr(tokens);
		tokens.shift();
		
		return value;
	}
	
	return tokens.shift();
}