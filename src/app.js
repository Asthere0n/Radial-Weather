import { getLocation, currentLocation } from "./api/fetch_Geolocation.js";
import { getWeather } from "./api/fetch_Weather.js";
import { printIntoHTML } from "./components/display_HTML.js";

// Recovers your current coordenates from the Geolocation API
async function fetchLocation() {
  const positionObject = await getLocation()
  currentLocation.latitude = positionObject.coords.latitude
  currentLocation.longitude = positionObject.coords.longitude
  currentLocation.time = positionObject.timestamp
}

// Sends your current coordenates to recover the weather
async function fetchWeather(location) {
  const weatherObject = await getWeather(location)
  currentLocation.weather = weatherObject.current
  //.current.weather[0].main
  //currentLocation.weatherID = weatherObject.current.weather.id
  //currentLocation.weatherDescription = weatherObject.current.weather[0].description
  //currentLocation.time = weatherObject.current.dt
  //currentLocation.sunrise = weatherObject.current.sunrise
  //currentLocation.sunset = weatherObject.current.sunset
}

async function initializeApp() {
  await fetchLocation()
  await fetchWeather(currentLocation)
  printIntoHTML(0, currentLocation)
  console.log(currentLocation)

}

initializeApp()

