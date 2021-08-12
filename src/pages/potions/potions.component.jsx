import React from 'react'; 
import Banner from '../../components/Banner/banner.component'
import Card from '../../components/Card/card.component';


const url = "https://the-harry-potter-database.herokuapp.com/api/1/potions/all"
class PotionsPage extends React.Component {
    state = {
        potions:[],
        searchTerm:"",
    }

componentDidMount(){
    fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            this.setState({potions:data})
        })
        
}



all_cards=(potions)=>{
    return potions.map((element,i)=>{
        return <Card 
        key= {i}
        name= {potions[i].name}
        description ={potions[i].description}
        />
    })
}


featured_cards=(potions)=>{
    
    const featured = [1,2,9,11,12,15,17,26,34,37,46,51,55,61,100,104,134]
    return potions.map((element,i)=>{
        if (featured.includes(i,0)){
        return <Card
                 key={i}
                 name={potions[i].name}
                 description={potions[i].description}
                 />}
    })
}
   

    render() { 
        return (
            <div>
                <h2>Potions</h2>
                <div className="sorting-header">
                    <img />    
                    <input /><button>Search potion</button>    
                </div>
                    
                <div>
                    <div style={{color:"white"}}>
                        <h2>Search Results</h2>
                    </div>

                    <div style={{color:"white"}}>
                       
                       <h2>Featured Potions</h2> 
                      
                       {this.featured_cards(this.state.potions)}
                    </div>
                    <div style={{color:"white"}}>
                        <h2>All Potions</h2>
                        {this.all_cards(this.state.potions)}
                    </div>

                </div>
            </div>
        )
    }
}

export default PotionsPage; 