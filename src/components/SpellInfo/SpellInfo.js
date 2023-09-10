import React from 'react';
import './SpellInfo.css';
import no_image from'./../../assets/no_image.png'; 


const SpellInfo=({show, data, handleClose})=>{


    const showHide= show? "modal display-block" :"modal display-none";
    const {category, effect,hand,image,incantation,light,name,wiki} = data;

    return(
    
        <div className={showHide}>
              <button className='x' onClick={handleClose}>x</button>
            <div className='potion-content' >
          
              <div className='topp'>
                    <h3>{name}</h3>
                    <img src={image? `${image}` : no_image} />
                    <p>{effect}</p>
              </div>
               <div className='bottom'>
                <div className='ppt'>  <span className="que">Type: </span><span className="ans"> {category? category : "N/A"}</span></div>
                <div className='ppt'> <span className="que">Incantation: </span><span className="ans"> {incantation? incantation: "N/A" }</span></div>
                <div className='ppt'>  <span className="que">Execution: </span><span className="ans"> {hand? hand: "N/A"}</span></div>
                <div className='ppt'>  <span className="que">Light:</span><span className="ans">  {light? light: "N/A" }</span></div>
                
               </div>
                <div className='wiki'>
                <button className="wiki-btn"><a href={wiki} target='blank'>Wikipage</a></button>
                </div>
            </div>
           
        </div>
    )
}

export default SpellInfo;