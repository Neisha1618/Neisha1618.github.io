
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// need to create a loop that makes even calls to contact.log to create a triangle
function triangles(size) {
var tri = '';
// create a loop that will add a # up to the iput size
for (var i = 0; i < size; i++) {
  console.log(tri += '#');
}

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  // loop through the number 1-15
  for(let i = 1; i <= 15; i++){
     // for numbers divisible by 5 & 3 print 'FizzBuzz'
     if(i % 15 === 0){
       console.log('fizzbuzz');
     }
     // for numbers divisible by 3 print 'Fizz'
     else if(i % 3 === 0){
       console.log('fizz');
     }
    // for number divisible by 5 print 'buzz'
    else if(i % 5 === 0){
      console.log('buzz');
    }
    // else print numbers
    else{
      console.log(i);
    }
  }
 
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
   //this is the variable setting

var board = "";//this is the empty string we're going to add either ' ' , '#' or newline

for (var y = 0; y < size; y++) {   /*in the outer loop we add newline to seperate rows*/
  for (var x = 0; x < size; x++) {/*every inner loop rappresents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
