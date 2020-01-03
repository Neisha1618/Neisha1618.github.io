////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start,end, step = start < end ? 1 : -1) {
// have the params of start and end
// need a storage array
let rangeArray = [];
// need to loop through start and end 
  // for the edge case that start equals end
     if(start !== end && step > 0){
       for(let i = start; i <= end; i += step ){
       //push the numbers into array
         rangeArray.push(i);
 }
 // for the edge case that start equals end return empty array
} else if(start === end){
    return rangeArray;
} 
 else{
    // for the edge case of a negative step
  for(let i = start; i >= end; i += step ){
    rangeArray.push(i);
}
} return rangeArray;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
// write a sum function that takes an array and return the sum

console.log(array);
// create a var to keep the sums
let sum = 0;
// loop through the array, and everytime it adds value to storage var
for(let i = 0; i < array.length; i++){
    // adding to the storage variable
    sum += array[i];
} return sum;

}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
// reverse the array
console.log(array);
let reversedArray = [];
for(let i = array.length -1; i > -1; i--){
    reversedArray.push(array[i]);
} return reversedArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
    // need to loop through the array and reverse in place
    // we need to stop in the middle of the array so array.length / 2
    // use math.floor for arrays with even lengths
for (let i = 0; i < Math.floor(array.length / 2); i++) {
    // need the have each element in each iteration equal to a var.
    let ele = array[i];
    // set the first element equal to the last and the last element equal to the first.
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = ele;
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
    /** Build a list structure from an array  like this when the arguments of [1,2,3] are passed
     * let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
    */
    //console.log(array);
    // create a variable called listObj which will be our new object
    let listObj = null
    // need to loop through array backwards
     for(var i = array.length -1; i > -1; i--){
         // set list obj to an object with a key of value equal to each index
         // have a key of rest set to null/listObj
       listObj = {value:array[i], rest: listObj};
         console.log(listObj);
     } return listObj;
    }



////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(obj) {
// make an array from a object
//console.log(obj);
let arr = [];
// loop through
for(let i = obj; i; i = i.rest){
    // push each key value to array
    arr.push(i.value);
} return arr;

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value,list) {
// this function takes an element and a list

console.log(list);
console.log(value);
// create a new list that adds the element to the front of the input list

let newList = {
    value, rest: list
    
};
return newList;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list,number) {
// return the element at the number position in the list
// return undefined if that element doest exist
// since a million if else if statements isnt working use recurssion
console.log(list);
console.log(number);

// first base case is if the element doesnt exist
if(!list){
    return undefined;
    // the next case is when the number = 0 just return the value of list
} else if(number === 0){
    return list.value;
    
} else {
    // recurssive case 
    return nth(list.rest,number - 1);
} 
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a,b) {
    // if the elements are equal
  if (a === b) return true;
  // checking that the type is equal to a object for collection
  if (a == null || typeof a != "object" || b == null || typeof b != "object") return false;
// create a new variable and set it equal to object.keys to make things easier
  let keysA = Object.keys(a), keysB = Object.keys(b);
// checking if the keys lengths are not equal
  if (keysA.length != keysB.length) return false;
// looping through object a
  for (let key of keysA) {
      //recurssive case
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
// return true at the end to make sure we knocked out all the false values
  return true;
}

    



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
