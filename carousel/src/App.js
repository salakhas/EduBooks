
import './App.css';
import Slider from './components/Slider';
import { SliderData } from './components/Sliderdata'

function App() {
  return (
      <Slider slides={SliderData}/>
  );
}

export default App;
