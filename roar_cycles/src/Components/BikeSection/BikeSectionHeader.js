import React from 'react';
import './BikeSectionHeader.css';

export default function BikeSectionHeader() {

    return (
        <>
        <header  className='header_bigger_screen'>
            <div className='left_navbar_parent'>
                
                <nav className='left_navbar'>
                    <h1>BIKES</h1>
                    <ul>
                        <li>
                            <a href='/' alt='siamese' className='link_box'>SIAMESE</a>
                            <a href='/' alt='siamese' className='link_box'>SPHYNX</a>
                            <a href='/' alt='siamese' className='link_box'>BENGAL</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

        {/* Mobile HEADER - bellow 720px */}
        
        <header  className='header_smaller_screen'>
            <div className='left_navbar_parent_smaller'>
                
                <nav className='left_navbar_smaller'>
                    <h1>BIKES</h1>
                    <ul>
                        <li>
                            <a href='/' alt='siamese' className='link_box_smaller'>SIAMESE</a>
                            <a href='/' alt='siamese' className='link_box_smaller'>SPHYNX</a>
                            <a href='/' alt='siamese' className='link_box_smaller'>BENGAL</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>



        
        
        </>
    );
}
