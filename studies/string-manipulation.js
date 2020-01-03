/**
 * String-Manipulation
 * 
 * 0. The string data type can be manipulated using different built in methods and operators
*/

/* 1. Operators
 *   We can use the addition operator(+) to add multiple strings together to 
 *   make one long string. This idea is called string concatenation.
 *   We can also use the += operator to add a string to another string.
*/

// Example //

var fruits = 'Apple';
var drink = 'Juice';
var fruitDrink = fruits + " " + drink;
console.log(fruitDrink); // prints Apple Juice

/* 2. String Methods
 *    String methods are built in javascript methods that make our lives easier when it comes to manipulating strings
 *    Some built in string methods include: toUpperCase()  // makes everything uppercase
 *                                          toLowerCase() // makes everything lowercase
 *                                          join()   // joins a sting
 *                                          split()  // splits the string into an array of strings
 *                                          slice()  // slice off parts of a string
 *                                          replace()  // replaces a value in the string
*/

// Examples//
var city = "new orleans";
var state = "LOUISIANA";
city.toUpperCase(); // prints => NEW ORLEANS
state.toLowerCase(); // prints => louisiana

//Example //
var str = "dallas";
let major = str.split("") ;
console.log(major); // prints => ['d','a','l','l','a','s'];

let majorCity = major.join("-");
console.log(majorCity); // prints => d-a-l-l-a-s

// Example //

let hey = 'yah'; 
 let sliceIt = hey.slice(1);
 console.log(sliceIt); // prints => ah
 
 let replaceIt = hey.replace('y','r');
 console.log(replaceIt);// prints => rah




