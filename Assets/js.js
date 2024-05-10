const apiKey = '{{4f48368dfd4a856647c674a939b75fdf}};'

const weatherContainer = document.getElementById("weather");
const city = document.getElementById("city");
const units = 'imperial'; 
let temperatureSymobol = units == 'imperial' ? "°F": "°C" ;

async function fetchWeather() {
    try {
        weatherContainer.innerHTML = '';
        city.innerHTML = '';

        const cnt = 10;
        const cityInputtedByUser = document.getElementById('cityInput').value;

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={4f48368dfd4a856647c674a939b75fdf}`;

        const response = await fetch(apiUrl);
        const data = await response.json();
       
        data.list.forEach(containWeatherData => {
            const hourlyWeatherDataDiv = createWeatherDescription(containWeatherData);
            weatherContainer.appendChild(containWeatherData);
        });
        
        city.innerHTML = `Hourly Weather for ${data.city.name}`;

    }}
function convertToLocalTime(dt) {

    const date = new Date(dt * 1000);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
 
    return `${year}-${month}-${day}`;
}
function createWeatherData(weatherData) {
    const { main, dt } = weatherData;

    const description = document.createElement("div");
 
    description.innerHTML = `
        <div class = "weather_data">${main.temp}${temperatureSymobol} - ${convertedDateAndTime.substring(10)} - ${convertedDateAndTime.substring(5, 10)} </div>
    `;
    return description;
}