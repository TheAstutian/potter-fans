import React from 'react';
import PotionInfo from '../PotionInfo/PotionInfo';
import './card.style.scss';
import no_image from'./../../assets/no_image.png'; 



const Card = ({show,handleShow, handleClose, name, image, effect, difficulty, ingredients, characteristics, wiki}) =>(
    <div className='card-container'>
        <div className="image">
            <img src={image? `${image}`:no_image}/>
        </div>
        
        <div className='name' onClick={handleShow}>
            <span> {name}</span>
        </div>        
        <div className='effect'>
            <span> {effect}</span>
        </div>
      {handleShow ? 
        ( <PotionInfo 
            show={show}
            handleClose={handleClose}
            name={name}
            />): null
      }
    </div>
);

export default Card;