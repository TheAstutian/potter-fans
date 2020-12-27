import React, {Component} from 'react';
import FaceCollection from '../../components/FaceCollection/facecollection.component';

class Hogwarts extends Component {
    constructor () {
        super ();
        this.state = {

        }
    }

   

    render () {
        return (
         <div>
             <h1>Hogwarts School of Wizardry </h1>
                <FaceCollection />

         </div>
        )
    }
}

export default Hogwarts; 
