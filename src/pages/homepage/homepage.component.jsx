import React from 'react';

import Banner from '../../components/Banner/banner.component';


import './homepage.style.scss'; 
import {Container} from 'react-bootstrap';


const Homepage = () => (
            <Container className='container'>
               <Banner />                
                <span>This website is dedicated to harry potter fans- J. K. Rowling</span> 
                <div className="section lg-12 sm-1">
                    Visit Hogwarts
                    <span>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</span>
                </div>
                <div className="pf-books section">
                    Books
                </div>
                <div className="pf-movies section">
                    Movies
                </div>
                <div className="pf-spells section">
                    Pandora's box of spells

                    
                </div>
                
            </Container>
)


export default Homepage; 