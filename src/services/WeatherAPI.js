// -------------------------------REAL API----------------------------------------------------
// -----------------------USE AFTER ALL TESTING OK--------------------------------------------
const options = {
  method: 'GET',
  url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly/data',
  params: {
    lat: '0',
    lon: '0',
    units: 'metric',
    lang: 'pt'
  },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_WEATHER_KEY,
    'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
  }
}

const getCoord = () => {
 return new Promise((resolve, reject) => {
   const onSuccess = (position) => {
     const latitude = position.coords.latitude
     const longitude = position.coords.longitude
     const pos = [latitude, longitude]

     resolve(pos)
   }

   const onError = () => {
     console.log('Cant\'t get location info.')
     reject()
   }

   navigator.geolocation.getCurrentPosition(onSuccess, onError)
 })
}

export { getCoord, options }