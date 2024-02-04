
const apiKey = "eda2f351c7ff150dcfc918a70804daea";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search_box input");
let searchBtn = document.querySelector(".search_box button");
let weatherIcon = document.querySelector(".weather_icon")

async function checkWeather(city){
    const respons = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await respons.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/sun.png"
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/cloud.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }

    document.querySelector(".weather").style.display ="block"


}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

