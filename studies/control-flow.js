/**
 * Control Flow
 * 
 * 0. Javascript reads code from top to bottom. Because of this we as programmers 
 *    have to be careful of how we right out our code. Control Flow is a way we can have 
 *    our code in an organized fashion based on conditions. 
*/

/* 1. If Statements
 *    The If statement is the first element in a conditional statement, If this 
 *    statement evaluates to true the code block for this statement will run. If this 
 *    statement evaluates to false, the code will not run. 
 *    It startes with the keyword if followed by parenthesis with the condition to be checked
 *    followed by the code block to run if the condition is true.
 *    We should only have one if Statement
*/

/* 2. Else-If Statement
 *    If the If Statement evaluates to false this is the next conditions that will be checked.
 *    this statement starts with the else if keyword followed by the parenthesis containing the condition to check
 *    followed by the code block to run if this statement evaulates to true.
 *    Unlike the if Statement, we can have as many else if Statement as we need
*/

/* 3. Else Statement
 *    If no other condtions evaluate to true, then we have a default statement called the Else Statement.
 *    this block will then run. It start off with the else keyword followed by the code block to run.
 *    Like the if statement, there is only on else statement.
*/
 
 // Examples //
 var color = 'red'
 if(color === "blue"){
     console.log("sky"); // will not run
 } else if(color === 'yellow'){
      console.log("bananas") // will not run
 } else if(color === 'red'){
     console.log("fiery"); // this code will run and end the statements
 } else{
     console.log("not cute"); // since the previous code evaluated to true this code was never reached
 }
 
 
 /* 4. Switch Statement
  *    The switch statement is another condition statement we have. the switch statment starts
  *    off with a value that will be checked. Next will be the keyword switch followed by the 
  *    value/condition we will be checking in parenthesis. next will be the case keyword followed 
  *    by the value to check followed by a code block that will run if the case is true. followed by the keyword break.
  *    We can have as many cases to check as we need. 
  *    finally we have a default statement that will run if none of the cases 
  *    evaluate to true. It is just the keyword default foloowed by colons followed by a block of code to be ran.
  */   
  
  // Example //
  
  let testScore = 90;
  
  switch(testScore){
      case 60: 
          console.log('needs a lot of work');
          break;
      case 70: 
          console.log("basic");
          break;
      case 80:
          console.log("you almost was a star");
          break;
      case 90:    
          console.log("above the grain"); // ths block will be ran
          break;
      default:
          console.log("level couldnt be determine");
          
  }
 