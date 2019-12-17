/**  Control Flow
 * 0. Javascript is single threaded meaning it reads code from top to bottom. conditional statement are a perfect example of this
 * to organize the control flow of a condtional statement we have the: If, Else-If, Else, and Switch statements.
 */

/* 1. If Statements
 * In a conditional statement, the if statement is the first code that is read. We have the keyword If, after that we have conditions
 * in parenthesis that has to be met for the code to run. Followed by the parenthesis is the curly braces with the code to ran
 * if the condition is true.
 */

/* 2. Else-If
 * If the conditions in the 'If statement' evaluates to false, The Else-If statement would be the next statement evaluated.
 * the keyword Else-If followed by the condition to be evaluated in parenthesis followed by the curly braces with the code block.
 * If the condition evaluates to true the code will run. If the conditions evaluate to false it goes down to the default.
 */

/* 3. Else 
 * The default statement if none of the conditions evaluate to true
 */

  // Example //
  
  let favColor = 'red';
  
  if (favColor === 'green'){
      console.log('green'); // this block will ot run
  }
  else if (favColor === 'red'){
      console.log('red'); // this block will run and the code will stop here
  }
  else {
      console.log("none of them"); // this block will not run because the code stopped running at the else if.
  }
  
  /* 4. Switch Statements
   * A switch statement runs code based off of a condition being true. We  start with a variable. being checked
   * followed by the switch keyword. next, we have the case keyword
   * with the condition being checked followed by colons. Then the code block that runs if the condition is true. followed by a break statement 
   * that stops the code from running if it evaluates to true. and the last step is a default statemnt if no codition evaluated to true.
  */

     // Example//
     
  var pets = 'dog'; 
  
  switch(pets){ // the variable being checked
      case 'tiger':  // will not run
      console.log('rarrrr');
  break;   
  
       case 'dog':
       console.log('woof'); // will run and the code will end at the break
  break;
  
       default:  
       console.log('no dog at all');
  }
  

