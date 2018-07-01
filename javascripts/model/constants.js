// Created by Bin Chen in 7/1/2018

// Constant

function Consts() {
}

// Adding class variables
Consts.OP_SET = new Set("+-*/%");
Consts.ADD_OP_SET = new Set("+-");
Consts.MULT_OP_SET = new Set("*/%");
Consts.PARANTHESIS = new Set("()");


// Calculation

/* (Not yet completely implemented)
 * cfg:	
 * expr -> term { add-op term }
 * term -> factor { mult-op factor }
 * factor -> sub-factor | number
 * sub-factor -> param | function param
 * param -> ( expr )
 * function -> neg | root | log
 * add-op -> + | -
 * mult-op -> * | / | %
 */
 function getResult(tokens) {
	 if (tokens.length == 0)
		 return 0;
	 
	 return parseExpr(tokens);
 }
 
 
 function parseExpr(tokens) {
	var value = parseTerm(tokens);
	
	if (tokens.length > 0) {
		while (Consts.ADD_OP_SET.has(tokens[0])) {			
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
		while (Consts.MULT_OP_SET.has(tokens[0])) {
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