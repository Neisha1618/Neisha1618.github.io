/**
 * Functions
 * 
 * 0. A function is a block a code that performs an act. this act can be performed on 
 *    multiple arguments with less code which is what makes function so useful.
 */ 
 
 /* 1. Two phases to a function
 *    There are two phaes to using a function, first we must declare the 
 *    function then we must invoke the function
 */
 
   // Example//
   
   function times(par1,par2){
       return par1 * par2;
   }
   times(1,2); // function invocation => returns a value of 2
 
 /* 2. Parameters vs Arguments
 *    A functions parameter are placeholders for future arguments that will be passed 
 *    through the function. at call time the arguments will be the values ran through the functon.
 */
 
   // Example //
   
   function func (parameter1,parameter2){
       return parameter1 + parameter2;
   }
   // func(arg1,arg2)// arguments to be passed in
 
 
 /* 3. Syntax for a named function
 *    Named functions have a specific synthax that include: the function keyword, parameters, 
 *    code block, and the return statement. and of course the invocation outside of the function body.
 */
 
 // Example//
 function greeting(par1,par2){ 
  return "hey" +" "+ par1 + "how is " + " " + par2 + "?";
 }
 console.log(greeting("jazmin", "max")); // prints => hey jazmin how is max?
 
 
 
 /* 4. Assigning a function to a variable
 *    To create a function expression, which is assigning a function to a variable, we start of with the 
 *    keywords either var, let or const and then a name for our function. then we use the assignment opertator followed 
 *    by the function keyword and the function body.
 */
 
 // Example //
 
 let division = function(num1,num2){
  return num1/num2;
 };
 console.log(division(10,5)); // prints => 2
 
 /* 5. Specify inputs and Output
 *    Function's inputs are the arguments and the functions output is what the function will
 *    return when the arguments are passed through.
 */
 
 // Example function with an input//
 function input(input){ // this is the input of a function
  console.log("this is a function with an input without an output"); 
 }
 input();
 
 // example of a function with an output and input
 
 function both(input){ 
  return input; // this is the output of the functon
 }
 console.log(both(200)); // prints => 200
 
 
 
 /* 6. Function Scope 
 *    The functions have their own scope called the local scope. Functions can access variables
 *    outside of their scope in the global scope, but the global scope cant access anything inside of the local scope.
 */
 
 // Example //
 
 var number = 4;
 //var addition = number + negative //  prints an error message because the var negative can not be accesed from the global scope
 
 function add(){
  var negative = -2;
  return number + negative; // the variable number can be accessed in the local scope
 }
console.log(add()); // prints => 2
 
 /* 7. Closures 
 *    closures are a way to keep a variable active once a function is ran. the closure function 
 *    uses the variable either as a parameter or inside the function.
 */
 
 // Example // 
 
 function cars(){
  let fav = 'jeep';
  return function price(){ 
   return console.log(fav);
  };
 }
 
 