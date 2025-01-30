function x(){
    var  i = 1;

    setTimeout(function(){
        // console.log(i);
        
    }, 3000)
    console.log("Hello Suman"); // this will print first after 3 sec i print
    
}
x() // prints i = 1 after 3sec

// here the setTimeout take this function and store it into a place and attach a timer to it
// and the javascript proceed  and when the timer is expired put it again to the call stack and run it


function a(){
    for(let j =1; j<=5;j++){
        setTimeout(function(){
            console.log(j);
            
        },j*1000)
    }
}
//a(); // prints 1,2,3,4,5 after 1,2,3,4,5 sec

// do the same using var data type

function a(){
    for(var j =1; j<=5;j++){
        function close(j){
            setTimeout(function(){
                console.log(j);
                
            },j*1000)
        }
        close(j)
    }
}
a();