import React from 'react';

import Banner from '../../components/Banner/banner.component';


import './homepage.css'; 

class Homepage extends React.Component {
    constructor(){
        super();
        this.state={
            characters: []
        }
    }

    render(){
        return (
            <div>
               <Banner />                
                <span>This website is dedicated to harry potter fans- J. K. Rowling</span> 
                <div>
                    Visit Hogwarts
                </div>
                <div>
                    Books
                </div>
                <div>
                    Movies
                </div>
                <div>
                    Pandora's box of spells
                </div>
                
            </div>
        )
    }
}

export default Homepage; 