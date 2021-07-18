import React, { useEffect, useState } from 'react';
import ForecastCard from '../ForecastCard/ForecastCard';
import Header from '../Header/Header';
import TodayForecast from '../TodayForecast/TodayForecast';
import './style.css'

function App() {
  const [time, setTime] = useState(new Date().getHours())
  const [bg, setBg] = useState('')

  const changeBg = (time) => {
    if (time >= 5 && time <= 8){
      setBg(`rising`)
    } else if (time >= 8 && time <= 18) {
      setBg(`day`)
    } else if (time >= 19 || time <= 4) {
      setBg(`night`)
    }
    console.log(bg)
  }

  const tick = () => setTime(new Date().getHours())

  useEffect(() => {
    const timerID = setInterval(
      tick(), 
      60000)
    changeBg(time)
    return(
      () => clearInterval(timerID)
    )
  }, [time])

  return (
    <div className={`container ${bg}`}>
      <Header />
      <TodayForecast />
      <ForecastCard desiredDay={1} />
      <ForecastCard desiredDay={2} />
      <ForecastCard desiredDay={3} />
      <ForecastCard desiredDay={4} />
    </div>
  );
}

export default App;
