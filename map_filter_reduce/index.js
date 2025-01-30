const arr = [5, 1, 3, 2];

function double(x) {
    return 2 * x;
};
function triple(x) {
    return 3 * x;
};

function binary(x) {
    return x.toString(2);
};


// const output1 = arr.map(double) or
const output1 = arr.map((x) => 2 * x);

// const output2 = arr.map(triple) or
const output2 = arr.map((x) => 3 * x);

// const output3 = arr.map(binary) or
const output3 = arr.map((x) => x.toString(2));

// console.log(output1);
// console.log(output2);
// console.log(output3);





//here filter comes to the picture


function isOdd(x) {
    return x % 2 == 1;
};

function isEven(x) {
    return x % 2 === 0;
};

function greaterThan2(x) {
    return x > 2;
};


// const output4 = arr.filter(isOdd); or
const output4 = arr.filter((x) => x % 2 === 1);

// const output5 = arr.filter(isEven); or
const output5 = arr.filter((x) => x % 2 === 0);

// const output6 = arr.filter(greaterThan2); or
const output6 = arr.filter((x) => x > 2)

// console.log(output4);
// console.log(output5);
// console.log(output6);



//Here reduce comes to the picture

const output7 = arr.reduce(function (sum, curr) {
    sum = sum + curr;
    return sum;
}, 0);
// console.log(output7);

const max = arr.reduce(function(max,curr){
if(curr>max){
max = curr;
}
return max;
},0);
// console.log(max);

// some advance things 

const users = [
    {firstname : "suman", lastname : "kumar", age : "21"},
    {firstname : "rahul", lastname : "kumar", age : "24"},
    {firstname : "ram", lastname : "kumar", age : "24"},
    {firstname : "ravi", lastname : "kumar", age : "26"},
];

const name = users.map(x=>x.firstname + " " + x.lastname);
// console.log(name);

// how many user have particular age or how many people have their age
// [24:2, 21:1, 26:1]

const age = users.reduce(function(acc , curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else{
acc[curr.age] = 1;
    }
    return acc;
},{}); //initial value will be empty object

// console.log(age);



