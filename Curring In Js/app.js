



const addcurried = (num1) => {
    // console.log(num1);
    return function (num2) {
        // console.log(num2);
        return function (num3) {
            // console.log(num3);
            return num1 + num2 + num3;
        }
    }
}

//  console.log(addcurried(5)(6)(7));

function multiply(a) {
    console.log(a);
    return function (b) {
        console.log(b);
       return function(c){
        console.log(c);
            return a * b * c;
       }
    }
}

// const fixtwo = multiply(2);
// console.log(fixtwo(5));
// console.log(fixtwo(6));
// console.log(fixtwo(6));





