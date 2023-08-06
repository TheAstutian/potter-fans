import React from 'react';
import './PotionInfo.css';
import no_image from'./../../assets/no_image.png'; 


const PotionInfo=({show, data, handleClose})=>{


    const showHide= show? "modal display-block" :"modal display-none";
    const {name, characteristics,difficulty,effect,image,ingredients,inventors,manufacturers,side_effects,slug,time,wiki} = data; 
    return(
    
        <div className={showHide}>
              <button className='x' onClick={handleClose}>x</button>
            <div className='potion-content' >
          
              <div className='top'>
                    <h3>{name}</h3>
                    <img src={image? `${image}` : no_image} />
                    <p>{effect}</p>
              </div>
               <div className='bottom'>
                <h3>More Info</h3>
                <div className='ppt'>  <span className="que">Side Effects: </span><span className="ans"> {side_effects? side_effects: "N/A"}</span></div>
                <div className='ppt'> <span className="que">Characteristics: </span><span className="ans"> {characteristics? characteristics: "N/A" }</span></div>
                <div className='ppt'> <span className="que">Ingredients:</span><span className="ans">  {ingredients? ingredients: "N/A"}</span></div>
                <div className='ppt'>  <span className="que">Difficulty: </span><span className="ans"> {difficulty? difficulty: "N/A"}</span></div>
                <div className='ppt'>  <span className="que">Inventors:</span><span className="ans">  {inventors? inventors: "N/A" }</span></div>
                <div className='ppt'> <span className="que">Manufacturers: </span><span className="ans"> {manufacturers? manufacturers: "N/A" }</span></div>
                <div className='ppt'> <span className="que">Time Used: </span><span className="ans"> {time? time: "N/A" }</span></div>
                
               </div>
                <div className='wiki'>
                <button className="wiki-btn"><a href={wiki} target='blank'>Wikipage</a></button>
                </div>
            </div>
           
        </div>
    )
}

export default PotionInfo;