const inputboxcity = document.querySelector('.input-box');
const searchbuttn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const tempshow = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const mintemp = document.querySelector('.mintext');
const maxtemp = document.querySelector('.maxtext');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');



let weather_details;

console.log("run");
location_not_found.style.display = "none";


async function checkwheater(city){
    const apikey = "c5aaf0554b36878166066ca2a7b070b1";
    const urltext = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    console.log(urltext);
    weather_body.style.display = "flex";
    weather_details = await fetch(`${urltext}`).then (response => response.json()); // if no await it will show undefined
    tempshow.innerHTML = `${Math.round(weather_details.main.temp - 273.15)}°C`;
    humidity.innerText = `${weather_details.main.humidity}`;
    wind_speed.innerHTML = `${weather_details.wind.speed}`;
    description.innerHTML = `${weather_details.weather[0].main}`;
    mintemp.innerHTML = `${weather_details.main.temp_min}`;
    maxtemp.innerHTML = `${weather_details.main.temp_max}`;
    console.log(weather_details.main.temp_min);

    if(weather_details.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
   
switch(weather_details.weather[0].main){
    case 'Clouds':
        weather_img.src = "assets/cloud.png";
        break;
    case 'Clear':
        weather_img.src = "assets/clear.png";
        break;
    case 'Rain':
        weather_img.src = "assets/rain.png";
        break;
    case 'Mist':
        weather_img.src = "assets/mist.png";
        break;
    case 'Snow':
        weather_img.src = "assets/snow.png";
        break;
    case 'Haze':
        weather_img.src = "assets/haze.png";
        break;
}
}
searchbuttn.addEventListener('click' ,()=> {
    checkwheater(inputboxcity.value);
});