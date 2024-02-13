/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {
   return(
    <>
        <div className='caja'>
          <h1>A JUGAR</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/tresEnRaya"><img className="card" src="/src/assets/tres.png" alt="Tres en Línea" /><p>Tres en Línea</p></Link>
                </li>
                <li>
                  <Link to="/ahorcado"><img className="card" src="/src/assets/video.png" alt="¿Cuánto sabes de Música?" /><p>¿Cuánto sabes de Música?</p></Link>
                </li>
                <li>
                  <Link to="/sudoku"><img className="card" src="/src/assets/sudoku.png" alt="Sudoku" /><p>Sudoku</p></Link>
                </li>
              </ul>
            </nav>
        <footer>SOY EL FOOTER</footer>
        </div>
    </>
        )
}

export default Home