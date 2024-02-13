/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import TresEnRaya from './components/TresEnRaya/TresEnRaya';
import Ahorcado from './components/Ahorcado/Ahorcado';
import Sudoku from './components/Sudoku/Sudoku';
import UserProfile from'./components/LocalStorage/UserProfile';
import Home from './Pages/Home';
import './App.css'

const App = () => {
  return (
    <>
    <div className='imagen'>
      <Router>
          <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<UserProfile />} />
              <Route path="/tresEnRaya" element={<TresEnRaya />} />
              <Route path="/ahorcado" element={<Ahorcado />} />
              <Route path="/sudoku" element={<Sudoku />} />
          </Routes>
      </Router>
      </div>
    </>
  );
};

export default App;

