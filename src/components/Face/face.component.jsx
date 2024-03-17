import React from 'react';
import './face.style.scss'; 

const Face = (props) =>{
    const {name, ancestry, image, key,house,wand} = props.data
    console.log(props.data)
     
    return(
    <div className='face-container'>
        <span style={{color:`${props.color}`}}>{name}</span>
        <img alt={key} src={image? image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'} />
         <p>{ancestry}</p>       
    </div>
)};

export default Face;