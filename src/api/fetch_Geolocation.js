//currentLocation is an object that holds all the information of your current
//position: Coordinates, TimeStamp and Weather.
let currentLocation = {};

const options = {
  enableHighAccuracy : false,
}

function getLocation(){
  return new Promise ((resolve, reject)=>{
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position), 
      (error) => reject(error),
      options
    )
  })
}

export { getLocation, currentLocation };