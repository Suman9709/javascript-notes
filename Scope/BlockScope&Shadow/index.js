{
    //this is a block
    //block is also know as compound statement
    /*
    we group multiple statement s together in a block so that we can use it
    where javascript expect one statement
    */
}

if (true) {

    //compund statement
    let a = 10
    console.log(a);
}

// block scope
// all variable and function that can be accessed inside th eblock

var c = 100;//shadowing variable this a is shadowed
{
    var c = 30; // it has global scope it can be accessed outside this block
    let a = 10; // it cannot be accesse outside from the block
    const b = 20; // it cannot be accessed outside the block

    console.log(a); //10
    console.log(b); //20
    console.log(c); //30
}
//console.log(c); //30
//console.log(a); //RefrenceError
//console.log(b); // not execute
console.log(c); //30  as both c are global scoped and first  c = 100 then it changes to 30

//lexical scope means one inside another each block has it's own scope
const a =10;
{
    const a =100;
    {
        const a  = 1000;
        console.log(a); //1000
        
    }
    console.log(a); //100
    
}
console.log(a); //10


