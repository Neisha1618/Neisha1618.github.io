// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
// use the reduce method with the concat method to flatten an array of arrays
console.log(array);

// we do not need a seed since we start off with an array
// we need to first use reduce on array
     return array.reduce(function(prev,curr) {
        //  apply concat on the current element
      return prev.concat(curr);
     });
}


// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, body) {
// write a loop that takes a value, a test function, an update function, and a body function.
// we start at the start val
// next, run the test function on that value
// next, re-assign value to equal the new updated value.

for (let value = start; test(value); value = update(value)) {
    body(value);
  }
  
}






// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// this function takes an array and a test function
function every(array,func) {
// using a for loop, loop through the array. 
for(let i = 0; i < array.length; i++){
  // use an if statement to check if the test passes by pluggin the array into the test func 
  if(!func(array[i])){
    // return false not every value passes
    return false;
  }   
   
}// return true if one test fails
 return true;

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  // use the first part of the countBy function to count thr characters
  
  
let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
    // use the filter function to filter out values we dont need
  }).filter(({name}) => name != "none");

// use an if statement to test the length of the filtered out counted values
  if (counted.length == 0) return "ltr";
// apply reduce aand use a terenary operator 
  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
