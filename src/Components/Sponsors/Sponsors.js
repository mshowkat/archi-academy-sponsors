import React from 'react';
import SponsorCard from './SponsorCard/SponsorCard';
import './Sponsors.css'
import {sponsorList} from '../Data/Data'

const Sponsors = () => {
    return (
        <div className='sponsors-container'>
            {sponsorList.map((sponsor)=> <SponsorCard sponsor={sponsor}></SponsorCard>)}
        </div>
    );
};

export default Sponsors;