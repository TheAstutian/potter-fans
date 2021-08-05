import React from 'react'; 
import Button from '../../components/Button/button.component'

const houses = [
    "Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"
]

class SortingHat extends React.Component{
    state = {
        chosen_house:""
    }

    house = (name)=>{
        const randomNum = Math.floor((Math.random() * 100) + 1) // Generates number between 1 and 100
        const houseName = houses[randomNum % 4]
        return houseName;   
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
                    <input placeholder="What is your name, Muggle?"/>
                    <Button>Get sorted</Button>
                </div>
            </div>
        )
    }
}





   

export default SortingHat; 
