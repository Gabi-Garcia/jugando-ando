/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import Footer from '../../components/Footer/Footer';


const Home = () => {
   return(
    <>
        <div className='caja'>
          <h1>A JUGAR</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/tresEnRaya"><img className="card" src="/tres.png" alt="Tres en Línea" /><p className='home'>Tres en Línea</p></Link>
                </li>
                <li>
                  <Link to="/ahorcado"><img className="card" src="/video.png" alt="¿Cuánto sabes de Música?" /><p className='home'>¿Cuánto sabes de Música?</p></Link>
                </li>
                <li>
                  <Link to="/sudoku"><img className="card" src="/sudoku.png" alt="Sudoku" /><p className='home'>Sudoku</p></Link>
                </li>
                <li>
                  <Link to="/about"><img className="card" src="/conversacion.png" alt="Sudoku" /><p className='home'>About</p></Link>
                </li>
              </ul>
            </nav>
        {/* <footer>SOY EL FOOTER</footer> */}
        </div>
        <Footer />
    </>
        )
}

export default Home