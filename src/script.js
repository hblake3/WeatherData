const apiKey = '098bfacc3071ccf447cafa4e8af2fb26';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const weatherImageElement = document.getElementById('weatherImage');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
    else{
        locationInput.placeholder = 'Enter a location';
    }
})

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°F`;
            descriptionElement.textContent = data.weather[0].description;
            weatherImageElement.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            document.getElementById("weatherInfo").style = "display: block";
        })
        .catch(error => {
            locationElement.textContent = 'Error fetching weather data:', error;
        });
}

// function buttonClicked(){
//     document.getElementById("weatherInfo").style = "display: block";
// }