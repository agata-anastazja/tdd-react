import { render } from '@testing-library/react';
import App from './App';
import  * as weatherLoader from './weatherLoader';

jest.mock('./weatherLoader.js');


test('renders learn react link', () => {
  const resp = {"temp": "36"}
  weatherLoader.getWeather.mockReturnValue(resp);
  const {getByTestId} = render(<App />)
  

  expect(getByTestId("temp")).toHaveTextContent("36");
});

test('when display temp button clicked, display temp', () => {
  
  
  const resp = {"temp": "36"}
  weatherLoader.getWeather.mockReturnValue(resp);
  const {getByTestId } = render(<App />)
  

  expect(getByTestId("temp")).toHaveTextContent("36");
});