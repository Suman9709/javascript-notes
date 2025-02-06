const person={
firstname:"xyz",
lastname:"sharma",
fullname:function(){
   return this.firstname + " "+ this.lastname;
}
}

const member = {
    firstname:"abc",
    lastname:"kr"
}

let fullname = person.fullname.bind(member);
document.getElementById("demo").innerHTML = fullname();




