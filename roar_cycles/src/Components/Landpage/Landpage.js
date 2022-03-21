import React from 'react';
import './Landpage.css';
import Logo from './../Images/Roar_bikes_white.png';
import Navbar from '../Navbar/Navbar';
import { Icon } from '@iconify/react';
import { Link } from '@mui/material';


export default function Landpage() {
      
    return(
    <>
    <div className='landpage_wrapper'>
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
        <main className='landpage_main_content'>
            <p>We are a small Company that works with the best quality material on the Market</p>
            <a href='/' alt="shop">TO THE SHOP</a>
        </main>
    </div>

    {/* Mobile HEADER - bellow 720px */}
    <div className='landpage_wrapper_mobile'>
        <header className='mobile_header'>
            
                <div className="top_header">
                    <img src={Logo} alt="Roar Cycle logo" width="150" height="150"/>

                    <div className='profile_and_cart'>
                        <Icon icon="bi:person-fill" color="white" width="40" height="40" />
                        <Icon icon="fa:shopping-cart" color="white" width="40" height="40" />
                    </div>
                </div>
                <div className='navbar'>
                    <Navbar />
                </div>
            
        </header>
        <main className='mobile_landpage_main_content'>
            <p>We are a small Company that works with the best quality material on the Market</p>
            <a href='/' alt="shop">TO THE SHOP</a>
            
        </main>
    </div>
    </>
  );
}

