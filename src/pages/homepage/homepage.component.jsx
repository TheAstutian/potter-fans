import React , {Component} from 'react';

import Banner from '../../components/Banner/banner.component';


import './homepage.style.scss'; 



const Homepage = () => (
                    
                        <div className='container'>
                       <Banner />                
                       <div className=''>
                            <span>Explore the world of Wizardry!</span> 
                        </div> 
                        
                        
                            <div className=" section pf-hogwarts" style ={{
                                backgroundImage: `url(${'https://images.unsplash.com/photo-1596762779387-9c681b5e2818?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'})`
                                }}>
                                    Oya naaa 
                                    
                                    <button>Go to Hogwarts</button>
                            </div>
                           
                           
                        
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