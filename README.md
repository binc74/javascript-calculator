# Project 5
### JavaScript Calculator
We choose to implement a scientific calculator that is pretty similar to the one in microsoft in this project.

### Core Functionalities
* The History Feature
	* every time when the user press "=", the whole expression and result will be stored in the history section
	* user can choose to show/hide the history section
	* user can choose to clear the history 

* The Memory Feature
	* With the memory feature, you may save a "Stack" of values in memory
	* Addition and subtraction operations can be done on the value at the top of the memory stack
	* MC clears one entry at the top of the stack, and MCA clears all of the entries in the memory stack

* The Degree/Radian Mode
	* By Clicking on the Degree/Radian button on the top of the cacluator, it will switch between the Degree mode or the Radian mode
	* Since we just have sin and cos, the Degree/Radian mode will only affect the result of these two functions

* Global Functions
	* CE clears the input area
	* C cears the input area and the final experssion area
	* back can clear one digit in the input area
	* pi sets the input area to the value of pi

* Normal Functions
	* x^2 squares the value inside the parenthesis e.g. sqr(4) = 16
	* 1/x gets the inverse of the value e.g. 1/(4) = 0.25
	* e^x gets e^(value)
	* ln gets ln(value)
	* root gets squareroot(value)
	* 10^x gets 10^(value)
	* sin gets sin(value)
	* cos gets cos(value)
	* log gets log10(value)
	* n! gets factorial(value)
	* negate gets -value
	* user can stack the function e.g. 1/(root(sqr(neg(neg(3 + 4)))))

* parenthesis
	* the parenthesis should work and calculate properly
	* implements many confusing features MS scientific calculator have

* Input display and checking
	* in the input area, every 3 digits of the number is seperated by comma
	* user cannot enter more than a decimal dot in the input number

### Importent Things to Notice
* Temporary Calculation in this calculator is pretty similar to that in the microsoft scientific calculator, but they have some difference.
	* Slightly different from the MS calculator, When there is no open parenthesis (just having a "(" but not having a ")")exists, the calculator will temporarily evaluate the whole expression
		* ex 1. for the expression 2 + 3 * 4, the calculator will temporarily evaluate the whole expression and get 14
			* for a MS calculator, it may temporarily evaluate the whole expression or just 3 * 4 dependding on the user's next operator input
		* ex 2. for the expression 2 + (3 * neg(1 + 2)) + 5, which have no open parenthesis, the calculator will also temporarily evaluate the whole expression and get -2
		
	* Like the MS calculator, When there is at least one unclosed parenthesis, the calculator will just temporarily evaulate the expression after the last unclosed parenthesis.
		* ex 1. for the expression 2 + (3, the calculator will just temporarily evaulate 3 and get 3
		* ex 2. for the expression 2 + (3 + (4 * 5, the calculator will just temporarily evaulate 4 * 5 and get 20
		
	* Like the MS calculator, When the user enter ")", the calculator will temporarily evaluate the expression inside the latest closed parenthesis.
		* ex 1. for the expression 2 * ( 4 * ( 3 + 4 ), the calculator will temporarily evaluate 3 + 4 and get 7
		* ex 2. for the expression 3 * ( 4 * ( 3 + 4 )), the  calculator will temporarily evaluate 4 * ( 3 + 4 ) and get 28
		
* After the user press "=" button, the expression will be submitted, where the result will go to the input area, and the whole expression will be stored in the history area.
	* if there ara unclosed parenthesis inside the expression when submitted, the calculator will automatically hep the user to complement those parenthesis
		* ex. 3 * ( 3 + ( 2 * 3 will be complemented to 3 * ( 3 + ( 2 * 3 )) when submitted
		
* Since the Temperoary Calculation is wierd, we added a Temporary Calculation area (the most upper display area) to show the temperoary calculation.

* Like the MS calculator, when entering digits and decimal dot, the numbers in the input area (the lowest display area) will change.

* Like the MS calculator, when entering operators (+, - , *, /, ^), the number inside the input area will be submitted with the operator

* Like the MS calculator, when entering functions (n!, x^2, sin, cos, etc), there are two kinds of situation.
	* when the user just enter a ")", the function will be added to the parenthesis.
		* e.g. when the user pressing cos, the expression 3 + (3 + 4) will become 3 + cos(3 + 4)
		
	* otherwise, the function will read the number in the input area and be append to the expression.
		* e.g. when input area: 43, expression: 4 + (3 + , then after pressing cos, the expression wil become 4 + (3 + cos(43)
		
* Like the MS calculator, after the user just enter a ")", if the user enter a digit, the latest closed parenthesis and its content will be deleted
	* e.g. if after user enter a ")", and the expression looks like this: 3 + (2 * 3), then if user press 1, the expression becomes 3 +

* The above explaination may be confusing, just try it.

### Roles
* Overall Project Manager: Bin Chen
* Coding Manager: Jeb Alawi
* Testing Manager: Houyi Fan
* Documentation: Josh Wright

### Contributions
Please list who did what for each part of the project.
Also list if people worked together (pair programmed) on a particular section.

Josh Wright: Provided a large part of the html and css styling. Implemented the mode bar buttons and the memory feature.
With the memory feature, you may save a "Stack" of values in memory. Addition and subtraction operations can be done on 
the value at the top of the memory stack. MC clears one entry at the top of the stack, and MCA clears all of the entries
in the memory stack.

Jeb Alawi: Implemented History, CSS styling, show/hide feature for displaying and hiding the history and memory sidebar. 
Implemented back button and some functions

Bin Chen: Implement the calculation part, design the object layout and the impplementation of the MS style scientific calculator

Houyi Fan: Implemented most function buttons. Attempted to add the function of letting user come back to history calculations by clicking the item in history, but failed. Added test files for this project
