import React from 'react'; 
import Spell from '../../components/Spell/Spell.component';

import './spellspage.style.scss'


class SpellsPage extends React.Component {
    state = {
        spells:[],
        loading:false,
        currentPage: 1,
        previousPage:0,
        searchTerm:"",
        search: false,
        searchItems:[],
        popular:false,
    }

componentDidMount(){
    this.setState({loading:true})
    const url = "https://api.potterdb.com/v1/spells"
    this.fetchSpells(url)
}

fetchSpells=(url)=>{
    fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            this.setState({
                spells:[...this.state.spells, ...data.data], 
                loading:false
            })
        })
}

renderSpells=()=>{
    const {spells} = this.state; 
    return spells.map((element,i)=>{
        if (i>=this.state.previousPage*20 && i<this.state.currentPage*20){
            
            return <Spell
                    key={i}
                    data = {spells[i]}
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

   this.setState({...this.state, searchItems:searchResults})
   
   this.setState({search:true})


   /* const {spells,searchTerm, search} = this.state; 
    if (searchTerm===""){
        this.setState({search:false})
    }
    else {
        return this.state.spells.map((element,i, spell)=>{
            if (spell[i].name.toLowerCase().includes(searchTerm.toLowerCase()) ){
                return <Spell
                    key={i}
                    name={spells[i].name}
                    description={spells[i].description}  
                    other_name={spells[i].other_name}
                    prononciation={spells[i].pronunciation}
                    spell_type={spells[i].spell_type}
                    mention= {spells[i].mention}
                    etymology={spells[i].etymology}
                    note = {spells[i].note}
            />
    
            } 
        })
    } */

}

handleChange= (e)=>{
    this.setState({searchTerm: e.target.value})
}

handleKeyDown = (e) =>{
    if (e.key==='Enter'){
        this.onSearch()
    }
}

    render() { 
        return (
            <div className="spellspage-container">
                <div className="spell-heading">
                    <h2>{this.state.popular? "Popular Spells":"All Spells"}</h2>
                </div>
                <div>
                    <div className="spell-search">
                        <input 
                            placeholder="Search spells"
                            onChange={this.handleChange}
                            onKeyDown={this.handleKeyDown}
                        />

                        <button onClick={()=>this.onSearch()}>Search </button>
                       
                    </div>

                    <div>
                        {this.state.loading? (<h2 style={{color:"white"}}>Loading . . .</h2>): null }
                        {this.state.search? (<h2 style={{color:"white"}}> Search results </h2>): null}
                    </div>
                    
                    <div className="spell-content">
                        
                        {this.state.search? this.onSearch : this.state.popular? 
                        
                            this.state.searchItems.map(item=>{
                                <Spell
                                    key={item.name}
                                    data = {item}
                                />
                            })
                        
                        :
                        
                        this.renderSpells() }
                        
                    </div>
                   <div className="spell-pages">
                   {(this.state.previousPage===0)? null: (<button onClick={()=>this.previousPageClick()}>Previous page</button>)} <button onClick={()=>this.nextPageClick()}>Next page</button>
                   </div>
                </div>
            </div>
        )
    }
}

export default SpellsPage; 