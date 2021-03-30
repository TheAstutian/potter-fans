import React from 'react';
import {Link} from 'react-router-dom';
import './banner.style.scss';



const Banner= ()=>(
    <div className="banner-container">
                    <div className="container-b" style ={{
                backgroundImage: `url(${'https://images.unsplash.com/photo-1593679900565-208954fbf96e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'})`
                }}>
                <span>Where life and death began or some other quote pertaining to hogwarts</span>
                <button><Link to='/hogwarts'>Visit Hogwarts</Link></button>
                    
                
            </div>
    </div>
)

export default Banner;