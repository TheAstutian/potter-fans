import React from 'react'; 
import Card from '../../components/Card/card.component';
import PotionInfo from '../../components/PotionInfo/PotionInfo';
import './potions.style.scss'

const init=  {
    potions:[],
    searchTerm:"This is working",
    toggleSearch:false,
    loading:false,
    all:false,
    show:false,
}

class  PotionsPage extends React.Component {
    state = init; 

    componentDidMount(){
        this.setState({loading:false})
        fetch("https://api.potterdb.com/v1/potions")
        .then(response=>response.json())
        .then(res=>{
            if(res){
                console.log("1",res)
                this.setState({potions:res.data})
                console.log("2",this.state.potions)
                this.setState({loading:true})
            }
        })
    }

featured_cards= ()=>{
    const {potions,show} = this.state;
    const featured = [1,2,9,11,12,15,17,26,34,37,46,51,55,61,100,104,134]
    const cards = potions.map((element,i)=>{
        if (featured.includes(i,0)){
        return  <Card
                        key={i}
                        name={potions[i].attributes.name}
                       image={potions[i].attributes.image}
                        effect={potions[i].attributes.effect}
                        difficulty={potions[i].attributes.difficulty}
                        ingredients={potions[i].attributes.ingredients}
                        characteristics={potions[i].attributes.characteristics}
                        wiki={potions[i].attributes.wiki}
                        handleShow={this.showPotionInfo}
                        show={show}
                        handleClose={this.hidePotionInfo}
                       /> 
                        
                }
    })
    
    return cards;
}

 showPotionInfo=()=>{
    this.setState({ show:true})
}

 hidePotionInfo=()=>{
    this.setState({show:false})
}

/*
const all_cards=()=>{
    const [potions]=state.potions;
    const cards = potions.map((element,i)=>{
        return <Card 
        key= {i}
        name= {potions[i].attributes.name}
        effect ={potions[i].attributes.effect}
        image={potions[i].attributes.image}
        handleShow={showPotionInfo}
        show={state.show}
        handleClose={hidePotionInfo}
        />
    })

    return cards;
}


const handleChange= (e)=>{
    const search_term = e.target.value;
    setState({...state, searchTerm: search_term})
}

const onSearch = () =>{
    
    let url = '';
    if (state.searchTerm){
        setState({...state, loading:true, toggleSearch:true})
    } 
    
}

const reset=()=>{
    setState({...state, toggleSearch:false})
}

const handleKeyDown = (e) =>{
    if (e.key==='Enter'){
        onSearch()
    }
}

const seeAll=()=>{
    reset()
    setState({...state, all:!this.state.all})
}

const showPotionInfo=()=>{
    setState({...state, show:true})
}

const hidePotionInfo=()=>{
    setState({...state, show:false})
}
*/
render(){
    return (
        <div className="potions-container">
            
            <div className="potions-header">
                <div className="toggle">
                        <button onClick={()=>console.log("")}>Toggle Featured/All Potions</button>    
                </div>
                <div className="search">
                    <input 
                    placeholder="name of potion"
                    /*onChange={handleChange}
                    onKeyDown={handleKeyDown}*/
                    />

                    <button onClick={()=>/*onSearch()*/console.log('')}>Search Potion</button>
                </div> 
                
            </div>
                
            <div className="potions-body">
                
                {!this.state.loading? (
                    <div>
                        <h2>Loading</h2>
                    </div>
                ):
                
               /* state.toggleSearch? 
                    (<div>
                         <h2>Search Results</h2> 

                         <div className="potions-list">{all_cards()}</div>
                    </div>)
                    : 
                   state.all ?
                   (<div>
                    <h2>All Potions</h2>
                    <div className="potions-list">{all_cards()}</div>
                     </div>) :*/
                     (<div>
                        <h2>Featured Potions</h2>
                        <div className="potions-list">{this.featured_cards()}</div>
                    </div>) 

                   }
                

            </div>
        </div>
    )
}
}
        

export default PotionsPage; 