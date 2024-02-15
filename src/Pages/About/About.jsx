/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import React from 'react'
import './About.css'
import MyButton from '../../components/Button/Button'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    
    <div className='caja'>
      <div className='about'>
          <h2>
          Te damos la bienvenida a nuestro espacio de juegos y aprendizaje. 
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam iure quis voluptas 
            exercitationem! Doloribus nesciunt, dolores,
            cum perferendis suscipit asperiores corrupti dignissimos enim natus deserunt sit,
              modi aut minima aliquid!
          </p>
      </div>
    </div>
    <MyButton><Link to="/Home">IR JUEGOS</Link></MyButton>
    
    </>
  )
}

export default About