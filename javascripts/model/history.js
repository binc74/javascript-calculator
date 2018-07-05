// Created by Jeb Alawi - 7/3/2018
function History(){
    this.entries = [];
}

History.prototype.add = function (exp, res) {
	this.entries.push("<span>" + exp + " = " + res + "</span>");
};

/**
 * Clears the history
 *
 * @author Josh Wright
 *
 * */
History.prototype.historyClear = function (){
    this.entries = [];
};