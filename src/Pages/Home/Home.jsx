/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react'
// import { Link } from 'react-router-dom';
import './Home.css'
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
//import MyButton from '../../components/Button/Button';


const Home = () => {
   return(
    <>
        <div className='cajaHome'>
          <h1>JUGANDO <span>ANDO</span></h1>
            <Navbar />
        </div>
        <div className='footerHome'>
        <Footer />
        </div>
    </>
        )
      }

export default Home