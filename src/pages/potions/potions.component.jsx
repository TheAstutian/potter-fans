import React from 'react'; 
import Banner from '../../components/Banner/banner.component'


const url = "https://the-harry-potter-database.herokuapp.com/api/1/potions/all"
class PotionsPage extends React.Component {
    state = {
        potions:[]
    }

componentDidMount(){
    fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            this.setState({potions:data})
        })
        
}
   

    render() { 
        return (
            <div>
                <div style={{border:"2px solid white"}}>
                <Banner  content='Potions'/>
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

export default PotionsPage; 