const label = document.createElement("label")
label.innerText="Select background"
document.body.appendChild(label)


const select = document.createElement("select")
document.body.appendChild(select)


const option1 = document.createElement("option")
option1.innerText="choose BG"
select.appendChild(option1)

const option2 = document.createElement("option")
option2.innerText="Black"
select.appendChild(option2)

const option3 = document.createElement("option")
option3.innerText="Red"
select.appendChild(option3)


const option4 = document.createElement("option")
option4.innerText="Green"
select.appendChild(option4)


const para = document.createElement("p");
para.innerHTML = "let's see the background color"

document.body.appendChild(para)

select.addEventListener("change", ()=>{
    if(select.value === 'Black'){
        document.body.style.backgroundColor = 'black'
        document.body.style.color = "white"
        para.innerHTML = `This is ${select.value}`
    }

    if(select.value === 'Red'){
        document.body.style.backgroundColor = 'red'
        document.body.style.color = "white"
        para.innerHTML = `This is ${select.value}`
    }

    if(select.value === "Green"){
        document.body.style.backgroundColor = "green"
        document.body.style.color = "white"
        para.innerHTML = `This is ${select.value}`
    }

})