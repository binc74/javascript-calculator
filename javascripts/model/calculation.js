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
 * mult-op -> * | / | %
 */
Calculation.getResult = function (tokens) {
	if (tokens.length == 0)
		return 0;


	var res = parseExpr(tokens);


	return res;
}

 
function parseExpr(tokens) {
	var value = parseTerm(tokens);

	while (tokens.length > 0 && Calculation.ADD_OP_SET.has(tokens[0])) {			
		switch (tokens.shift()) {
			case '+':
				value += parseTerm(tokens);
				break;

			case '-':
				value -= parseTerm(tokens);
				break;
		}
	}	

	return value;
}

function parseTerm(tokens) {
	var value = parseFactor(tokens);
	
	while (tokens.length > 0 && Calculation.MULT_OP_SET.has(tokens[0])) {
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
				
			case '^':
				value = Math.pow(value, parseFactor(tokens));
				break;

		}		
	}
	
	return value;
}

function parseFactor(tokens) {	
	if (typeof tokens[0] == "number") 
		return tokens.shift();
	
	return parseSubFactor(tokens);
}

function parseSubFactor(tokens) {
	if (tokens[0] == '(') 	
		return parseParam(tokens);
	
	return parseFunction(tokens);
}

function parseParam(tokens) {
	if (tokens.shift() != '(') 
		console.error("Error: can't find '('");
	
	var value = parseExpr(tokens);
	
	if (tokens.shift() != ')') 
		console.error("Error: can't find ')'");
	
	return value;
}

function parseFunction(tokens) {
	var func = tokens.shift();
	var param = parseExpr(tokens);
	
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
			return Math.sin(param * (Math.PI / 180));

		case "cos(":
			return Math.cos(param * (Math.PI / 180));

		case "fact(":
			return factorial(param);

		case "sqr(":
			return param * param;

		case "1/x(":
			return 1/param;

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