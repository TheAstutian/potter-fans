import React from 'react';
import './face.style.scss';

const Face = ({name, species }) =>(
    <div className='face-container'>
        <p>{name}</p>
        <p>species: {species}</p>
        
    </div>
);

export default Face;