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
    featuredPotions:[1,2,9,11,12,15,17,26,34,37,46,51,55,61],
    searchedPotions:[]
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
    this.setState({toggleSearch: false})
    this.setState({featured:!this.state.featured})
    this.setState({searchedPotions:[]})
    
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


 handleChange= (e)=>{
    
    this.setState({...this.state, searchTerm: e.target.value})
    if(e.target.value===""){
        this.setState({searchedPotions:[]})
    }

}

onSearch = () =>{
    const search =[];
    this.state.potions.map(item=>{
            if(item.attributes.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())){
                search.push(item)
            }

    })


    this.setState({...this.state, searchedPotions:search})
this.setState({featured:false})
this.setState({toggleSearch: true})
console.log("search,", this.state.searchedPotions)
 /*   let url = '';
    if (state.searchTerm){
        setState({...state, loading:true, toggleSearch:true})
    } */
    
    
}


 handleKeyDown = (e) =>{
    if (e.key==='Enter'){
        this.onSearch()
    }
}

render(){
    return (
        <div className="potions-container">
            
            <div className="potions-header">
                <div className="toggle">
                        <button onClick={()=>{this.toggleAllPotions()}}>{!this.state.featured? "Featured Potions": "All Potions"}</button>    
                </div>
                <div className="search">
                    <input 
                    placeholder="Potion name"
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    />

                    <button onClick={()=>this.onSearch()}>Search</button>
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
                        {(this.state.searchedPotions.length===0)? 
                        <p>No results</p>
                        : 
                       <>{this.state.searchedPotions.map(item=>(
                            <Card 
                                    key={item.attributes.name}
                                    data={item.attributes}
                                    handleClose={this.handleClose}
                                    handleShow={this.handleShow}
                                    show={this.state.show}
                                    test={this.getProps}
                                    />
                           ))}
                        </>}
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