import React from 'react';
import './Spell.style.scss';
import no_image from'./../../assets/no_image.png' 

const Spell = ({data}) => {

    const {name, image, category, effect} = data.attributes;

    return (
    

        <div className="spell-container"  >
            <div id={category? `${category}`:"Nill"} className='spell'>
              
                    <div className='spell-name'>
                        <span> {name}</span> 
                       
                    </div>
                    
                    <div className="image-area">
                        <img src={image? `${image}`:no_image} />
                    </div>
    
                    <div className='description'>
                        <p>{effect}</p>
                    </div>
               
            </div>
        </div>
    )
    
}


export default Spell;