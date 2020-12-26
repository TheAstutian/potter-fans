import React, {Component} from 'react';

class Hogwarts extends Component {
    constructor () {
        super ();
        this.state = {

        }
    }

    async componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url='https://hp-api.herokuapp.com/api/characters';
        const response=  await fetch(url);
        const data =  await response.json();
        console.log(data);
        
    }

    render () {
        return (
         <div>
             <h1>Hogwarts School of Wizardry </h1>


         </div>
        )
    }
}

export default Hogwarts; 
