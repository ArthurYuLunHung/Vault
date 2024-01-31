/*Pseudocode
1. Create separate files for HTML and JS
2. Create a script tag in HTML file
3. Create three diffrent numbers
4. Create a string for the user saying
5. Use alert to create a popup dialog*/

// Make the result of the equation equal to the first number
let num1 = 100 / 10;
// Make the result of the equation equal to the second number
let num2 = 8 * 5;
// Make the result of the equation equal to the third number
let num3 = 7 * 6 - 3;
// Create a string for the user saying
const str =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";
console.log(str);
// Create a popup dialog
alert(str + num1 + "-" + num2 + "-" + num3);
