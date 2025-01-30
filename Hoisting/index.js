


console.log(x); // in this case it will give undefined
square(x); // here we get NAN as x in not defined
getName(); // this gives the result


// console.log(getName); // this print the whole function in the console
// console.log(square); // this print the whole function in the console


// Even before code start executing memory is alocated to all variable and function


var x = 7;
// var x = 7; // in this case x is not defined

function square(x){
    console.log("The square of num is ", x*x) 
}
// function getName(){
//     console.log("What is your name");
    
// }
var getName = ()=>{             // here getName act like a variable not a function
    console.log("What is your age");
}
// console.log(x); 
// console.log(getName); // this print the whole function in the console
// console.log(square); // this print the whole function in the console
