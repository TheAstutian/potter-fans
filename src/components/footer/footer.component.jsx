import React from 'react';
import {Twitter} from 'react-bootstrap-icons';

import './footer.style.scss'; 

const Footer = () => (
<   div className='footer'>
    
        <div className='sm-icon'>
        <Twitter width='50'/>
        </div>
        <div className='copyright'>
        
         <span>Copyright 2020, The Astutians. </span>
        </div>
    </div>
)

export default Footer; 