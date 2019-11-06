/**FUNCTIONS */

/**1.FUNCTION DECLARATION */
var addition = function(){}; //anonymous functions(unnamed functions - used only once)
var addition = () =>{}; // arrow functions
function addition(){}


/**2. FUNCTION DEFINITION */
var addition = () => {
    console.log(7+8) //definition
}

/**3. FUNCTION INVOCATION or CALL */
addition(); 
//OR ()() - include function definition within the quotations for it to work i.e 
(function(){console.log(7+8)})() //immediately invoked function


/**4. FUNCTION PARAMETERS */
var addition = (x,y) => { // give parameters in the function i.e  x & y
    console.log(x+y); //
}
addition(3,4);//pass the parameters you want in the function call
addition(7,9); //you can call many parameters depending on the number of functions or values


/**5. FUNCTION ARGUMENTS*/
addition(3,4)// the values in the function all is known as function arguments

/**6. FUNCTION RETURN */
//eer//compute sum