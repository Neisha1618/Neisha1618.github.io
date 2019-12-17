/* String Manipulations
 * 0. There are multiple ways a string can be manipulated one way is by using Operators such as the (+) to add the string 
 * which is called concatenation. When concatenating string you have to also concatenate the space.
 */

    // Example
    
 var add = 'a' + 'b' + 'c' + 'd';
 console.log(add); // print 'abcd'
 
 /* Methods
  * New strings can be created from another string by utilizing the built in javascript methods.

        Method                     Function
  * .toLowerCase()              Lowercase elements in a strng that are uppercase
  * .join()                     join strings together
  * .toUpperCase()              uppercase element in a sting that are lowercase
  * .concat()                   concatenate multiply strings together
  * .slice()                    slice off a portion of a string 
*/

   // Example of toLowerCase() ///
   
  var building = 'benson tower' ;
   console.log(building.toLowerCase()); // prints => 'benson tower';
   
   // Example of join() //
   
  var fruit = ['apple', 'orange'];
   fruit.join(",");
  console.log(fruit);  // prints => 'apple,orange'
 
  // Example toUpperCase()
 
  var lastName = 'nedd';
  lastName.toUpperCase(); // prints => 'NEDD'
  
  // Example concat() //
  
  let num = 'two';
 console.log(num.concat( " ",'three')); // prints => 'two' "three"
 
 // Example slice() //
 
 let sliceOff = "abcde";
 sliceOff.slice(0,2); // prints => "ab"
 
   
   
   
 
      
