import React, {Component} from 'react';
import Banner from '../../components/Banner/banner.component';
import FaceCollection from '../../components/FaceCollection/facecollection.component';
import './hogwarts.style.scss'


const Hogwarts = () => (
         <div className='hogwarts-container'>
             <Banner imagelink='https://cdn.pixabay.com/photo/2015/09/20/22/38/library-948965_1280.jpg'/>                
             <span>Hogwarts</span>
             <p>Welcome to Hogwarts, School of Wizardry</p>
                <div>

                </div>
                <h2>These are the staff of Hogwarts</h2>
                <FaceCollection />

         </div>
        )
   
export default Hogwarts; 
