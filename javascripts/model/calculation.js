// Created by Bin Chen in 7/1/2018
// Implemented by Bin Chen 7/2/2018

function Calculation() {
}

// Adding class variables
Calculation.OP_SET = new Set("+-*/%^");
Calculation.ADD_OP_SET = new Set("+-");
Calculation.MULT_OP_SET = new Set("*/%^");

// for calculation

/* 
 * cfg:	
 * expr -> term { add-op term }
 * term -> factor { mult-op factor }
 * factor -> sub-factor | number
 * sub-factor -> param | function 
 * param -> ( expr )
 * function -> func param )
 * func -> neg | root | log (
 * add-op -> + | -
 * mult-op -> * | / | % | ^
 */
Calculation.getResult = function (tokens, isRadian) {
	if (tokens.length == 0)
		return 0;

	return parseExpr(tokens, isRadian);
}

 
function parseExpr(tokens, isRadian) {
	var value = parseTerm(tokens, isRadian);

	while (tokens.length > 0 && Calculation.ADD_OP_SET.has(tokens[0])) {			
		switch (tokens.shift()) {
			case '+':
				value += parseTerm(tokens, isRadian);
				break;

			case '-':
				value -= parseTerm(tokens, isRadian);
				break;
		}
	}	

	return value;
}

function parseTerm(tokens, isRadian) {
	var value = parseFactor(tokens, isRadian);
	
	while (tokens.length > 0 && Calculation.MULT_OP_SET.has(tokens[0])) {
		switch (tokens.shift()) {
			case '*':
				value *= parseFactor(tokens, isRadian);
				break;
				
			case '/':
				value /= parseFactor(tokens, isRadian);
				break;
				
			case '%':
				value %= parseFactor(tokens, isRadian);
				break;
				
			case '^':
				value = Math.pow(value, parseFactor(tokens, isRadian));
				break;

		}		
	}
	
	return value;
}

function parseFactor(tokens, isRadian) {	
	if (typeof tokens[0] == "number") 
		return tokens.shift();
	
	return parseSubFactor(tokens, isRadian);
}

function parseSubFactor(tokens, isRadian) {
	if (tokens[0] == '(') 	
		return parseParam(tokens, isRadian);
	
	return parseFunction(tokens, isRadian);
}

function parseParam(tokens, isRadian) {
	if (tokens.shift() != '(') 
		console.error("Error: can't find '('");
	
	var value = parseExpr(tokens, isRadian);
	
	if (tokens.shift() != ')') 
		console.error("Error: can't find ')'");
	
	return value;
}

function parseFunction(tokens, isRadian) {
	var func = tokens.shift();
	var param = parseExpr(tokens, isRadian);
	
	if (tokens.shift() != ')') 
		console.error("Error: can't find ')'");
	
	switch (func) {
		case "neg(":
			return -1 * param;
			
		case "root(":
			return Math.sqrt(param);
			
		case "log(":
			return Math.log10(param);

		case "10^(":
			return Math.pow(10, param);

		case "sin(":
			if (isRadian)
				return Math.sin(param * (Math.PI / 180));
			else
				return Math.sin(param);

		case "cos(":
			if (isRadian)
				return Math.cos(param * (Math.PI / 180));
			else
				return Math.sin(param);

		case "fact(":
			return factorial(param);

		case "sqr(":
			return param * param;

		case "1/(":
			return 1 / param;

		case "e^(":
			return Math.exp(param);

		case "ln(":
			return Math.log(param);


	}
		
	return 0;
}

function factorial(number){
	var ans = 1;
	
	for (var i = 1; i <= number; ++i)
		ans *= i;
	
	return ans;
}