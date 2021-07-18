import React, { useState, useEffect } from 'react'
import './style.css'
import { weekDay } from '../../services/GetDayNTime'
import { options } from '../../services/WeatherAPI'
import WeatherIcon from 'react-icons-weather'
const axios = require("axios").default;

const Clock = () => {
    const [date, setDate] = useState(new Date())
    const today = weekDay(date.getDay())

    useEffect(() => {
        const timerID = setInterval(
            () => tick(),
            1000
            )

        return( function cleanUp(){
            clearInterval(timerID)
        }
            )    
        },[date])

        const tick = () => setDate(new Date())

        return(
            <>
                <h2>{today}</h2>
                <p>{date.toLocaleString('en')}</p>
            </>
        )
}

const TodayForecast = () => {
    const [temperature, setTemperature] = useState()
    const [description, setDescription] = useState()
    const [icon, setIcon] = useState()

    useEffect(() => {
        let temp
        let descript
        let id

        axios.request(options).then(function (response) {
            temp = response.data.list[0].main.temp
            descript = response.data.list[0].weather[0].description
            id = response.data.list[0].weather[0].id

            descript = descript.replace(descript[0], descript[0].toUpperCase())

            setTemperature(temp.toFixed(0))
            setDescription(descript)
            setIcon(id)
            
        }).catch(function (error) {
            console.error(error)
        });
        
    }, [])


    if (temperature && icon && description){
        return(
            <>
                <div className='today-forecast'>
                    <div className='today-card'>
                        <Clock />
                        <div className='icon'>
                        <WeatherIcon name='owm' iconId={icon.toString()}/>
                        </div>
                        <p> {`${temperature}ºC`}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </>
        )
    } else {
        return(
            <>
                <div className='today-forecast'>
                    <div className='today-card'>
                        <Clock />
                        <p>loading...</p>
                        <p>loading...</p>
                        <p>loading...</p>
                    </div>
                </div>
            </>
        )
    }

}

export default TodayForecast