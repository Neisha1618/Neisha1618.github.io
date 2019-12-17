/**
* VARIABLES: 
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
* 
* 3. There are three diffrent keywords that can be used: Var, Let, and Const. these three keywords 
*    works differently and have unique properties
* 
* 4. Javascript has a mechanism called hoisting that works differently based on the keyword used to 
*    declare variables
*/

// 1. declaration //
var myName;

/**
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

//  re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";



// 3. Var, Let, and Const //
    
    // Var//
var lastName = 'Rose'; // var keyword
console.log(lastName); // prints => 'Rose'

/*
 * Elements named with the Var keyword, can be reassigned to another variable after it is initialized
 * To re-assign the the variable we type the name of the variable and set it equal to whatever value we want to re-assign it to
 * The var keyword does not need to be initialized once declared. it will just give a value of undefined.
 */
 lastName = 'nedd'; // variable reassignment
console.log(lastName); // prints => 'nedd'
   
   
    // Let keyword //
    
let name; // assignment
console.log(name);     // prints => undefined

name = "chase"; // prints => "chase"
name = 'heather'; // can be reassigned just like var anad  prints => 'heather'
/*
 * The let keyword just like the var keyword can be reassigned and does not have to be intitialized
 *
 * the difference comes into play with hoisting.
 *
 * It is better practice to work with let then var because of how loose var is. var introduces more room for error because it let
 * more things slide
 */


 // Constant Keyword //

/* 
 * the const keyword, unlike var and let, can't be reassign after declaration. also, const can not be 
 * left unassigned.
 *
 * this is why const is a much more restricitve keyword, but it is best to used if you want to me a more technical programmer
 */

//const city;    // prints =>  syntax error because const is not initialized

const favFlavor = "caramel"; // 
   console.log(favFlavor); // prints => 'caramel'

//favFlavor = 'chocolate'; // prints => an error saying can not re-assign const

// 3. Hoisting //

/*
 * Hoisting is a mechanism in javascript that moves variable and function declerations to the top of their scope 
 * before the code is even executed. Javascript scans the full code to see if there are variables declared with var 
 * or if there is a function declaration and hoist it to the 0th line.
 *
 * The variable declaration is hoisted and not the value. so until the variable is initialized it will have a value of undefined
 *  
 * The var keywords are hoisted, let and const are technically hoisted but cant be accessed. 
 * 
 */
   // Hoisting with var//
console.log(houseColor); // an example of hoisting where the console.log is befroe the variable is declared
var houseColor = "red"; // prints => undefined
console.log(houseColor); // prints => "red"

// Hoisting with let and const//
//console.log(num); // prints => syntax error becuase the declaration is not hoisted

//let num = 1; 

