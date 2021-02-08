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
         <div className='hogwarts-container'>
             <span>Hogwarts</span>
             <p>Welcome to Hogwarts, School of Wizardry</p>
                <div>

                </div>
                <FaceCollection />

         </div>
        )
    }
}

export default Hogwarts; 
