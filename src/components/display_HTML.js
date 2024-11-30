import {location0LocalTime} from "./HTML_address.js"
import { currentLocation } from "../api/fetch_Geolocation.js"

function printIntoHTML(position=0, LocationObject){
    const localtime = new Date (LocationObject.time)
location0LocalTime.innerHTML =  `${localtime.getUTCHours()}:${localtime.getUTCMinutes()}`
}

export {printIntoHTML}