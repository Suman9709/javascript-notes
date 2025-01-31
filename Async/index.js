/*
what is async? -> It is a keyword i.e is used to create async function, and it always return a promise
what is await? -> It will only used inside an async function it is used instead of promise.then
how async await work behind the scene?
example of using async/await
error handling
interviews
Async Await vs promise.then/ .catch


// Async and await combo is used to handle promises
// when we use async await js engine waits to resolve the promise it do not move to next line
*/

//create a promise 
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise ressolved value!!")
    }, 10000);
});


const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise ressolved value2!!")
    }, 5000);
});


// async function getData(){
//    // return "Hello India" // this function automatically wrap the value in to the promise and return a value
//    return p;
// }


// const dataPromise  = getData(); // this return a promise
// console.log(dataPromise);
// dataPromise.then(res=>console.log(res)); // hello india

async function handlePromise() {
    console.log("hello india");

    const val = await p2; // insted of p.then
    console.log("Good Day");
    console.log(val);


    const val2 = await p; // insted of p.then
    console.log("Good Day");
    console.log(val2);

}
// handlePromise();



const API_URL = "https://api.github.com/users/Suman9709"
async function user() {
    try {
        const data = await fetch(API_URL); // this fetch retures a promise
   //fetch()=> Response.json() =>jsonValue // this is again a promise

  const jsonval =  await data.json();
  console.log(jsonval);
  
    } catch (error) {
     console.log(error);
        
    }
}
user();




