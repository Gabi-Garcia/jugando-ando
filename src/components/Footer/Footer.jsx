/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import React from 'react'
import './Footer.css'


const Footer = () => { 
  return (
    <>
        <div className='footer'>
              
                <ul>
                  <li>
                    <a href="https://github.com/Gabi-Garcia"  target="_blank" rel="noreferrer" >
                      <div className="imgFooter">
                        <img src="/github.png" alt="Github-img" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/gabriel-garcia-ab029b210/" target="_blank" rel="noreferrer" >
                      <div className="imgFooter">
                        <img src="/linkedin.png" alt="Linkedin-img" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:gabriel.garcia.development@gmail.com">
                      <div className="imgFooter">
                        <img src="/email.png" alt="email-img" />
                      </div>
                    </a>
                  </li>      
                </ul>
                    <p>Creado por Gabi-Garcia</p>             
        </div>
    </> 
  )
}

export default Footer 
