import React from 'react'; 
import Banner from '../../components/Banner/banner.component'


const url = "https://www.potterapi.com/v1/characters?key=$2a$10$GzKuSI6dT5dC1NuVyeI8eugv./Vo4BMBLOCTS4d1Gfjge.4mwp5Gi";
const url2 = "https://www.potterapi.com/v1/sortingHat"
class SpellsPage extends React.Component {
    state = {

    }

componentDidMount(){
    fetch(url2)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
        })
}
   

    render() { 
        return (
            <div>
                <div style={{border:"2px solid white"}}>
                <Banner  content='Abracadabra!'/>
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