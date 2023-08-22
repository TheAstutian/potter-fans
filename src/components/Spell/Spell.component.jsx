import React from 'react';
import './Spell.style.scss';
import no_image from'./../../assets/no_image.png' 

const Spell = (props) => {

    const {name, image, category, effect} = props.data.attributes;

    return (
    

        <div className="spell-container"  onClick={()=>props.test(props.data)}>
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