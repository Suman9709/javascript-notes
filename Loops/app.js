const birds = ["Parrot", "flacon", "owl"];
for(const bird of birds){
    // console.log(bird);   
}

// double each element of the array
function double(number){
    return number*number;
}

const number = [5,2,3,4,6]
const doubled = number.map(double);
console.log(doubled);
// map() calls the function once for each item in the array, passing in the item. It then adds the return value from each function call to a new array, and finally returns the new array.


// fillter the name of city whose length is greater than 5

function longcity(city){
    return city.length>5;
}

const city= ["xyz","pqr","delhi","Mumbai","London"];
const islonger = city.filter(longcity);
console.log(islonger);


// Sometimes you'll want to create a new array containing only the items in the original array that match some test. You can do that using filter().



