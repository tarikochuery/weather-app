import React, { useState, useEffect } from 'react'
import './style.css'
import { weekDay } from '../../services/GetDayNTime'
import  { getCoord, options }  from '../../services/WeatherAPI'
import WeatherIcon from 'react-icons-weather'
import axios from 'axios'


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
    const [data, setData] = useState()

    useEffect(() => {

        getCoord()
        .then((position) => {
            options.params.lat = position[0]
            options.params.lon = position[1]
        })
        .then(() => {
            axios(options).then((res) => {
                            console.log('Requisição Feita')
                            setData(res.data.data[0])
                           })
                           .catch((err) => console.error('Ops! An error has occured!' + err))
        })
        
        },[])
        
    if (data){
        return(
            <>
                <div className='today-forecast'>
                    <div className='today-card'>
                        <Clock />
                        <div className='icon'>
                        <WeatherIcon name='owm' iconId={data.weather.code.toString()}/>
                        </div>
                        <p> {`${data.temp}ºC`}</p>
                        <p>{data.weather.description}</p>
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