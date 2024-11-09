/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route,Routes,  Navigate } from 'react-router-dom';
import './App.css';

import UserProfile from'./components/LocalStorage/UserProfile';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import TresEnRaya from './Pages/TresEnRaya/TresEnRaya';
import Ahorcado from './Pages/Ahorcado/Ahorcado';
import Sudoku from './Pages/Sudoku/Sudoku';
import NotFound from './Pages/NotFound/NotFound';


const isAuthenticated = localStorage.getItem("userInfo") !== null; 

const App = () => {
  return (
  
      <Router>
          <Routes>
              <Route path="/" element={<UserProfile />} />
              <Route path="/Home" element={<Home />} />
              <Route path='/About' element={<About />} />
             {/* Rutas protegidas */}
        <Route 
          path="/TresEnRaya" 
          element={isAuthenticated ? <TresEnRaya /> : <Navigate to="/404" />} 
        />
        <Route 
          path="/Ahorcado" 
          element={isAuthenticated ? <Ahorcado /> : <Navigate to="/404" />} 
        />
        <Route 
          path="/Sudoku" 
          element={isAuthenticated ? <Sudoku /> : <Navigate to="/404" />} 
        />

        {/* Ruta 404 */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  );
};

export default App;