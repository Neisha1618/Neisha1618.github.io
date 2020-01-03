/**
 * Operators
 * 
 *  0. Operators perform an action on an operand or multiple operands
 * 
/* 1. Assignment Operators
  *   The assignment operator assigns a value using the equal(=) operator and 
  *   can also use mathematical operators with the (=) operator
*/

// Example //

var num = 10; // assigning num to 10
num += 2; // re- assigning num to 12
console.log(num); // prints => 12

/* 2. Arithemetic Operator
 *    Arithmetic operators perform mathematical operations on a value
 *    These operators are: Addition (+)
 *                         Subtraction(-)
 *                         Multiplication(*)
 *                         Division(/)
 *                         Incrementor(++)
 *                         Decrementor(--)
*/

// Example //

var add = 5 + 5; 
console.log(add); // prints 10

var big = 100;
var lil = 10;
var divide = big/lil;
console.log(divide); // prints => 10

/* 3. Comparison Operator
 *   The comparison operators are used to compare two or multiple values to one
 *   another. With comparison operators they're best used in logical statements such as conditional statements.
 *   These Operators include: equal to (==)            * just checks whether the value match
 *                            strictly equal to (===)  * strictly checks that the value and the type match
 *                            greater than (>)
 *                            greater than or equal (>=)
 *                            less than (<)
 *                            less than or equal to (<=)
 *                            not equal (!=)
 *                            strictly not equal (!==)
*/

// Example //

if(5 === '5'){
    console.log(true); // this block will not run because the number 5 does not strictly equal the string of "5"
} else if(5 == '5'){
    console.log(true); // this block will run because only the value matters when its not strictly compared
} else {
    console.log(false);
}

/* 4. Logical Operators
 *   Logical Operators check the logic betwee values are correct.
 *   These operators include: And (&&)
 *                            Or (||)
 *                            Not equal (!) * this operator changes the truthiness
*/

     // Example //
     
if(5 > 6 && 6 > 5){        // this code will not run because the && operator means both comparisons must be true and 6 is not > 5
    console.log('you tried it');
} else if(5 > 6 || 6 > 5){  // this code will run because the || operator means only one has to be true
    console.log('thats true');
} else {
    console.log('this code will not run');
}

/* 5. Unary Operator
 *    This operator only has one operand that it acts on 
 *    These Operators include: typeof(operand)  * which returns the type of the operand
 *                             delete(operand)  * used in objects, this operator deletes the operand 
*/

 // Example //
 
 console.log(typeof('5')); // returns string
 console.log(typeof(true)); // returns booleans
 
 let obj = {
     one: 1,
     two: 2
 };
 
 delete(obj.one); // deletes the key of one
 console.log(obj) // prints => {two: 2}
 
 /** 6. Terinary Operator
  * This operator is considered a conditional operator and this has three operands.
  * it starts off with a condition to check, followed by question mark followed with the first value then a colon then the next value.
  * if the condition is true then the first value will be true, else the second value is true
 */
 
 // Example // 
 
 var weather = 'rainy';
 weather === 'sunny' ? 'fluffy hat': 'umbrella'; // prints umbrella 
 
 
 
 
 
 
 



 