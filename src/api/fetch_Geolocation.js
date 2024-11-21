

async function getLocation() {
    return new Promise ((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
            resolve({position})})
    }, GPSShowError);
  
}

function GPSShowError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.error("Allow your browser location");
      break;
    case error.POSITION_UNAVAILABLE:
      console.error("Location is unavailable");
      break;
    case error.TIMEOUT:
      console.error("The request timed out");
      break;
    case error.UNKNOWN:
      console.error("Unknown error");
      break;
  }
}

export { getLocation };
