/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {
   return(
    <>
       <h1>JUEGOS</h1>
         <nav>
          <ul>
            <li>
              <Link to="/tresEnRaya">Tres en Raya</Link>
            </li>
            <li>
              <Link to="/ahorcado">Ahorcado</Link>
            </li>
            <li>
              <Link to="/sudoku">Sudoku</Link>
            </li>
          </ul>
        </nav>
        </>
   )
}

export default Home