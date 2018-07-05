# Project 5
### JavaScript Calculator
We choose to implement a scientific calculator that is pretty similar to the one in microsoft in this project.

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
		
* The above explaination may be confusing, just try it.

### Core Functionalities
* The Degree/Radian Mode
	* By Clicking on the Degree/Radian button on the top of the cacluator, it will switch between the Degree mode or the Radian mode
	* Since we just have sin and cos, the Degree/Radian mode will only affect the result of these two functions

* 

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
in the memory stack.The mode button was added so we could offer multiple modes, but we were only able to implement the 
mode for a scientific calculator.

Jeb Alawi: Implemented History, CSS styling, show/hide feature for displaying and hiding the history and memory sidebar. 
Implemented back button and some functions

Bin Chen:

Houyi Fan: 
