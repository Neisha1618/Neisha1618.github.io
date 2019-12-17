/**
 * Data Types
 * 0. Data types are a type of value our data can consist of. we have two types of data: the first type is simple/primitive and it 
 * consists of: Numbers, String, Booleans, Undefined, NaN, and Null. The Second type we call Complex. Complex Data Types consists of: Arrays, Objects and Functions.
 */
 
 /* 1. Numbers
  * The numbers data type is any numerical value such as: Integers and decimals. With numbers we can
  * create arithmetic expressions by: addition, subtraction, divison, and multiplication. 
 */

   // Example//
 let number = 200; 
 console.log(number); // prints => 200

 
/* 2.  String
 * This data type is a collection of characters and symbols surrounded 
 * by single quotes('') or double quotes(""). Strings can be added together using the (+) operator,
 * this is called concatenations. 
 */
 
  // Example//
  
  var fruit = 'Apple'; // string value of 'Apple'
  var drink = 'Juice'; // string value of 'Juice'
  console.log(fruit + ' ' + drink); // prints => 'Apple Juice'
 
 /* 3. Boolean 
  * The Boolean data type has two outcomes, either it is true or false.
  * Booleans are used in conditional statement and can be turned into boolean expressions by using comparison operators.
 */

  // Example//
  
  var greaterThan = (6 > 4);
  console.log(greaterThan); // prints => true
 
 
 /* 4. An Array is a complex data type that is used to store other data types using bracket notation. 
 * Arrays can store every other data type together contained in brackets and seperated by commas. Each value in array contain has
 * an index and to access the index you should type the name of the arr and then in brackets put the index of the element.
 */
 
   // Example//
   
   let array = ['house', true, 12, ['arr']]; // an array composed of a string, boolean, number, and a array
   console.log(array[1]); // prints => 'house'
 
 
 /* 5. Object
  * Objects are of the complex data type used to store data that is contained with curly braces {}. Objects can store the other data types 
  * just like arrays, just in a different way. Objects values are stored with keys
  * There are two ways to access an object and its values, by either using bracket notation or dot notation
 */ 

  // Example //

var cars = {Honda: 'Accord', Ford: 'F-150' }; // an object literal with a key of Honda and Ford with a value of 'Accord' and 'F-150'
console.log(cars.Ford); // => Using dot notation....prints => 'F-150'
console.log(cars['Honda']); // using bracket notation...... Print =>'Accord'

 /* 6. Function 
 * Function are of the complex data type and one of the main componets of javascript.
 * A Function declaration consist of the function keyword followed with the name of the function. Next will be parenthesis with parameters in them
 * and a followed by a block of code to run wrapped in curly braces. and inside the curly braces a return statement.
 * The last thing needed is the invocation of the function outside of the function body. Done by writting the name of the function and with arguments in parenthesis. 
*/

// Example//

 function add(num1,num2){
    return num1 + num2; // code block
}
console.log(add(100,100)); // prints => 200 

/* 7. Undefined
 * undefined is a variable that has been declared but not initialized yet. when we declare a new variable using the
 * var or let keyword without giving it a value it becomes an undefined value.
 */ 

// Example//

  var num1; // declaring a variable with var
  console.log(num1); // prints => undefined 
 
 /* 8. Null 
 * Null is a data type that has the value of nothing but null
 */

// Example//
var color = 'red';
color = null; // reassigment of the variable color
console.log(color);  // prints null
 
 /* 9. NaN
  * Stands for "Not a Number", this happens when the result of an arithmetic operation is mathematically undefined such as 
  * zero/zero. Also when you are trying to to arithmetic operations with something that
  * is not a number like multiply house*2
 */ 

  // Example// 
  var divide = 5 / 'Apple'; // a variable intitialized to a number divided by a string
  console.log(divide); // prints NaN

 /* 10. Infinity and -Infinity 
  *Infinity is displayed when the absolute maximun and minimum for javascript is reached. 
 */

    // Example//

var infinityStone = 1 * Infinity;
console.log(infinityStone); // prints => Infinity
 
 /* 11. Simple vs Complex Data 
 * Simple data types are: Numbers, String, Booleans, NaN, Undefined, and Null. Simple/Primitive data types are 
 * Immutable meaning it can not be changed once created.
 * Complex are: Arrays, Objects, and Functions. Complex data types are mutable meaning the values be changed after it is created.
 */

    // Example of Simple //

var firstName = 'Altoneisha';
firstName + 'jayla'; // trying to change 
console.log(firstName); // immutable..... prints => 'Altoneisha'

     // Example of Complex //

var algae = ['blue', 'green'];
algae.unshift('red'); // prints => ['red','blue', 'green']

 /* 12. Copy by value vs Copy by Reference
 * Simple data values are copied by value meaning a variable can take the value of another variable but the original variable value is not affected because it was a copy. 
 * Complex values are copied by reference meaning depending on the change to either value both could be affected because the value is referenced.
 */

     // Example of copy by value//
 var oddNumber = 7; // initializing variable 1
 var evenNumber = oddNumber + 1; // setting variable 2 equal to variable 1 + 1
 console.log(evenNumber); // prints => 8 
 evenNumber = 20; // changing the value of variable 2
 console.log(oddNumber); // variable 1 is not changed....prints => 7
    
    // Example of copy by reference//
var state = {louisiana: 'LSU'};
var school = state;
console.log(school) // prints {louisiana: 'LSU'}
school.louisiana = 'tulane';
console.log(school) // prints out {louisiana:'tulane'}
console.log(state);// print out {louisiana:'tulane'} 
