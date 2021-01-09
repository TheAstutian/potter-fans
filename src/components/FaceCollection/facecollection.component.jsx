import React from 'react';
import Face from '../Face/face.component';

class FaceCollection extends React.Component{
    constructor () {
        super ();
        this.state = {
            characters: []
        }
    }

    async componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url='https://hp-api.herokuapp.com/api/characters';
        const response=  await fetch(url);
        const data =  await response.json();
        console.log(data)
        this.setState({characters: data})
        
    }

    render(){
        const {characters} = this.state;
       return(
        <div>
            {this.state.characters.map((element,i)=>{
                return <Face key={i}
                        name={characters[i].name}
                        species={characters[i].species}        
                />

            })}

        </div>
       )
    }
}

export default FaceCollection; 