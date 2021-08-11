import React from 'react'; 
import Banner from '../../components/Banner/banner.component'
import Card from '../../components/Card/card.component';


const url = "https://the-harry-potter-database.herokuapp.com/api/1/potions/all"
class PotionsPage extends React.Component {
    state = {
        potions:[]
    }

componentDidMount(){
    fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            this.setState({potions:data})
        })
        
}


   

    render() { 
        return (
            <div>
                <h2>Potions</h2>
                <div className="sorting-header">
                    <img />        
                </div>

                <div>
                    <div>
                        <input /><button>Search potion</button>
                       <span>Popular Potions</span> 

                    </div>
                    <div style={{color:"white"}}>
                    {this.state.potions.map((element,i)=>{
                        return <Card 
                                key= {i}
                                id={this.state.potions[i].id-1}
                                name= {this.state.potions[i].name}
                                description ={this.state.potions[i].description}
                                />
                    })
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default PotionsPage; 