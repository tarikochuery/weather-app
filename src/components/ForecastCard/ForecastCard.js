import React, { useEffect, useState } from 'react'
import './style.css'
import { weekDay } from '../../services/GetDayNTime'
import handleData from '../../services/LocateWeather'
import WeatherIcon from 'react-icons-weather'


const ForecastCard = (props) => {
    const [temperature, setTemperature] = useState()
    const [description, setDescription] = useState()
    const [icon, setIcon] = useState()

    const date = new Date()
    const desiredDay = date.getDate() + props.desiredDay
    const desiredDate = new Date()
    desiredDate.setDate(desiredDay)
    const day = weekDay(desiredDate.getDay())

    const changeTemperature = async (date) => {
        const temp = await handleData(date, 'temperature')
        setTemperature(temp)
    }

    const changeDescription = async (date) => {
        const descript = await handleData(date, 'description')
        setDescription(descript)
    }

    const changeIconId = async (date) => {
        const iconId = await handleData(date, 'iconId')
        setIcon(iconId)
    }

    useEffect(() => {
         changeTemperature(desiredDate)
         changeDescription(desiredDate)
         changeIconId(desiredDate)
    }, [])

    if (temperature && description && icon){
        return(
            <>
                <div className='forecast-card'>
                    <h2>{day}</h2>
                    <p>{desiredDate.toLocaleDateString('en')}</p>
                    <div className='icon'>
                    <WeatherIcon name='owm' iconId={icon.toString()}/>
                    </div>
                    <p>{`${temperature}ºC`}</p>
                    <p>{description}</p>
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