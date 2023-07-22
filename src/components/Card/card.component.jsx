import React from 'react';
import './card.style.scss';
import no_image from'./../../assets/no_image.png'; 

const Card = ({name, effect, image}) =>(
    <div className='card-container'>
        <div className="image">
            <img src={image? `${image}`:no_image}/>
        </div>
        
        <div className='name'>
            <span> {name}</span>
        </div>        
        <div className='effect'>
            <span> {effect}</span>
        </div>
        
    </div>
);

export default Card;