import React from 'react';
import './card.style.scss';

const Card = ({name, description}) =>(
    <div className='card-container'>
        <span> {name}</span>
        
        <div className="description">
            <p>{description}</p>
        </div>
    </div>
);

export default Card;