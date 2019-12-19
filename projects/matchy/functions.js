/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a function called search with params of (animals,name)
function search(animals,name){
    // look through the animals array
    //return the animals object if the name matches
   
   for(var i = 0; i < animals.length; i++){
      if(animals[i].name === name) {
           return animals[i];
      } 
          // return null if it doesnt exit
           
      
   } return null;
    
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create a function replace with params of (animals,name,replacement)
function replace(animals,name,replacement){
   for(var i = 0; i < animals.length; i++) {
       // if the an animal with the name exist, replace the whole object with the replacement
       if(animals[i].name === name){
           // need to use splice to remeove and replace
           return animals.splice(i,1,replacement)
       }
   } // if the name doesnt exist do nothing
}




//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a function called remove that takes params of: animals,name
function remove(animals,name){
    for(var i = 0; i < animals.length; i++){
    // if the name exist on the animals array remove it    
    if(animals[i].name === name){
        // use splice to remove animals but do not replace with anything
        return animals.splice(i,1);
    }
    }
}




//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a function called add that has params of: animals,animal
// animal is the new object to be added
/*  - Checks that the animal Object has a `name` property with a length > 0.
   - Checks that the animal Object has a `species` property with a length > 0.
   - Has a **unique** name, meaning no other animals have that name.
   - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
*/

function add(animals,animal){
 for(var i = 0; i < animals.length; i++){
 if(animal.name.length > 0 && animal.species.length > 0 && animals[i].name !== animal.name){
            return animals.push(animal);
        } 
        return animals[i];
       
 }
} 

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
