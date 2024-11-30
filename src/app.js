import { getLocation, currentLocation } from "./api/fetch_Geolocation.js";
import { location0LocalTime } from "./components/HTML_address.js";
import { getWeather } from "./api/fetch_Weather.js";

// Recovers your current coordenates from the Geolocation API
async function fetchLocation() {
  const positionObject = await getLocation()
  currentLocation.latitude = positionObject.coords.latitude
  currentLocation.longitude = positionObject.coords.longitude
  //currentLocation.time = positionObject.timestamp
}

// Sends your current coordenates to recover the weather
async function fetchWeather(location) {
  const weatherObject = await getWeather(location)
  currentLocation.currentWeather = weatherObject.current.weather[0].main
  currentLocation.weatherDescription = weatherObject.current.weather[0].description
  currentLocation.time = weatherObject.current.dt
  currentLocation.sunrise = weatherObject.current.sunrise
  currentLocation.sunset = weatherObject.current.sunset
  //console.log(weatherObject)
}

async function initializeApp() {
  await fetchLocation()
  await fetchWeather(currentLocation)
  console.log(currentLocation)
}

initializeApp()

