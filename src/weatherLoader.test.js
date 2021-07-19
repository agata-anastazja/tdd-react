import { getWeather, callWeatherApi } from  './weatherLoader';

import { weatherDataJson } from './weatherConstants'

import axios from 'axios';
jest.mock('axios')
test('loads temperature from file ', () => {
    
  axios.get.mockReturnValue(weatherDataJson) 
  const parserMock = jest.fn();
  parserMock.mockReturnValue({"temp": "35"}) 
  const result = getWeather(parserMock)
  // The mock function was called at least once with the specified args
    // expect(axios.get).toHaveBeenCalledWith("api.openweathermap.org/data/2.5/weather?q=London&appid=15f583b68bbdc5ae8a0f713290266145");
    expect(parserMock).toHaveBeenCalled() //With(weatherDataJson)
    expect(result).toEqual({"temp": "35"})

})