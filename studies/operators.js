/** Operators
 * 0. Operators are used to take action on a set of data called the operand. There a different typ of operators whit different uses.
 * These different Operators are: Assignment, Arithmetic, Comparison, Logical, Unary, and Ternary.
 */

/* 1. Assignment Operators
 *  The Assignment Operators assign something to a value using the arithmetic operators and the equal operator
 */

   //Example//
   
   var num = 5;
   console.log(num); // prints 5
   num *= 3;    // using the multiplication and equal assignment operator to multiple 5 by 3
   console.log(num); // prints 15
   
  /* 2. Arithematic Operators
   * These Operators are used to perform math operations between variables and values. These operations can range
   * from simple to complex. 
     Aritmatic Operators             Operation Performed
   *       +                            Addition
   *       -                            Subtraction
   *       *                            Multiplication
   *       /                            Division
   *       %                            Remainder
   *       ++                           Incrementor
   *       --                           Decrementor
   */    
     
 // Example //
      
       var multiplyNum = 6 * 3; 
       console.log(multiplyNum); // prints 18
       
       let incrementNum = 5;
       incrementNum++;
       console.log(incrementNum); // prints 6
       
   
   
    /* 3. Comparison Operators
     * Comparison operators are used in logical statements to compare two values to each other 
     * and they evaluate to be true or false
     
     *       Operator                         Function
     *   (==) (===)                 equal to and strictly equal too
     *    !=  (!==)                 not equal too and Strictly not equal too
     *       >                             Greater than
     *       <                              Less Than
     *       >=                         Greater than or Equal too
     *       <=                         Less than or equal too
    */
   
    // Examples //
    
    console.log(5 <= 10); // prints true
    console.log(5 === '5'); // prints false
    console.log(2 == '2'); // prints true
    
    /* 4. Logical Operators
     *  Logical operators are used to determine the logic between two values in a condition.
     
     *      Operator                   Function    
     *        &&              And Operator: Both of the conditions need to be true
     *        ||              Or Operator: One of the values need to be true          
     *         !              Bang Operator: Flps the truthiness of the values
     */
    
        // Example //
    
    var bangOperator = !4;
    console.log(bangOperator); // prints false because the bang operator changes the truthiness
    
/* 5. Unary Operator
 * A unary operator is one that take a single operand and performs an operation. 
 * Not all operators are symbols. Some are written in words in the case of they typeof operator

      Operator                    Function                 
 *    typeof                Tell you what type of data an operand is
 *      +                     Converts an operand to a number
 *      -                     Converts an operand to a number then negates it
 *      !                     Flips the truthiness
 */
    
   
   
    // Example //
    
    console.log(typeof true); // prints boolean
    
    
/* Ternary Operators
 * Ternary operators operate on three values. this operator is written with a question mark and colon seperating the values
 * The value on the left side of the question mark has the boolean. When the value is true the middle value is picked. When 
 * the value is false the right value is chosen
 */
    
    // Examples
    
    console.log(true ? 6 : 8); // prints 6 
    
    
