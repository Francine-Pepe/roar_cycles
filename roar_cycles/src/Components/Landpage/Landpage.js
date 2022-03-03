import React from 'react';
import './Landpage.css';
import Logo from './../Images/Roar_bikes_white.png';
import Navbar from '../Navbar/Navbar';
import { Icon } from '@iconify/react';


export default function Landpage() {
      
    return(
    <>
    <header className='header_container'>
        <div className="logo">
            <img src={Logo} alt="Roar Cycle logo" width="250" height="250"/>
        </div>

        <div className='navbar'>
            <Navbar />
        </div>


        <div className='profile_and_cart'>
            <Icon icon="bi:person-fill" color="white" width="40" height="40" />
            <Icon icon="fa:shopping-cart" color="white" width="40" height="40" />
        </div>
    </header>
    </>
  );
}

