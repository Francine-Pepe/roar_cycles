import React from 'react';
import './Gallery.css';
import GalleryCarousel from './GalleryCarousel';
import './GalleryCarousel.css'

export default function Gallery() {
    return (
    <>
    <div className='gallery_container'>
        <div className='gallery_header'></div>
        <div className='gallery_content'>
            <div className='gallery_container_left'>
                <h1>GALLERY</h1>
            
                <p>
                    Did you buy a Bike with us? <br />Fell free to send a photo with your comment! <br /> Soon it will be uploaded in our Website. 
                </p>
            </div>
            <div className='gallery_content_right'>
                <GalleryCarousel />
            </div>
        </div>
        
    
    </div>
    
    </>


    );
}

