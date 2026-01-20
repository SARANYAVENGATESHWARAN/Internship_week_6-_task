import { fetchCurrentWeather, fetchForecast } from "./api.js";
import { saveUserPreferences, loadUserPreferences } from "./storage.js";

/* DOM ELEMENTS */
const cityDropdown = document.getElementById("cityDropdown");
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");

/* LOADING */
function showLoading() {
  weatherResult.innerHTML = "<p>⏳ Loading weather data...</p>";
}

/* ERROR */
function showError(message) {
  weatherResult.innerHTML = `<p style="color:red;">❌ ${message}</p>`;
}

/* DISPLAY CURRENT WEATHER */
function displayCurrentWeather(weather) {
  weatherResult.innerHTML = `
    <h2>${weather.city}</h2>
    <img src="https://openweathermap.org/img/wn/${weather.icon}@2x.png">
    <p><strong>${weather.temperature}°C</strong></p>
    <p>${weather.description}</p>
    <p>💧 Humidity: ${weather.humidity}%</p>
    <p>🌬 Wind Speed: ${weather.windSpeed} m/s</p>
  `;
}

/* DISPLAY FORECAST */
function displayForecast(forecastData) {
  const days = forecastData.filter(item =>
    item.dt_txt.includes("12:00:00")
  );

  let html = "<h3>5-Day Forecast</h3>";

  days.forEach(day => {
    html += `
      <p>
        📅 ${new Date(day.dt_txt).toDateString()} |
        🌡 ${day.main.temp}°C |
        ${day.weather[0].description}
      </p>
    `;
  });

  weatherResult.innerHTML += html;
}

/* MAIN FUNCTION */
async function getWeather(city) {
  try {
    showLoading();
    const weather = await fetchCurrentWeather(city);
    const forecast = await fetchForecast(city);

    displayCurrentWeather(weather);
    displayForecast(forecast);
    saveUserPreferences(city);
  } catch (error) {
    showError(error.message);
  }
}

/* EVENTS */
searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim() || cityDropdown.value.trim();
  if (!city) return showError("Please enter a city");
  getWeather(city);
});

/* LOAD SAVED CITY */
const prefs = loadUserPreferences();
getWeather(prefs.lastCity);
