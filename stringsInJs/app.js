const str = "My name is Suman Kumar living in dehradun studing B.Tech"


if(str.includes("an")){
    console.log("found an");  
}


if(str.endsWith("Tech")){
    console.log("found Tech");   
}

if(str.startsWith("My")){
    console.log("found My");
    
}

console.log(str.indexOf("Kumar"))


const fstocc = str.indexOf("Kumar");
const secocc = str.indexOf("Kumar",fstocc+1);
console.log(fstocc);
console.log(secocc);

//Syntax of if else condition ? run this code: run this code
const greeting = isBirthday?"Happy Birthday":"Good morning"
console.log(greeting);

