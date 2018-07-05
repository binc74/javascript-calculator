// Created by Jeb Alawi - 7/3/2018
function History(){
    this.entries = [];
}

History.prototype.setEntry = function (expression, result) {
	var entry = {
    	exp: "",
    	res: 0
    };
	entry.exp = expression;
	entry.res = result;
	return entry;
}

History.prototype.add = function (entry) {
	this.entries.push(entry);	
}

History.prototype.html = function () {

	var html = "";
	for (var i = 0; i < this.entries.length; ++i) {
		console.log(this.entries[i].exp + ", " + this.entries[i].res);
 	     html += "<div class='item' value=" + i + "><span id=" + i + ">" + this.entries[i].exp + " = " + this.entries[i].res + "</span></div>";
 	     html += "</br>";
    }
}
/**
 * Clears the history
 *
 * @author Josh Wright
 *
 * */
History.prototype.historyClear = function (){
    this.entries = [];
}