function x(){
    var a  = 7;
    function y(){
        console.log(a);
    }
    return y;
    // y()
}
// x();  

var z = x();
console.log(z); // gives the function y

z()//7


// Function along with its lexical scope bundled together form clouser
// or function bundled to its surrounding state are clouser
// we also assign a function to a variable and get that function in the console
/*

function a(){
var a= 7;
function y(){
console.log(a);
}
return y;
}
var k = a()
console.log(k)
*/ 

/*
Use of clousers:
-> Module design pattern
-> Currying 
-> function like once
-> memoize
-> maintining state in async world
-> setTimeout
->iterator
->and many more
*/

function p(){
    var a=10;
    function q(){
        var b = 20;
        function r(){
            console.log(a,b);
        }
        r();
    }
    q();
}
p();