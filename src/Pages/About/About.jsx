/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import React from 'react'
import './About.css'
import MyButton from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer';


const About = () => {
  return (
    <>
      <div className='caja'> 
        <div className='about'>
          <h2>
            Te damos la bienvenida a nuestro espacio de juegos y aprendizaje
          </h2>
          <p className='textoAbout'>
          Nuestra página web de juegos tiene algo para todos. ¡Así que adelante,
          explora y disfruta de la experiencia de juego que hemos preparado para ti!
            ¿Eres fanático del clásico Tres en Raya? Desafía a tus amigos en este juego de estrategia que nunca 
            pasa de moda.
            Si amas la música, nuestro juego de adivinanzas de palabras te llevará a un viaje melódico.
            Pon a prueba tus conocimientos y adivina palabras aleatorias relacionadas con ese fascinante mundo
            Y para los amantes de los desafíos lógicos, ofrecemos el clásico Sudoku. Pon a prueba tu mente
            y desarrolla tus habilidades de 
            resolución de problemas mientras te sumerges en este juego numérico fascinante.
          </p>
        </div>
        <MyButton><Link to="/Home">IR JUEGOS</Link></MyButton>
      <div className='footerAbout'>
      <Footer />
      </div>
      </div>
    </>
  )
}

export default About