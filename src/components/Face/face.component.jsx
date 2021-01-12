import React from 'react';
import './face.style.scss';

const Face = ({name, ancestry, img, key,house,wand}) =>(
    <div className='face-container'>
        <span>{name}</span>
        <img alt={key} src={img} />
        <p>{house}</p>
        <p>{ancestry}</p>
        <p>Wand: {wand.toUpperCase()}</p>
        
        
    </div>
);

export default Face;