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
* 3. other keywords we can use to declare a variable is Let and Const.
* 
* 4. Hoisting is a mechanism that javascript uses to send var and function declaratons to the 0th line.
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. Let and Const declaration //

let myHouse;

/*
* just like with var const does not have to be initialized. 
*/

console.log(myHouse); // prints => undefined

myHouse = 'medium';

/*
* let can be re-assigned 
*/
console.log(myHouse) // prints => 'medium'

//const myHome; // is an error because we have to initialized const we cant just leave it declared

const house = 'small';

console.log(house); // prints => 'small'
/*
* const keyword can not be re-assigned
*/
//house = 'big'; // prints => error because house can not be reassigned like var and let.

// 5. Hoisting//

console.log(pet); // prints => undefined
/*
*  pet is not declared until line 74 but on line 70 we can access the variable because it was hoisted to the 0th line
*/
var pet = 'snake';
/*
* once we get to line 74, that is where we intialized the pet variable
*/

console.log(pet); // prints 'snake'

console.log(hey()); // prints => 'yah' to the console

function hey(){
    return 'yah';
}

/*
 just like with var we have access to the function declaration before we actually get to line 83
*/


console.log(juice); // prints => reference error saying juice is not defined
let juice = 'grape';

console.log(country); // prints => reference error saying country is not defined
const country = 'prague';


/*
 let and const are technically hoisted but we do not have access to those variables until we reach the line they are declared on.
 so we say that let and const are not hoisted.
*/























