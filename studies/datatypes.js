/**
* datatypes
* 
* 0. Javascript have nine different datatypes that can be the values of our variables. each datatype is unique in the way they are used.
*    the datatypes are grouped together by how large  of a space the datatypes take up in memory.
* 
* 1. the nine datatypes in javascript are: numbers, strings, booleans, arrays, 
*    objects, functions, undefined, null, NaN, and (-+) infinity. 
* 
* 1. Datatypes are grouped into simple/primitive and complex
* 
* 2. Copy by value vs copy by reference
* 
*/

// 1. Numbers // 
 var favNumber = 12.1
 /*
 * The number datatype is a numerical value that can be either a 
 * integer or a decimal. the number values are ideal for use in mathamatical equations 
 * or expressions
 */
 
 console.log(favNumber); // prints => 12.1
 
 // 2. Strings //
 let friend = 'jeneice';
 
 /*
 * Strings are values we put into either single or double quotations. these 
 * are usually words. we can turn a number datattype to a string by putting it n quotations
 */
 
console.log(friend); // prints 'jeneice'

// 3. booleans //
let haveToWorkTomorrow = true;
let rested = false;

/*
* Boolean values are either true or false. these value are usually used with logical operators
* in conditional statements.
*/

console.log(haveToWorkTomorrow); // prints => true
console.log(rested); // prints => false

// 4. arrays // 
let stuff = ['bag', 1, true];

/*
* This datatype is a storage datatype meaning it can contain an infinite number of values.
* arrays uses brackets to hold in all the data seperated by commas. each value contained in 
* the array has its own space in the array callled its index. the first index is 0 and the last index is array.length -1
* the length of the array is array.length wich is one more then the index. to access the characters we access their index
* using bracket notation. starting with the name of the array followed by a bracket containing its index in the array.

*/
console.log(stuff);// prints => ['bag', 1, true]
console.log(stuff[1]); // prints => 1

// 5. objects // 
let groceryList = {
 fruit: 'peach', 
 veggies: 'pumpkin',
 dairy: 'cheese'
};

/*
* an object is another storage datatype similar to arrays but objects dont have a 
* length property and they do not have indexes. instead objects have key/ value pairs
*/
console.log(groceryList); // prints {fruits: 'peach', veggies: 'pumpkin', dairy: 'cheese'}

let healthy = groceryList.fruit;
let unHealthy = groceryList['dairy'];

/*
* To access the values in an object we can either use dot notation or bracket notation.
* if we know the name of the key then dot notation is ideal, if we do not know the name 
* then we use bracket notation with quotes. also we use bracket notation when the key name is multiple words
*/

console.log(healthy); // prints => peach
console.log(unHealthy); // prints => cheese

// 6. functions // 
function addNum(num1,num2){
 return num1 + num2;
}


/*
* A function is a block a code that performs an act. function declarations start off 
* with the function keyword followed by a name and parenthesis holding the parameters
* followed by curly braces that contains the return statemnt and code to be ran when we invoke the function
* the last thing will be invoking the function outside the function.
*/

console.log(addNum(2,1)); // prints => 3

// 7. undefined // 
let greeting;

/*
* undefined is a datatype that is declared but not initialized.
*/

console.log(greeting); // prints => undefined

// 8. null // 
let toppings = null;
/*
* null has a value of null
*/
console.log(toppings); // prints => null

// 8. NaN // 

let subtract = 1000 - "house";
/*
* we get NaN, which stands for not a number, when we try to to arithmetic with 
* non numerical values.
*/
console.log(subtract); // prints => NaN

// 9. -Infinity and + Infinity
const bigNumber = 1 * Infinity;
const tinyNumber = 1 * -Infinity;
const notANumber = Infinity/Infinity;

/*
* negative infinity and positive infinity are the abslute 
* minimum and absolute maximum numbers in javascript. When you use infinity in a mathematical
* operation the value will always be  except if you try to divide infinity/infinity.
*/
console.log(bigNumber); // prints => Infinity
console.log(tinyNumber); // prints => Infinity
console.log(notANumber); // prints => NaN

// 9. simple/primitive vs complex datatypes
let simple = 10;

/*
* Simple data types consist of: numbers, strings, boolean, undefined, null and NaN. 
* simple data are smaller in size than complex datatypes
* simple datatypes are immutable meaning the value cannot be changed.
*/
console.log(simple); // prints => 10;

let complex = {one: 1};


/*
* complex datatypes consist of: arrays, objects and functions.
* complex data is larger than simple data
* complex data types are mutable
*/

console.log(complex) // prints => {one: 1}

// 10. copy by value vs copy by reference // 
let car = 'mustang';
let color = 'green' + " " + car;

/*
* simple data types are copied by value meaning the original variable 
* is not changed or affected if another variable use the value of the original variable
*/
console.log(color); // prints => green mustang
console.log(car); // prints => mustang

let pets = {
 fun: 'dog',
 notFun: 'cat'
};

let favPet = delete pets.notFun;

/*
*  complex data is copied by reference meaning the original variable value can 
*  be manipulated by the second variable. because they would be linked together by 
*  the variable not just the value like simple datatype
*/

console.log(favPet); // prints => {fun: 'dog'}
console.log(pets); // prints => {fun: 'dog'}


















