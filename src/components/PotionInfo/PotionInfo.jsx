import React from 'react';
import './PotionInfo.css';
import no_image from'./../../assets/no_image.png'; 


const PotionInfo=({show, name, handleClose})=>{

    const showHide= show? "modal display-block" :"modal display-none";
    return(
        <div className={showHide}>
            
            <div className='potion-content' >
            <button onClick={handleClose}>x</button>
              <p>{name}</p>
              {console.log(`${name}`)}
    {/*           <h2>{the_name}</h2>
               <img src={image? `${image}` : no_image} />
               <p>{effect}</p>
               <div>
                <h3>Properties</h3>
                <span>Difficulty: {difficulty? difficulty: "N/A"}</span>
                <span>Characteristics: {characteristics? characteristics: "N/A" }</span>
                <span>Ingredients: {ingredients? ingredients: "N/A"}</span>
               </div>
    <button ><a href={wiki} target='blank'>Wikipage</a></button>*/}
            </div>
           
        </div>
    )
}

export default PotionInfo;