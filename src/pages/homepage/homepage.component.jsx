import React from 'react';

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
                <h1>Potterfans</h1>

                Welcome to the PotterFans, an online resource and  spot for all things related to J.K. Rowling's Wizarding World. 
                <span> Whether you're looking for info on Harry Potter characters, the book series or just wanna have fun, this is the place to be. </span>
                
                <span>This website is dedicated to harry potter fans</span>
            </div>
        )
    }
}

export default Homepage; 