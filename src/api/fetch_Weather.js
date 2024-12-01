import { weatherAPI_Key } from "./API_Key.js";

export async function getWeather(position) {
  const weatherAPI_URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${position.latitude}&lon=${position.longitude}&exclude=hourly,minutely&appid=${weatherAPI_Key}&units=metric`;
  console.log(weatherAPI_URL);
  const response = await fetch(weatherAPI_URL).catch((error) =>
    console.error("Error fetching the weather data: ", error)
  );
  const weatherData = await response.json();
  console.log(weatherData)
  return weatherData;
}
