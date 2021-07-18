import axios from 'axios'
import { options } from './WeatherAPI.js'

const getData = async () => {
    try {
        const res = await axios(options)
        return(res.data)        
    } catch (error) {
        console.error(error)
    }
}

const handleData = async (date, dataType) => {
    try {
        const data = await getData()
        const day = date.getDate()
        for (let info of data.list){
            const weatherDay = new Date(info.dt_txt).getDate()
            if(day - weatherDay === 0) {
                switch (dataType){
                    case 'temperature':
                        const temperature = info.main.temp
                        console.log(temperature)
                        return(temperature.toFixed(0))
                    case 'description':    
                        const description = info.weather[0].description
                        console.log(description)
                        return(description)
                    case 'iconId':
                        const id = info.weather[0].id
                        console.log(id)
                        return(id)
                }
            }
        }
    } catch (error) {
        console.error(error)
    }

}

export default handleData