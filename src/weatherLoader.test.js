import { getWeather } from  './weatherLoader';

import { weatherDataJson } from './weatherConstants'

import axios from 'axios';
import parse from './parser'
jest.mock('./parser'); // this happens automatically with automocking
jest.mock('axios')
test('loads temperature from file ', () => {
    
  axios.get.mockReturnValue(weatherDataJson) 
  parse.mockImplementation((_) =>  ({"temp": "35"}));
  const result = getWeather()
  // The mock function was called at least once with the specified args
    // expect(axios.get).toHaveBeenCalledWith("api.openweathermap.org/data/2.5/weather?q=London&appid=15f583b68bbdc5ae8a0f713290266145");
    expect(parse).toHaveBeenCalled() //With(weatherDataJson)
    expect(result).toEqual({"temp": "35"})

})