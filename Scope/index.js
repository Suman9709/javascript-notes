function a() {
    var b = 10;
    c();

    function c() {
        console.log(b); // gives b=10
    }
}


// var b= 10; //here b is log 10 in function either it is in any function call as it is globally defined
a();
// now if we log b outside the function the it give b is not defined
/*
when ever a execution context is created a lexical environment is also created 
lexical environment is the local memory along with the lexical environment of its parent memory

Lexical:- means hierarchy or sequence from the above example c() is lexically inside a() 
          and a() is lexically inside the global scope

          locall memory + lexical environment of the lexical parent
*/

// The scope chain is th lexical environment and the parent references 


const person = {
    name: "XYZ",
    greet: function () {
        const arrow = () => {
            console.log(this.name);
        }
        arrow()
    }
}
person.greet();