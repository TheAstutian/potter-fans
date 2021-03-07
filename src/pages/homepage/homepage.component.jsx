import React , {Component} from 'react';

import Banner from '../../components/Banner/banner.component';


import './homepage.style.scss'; 
import {Container} from 'react-bootstrap';


const Homepage = () => (
                    
                        <Container className='container'>
                       <Banner />                
                        <span>Random popular harry potter quote</span> 
                        <div className="pf-hogwarts section">
                            <div className="banner-image" style ={{
                                backgroundImage: `url(${'https://images.unsplash.com/photo-1569040029205-a03a8b455808?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1115&q=80'})`
                                }}>
                                    Oya naaa 
                                    
                                    <button>Go to Hogwarts</button>
                            </div>
                           
                           
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
                        <div>
                            <p>The latest <a href='https://www.jkrowling.com/'>About J. K. Rowlings </a></p>
                        </div>
                        
                    </Container>
                    
        )  


export default Homepage; 