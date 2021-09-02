import React from 'react'; 
import Banner from '../../components/Banner/banner.component'
import Spell from '../../components/Spell/Spell.component';

import './spellspage.style.scss'

const url = "https://www.potterapi.com/v1/characters?key=$2a$10$GzKuSI6dT5dC1NuVyeI8eugv./Vo4BMBLOCTS4d1Gfjge.4mwp5Gi";
const url2 = "https://www.potterapi.com/v1/sortingHat"
class SpellsPage extends React.Component {
    state = {
        spells:[],
        loading:false,
        currentPage: 1,
        previousPage:0,
    }

componentDidMount(){
    this.setState({loading:true})
    const url = "https://the-harry-potter-database.herokuapp.com/api/1/spells/all"
    this.fetchSpells(url)
}

fetchSpells=(url)=>{
    fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            this.setState({
                spells:[...this.state.spells, ...data], 
                loading:false
            })
        })
}

renderSpells=(spells)=>{
    return spells.map((element,i)=>{
        if (i>=this.state.previousPage*20 && i<this.state.currentPage*20){
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
  

    render() { 
        return (
            <div className="spellspage-container">
                <div className="spell-heading">
                    <h2>Spells</h2>
                </div>
                <div>
                    <div>
                       <p> Search and popular spells</p>
                       
                    </div>
                    
                    <div className="spell-content">
                        {this.state.loading? (<h2 style={{color:"white"}}>Loading</h2>): null }
                        {this.renderSpells(this.state.spells)}
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