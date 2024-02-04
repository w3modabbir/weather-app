
const apiKey = "eda2f351c7ff150dcfc918a70804daea";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=dhaka";

async function checkWeather(){
    const respons = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await respons.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = data.main.temp
    document.querySelector(".humidity").innerHTML = data.main.humidity
    document.querySelector(".wind").innerHTML = data.wind.speed

    // console.log(data.name);
    // console.log(data.main.temp);
    // console.log(data.main.humidity);
    // console.log(data.wind.speed
    //     );

}

checkWeather()