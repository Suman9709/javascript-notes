const output = document.getElementById("output");

function handleClick(e){
    output.textContent += `you have clicked ${e.currentTarget.tagName} element \n`; 
}

const conatiner = document.getElementById("container");
// conatiner.addEventListener("click", handleClick)
// You'll see that the parent fires a click event when the user clicks the button:


// const button = document.querySelector("button")
// document.body.addEventListener("click", handleClick);
// conatiner.addEventListener("click", handleClick);
// button.addEventListener("click", handleClick);

// he click on the button fires first.
// followed by the click on its parent (the <div> element).
// followed by the click on the <div> element's parent (the <body> element).


const btn = document.querySelector("button")

const box = document.querySelector("div");

const video = document.querySelector("video");


btn.addEventListener("click", ()=>box.classList.remove("hidden"));
video.addEventListener("click", (e)=>{
e.stopPropagation();
    video.play()

});
box.addEventListener("click", ()=>box.classList.add("hidden"))

// one on the <button>, which shows the <div> that contains the <video>.
// one on the <video>, which starts playing the video.
// one on the <div>, which hides the video.