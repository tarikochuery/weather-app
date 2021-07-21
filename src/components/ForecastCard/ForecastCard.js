import React, { useEffect, useState } from 'react'
import './style.css'
import { weekDay } from '../../services/GetDayNTime'
import WeatherIcon from 'react-icons-weather'
import { options, getCoord } from '../../services/WeatherAPI'
import axios from 'axios'


const ForecastCard = (props) => {
    const [data, setData] = useState([])

    const date = new Date()
    const desiredDay = date.getDate() + props.desiredDay
    const desiredDate = new Date()
    desiredDate.setDate(desiredDay)
    const day = weekDay(desiredDate.getDay())
    
    const compareDays = (info) => {
        for (const object of info){

            var dataDate = new Date(object.timestamp_local)
            dataDate = dataDate.getDate()
            
            if (dataDate === desiredDate.getDate()) {
                setData(object)
                break
            } 
        }
    }

    useEffect(() => {
        let ignore = false

        getCoord().then((position) => {
            options.params.lat = position[0]
            options.params.lon = position[1]
        }).then(() => {
            axios(options)
            .then((res) =>{
                if (!ignore) compareDays(res.data.data)
            })
            .catch((err) => console.log('An Error has occurred!' + err))
           
        })

        return () => ignore = true

    },[getCoord])


    if (data && data.length !== 0){
        // console.log(data)
        return(
            <>
                <div className='forecast-card'>
                    <h2>{day}</h2>
                    <p>{desiredDate.toLocaleDateString('en')}</p>
                    <div className='icon'>
                    <WeatherIcon name='owm' iconId={data.weather.code.toString()}/>
                    </div>
                    <p>{`${data.temp}ºC`}</p>
                    <p>{data.weather.description}</p>
                </div>
            </>
        )
    } else {
        return(
        <>
            <div className='forecast-card'>
                <h2>{day}</h2>
                <p>{desiredDate.toLocaleDateString('en')}</p>
                <p>loading...</p>
                <p>loading...</p>
                <p>loading...</p>
            </div>
        </>
        )
    }
}

export default ForecastCard