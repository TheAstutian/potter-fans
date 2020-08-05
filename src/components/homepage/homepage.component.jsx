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
                <span>This website is dedicated to harry potter fans</span>
            </div>
        )
    }
}

export default Homepage; 