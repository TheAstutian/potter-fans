import React from 'react';
import {Link} from 'react-router-dom';
import './banner.style.scss';



const Banner= ({imagelink, subcontent, subcontent2, main_content, btn_text})=>(
    <div className="banner-container">
                <div className="container-b" style ={{
                backgroundImage: `url(${imagelink})`
                }}>
               <div className='banner-span'>
               <span>{main_content}</span>
               </div>
               <div className='sub-content'>
                <span>{subcontent}</span>
                <span style={{textAlign: "right"}}>{subcontent2}</span>
               </div>
 
                <div className='banner-btn'>
                    { btn_text ? <Link to='/hogwarts'><button>Visit Hogwarts</button></Link>: null}
                </div>
                    
                
            </div>
    </div>
)

export default Banner;