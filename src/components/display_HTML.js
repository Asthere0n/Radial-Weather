import {
  location0LocalTime,
  location0Temperature,
  location0WeatherIcon,
} from "./HTML_address.js";

function getWeatherIcon(position, LocationObject) {
    if (LocationObject.time > LocationObject.sunset) {
      LocationObject.isDay = false;
    } else {
      LocationObject.isDay = true;
    }
    const icon = LocationObject.weather.icon
    const HTMLicon = location0WeatherIcon
    HTMLicon.src = icon
    // switch (icon) {
    //   case id < 199:
    //     LocationObject.isDay
    //       ? (icon.src = URL("./images/icon/weather/d_clear_sky.png"))
    //       : (icon.src = URL("./images/icon/weather/n_clear_sky.png"));
    //}
  }

function printIntoHTML(position = 0, LocationObject) {
  //local time
  const localtime = new Date(LocationObject.time);
  location0LocalTime.innerHTML = `${localtime.getUTCHours()}:${localtime.getUTCMinutes()}`;

  //temperature
  console.log(LocationObject.weather);
  const temperature = LocationObject.weather.temp;
  location0Temperature.innerHTML = `${temperature} °C`;

  //Weather Icon
  getWeatherIcon(0, LocationObject)
}



export { printIntoHTML };
