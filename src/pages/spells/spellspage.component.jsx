import React from 'react'; 
import Banner from '../../components/Banner/banner.component'


const url = "https://www.potterapi.com/v1/characters?key=$2a$10$GzKuSI6dT5dC1NuVyeI8eugv./Vo4BMBLOCTS4d1Gfjge.4mwp5Gi";
const url2 = "https://www.potterapi.com/v1/sortingHat"
class SpellsPage extends React.Component {
    state = {
        spells:[],
        loading:false,
    }

componentDidMount(){
    this.setState({loading:true})
    const url = "https://the-harry-potter-database.herokuapp.com/api/1/spells/all"
    this.fetchItems(url)
}

fetchItems=(url)=>{
    fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            this.setState({spells:data, loading:false})
        })
}
   

    render() { 
        return (
            <div>
                <div style={{border:"2px solid white"}}>
                
                </div>
                <div>
                    <div>
                       <p> Serch and popular spells</p>
                    </div>
                    <div>
                        Content of spells
                    </div>
                </div>
            </div>
        )
    }
}

export default SpellsPage; 