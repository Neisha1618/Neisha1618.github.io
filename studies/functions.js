
/** 0. Functions are what makes javascript a functional programming language. function can go from simple to extremely complex.


/* 1. Two phases to a function
 * Phase one is function declaration where we name the function and create the function body. that includes the 
 * Parameter and code block with the return statement
 * Phase two is when we call the function to run it by putting the function name and passing in arguments inside parenthesis
 
*/

    // Example of phase 1 Function Declaration //
    function read(book1, book2){
        return book1 + book2;
    }

    // Example of phase 2 invocation//
    read('be','loved'); // passing in two arguments to call the function
    console.log(read('be','loved')); // print => 'beloved' 


/* 2. Parameters vs Arguments
 * Parameters whole a space in memory for our future arguments that will be passed through the function.
 * the amount of arguments should equal the amount of parameters 
 */

  // Example //
    function subtract(par1,par2) // two paramaters
    {
        return par1 - par2;  
    }
    subtract(10,2); // passing through the arguments of 10 and 2
    console.log(subtract(10,2)); // prints => 8
    
// 3. Syntax for a Named function

 function divide(parameter1, parameter2){
         return parameter1/parameter2;
     }
 console.log(divide(10,5)); // prints 2
 
 /* 4. Function Expression
  * To assign a function to a variable we use the assignment operator (=).
  * with function expresions the variable is hoised and not the value which is the function body if declared with var. 
  */
  
  // Example//
  
  var add = function (par1,par2){
      return par1 + par2;
  }
  console.log(add(6,4)) // prints => 10

/* 5. Input vs Outputs
 * Input are the parameters given to the function. 
 * or not, so if we do not have parameters. we do not have inputs. 
 * Outputs would be what we want the function to return. our return is like a "do this". 
 */
 
        // Example of a function with no inputs and output //
        function display (){ // we have no parameters
            return 'Hello World'; // our output is 'Hello World'
        }
        display(); // we have no inputs and no output
        
        
/* 6. Scope
 * Scope is the space in javascript where a variable can be accessed. There are three types of scopes: local, global, and block.
 * The local scope is within a function body and can not be accessed outside in the global scope. 
 * Block scope is the scope within the curly braces of either loops or conditional statements
 * in the global scope. 
 * the global scope is the overal scope outside of functions and loops. the global scope only ahs accessto global variables but the
 * variable in the global scope can be accessed in the local scope and block scope.
 */

    // Example //
    var city = 'new orleans'; // global variable
    //console.log(weather); // prints => reference error  weather is not defined
    
    function temperature(){
        let  weather = "rainy";
        console.log(city); // prints 'new orleans'
    }
    temperature();
    
/* 7. Closures
 * Closure is a function that we utilize to give us access to a local variable long after the function is ran.
 */

         // Example // 

function sportTeams(city){
    let fav = 'saints';
   return function basketBallTeam(){
        console.log(fav);
    }; 
} 

    


