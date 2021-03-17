import React from 'react';
import './banner.style.scss';



const Banner= ()=>(
    <div className="banner-container">
                    <div className="container-b" style ={{
                backgroundImage: `url(${'/banner_img.jpg'})`
                }}>

                <button>Visit Hogwarts</button>
                    
                
            </div>
    </div>
)

export default Banner;