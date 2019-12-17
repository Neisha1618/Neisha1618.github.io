// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // use a for loop over the array and print each value using console.log
  // YOUR CODE BELOW HERE //
  for(var i = 0; i < array.length; i++){
    console.log(array[i])
  } return i;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  //use a for loop over the array backwards
  // print the values using console.log
  // YOUR CODE BELOW HERE //
  for(var i = array.length -1; i > -1; i--){
    console.log(array[i])
  } return i;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // loop through the object
  // put the object keys in an array
  // YOUR CODE BELOW HERE //
  var arr = [];
  for(var key in object){
    arr.push(key)
  } return arr;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // use a for in loop to print the object keys using console.log
  // YOUR CODE BELOW HERE //
  for(var key in object){
    console.log(key)
  } return key;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // create a storage array
  // use a for in loop to go through the object
  // push the objects values into the storage array
  // YOUR CODE BELOW HERE //
   var arr = [];
  for(var key in object){
   arr.push(object[key]);
  } return arr;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // use a for in loop to print the object values using console.log
  for(var key in object){
    console.log(object[key]);
  } return object[key];
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // get the length of the key/ value pairs
  // create a storage array
  // do a for in loop to get the object values and push into array
  // return array length
  var newArr = [];
for(var key in object){
  newArr.push(object[key]);
} return newArr.length;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // try looping through the object then pushing those values in an array
  // then looping over that array backwards to console log  eac one
 let arr = [];
 for(var key in object){
   arr.push(object[key])
    } 
    for(var i = arr.length -1; i > -1; i--){
      console.log(arr[i])
    } return arr;

  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
