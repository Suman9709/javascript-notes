
//console.log(b); // gives unddefined
//console.log(a); // this gives error cannot access before initilization ReferenceError
 
/*
   we can de 
   let a;
   a=20 
   */
let a =10; //we cannot declare let a=100 it gives a syntaxError a is already been declared
console.log(a);
    
var b=100;

const c=100;  // valid same as let but much strict then let
/*
if we declare
const c;
c = 10; it gives a sybtax error missing initilization in const declaration
*/

// let and const had also allocate memory but they are stored in different memory space then global but we cannot access its memory space
// let and const declaration before you have putting some value in them
// Temporal deadzone is the time since when this let varialbe is hoisted and till some value are assigned 

// when a variable is in temporal zone it cannot be accessed it can only be accessed when a value is assigned to it

// not define-> if a variable is not declare in the progaram and we access that variable then it show not define cannot access that varibale
// eg console.log(x) here x is not define anywhere in the program
// same case with const and let data type variable

// undefined-> if a variable is accessed before the declaration the it give the undefined eg is given above
