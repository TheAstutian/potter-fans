import React from 'react'; 
import Button from '../../components/Button/button.component'

const houses = [
    "Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"
]

const greetings = [
    "Hey", "Hello", "Hmmmm......", "Hi"
]

const addendum = [
    "Congratulations",
    "Yee-haw",
    "Well done",
    "Congrats"
]

const messages = [
    "I see you doing wonders at",
    "your destiny lies at",
    "you are best suited for",
    "I am certain you belong to",
    "your path lies at",
    "your personality will fit in at",
    "people like you belong to"
]

class SortingHat extends React.Component{
    state = {
        active:false,
        sorted_house:"",
        name:"",
        greeting:"",
        message:"",
        addendum:"",
    }

    componentDidMount(){
        this.setState({active:false})
    }

    random=()=>{
        const randomNum = Math.floor((Math.random() * 100) + 1) // Generates number between 1 and 100
        return randomNum;
    }

    pick_greeting=()=>{
        const randomNum = this.random()
        const greeting = greetings[randomNum % greetings.length]
        return greeting
    }

    pick_message=()=>{
        const message = messages[this.random() % messages.length]
        return message
    }

    pick_addendum=()=>{
        return addendum[this.random() % addendum.length]
    }

    pick_house = ()=>{
        // check if name is valid first
        
        const randomNum = this.random()
        const houseName = houses[randomNum % houses.length]
        
        return houseName
    }

    onSubmit =()=>{

        const house = this.pick_house()
        this.setState({sorted_house:house})
        const greeting = this.pick_greeting()
        const message = this.pick_message()
        this.setState({active:true, greeting:greeting, message:this.pick_message(),addendum:this.pick_addendum()})
    }

    handleChange= (e)=>{
        const user_name = e.target.value;
        this.setState({name:user_name})
        this.setState({active:false})
    }
    reset = ()=>{
        this.setState({active:false, name:"",active:false,
        sorted_house:"",
        greeting:"",
        message:"",
        addendum:"",})
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
                        type="text"
                        placeholder="What is your name, Muggle?"
                        onChange = {this.handleChange}
					    value = {this.state.name}
                    />
                    <button onClick={()=>this.onSubmit()}>Get sorted</button>
                </div>

                <div style={{color:"white"}}>
                   { this.state.active===true ? (<div>
                    <p> {this.state.greeting} {this.state.name}, {this.state.message} {this.state.sorted_house}. {this.state.addendum}!</p> <button onClick={()=>this.reset()}>Reset</button>
                   </div>): null }
                </div>
            </div>
        )
    }
}





   

export default SortingHat; 
