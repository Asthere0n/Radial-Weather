import { getLocation } from "./api/fetch_Geolocation.js";
import { location0LocalTime } from "./components/HTML_address.js";

let currentLocation = {};

getLocation()
  .then((data) => {
    currentLocation = data.position.coords;
    const currentTime = new Date(data.position.timestamp);
    location0LocalTime.innerHTML = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
  })
  .then(() => {
    console.log("completed");
    console.log(currentLocation);
  })
  .catch((error) => console.error(error));
