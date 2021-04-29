import React from 'react';
import {Link} from 'react-router-dom';
import './banner.style.scss';



const Banner= ()=>(
    <div className="banner-container">
                    <div className="container-b" style ={{
                backgroundImage: `url(${'https://cdn.pixabay.com/photo/2015/09/20/22/38/library-948965_1280.jpg'})`
                }}>
               <div className='banner-span'>
               <span>Where life and death began or some other quote pertaining to hogwarts</span>
               </div>

                <div className='banner-btn'>
                    <Link to='/hogwarts'><button>Visit Hogwarts</button></Link>
                </div>
                    
                
            </div>
    </div>
)

export default Banner;