import { getLocation } from "./api/fetch_Geolocation.js";
import { location0LocalTime } from "./components/HTML_address.js";
import { getWeather } from "./api/fetch_Weather.js";

let currentLocation = {};
let currentTime
let currentWeather;

async function fetchingData() {
  await getLocation()
    .then((data) => {
      currentLocation.latitude = data.position.coords.latitude;
      currentLocation.longitude = data.position.coords.longitude;

      currentTime = new Date(data.position.timestamp);
      location0LocalTime.innerHTML = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
    })
    .then(() => {
      currentWeather = getWeather(currentLocation);
    })
    .then(() => {
      console.log("completed");
      console.log(currentLocation);
      console.log(currentWeather);
    });
  //.catch((error) => console.error(error));
}

fetchingData();
