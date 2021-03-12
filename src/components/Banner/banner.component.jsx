import React from 'react';
import './banner.style.scss';



const Banner= ()=>(
    <div className="banner-container">
                    <div className="container-b" style ={{
                backgroundImage: `url(${'/banner_img.jpg'})`
                }}>

                    <div className='banner-text'>
                        <span>We’ve all got both light and dark inside us.</span><span> What matters is the part we choose to act on. </span><span>That’s who we really are.</span>                                     
                    </div>
                    
                
            </div>
    </div>
)

export default Banner;