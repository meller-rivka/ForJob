import './App.css'
import {Routes , Route} from 'react-router-dom';
import Home from './components/Home';
import IndicatorStepper from './components/Steps'
function App() {

  return (
    <div className='App'>
      <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"steps"} element={<IndicatorStepper/>}/>
      </Routes>

      
    </div>
    
  )
}

export default App
