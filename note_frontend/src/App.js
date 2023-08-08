import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import Navbarcomp from './components/Navbarcomp/Navbarcomp';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbarcomp/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/notes' element={"notes page"}/>
        <Route path='/login' element={"login page"}/>
        <Route path='/signup' element={"signup page"}/>


      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
