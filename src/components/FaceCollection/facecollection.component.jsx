import React from 'react';
import Face from '../Face/face.component';
import './facecollection.style.scss'

class FaceCollection extends React.Component{
    constructor () {
        super ();
        this.state = {
            characters: []
        }
    }

    async componentDidMount() {
        const url='https://hp-api.herokuapp.com/api/characters';
        const response=  await fetch(url);
        const data =  await response.json();
        console.log(data)
        this.setState({characters: data})
        
    }

    render(){
        const {characters} = this.state;
       return(
        <div className='facecollection-container'>

            
            {this.state.characters.map((element,i)=>{
                return <Face key={i}
                        name={characters[i].name}
                        species={characters[i].species}
                        img={characters[i].image} 
                        ancestry={characters[i].ancestry}    
                        house={characters[i].house}
                        wand={characters[i].wand.core}   
                />

            })}

        </div>
       )
    }
}

export default FaceCollection; 