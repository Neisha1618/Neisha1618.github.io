/* Loops
 * 0. Loops are a way we can iterate through a set of data for as many of time as we want. and to perform a particular action on each element.
 * There are different types of loops one is the While-Loop another is a For-Loop which is good for looping over arrays. 
 * and the final one is the For-In loop that loops through an object. The main Componets of loops include: the loop keyword, starting condition, 
 * stopping condition, Iterator and code block. 
 */

/*  While-Loop Syntax
 * The while has the  initial condition outside of the loop. Under the Initial condition next is the key word "while" followed by parenthsis 
 * containing the stopping condition. Next is the code block with the iterator inside.
 */

 // Example of While Loop Syntax//
 
 var count = 1; // initial condition
 while(count < 10) // stopping condition
 {   
    
     count++; //incrementor 
 }
  console.log(count); // prints 1, 2, 3, 4, 5, 6, 7, 8, 9
 
 /* For-Loop Syntax
  * The for loop starts with the for keyword followed by parenthesis contaning the initial condition, stopping condition, and then the iterator
  * then closing the parenthesis. next the code block. the difference between the this loop is that all of the conditions are together on the same line
  */
 
  // Example of For-Loop//
     
     for(var i = 0; i < 5; i++)  {
        console.log(i); // code block prints 0, 1, 2, 3, 4
     }
     
 /* For In Loop Syntax
  * Starts with the For-In keyword, then the open parenthesis with the (var key in object) followed by closed parenthesis.
  * next is the code block. For in loops have no iterator because it iterates over the whole object.
  * 
  */
  
     // Example //
  var obj = {}
  for(var key in obj){
      
  }
   
   
   
 /* Looping forward vs Looping backwards
    * the intial condition comes before the stopping condition. with looping forward we use the (++) as the iterator 
    * To loop in reverse the stopping condition comes before the intial condition. and the iteratore is (--)
  */
 
    // Example of looping forward //
    
    for(var i = 1; i <= 6; i++){
        console.log(i) // prints 1, 2, 3, 4, 5
    }
    
    // Example of looping in reverse
    
    for(var i = 3; i >= 0; i--){
        console.log(i); // prints 3, 2, 1, 0
    }
    
    /* Looping over an Array 
     * When looping over an array the array.length property lets you go to the last index in the array 
     */
    
       // Example looping forward//
      var numArray = [1, 2, 3, 4, 5];
      for(let i = 0; i < numArray.length; i++){
          console.log(numArray[i]); // prints 1,2,3,4,5
      }
      
      // Example looping backward//
      for(let i = numArray.length;  i >= 0; i--){
          console.log(numArray[i]); // prints 5,4,3,2,1
      }
     
     /* Looping over an Object
      * when Looping over an obeject we use the for-in loop. With a for in loop there is no iterator so we loop over the whole object
      */
     
         // Example//
     
   var myObject = {one: 1, two: 2};
     for(var key in myObject){
    console.log(myObject[key]); // prints => 1, 2
    console.log(key) // prints => one, two
   }    
   
    
     

