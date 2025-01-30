// a function without a name is called an anonymous function

/*
:) function statement->
:) function expression
:) function declaration

*/

// function statement
//here hoisting comes in to picture
a();
function a(){
    console.log("a called");
}
// a();
// function expression
// b(); //gives error
var b = function(){
    console.log("b called");
}
b();
//function declaration
var c = function d(){
    console.log("d called");
}
// d()//gives error
c();
//anonymous function
// function(){
//     console.log("anonymous function called");
// }

//named function expression
function abc(){
    console.log("abc called");
}
abc();

//difference between parameter and argument
//parameter is the variable in the declaration of function
//argument is the actual value of this variable that gets passed to function

// first class function
// the ability of functions to be used as values function inside a function or return a function from a function


//Arrow function
