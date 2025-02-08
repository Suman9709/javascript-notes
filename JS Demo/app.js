const h12 = document.querySelector(".h12");

h12.innerHTML=("Welcome to the World of JavaScript")

const button = document.createElement("button")
button.innerText= "Clickme"
button.classList.add("my-btn");


button.addEventListener("click", ()=>{
    const h1 = document.createElement("h1");
   h1.innerHTML= "Button clicked"
   document.body.appendChild(h1);
})

document.body.appendChild(button)
