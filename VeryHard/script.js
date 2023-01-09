
// take the operator from the user through prompt box in JavaScript.  
const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');  
  
// The parseFloat() function parses a string argument and returns a floating point number.
const number1 = parseFloat(prompt ('Enter the first number: '));  
const number2 = parseFloat(prompt ('Enter the second number: '));  
  
let result; // declaration of the variable.  
  

if (operator == '+') { // use the (addition) operator to add two numbers  
    result = number1 + number2;  
}  
else if (operator == '-') { // use the (subtraction) operator to subtract two numbers  
    result = number1 - number2;  
}  
else if (operator == '*') { // use the (multiplication) operator to multiply two numbers  
    result = number1 * number2;  
}  
else {  
    result = number1 / number2; // use the (division) operator to divide two numbers  
}  
  
// displays the result of the Calculator  
// displays an alert box with a message and an OK button
window.alert(" Result is " + result);  