import React from 'react';
import './housepage.scss';
import Face from '../../components/Face/face.component';

const HousePage =(props)=>{

    const {name, color, badgeImg, aboutText, commonRoomImg,motto} = props.data;
    console.log(props.houseMembers)
return(<div className='housepage'>
        <div className='house-header' id={` ${name}`} style ={{
                backgroundImage: `url(${commonRoomImg})`, backgroundSize:"cover"
                }}>

            <h1 style={{color:`${color}`}}>{name}</h1>
            <img src={badgeImg} />
        </div>
        <div className='motto'>
            <h3 style={{color:`${color}`}}>{motto}</h3>
        </div>

        <div className={`mid-content ${name}`}>
            <h2 style={{color:`${color}`}}>Notable House Members </h2>
            <div className='staff'>
            {
                props.houseMembers.map((item, i)=>{ 
                    if (i<11){
                        return <Face  key={item.id} 
                                 data={item}   
                    />}
                    
                })
            }
            </div>
        </div>            

        <div className='about-house'>
            <h2 style={{color:`${color}`}}>About {name}</h2>

          <span style={{color:`${color}`}}>{aboutText}</span>  
        </div>


    </div>)
}



export default HousePage;