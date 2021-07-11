import React, {Component} from 'react';
import Banner from '../../components/Banner/banner.component';
import FaceCollection from '../../components/FaceCollection/facecollection.component';
import './hogwarts.style.scss'


const Hogwarts = () => (
         <div className='hogwarts-container'>
             <Banner imagelink='https://cdn.pixabay.com/photo/2015/09/20/22/38/library-948965_1280.jpg' content='School of Wizardry'/>                
             
             <div>
                Houses. Square with color of house as background.
            </div>
            
            <div>

             <h2>Hogwart Staff</h2>
                <FaceCollection />
            </div>
            <div>
                Sorting hat. Have you been sorted?
                Or Just import sorting hat Component
            </div>

         </div>
        )
   
export default Hogwarts; 
