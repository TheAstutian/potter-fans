import React, {Component} from 'react';
import Banner from '../../components/Banner/banner.component';
import FaceCollection from '../../components/FaceCollection/facecollection.component';
import './hogwarts.style.scss'


const Hogwarts = () => (
         <div className='hogwarts-container'>
             <Banner imagelink='https://cdn.pixabay.com/photo/2015/09/20/22/38/library-948965_1280.jpg' content='Welcome to Hogwarts!'/>                
             <div>
             <span>The School of Wizardry!</span>
             <p>Welcome to Hogwarts, School of Wizardry</p>
             </div>
            
            <div>
             <h2>These are the staff of Hogwarts</h2>
                <FaceCollection />
            </div>
            <div>
                Sorting hat. Have you been sorted?
                Or Just import sorting hat Component
            </div>
            <div>
                Houses. Square with color of house as background.
            </div>

         </div>
        )
   
export default Hogwarts; 
