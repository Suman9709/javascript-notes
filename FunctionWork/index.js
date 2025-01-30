var x=1

a(); // This can access function a due to hoisting
b(); // This can access function b due to hoisting

console.log(x);


function a(){
    var x = 10;
    console.log(x);
}
function b(){
    var x = 100;
    console.log(x);
}

// if nothing is in the javascript file it is the smallest code
// of javascript where if we see in console if create a global execution context 
// where window and this will be available after type this/window in console we can see many function and objects in this.
// What is Window?
// It is a global object with is created along with the global execution context

