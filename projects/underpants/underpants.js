// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    // return the value
    return value;
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
    // we need to return the type of <value> as a string for each datatype
    if(typeof(value) === "string"){
        return "string"
    } else if(Array.isArray(value) === true){
        return "array"
    } else if(value === null){
        return "null";
    } else if(typeof(value) === "object"){
        return "object"
    } else if(typeof(value) === "undefined"){
        return "undefined"
    } else if(typeof(value)=== "number"){
        return "number"
    } else if(typeof(value)=== "boolean"){
        return "boolean"
    } else {
        return "function";
    }
    
    
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array,num){
    // create a container to push elements in array
    let arr = [];

   // if num is equal to 1 or if ! a num return array[0]
   if(num === 1 || !num){
       return array[0];
   }
   // if num is < 0 or if !array return []
   else if(num < 0 || !Array.isArray(array)){
       return [];
   } 
    // if num is greater the arrays length
    else if(num > array.length){
        return array;
    }
   
   else {
       // loop through the array up until num and push the elements into arr
       for(var i = 0; i < num; i++){
   arr.push(array[i]);
   }
   return arr;
   }
    
};
   


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
 _.last = function(array,num){

     // if number is equal to one or not a number return the last element in array
     if(num === 1 || !num){
         return array[array.length -1];
     }
     // if number is negative or array isnt an array return an empty array
     else if(num < 0 || !Array.isArray(array)){
         return [];
     }
     // if num is greater than array.length return array
     else if(num > array.length){
         return array;
     }
     // else slice the array 
     else {
         return array.slice(num - 1, array.length)
         }
         
    
     
 };



/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

// Contrainst: cant uss indexOf
// Edge cases: if array has multiple occurances of value
// if val isnt in array

_.indexOf = function(array,value){
    // loop through the array
    // if the value is in the array return the index
    for(let i = 0; i < array.length; i++){
      if(array[i] === value){
          return i;
        }
      }  // else return -1
          return -1;
    
};


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

// contraints: use terenary operator

_.contains = function(array,value){
    // return true if array contains value
    return array.includes(value) ?  true : false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, action){
     if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
    let uniqueArr = [];
    // return a new array of all elements from <array> with duplicates removed
    // each returns the index
 for(var i = 0; i < array.length; i++){
     if(_.indexOf(array,array[i]) === i){
         uniqueArr.push(array[_.indexOf(array,array[i])]);
     }
    
 }
 return uniqueArr;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/


_.filter = function(array,func){
    let filterArr = [];
     _.each(array,function(element,i,collection){
        if(func(array[i],i,array) === true){
            filterArr.push(array[i]);
        }
     });
     
 return filterArr;
}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array,func){
    return _.filter(array,function(element,i,array){
        return !func(element,i,array);
        });  

};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

let storeAll = [];
let truthy = [];
let falsy = [];

_.partition = function(array, func){
           _.each(array,function(element,key,array){
        if(func(element,key,array) === true){
           truthy.push(array[key]);
        }else {
         falsy.push(array[key])
}
});
storeAll.push(truthy,falsy);
return storeAll;
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

  
_.map = function(collection,func){
    let mapArray = [];
    // utilize the each function to iterate ove a collection to determine if its an array or object 
  _.each(collection, function(element,index,array){
      // apply the callback func on the element,index,array
      // push that  into mapArray
      mapArray.push(func(element,index,array));
      // return mapArray
  }); return mapArray;
    

};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(array,prop){
      // must use _.map
  return _.map(array,function(element){
       // return an array containing the values of prop for every element in array
      return element[prop];
  });
};



/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection,func){
   // create a result variable to update so that we dont have to return in a loop
   // start with result being true
    let result = true;
    // if there is a function give
    if(func){
         // use the map function to iterate through the collection of either an array or object and apply the function
    _.map(collection, function(element,index,array){
        // if func applied on every element,index and array come back with one false value 
        if(func(element,index,array) === false){
           // re-assign result to equal false
            result = false;
        }
        });
   // if there is no function given 
  } else{
      // map through the collection and look for truthy values
      _.map(collection,function(element,index,array){
          // if the element is false 
          if(element === false){
              // reassign result to be false
              result = false;
          }
      });
  } // otherise return result which equals true
  return result;
  
};


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection,test){
    // similar to every
    let result = false;
    if(test){
        _.map(collection,function(element,index,array){
            if(test(element,index,array) === true){
               return  result = true;
            }
        });
    } else{
        _.map(collection,function(element){
            if(element === true){
              return result = true; 
            }
        });
        
    }
    return result;
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array,test,seed){
    let startValue = seed === undefined ? 1 : seed;
    for(let i = 0; i < array.length; i++)
    startValue = test(startValue, array[i], i, array);
    return startValue;
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
// use the spread operator for the second param so we can pull in, any added args
_.extend = function(obj1, ...object2){
 //console.log(obj1);
 // console.log(...obj)
 // we need to copy properties from ...obj to obj1
 // return the updated obj1
 
 // first we need use a for loo to loop through object two because it is somewhat of an array now thinks to the spread operator
 for(var i = 0; i < object2.length; i++){
 // use a for in loop to apply everything from    
   for(let key in object2[i]){
     obj1[key] = object2[i][key];
 }
 }
    return obj1;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
