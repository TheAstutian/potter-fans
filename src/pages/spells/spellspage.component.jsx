import React from 'react'; 
import Banner from '../../components/Banner/banner.component'

class SpellsPage extends React.Component {
    state = {

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