import React, {Component} from 'react';
import Banner from '../../components/Banner/banner.component';
import FaceCollection from '../../components/FaceCollection/facecollection.component';
import './hogwarts.style.scss'

const houseData =[];

const Hogwarts = () => (
         <div className='hogwarts-container'>
             <Banner imagelink='https://cdn.pixabay.com/photo/2015/09/20/22/38/library-948965_1280.jpg'/>                
             
        <div>
        <div>
            <span>Story about Hogwarts</span>
        </div>
                <div>
                    <p>Slytherin</p>
                </div>
                <div>
                    <p>Gryfindor</p>
                </div>
                <div>
                    <p>Hufflepuff</p>
                </div>
                <div>
                    <p>Ravenclaw</p>
                </div>
                
            </div>
            
            <div>

             <h2>Hogwart Staff</h2>
                <FaceCollection />
            </div>
            <div>
               <span>
               Sorting hat. Have you been sorted?
                Or Just import sorting hat Component
                </span>
            </div>

         </div>
        )
   
export default Hogwarts; 
