import React from 'react'
import FreeCodeCamp_logo from '../img/FreeCodeCamp_logo.png';
import '../hojas-de-estilo/Logo.css';

const Logo = ()=> (

    <div className='freecodecamp-logo-contenedor'>
    <img   
      src={FreeCodeCamp_logo}
      alt='Logo freeCodeCaamp'
      className='freeCodeCamp-logo' /> 
  </div>

);

export default Logo;