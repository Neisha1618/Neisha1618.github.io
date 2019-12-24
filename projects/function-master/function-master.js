//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
// take the objects and return its values in an array
var arr = [];
// loop through the object and push its values in arr
for(var key in object){
    arr.push(object[key]);
}
return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
// return all the keys in an object seperated with strings and a space
// use Object.keys to return all keys
// then join the keys to a string with a space
return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // if the value is a string return it in a string seperate by a space
    var arr = [];
    //console.log(object);
    
    // loop through the object and use an if statement to determine if typeof is a string
    // push the results in an array
    for(var key in object){
        if(typeof object[key] === 'string'){
          console.log(arr.push(object[key]))
        }
        // join the array with a space
    } return arr.join(" ")
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // determine if collection is an array or an object
    if(Array.isArray(collection)){
         // if its an array return the string of 'array'
        return 'array';
    } else {
        // if its an object return 'object'
        return 'object';
    }
   
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // capitalize the first letter of string
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // capitilize all words in a string
    //console.log(string);
var str = string.split(" ");
// loop through the string and capitilize all of the first letters of the words
for(let i = 0; i < str.length; i++){
    str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    // join the string with a space
} return str.join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
// we need to take the object that has a name property and return "welcome <name>"
console.log(object);
// access the key value since we know the name
// we already have a function that capitilize words for us so we can pass in that value
// return the "welcome" + calling the capitlize all words function on our value
return "Welcome " + capitalizeAllWords(object.name) + "!";


}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    // take an object with a name key and a species key and return <name> is a <species>
    // use the capitalize function we have to pass in the valuse
return capitalizeAllWords(object.name) + " is a " + capitalizeAllWords(object.species)
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
// we have an object

console.log(object);

/* edge case: if the object has a key of noise that is an array
              if the noises array have a length > 0
*/
              
// if this object has a noises array, return them as a string sperated by a space
if(Array.isArray(object.noises) && object.noises.length > 0){
    return object.noises.join(" ");
} else { // if no noises
    return 'there are no noises';
}
// else return 'there are no noises'
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
// take a string of words and a word
// if <word> is in string return true
if(string.includes(word)){
    return true;
} else {
    return false;
}
// otherwise return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // add name to the key of friends array
     object.friends.push(name);
     // return the object
     return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // if name is included in the friends key the return true
    // else return false
    // edge case: check if there is a friends key
    console.log(object);
    if(Array.isArray(object.friends) && object.friends.includes(name)){
        return true;
    } else {
        return false;
    }

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // we have an array of objects with the key of freinds
    // we have a name that we want to test if it is not included in the friends list
console.log(array);
// create an array for the !friends

var notFriends = [];
// loop through the array 
for(let i = 0; i < array.length; i++){
    // edge case: if the name of the person === name then do nothing
    if(array[i].name === name){
     // if the name is not a friend then push name into arr     
    } else if(!array[i].friends.includes(name)){
        notFriends.push(array[i].name)
        
    } 
} console.log(notFriends);
return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    // we have a object and a key name and a value
console.log(object)
console.log(key)
console.log(value)
// we want to update the object on the key with our new value
// if we do not have the key in the object create it
  object[key] = value
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
console.log(object)
console.log(array)
// need to loop over the array
for(var i = 0; i < array.length; i++){
    // delete the key if it is a string in the array
 delete object[array[i]];
 // return updated object
} return object;
    

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    // set is a built in object that stores unique thing
    // the spread opperator with the new key words creates a new array with all the unque values
return [...new Set(array)];
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}