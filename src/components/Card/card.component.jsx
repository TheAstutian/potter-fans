import React from 'react';
import './card.style.scss';

const Card = ({name, id,description}) =>(
    <div className='card-container'>
        <span>{id} {name}</span>
        
        <div className="description">
            <p>{description}</p>
        </div>
    </div>
);

export default Card;