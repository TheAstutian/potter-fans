import React , {Component} from 'react';

import Banner from '../../components/Banner/banner.component';


import './homepage.style.scss'; 



const Homepage = () => (
                    
            <div className='container'>
                       <Banner />                
                       <div className='experiment'>

                            <div className='banner-text'>
                                <span>We’ve all got both light and dark inside us.</span><span> What matters is the part we choose to act on. </span><span>That’s who we really are.</span>                                     
                                </div>
                        
                        </div> 
                                                
                        <div className=" section pf-hogwarts" style ={{
                            backgroundImage: `url(${'/banner_img.jpg'})`
                            }}>
                                <span>We’ve all got both light and dark inside us.</span><span> What matters is the part we choose to act on. </span><span>That’s who we really are.</span>                                     
                        </div>
                        
                           
                        <span>Explore the world of Wizardry!</span> 
                        <div className="pf-books section">
                            Books books books books 
                        </div>

                        <div className="pf-movies section">
                            Movies
                        </div>

                        <div className="pf-spells section">
                            Pandora's box of spells                            
                        </div>

                        <div className="jk-rowling section">
                            <p>The latest <a href='https://www.jkrowling.com/'>About J. K. Rowlings </a></p>
                        </div>
                        
            </div>
                    
        )  


export default Homepage; 