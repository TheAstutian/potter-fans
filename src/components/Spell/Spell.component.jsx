import React from 'react';
import './Spell.style.scss';
import no_image from'./../../assets/no_image.png' 

const Spell = ({name, slug, image, incantation, spell_type, wiki, note, description}) =>(
    
    
    <div className="spell-container"  >
        <div id={spell_type? `${spell_type}`:"Nill"} className='spell'>
          
                <div className='spell-name'>
                    <span> {name}</span>
                    <p>{incantation ? `${incantation}`: "Not available"}</p>
                </div>
                
                <div className="image-area">
                    <img src={image? `${image}`:no_image} />
                </div>

                <div className='description'>
                    <p>{description}</p>
                </div>
           
        </div>
    </div>
);

export default Spell;