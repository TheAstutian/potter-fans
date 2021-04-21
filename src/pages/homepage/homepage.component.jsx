import React , {Component} from 'react';
import {Link} from 'react-router-dom'

import Banner from '../../components/Banner/banner.component';


import './homepage.style.scss'; 



const Homepage = () => (
                    
            <div className='container'>
                       <Banner />                
                       <div className='experiment'>

                            <div className='banner-2'>
                                <span>We’ve all got both light and dark inside us.</span>
                                <span> What matters is the part we choose to act on. </span>
                                <span>That’s who we really are.</span>  
                                <button><Link to='/sorting'>Sorting Hat</Link></button>                                   
                                </div>
                            <div className='banner-2'>
                                <img src='banner.jpg' />
                            </div>
                        
                        </div> 
                                                
 
                        <div className='movie-book'>
                            <div className="pf-books section">
                                <div>
                                    <img src='' />
                                </div>
                                <div> Harry Potter Books</div>
                            </div>

                            <div className="pf-movies section">
                                <div>
                                    <img src=''/>
                                </div>
                                <div> Harry Potter Books</div>
                            </div>
                        </div>

                        <div className="pf-spells section">
                            Pandora's box of spells    
                            <h1>SPellslsslf</h1>                        
                        </div>

                        <div className="jk-rowling section">
                            <p>The latest <a href='https://www.jkrowling.com/'>About J. K. Rowlings </a></p>
                        </div>
                        
            </div>
                    
        )  


export default Homepage; 