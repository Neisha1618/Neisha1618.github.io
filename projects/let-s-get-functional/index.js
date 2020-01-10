// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-neisha");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
// we need to use the filter function to filter our all male customers
let maleArray = _.filter(array,function(customerObj,index,array){
    // return all objects whos gender property equal malel
    return customerObj.gender === "male";
});
    return maleArray.length;
};

var femaleCount = function(array){
    // add a seed since we want to return a number
return _.reduce(array, function(prev,curr,i){
        // if current object is female increment the previous value
        if(curr.gender === 'female'){
            prev = prev + 1
        }
        return prev;
    },0)
}

var oldestCustomer = function(array){
    // reduce through the array of objects and check to see if the curr value is less than the prev vlaue
   var age = _.reduce(array, function(prev, curr, index){
        if (prev.age < curr.age){
            return curr;
        } 
        return prev;
    },); 
    // if so return the name of that customer
    return age.name;
};


var youngestCustomer = function(array){
    // reduce through the array of objects to check if the current age is less than the prev age
    let age =  _.reduce(array,function(prev,curr,i){
        if(prev.age > curr.age){
            return curr;
        }
         return prev;
    });
    return age.name;
};

var averageBalance = function(array){
    // we want to return the average balance of customers
   let balance = _.reduce(array,function(prev,curr,i){
        // we need  to access the  balance key
        // we need to take out special characters
        let bal = parseInt(curr.balance.replace(/[^\w\s]/gi, ""),10)
        prev += bal;
       return prev
    
    },0);
    let averageBal = (balance/(array.length * 100))
    return averageBal;
    
};

var firstLetterCount = function(array,letter){
    // find a count of customers name that begins with a certain letter
   return _.reduce(array,function(prev, curr,index){
        if(curr.name[0].toUpperCase() === letter.toUpperCase()){
            prev = prev + 1;
        }
        return prev;
    },0);
};

var friendFirstLetterCount = function(array,customer,letter){
    // get a count of how many friends of a given customer name begin with letter
    let customerFriends = {};
    // loop through array to test that the customer name matches the name at that index
    for(var i = 0; i < array.length; i++){
        // if the name matches put that object into customerFriends so that we can access friends key
   if(array[i].name === customer){
       customerFriends = array[i];
       
   }
   
    }
    
    // use reduce on customerFriends object hitting the friends key and apply the function
   return _.reduce(customerFriends.friends,function(prev,curr,i){
      // just like in first Letter count test that the first letter in name equals param of letter
        if(curr.name[0].toUpperCase() === letter.toUpperCase()){
            // if this is true add one to the prev count
            prev = prev + 1;
        }
        return prev;
    },0);
    
};

var friendsCount = function(array,name){
    // find the customer name, that has a given customers name in their friends list
    // we have an array of objects. 
 // find the customer name, that has a given customers name in their friends list
    // we have an array of objects. 
    let friends =[];

  var customersFriends = [];
    
    var countFriends = _.reduce(array, function(prev, element, index){
        // loop through friends array and set condition a condition to check if the customer name has te friends name
        for (let i = 0; i < element.friends.length; i++){
            if ( element.friends[i].name === name){
                prev = element.name;
                customersFriends.push(prev);
            }
        }
        // return customer's name with same friend
    }); return customersFriends;

     
 
 
}


var topThreeTags = function(array){
     // create an array to hold all tags in
      let arrTags = []
 // use reduce to reduuce down our tags into one array

let newTags =  _.reduce(array,function(prev,curr,i){
    // create a condition for the case of us having a tags array
      if(curr.tags !== undefined){
          // push the tags into an array so it can be an array of array tags
          arrTags.push(curr.tags)
          // flatten the nested arrays
      }
      // concat the tags into one big array of tags
       return  [].concat(...arrTags);
 });
 
 // use reduce to 
 
 let tags = _.reduce(newTags,function(prev,curr){
           console.log(prev);
           // we want to check the conditions that the tag exist if it doesnt we'll set it equal to one
           // if it does exist we want to create the key in our object and increment by 1 eveytime we hit the tag
           if(prev[curr] === undefined){
               prev[curr] = 1;
           } else {
               prev[curr] += 1;
           } return prev;
},{});


// create a newArray and iterate over our tags object to make our object an array by pushing it
var newArray = [];
_.each(tags,function(count,word){
    newArray.push([word,count]);
});

// sort our array from highest to lowest by using b - a
 newArray.sort(function(a,b){
   return b[1] - a[1];
 });
 
 
// console.log(newArray);
// create a new array to push the sorted array into that array
 var sortedArray = [];
 // loop through array to keep the first three elements
 for(var i = 0; i < 3; i++){
     sortedArray.push(newArray[i][0]);
     // return our new array with the top three tags
 } return sortedArray;

};

var genderCount = function(array){
  
    // need a key of female with 
    // need a key of male
    // need a key of non-binary
      let male = 0;
   let female = 0;
   let nonBinary = 0;
   // use reduce to return a summary of genderCount
   return  _.reduce(array, function(prev, curr, i){
       // checking our condition that we have the genders and to add to our counter variable if we do
       if (curr.gender === "male"){
           male += 1;
       } else if (curr.gender === "female"){
           female += 1;
       } else{
           nonBinary += 1;
       }
       // returning our final object with the keys which will tack on our final counter values
       return {
           male,
           female,
           "non-binary": nonBinary
       };
   }, 0);
};
    


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
