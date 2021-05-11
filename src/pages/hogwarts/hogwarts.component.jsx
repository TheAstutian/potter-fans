import React, {Component} from 'react';
import FaceCollection from '../../components/FaceCollection/facecollection.component';
import './hogwarts.style.scss'


const Hogwarts = () => (
         <div className='hogwarts-container'>
             <span>Hogwarts</span>
             <p>Welcome to Hogwarts, School of Wizardry</p>
                <div>

                </div>
                <h2>These are the staff of Hogwarts</h2>
                <FaceCollection />

         </div>
        )
   
export default Hogwarts; 
