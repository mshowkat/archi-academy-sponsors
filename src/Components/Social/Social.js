import './Social.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithubSquare, faInstagram, faLinkedin, faMediumM, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

const Social = () => {
    return (
        <div className='social-container'>
            <a className='social-anchor' href="#social"> <FontAwesomeIcon icon={faFacebook} /> </a>
            <a className='social-anchor' href="#social"> <FontAwesomeIcon icon={faLinkedin} /> </a>
            <a className='social-anchor' href="#social"> <FontAwesomeIcon icon={faInstagram} /> </a>
            <a className='social-anchor' href="#social"> <FontAwesomeIcon icon={faGithubSquare} /> </a>
            <a className='social-anchor' href="#social"> <FontAwesomeIcon icon={faTwitterSquare} /> </a>
            <a className='social-anchor' href="#social"> <FontAwesomeIcon icon={faYoutubeSquare} /> </a>
            <a className='social-anchor' href="#social"> <FontAwesomeIcon icon={faMediumM} /> </a>
            <a className='social-anchor' href="#social"> <FontAwesomeIcon icon={faPhoneSquare} /> </a>
        </div>
    );
};

export default Social;