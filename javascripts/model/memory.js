// Created by Josh Wright - 7/4/2018
//Implement the memory as a stack. Only the entry at the top of the stack may be modified.
function Memory() {
    this.memory = [];
}

/**
 * Store an entry in the memory stack.
 *
 * @param entry
 * @author Josh Wright
 */
Memory.prototype.memoryStore = function (entry) {
    this.memory.unshift(entry);
};

/**
 * Remove an entry from the memory stack.
 *
 * @author Josh Wright
 */
Memory.prototype.memoryClear = function () {
    this.memory.shift();
};

/**
 * Clear all entries from the memory stack.
 *
 * @author Josh Wright
 */
Memory.prototype.memoryClearAll = function () {
    this.memory = [];
};

/**
 * Add value to the entry at the top of the memory stack.
 *
 * @param value The value to be added the value at the top of the memory stack.
 * @author Josh Wright
 */
Memory.prototype.memoryAdd = function (value) {
    this.memory[0]=(parseInt(this.memory[0])+value).toString();
};


/**
 * Subtract value from the entry at the top of the memory stack.
 *
 * @param value The value to subtract from the value at the top of the memory stack.
 * @author Josh Wright
 */
Memory.prototype.memorySubtract = function (value) {
    this.memory[0]=this.memory[0]-value;
};




