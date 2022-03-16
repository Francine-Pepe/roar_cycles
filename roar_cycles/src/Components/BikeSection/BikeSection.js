import React from 'react';
import BikeInformation from './BikeColor';
import BikeRim from './BikeRim';
import './BikeSection.css';
import BikeSectionHeader from './BikeSectionHeader';

export default function BikeSection() {
    return (
        <>
        <BikeSectionHeader />
        <div className='bike_information'>
            <BikeColor />
        </div>
        </>
    );
}