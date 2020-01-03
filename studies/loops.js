/**
 * Loops
 * 
 * 0. Loops are helpful because they perfom an act on data as many times we want it to. 
 *    There are multiple loops that work differently on different type of data.
 * 

 /* 1. While Loop
 *    A while loop starts off with a initial condition/ starting condtion that is outside
 *    the loop. next there is the while keyword followed by the stoping condition in parenthesis 
 *    followed by the code block to run with the iterator inside it.
*/

    // synthax //

let start = 0; // when to start looping

      while(start < 4){ // when to stop looping
      console.log(start); // prints => 0,1,2,3
      start++; 
}


/*  2. For-Loop
 *    This loop is great for looping over an array.
 *    In starts with the for keyword followed by parenthesis containing: 
 *    starting condition, stopping condition, and incrementor followed by the code block that will be ran.
*/

   // synthax looping forward//
   
   for(let i = 1; i < 5; i++){ // starting condition is lower than stopping condition, we use an incrementor as iterator
       console.log(i); // prints => 1,2,3,4
   }
   
   // synthax for looping in reverse//
   
   for(let i = 5; i > -1; i--){ // starting condition is highere than stoping condition, we also use a decrementor as iterator
       console.log(i); // prints 5,4,3,2,1,0
   }




/* 3. For-in Loop
 *   used to loop over an object.
 *   unlike the other loops, this loop does not have conditions and just lops over the whole object.
 *   It starts with the for keyword followed by parenthesis that contains the keyword var key in object.
 *   Where object is whatever the name of the object is.
*/

// Example of looping over an object//

var obj = {
    car: "chevy",
    color: 'grey',
    year: 2015
};

for(var key in obj){
    console.log(key); // prints => car,color,year
}

// Example of looping over an array

 let months = ['jan', 'feb', 'mar', 'april'];
 
 // forward  
 
 for(let i = 0; i < months.length; i++){
     console.log(months[i]); // prints jan, feb, march, april
     
 }
 
 // backwards
 
 for(let i = months.length; i > -1; i--){
     console.log(months[i]); // prints april, mar, feb, jan
 }
 
 


