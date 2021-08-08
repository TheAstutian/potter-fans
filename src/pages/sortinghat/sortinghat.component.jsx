import React from 'react'; 
import Button from '../../components/Button/button.component'

const houses = [
    "Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"
]

class SortingHat extends React.Component{
    state = {
        active:false,
        sorted_house:"",
        name:"",
    }

    componentDidMount(){
        this.setState({active:false})
    }
    pick_house = ()=>{
        // check if name is valid first
        
        const randomNum = Math.floor((Math.random() * 100) + 1) // Generates number between 1 and 100
        const houseName = houses[randomNum % 4]
        
        return houseName
    }

    onSubmit =()=>{

        const house = this.pick_house()
        this.setState({sorted_house:house})
        this.setState({active:true})
    }

    render(){
        return (
            <div>
                <h2>Sorting Hat!</h2>
                <div>
                    <img />
                    <span>In which house do you belong? Get sorted!</span>
                </div>
                <div>
                  <input 
                        placeholder="What is your name, Muggle?"
					    value={this.state.name}
                    />
                    <button onClick={()=>this.onSubmit()}>Get sorted</button>
                </div>

                <div style={{"color":"white"}}>
                   { this.state.active===true ? (<p> {this.state.name}, You are in {this.state.sorted_house}</p>): null }
                </div>
            </div>
        )
    }
}





   

export default SortingHat; 
