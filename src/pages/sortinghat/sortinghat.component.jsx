import React from 'react'; 
import {Link} from 'react-router-dom'
import './sortinghat.style.scss'

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
        return greetings[this.random() % greetings.length]
    }

    pick_message=()=>{
        return messages[this.random() % messages.length]
    }

    pick_addendum=()=>{
        return addendum[this.random() % addendum.length]
    }

    pick_house = ()=>{
        // check if name is valid first
        return houses[this.random() % houses.length]
    }

    handleChange= (e)=>{
        const user_name = e.target.value;
        this.setState({name:user_name})
        this.setState({active:false})
    }

    onSubmit =()=>{
        this.setState({sorted_house: this.pick_house(),
                        active:true, 
                        greeting:this.pick_greeting(), 
                        message:this.pick_message(),
                        addendum:this.pick_addendum()
                    })
    }

    handleKeyDown = (e) =>{
        if (e.key==='Enter'){
            this.onSubmit()
        }
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
            <div className="header">
                <h2>Sorting Hat</h2>
                <div className="sorting-header">
                    <img src='https://cdn.pixabay.com/photo/2015/03/16/04/15/sorting-hat-675364_1280.jpg' />        
                    <span>In which house do you belong? </span>
                </div>
                <div className="sorting-body">
                  <input 
                        type="text"
                        placeholder="Your name, muggle?"
                        onChange = {this.handleChange}
					    value = {this.state.name}
                        onKeyDown= {this.handleKeyDown}
                    />
                    <button onClick={()=>this.onSubmit()}>Get sorted! </button>
                </div>

                <div className="sorting-result">
                   { this.state.active===true ? (<div className="result">
                    <p> {this.state.greeting} {this.state.name}, {this.state.message}</p>
                    <span> {this.state.sorted_house} </span>
                    <p> {this.state.addendum}!</p> 
                    <button ><Link to ={this.state.sorted_house}>Visit {this.state.sorted_house}</Link></button>
                    <button onClick={()=>this.reset()}>Reset</button>
                    
                   </div>): 
                        (<div className="no-result">
                            <span>You have no place here.... You haven't been sorted</span>
                       </div>) }
                </div>
            </div>
        )
    }
}





   

export default SortingHat; 
