const characters = ["a talking cat", "a dancing banana", "a robot dog", "a sleepy dragon", "a flying potato"];
const places = ["on Mars", "in a haunted house", "inside a giant watermelon", "at the top of a mountain", "inside a video game"];
const actions = ["started singing opera", "accidentally turned invisible", "built a spaceship from candy", "got stuck in a time loop", "became the king of ducks"];
const endings = ["and everyone laughed.", "but then it started raining chocolate!", "and suddenly, it sneezed rainbows!", "but then it found a treasure map!", "and they all danced together!"];



function  storygenerator(){
    const character = characters[Math.floor(Math.random() * characters.length)]
    const palce = places[Math.floor(Math.random() * places.length)]
    const action = actions[Math.floor(Math.random() * actions.length)]
    const ending = endings[Math.floor(Math.random() * endings.length)]


    return `one day ${character} was ${palce} when it ${action} ${ending}`
}

const input = document.createElement("input");
input.placeholder = "Enter the name ";
document.body.appendChild(input);

const button = document.createElement("button");
button.innerText="search";
// button.setAttribute("generatorbtn");
document.body.appendChild(button);


const story = document.createElement("p");
story.style.fontSize = "18px";
story.style.marginTop = "20px";

document.body.appendChild(story);



button.addEventListener("click", ()=>{
    const charactername = input.value.trim(); // it gets the character name from the input box
    if(charactername){
        story.innerText = storygenerator(charactername)
    }
    else{
        story.innerText = "Please enter the character name"
    }
})


