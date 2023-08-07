import React from 'react'; 
import Card from '../../components/Card/card.component';
import PotionInfo from '../../components/PotionInfo/PotionInfo';
import './potions.style.scss'

const init=  {
    potions:[],
    searchTerm:"This is working",
    toggleSearch:false,
    loading:false,
    featured:true,
    show:false,
    selectedPotion:[],
    featuredPotions:[1,2,9,11,12,15,17,26,34,37,46,51,55,61]
}

class  PotionsPage extends React.Component {
    state = init; 

    componentDidMount(){
        this.setState({loading:false})
        fetch("https://api.potterdb.com/v1/potions")
        .then(response=>response.json())
        .then(res=>{
            if(res){
                this.setState({potions:res.data})
                this.setState({loading:true})
                
            }
        })
    }

showAllPotions=(potiondata)=>{
    potiondata.map(item=>(
        <Card 
            key={item.attributes.name}
            data={item.attributes}
            handleClose={this.handleClose}
            handleShow={this.handleShow}
            show={this.state.show}
            test={this.getProps}
            />
    ))
}

showFeaturedPotions=()=>{
    const featured = [1,2,9,11,12,15,5,26,34,37,51,55,61,75,85,92]
   const featP=[]
   
   for (let i=0; i<featured.length; i++){
    featP.push(this.state.potions[featured[i]])
   }
return featP

}



toggleAllPotions=()=>{
    this.setState({featured:!this.state.featured})
}

 showPotionInfo=()=>{
    this.setState({ show:true})
}

 hidePotionInfo=()=>{
    this.setState({show:false})
}

getProps=(item)=>{
    
    console.log(item)
    this.showPotionInfo()
    this.setState({selectedPotion:item})
    console.log(this.state.show)

}

/*
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
*/
render(){
    return (
        <div className="potions-container">
            
            <div className="potions-header">
                <div className="toggle">
                        <button onClick={()=>{this.toggleAllPotions()}}>{!this.state.featured? "Featured Potions": "All Potions"}</button>    
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

                this.state.toggleSearch? (
                    <div>
                        <h2>Search Results</h2>
                        <div className="potions-list">

                        </div>
                    </div>
                ):

                this.state.featured? (
                    <div>
                        <h2>Featured Potions</h2>
                        <div className='potions-list'>
                        {this.showFeaturedPotions().map(item=>(
                                <Card 
                                        key={item.attributes.name}
                                        data={item.attributes}
                                        handleClose={this.handleClose}
                                        handleShow={this.handleShow}
                                        show={this.state.show}
                                        test={this.getProps}
                                        />
                               )) }
                        </div>
                    </div>
                ) :
                
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
                        <h2>All Potions</h2>
                        <div className="potions-list">{
                            this.state.potions.map(item=>(
                                <Card 
                                    key={item.attributes.name}
                                    data={item.attributes}
                                    handleClose={this.handleClose}
                                    handleShow={this.handleShow}
                                    show={this.state.show}
                                    test={this.getProps}
                                    />
                            ))
                        }
                        </div>
        
                    </div>) 

                   }
                  <div className="potions-list">
                            <PotionInfo 
                            data={this.state.selectedPotion}
                            show={this.state.show}
                            handleClose={this.hidePotionInfo}
                            />
                        </div>

            </div>
        </div>
    )
}
}
        

export default PotionsPage; 