import {weatherAPI_Key} from "./API_Key.js"

export async function getWeather(data){
    const weatherAPI_URL = `https://api.openweathermap.org/data/3.0/onecall?lat={${data.latitude}}&lon={${data.longitude}}&exclude={hourly,daily,minutely}&appid={${weatherAPI_Key}}`
    console.log(weatherAPI_URL)
    fetch(weatherAPI_URL)
    .then((Response, error)=>{
        console.log(Response)
        if (!Response.ok){
            throw new Error (error)
        } else {
            console.log(Response)
            return Response
        }
    })
    .catch(error => console.error("Error fetching the weather data: ",error))
    }