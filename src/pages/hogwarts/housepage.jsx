import React from 'react';
import './housepage.scss';

const HousePage =(props)=>{

    const {name, color, badgeImg, commonRoomImg} = props.data;
return(<div className='housepage'>
        <div className='house-header' id={` ${name}`} style ={{
                backgroundImage: `url(${commonRoomImg})`
                }}>

            <h1 style={{color:`${color}`}}>{name}</h1>
            <img src={badgeImg} />
        </div>

        <div className={`house-header ${name}`}>
            Staff and students
            Past members. 
        </div>            

        <div>
            Information
        </div>


    </div>)
}



export default HousePage;