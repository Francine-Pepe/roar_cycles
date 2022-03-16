import { Button } from '@mui/material';
import * as React from 'react';
import './AddToCart.css';
import { Icon } from '@iconify/react';


export default function AddToCart() {
    return(
        <>
        <div className='add_to_cart_container'>
            <Button id="add_button" >
                <Icon icon="fa:shopping-cart" color="#A61414" width="3vw" height="3.2vh" />
            </Button>
        </div>
        
        </>
    );
}
