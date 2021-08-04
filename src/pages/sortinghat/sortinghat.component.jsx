import React from 'react'; 

const houses = [
    "Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"
]

class SortingHat extends React.Component{
    state = {
        chosen_house:""
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
                    <label placeholder="What is your name, Muggle?"/>
                    <button>Get sorted</button>
                </div>
            </div>
        )
    }
}





   

export default SortingHat; 
