const API_KEY = "5f63f4c58803556d8fbdc56a7be4ded4";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

/* CURRENT WEATHER */
export async function fetchCurrentWeather(city) {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  const data = await response.json();

  return {
    city: data.name,
    temperature: data.main.temp,
    description: data.weather[0].description,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    icon: data.weather[0].icon
  };
}

/* 5-DAY FORECAST */
export async function fetchForecast(city) {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Forecast not available");
  }

  const data = await response.json();
  return data.list;
}
