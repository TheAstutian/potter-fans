import React from 'react';
import {Link} from 'react-router-dom';
import './banner.style.scss';



const Banner= ({imagelink, content, btn_text})=>(
    <div className="banner-container">
                    <div className="container-b" style ={{
                backgroundImage: `url(${imagelink})`
                }}>
               <div className='banner-span'>
               <span>{content}</span>
               </div>

                <div className='banner-btn'>
                    { btn_text ? <Link to='/hogwarts'><button>Visit Hogwarts</button></Link>: null}
                </div>
                    
                
            </div>
    </div>
)

export default Banner;