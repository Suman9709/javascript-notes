const category = document.querySelector("#category");

category.addEventListener("click", (e) => {
    console.log(e.target.innerText);
    // const cat = e.target.innerText
    window.location.href = `/${e.target.innerText}`

});
