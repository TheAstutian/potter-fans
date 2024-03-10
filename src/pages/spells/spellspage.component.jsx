import React from 'react'; 
import Spell from '../../components/Spell/Spell.component';

import './spellspage.style.scss'
import SpellInfo from '../../components/SpellInfo/SpellInfo';

const init = {
    spells:[],
    searchTerm:"",
    search: false,
    loading:false,
    popular:false,
    show:false,
    searchItems:[],
    selectedSpell:[],
    currentPage: 1,
    previousPage:0,
    popular:false,
    
}



class SpellsPage extends React.Component {
    state = init;

componentDidMount(){
    this.setState({loading:true})
    fetch("https://api.potterdb.com/v1/spells")
    .then(response=>response.json())
    .then(res=>{
        
        if(res){
            this.setState({spells:res.data})
            this.setState({loading:false})
        }else{console.log('No response from server')}
    })
}

renderSpells=()=>{
    const {spells} = this.state; 
    return spells.map((item,i)=>{
        if (i>=this.state.previousPage*20 && i<this.state.currentPage*20){
            
            return <Spell
                    key={i}
                    data = {item}
                    test={this.getProps}
                />
        }
         
    })
}

nextPageClick=()=>{
    this.setState(prevState=>{
        return {
            currentPage: prevState.currentPage+1,
            previousPage: prevState.previousPage+1
        }
    })
}

previousPageClick=()=>{
    this.setState(prevState=>{
        return {
            currentPage: prevState.currentPage-1,
            previousPage: prevState.previousPage-1
        }
    })
}

onSearch = ()=>{
   console.log('search fired')
   const searchResults=[];

   this.state.spells.map((item,i)=>{
    if (item.attributes.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) 
    ||
    ( item.attributes.effect!==null && item.attributes.effect.toLowerCase().includes(this.state.searchTerm.toLowerCase())) ){
        searchResults.push(item)
    }
   })

   this.setState({...this.state, search:true, searchItems:searchResults})
   
   
   console.log('search items array: ')
   console.log(searchResults, this.state.search)
   console.log( this.state.searchItems)
}

handleChange= (e)=>{
    this.setState({searchTerm: e.target.value})
    
}

handleKeyDown = (e) =>{
    if (e.key==='Enter'){
        this.onSearch()
    }
}

showSpell=()=>{
    this.setState({ show:true})
}

 hideSpell=()=>{
    this.setState({show:false})
    
}
getProps=(item)=>{
    this.showSpell()
    this.setState({selectedSpell:item})
}
all=()=>{
    this.setState({search:false})
}

    render() { 
        return (
            <div className="spellspage-container">
                <div className="spell-heading">
                    <h2>{this.state.popular? "Popular Spells":"All Spells"}</h2>
                </div>
                <div>
                    <div className="lilnav">
                        <div className='spell-search'><button onClick={()=>this.all()}>Show all spells</button></div>
                       <div className="spell-search">
                         <input 
                            placeholder="Search spells"
                            onChange={this.handleChange}
                            onKeyDown={this.handleKeyDown}
                        />

                        <button onClick={()=>this.onSearch}>Search </button>
                        </div>
                    </div>

                    <div>
                        <h2 style={{color:"white"}}>
                            {this.state.search? "Search Results": null}
                        </h2>

                        {this.state.search? (<h2 style={{color:"white", paddingTop:"50px", paddingBottom:"30px", marginTop:"20px",fontSize:"14px"}}>Showing results for "{this.state.searchTerm}"</h2>): null}
                    </div>
                    
                    <div className="spell-content">
                        
                        {this.state.search? (
                        
                          <>  
                          {this.state.searchItems.map(item=>{
                               
                               return <Spell
                                    key={item.name}
                                    data = {item}
                                    test={this.getProps}
                                />
                                
                            })}
                            
                            </>
                        )
                        :
                        
                        this.renderSpells() }
                        
                    </div>
                   <div className="spell-pages">
                   {(this.state.previousPage===0)? null: (<button onClick={()=>this.previousPageClick()}>Previous page</button>)} <button onClick={()=>this.nextPageClick()}>Next page</button>
                   </div>
                </div>
              
               <div className="potions-list">
                            <SpellInfo 
                            data={this.state.selectedSpell}
                            show={this.state.show}
                            handleClose={this.hideSpell}
                            />
                        </div>
            </div>
        )
    }
}

export default SpellsPage; 