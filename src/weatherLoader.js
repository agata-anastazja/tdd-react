import axios from 'axios';
import parse from './parser'


export const getWeather  = () => {
    const response = callWeatherApi()
    return parse(response)
}

const callWeatherApi = () => {
    const url = "api.openweathermap.org/data/2.5/weather?q=London&appid=15f583b68bbdc5ae8a0f713290266145"
    const response =  axios.get(url)
    
    return response
}