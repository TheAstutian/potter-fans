import React from 'react'; 
import Banner from '../../components/Banner/banner.component'
import Card from '../../components/Card/card.component';
import './potions.style.scss'


const url = "https://the-harry-potter-database.herokuapp.com/api/1/potions/all"
class PotionsPage extends React.Component {
    state = {
        potions:[],
        searchTerm:"",
        toggleSearch:false,
        loading:false,
        all:false
    }

componentDidMount(){
    this.setState({loading:true})
    const url = "https://the-harry-potter-database.herokuapp.com/api/1/potions/all"
    this.fetchItems(url)
    this.setState({loading:false})
}

fetchItems=(url)=>{
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

feat=()=>{
    const featured = [1,2,9,11,12,15,17,26,34,37,46,51,55,61,100,104,134]
    const featured_array= this.state.potions.filter((element,i)=>{
        return featured.includes(i,0)
    })
    this.setState({potions:featured})
}

handleChange= (e)=>{
    const search_term = e.target.value;
    this.setState({searchTerm: search_term})
}

onSearch = () =>{
    
    let url = '';
    if (this.state.searchTerm){
        url = `https://the-harry-potter-database.herokuapp.com/api/1/potions?search=${this.state.searchTerm}`
        this.fetchItems(url)
        this.setState({loading:true, toggleSearch:true})
    } 
    
}

reset=()=>{
    const url = `https://the-harry-potter-database.herokuapp.com/api/1/potions/all`
    this.fetchItems(url)
    this.setState({toggleSearch:false})
}



handleKeyDown = (e) =>{
    if (e.key==='Enter'){
        this.onSearch()
    }
}

seeAll=()=>{
    this.reset()
    this.setState({all:!this.state.all})
}
   

    render() { 
        return (
            <div className="potions-container">
                <h2>Potions</h2>
                <div className="potions-header">
                    <img src="https://images.pexels.com/photos/7979105/pexels-photo-7979105.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>    
                    <div className="search">
                        <input 
                        placeholder="name of potion"
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}
                        />

                        <button onClick={()=>this.onSearch()}>Search Potion</button>
                    </div> 
                    <div className="toggle">
                        <button onClick={()=>this.seeAll()}>Toggle Featured/All Potions</button>    
                    </div>
                </div>
                    
                <div className="potions-body">

                    {this.state.toggleSearch? 
                        (<div>
                             <h2>Search Results</h2> 

                             <div className="potions-list">{this.all_cards(this.state.potions)}</div>
                        </div>)
                        : 
                       this.state.all ?
                       (<div>
                        <h2>All Potions</h2>
                        <div className="potions-list">{this.all_cards(this.state.potions)}</div>
                         </div>) :
                         (<div>
                            <h2>Featured Potions</h2>
                            <div className="potions-list">{this.featured_cards(this.state.potions)}</div>
                        </div>) 

                       }
                    

                </div>
            </div>
        )
    }
}

export default PotionsPage; 