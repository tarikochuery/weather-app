export var options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
  params: {q: 'São Paulo, br', units: 'metric'},
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_WEATHER_KEY,
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
  }
};
