const API_KEY = "b7c359cd1f92ed6d7ee8e52d508add9f";
const search = document.querySelector("#search");
const searchbtn = document.querySelector(".btn");
const weather = document.querySelector("#weather")
const form = document.querySelector("form")


const getdata = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
    
    
        if (data.cod == "404") {
            weather.innerHTML = `<h2>City not found</h2>`
            return
        }
        console.log(data);
        weather.innerHTML = `
    <div>
        <h2>Current Weather</h2>
        <h2>Temperature: ${data.main.temp}°C</h2>
        <h2>${data.weather[0].main}</h2>
        <h2>Humidity: ${data.main.humidity}</h2>
    </div>`
    } catch (error) {
        console.error(error)
        weather.innerHTML = `
        <h2>Unable to fetch data</h2>
        `
    }

}

searchbtn.addEventListener("click", () => {
   
    if(search.value.trim() !== ""){
        getdata(search.value);
    
        searchbtn.style.backgroundColor = "blue";
        searchbtn.style.color = "white";


        setTimeout(() => {
            searchbtn.style.backgroundColor = "";
            searchbtn.style.color = "";
        }, 100);
    }


    
})

form.addEventListener("submit", (e) => {
    getdata(search.value)
    e.preventDefault();
})