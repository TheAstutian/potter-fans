import React from 'react';

import Banner from '../../components/Banner/banner.component';
import {Button} from 'react-bootstrap';

import './homepage.style.scss'; 


const Homepage = () => (
            <div>
               <Banner />                
                <span>This website is dedicated to harry potter fans- J. K. Rowling</span> 
                <div className="section">
                    Visit Hogwarts
                    <Button>Visit!</Button>
                </div>
                <div className="section">
                    Books
                </div>
                <div className="section">
                    Movies
                </div>
                <div className="section">
                    Pandora's box of spells

                    
                </div>
                
            </div>
)


export default Homepage; 