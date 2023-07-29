
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom'
import Login from './components/Loign';
import Signup from './components/Signup';
import Company from './components/Company';



function App() {
  return (
    <>
      <Routes>
       
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/company' element={<Company />} />
      </Routes>
    </>
  );
}

export default App;
