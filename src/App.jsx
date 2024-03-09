/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css'

import UserProfile from'./components/LocalStorage/UserProfile';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import TresEnRaya from './Pages/TresEnRaya/TresEnRaya';
import Ahorcado from './Pages/Ahorcado/Ahorcado';
import Sudoku from './Pages/Sudoku/Sudoku';

const App = () => {
  return (
    <>
    <div className='imagen'>
      <Router>
          <Routes>
              <Route path="/" element={<UserProfile />} />
              <Route path="/Home" element={<Home />} />
              <Route path='/About' element={<About />} />
              <Route path="/TresEnRaya" element={<TresEnRaya />} />
              <Route path="/Ahorcado" element={<Ahorcado />} />
              <Route path="/Sudoku" element={<Sudoku />} />
          </Routes>
      </Router>
      </div>
    </>
  );
};

export default App;

