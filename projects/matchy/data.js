/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create an animal object
var animal = {};
// use dot notation to add a key of species and assign it to any species
animal.species = 'tiger';
// using bracket notation give animal a key of name and assign it
animal['name'] = 'harry';
// give animal a key of noises and set in equal to an array literal
animal.noises = [];
// console.log animals object
console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a variable called noises and assign it to an array literal
var noises = [];

// use bracket notation to give animal four noises
noises[0] = 'grrrr';
noises.push('rahrr');
noises.unshift('meow');
noises[noises.length] = 'pssss';
// console.log the length of noises
console.log(noises.length);
// console.log the last element without hard coding
console.log(noises[noises.length -1]);

// console log the whole array
console.log(noises);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// usng bracket syntax assign the noises property from our animal object to our noises array
//
animal['noises'] = noises;
// add another noise to the noises key
animal.noises.push('prrr')
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * // dot and bracket notation
 * 2. What are the different ways of accessing elements on arrays?
 * // bracket notation
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a variable named animals and asign it to an array literal
var animals = [];
// push our animal array to the animals array
animals.push(animal);
console.log(animals);
// create a var duck that is set to an object with keys of species, name, and noises 
// species = 'duck'
// name = jerome
// noises has a value of and array contaning 4 noises
var duck = {
    species: "duck",
    name: 'jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
}
// push duck into animals
animals.push(duck);
console.log(animals);

// create two more animal object each with a species, name, and noise property with two sounds
var snake = {
    species: 'snake',
    name: 'nagini',
    noises: ['ssss', 'hisss']
}
var turkey = {
    species: 'turkey',
    name: 'timmy',
    noises: ['gobble', 'robble']
}
// push the two other animal object into animals
animals.push(snake,turkey);
console.log(animals);
console.log(animals.length);



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// for the list of frineds i choose to use and array because its just a list  of names. if it was names attached to different props then an object would be ideal

// create a variable friends and assign it to an array literal
var friends = [];
// create a function called get random that takes a param of the animals array and return a index of a random selection
// input: animals array
// output: index
function getRandom(animals){

 return Math.floor(Math.random(animals.length));

}

// add a key of friends to a animals object using getRandom function
animals[getRandom(animals)].friends = friends;
console.log(friends);
 






/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
