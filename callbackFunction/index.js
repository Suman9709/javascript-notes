// what is a callback function in javascript?
// -> A callback function is a function that is passed as an argument to another function, to be “called back” at a later time.

setTimeout(function(){
// console.log("Timer");

},5000)

function x(y){
// console.log("x");
// y();
}
x(function y(){
// console.log("y");

})

// javascript is a synchronous language and single-threaded, which means that it executes code line by line.
// -> When a function is invoked, it is pushed to the call stack, and when it returns, it is popped from the call stack.

//Blocking the main thread
// -> When a function takes a long time to return, it blocks the main thread, and the user interface is unresponsive.

//power of callback function

//deep about event listener

document.getElementById("clickme").addEventListener("click", function(){
// console.log("Button Clicked");
})

//closure demo with event listener
function attachEventListener(){
    let count = 0;
    document.getElementById("clickme").addEventListener("click", function(){
        // console.log("Button Clicked", ++count);
    })
}
attachEventListener();

//scope demo with event listener

// garbage collection & remove event listener 


// block the call stack

console.log("start");

setTimeout(function cb(){
    console.log("callback");
}, 5000);

console.log("End");


let startDate = new Date().getTime();
let endDate = startDate;


while(endDate<startDate+10000){
    endDate = new Date().getTime()
}

console.log("while expires");

