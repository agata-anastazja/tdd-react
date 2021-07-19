import './App.css';
import  * as weatherLoader from './weatherLoader'; 

function App() {
  return (
    <div className="App">
      <span data-testid="temp">{weatherLoader.getWeather().temp}</span>
    </div>
  );
}

export default App;
