async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = f657973902d4de7352a5a1992c082a82;  // Replace with your OpenWeather API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('City not found');
        }

        const weatherData = await response.json();
        displayWeather(weatherData);
    } catch (error) {
        document.getElementById('weather-result').innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weather-result');
    const { name, main, weather } = data;
    const weatherHtml = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${main.temp} °C</p>
        <p>Weather: ${weather[0].description}</p>
        <p>Humidity: ${main.humidity} %</p>
        <p>Pressure: ${main.pressure} hPa</p>
    `;
    weatherResult.innerHTML = weatherHtml;
}
