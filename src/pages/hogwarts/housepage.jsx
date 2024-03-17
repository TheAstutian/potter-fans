import React from 'react';
import './housepage.scss';
import Face from '../../components/Face/face.component';
import parse from 'html-react-parser';

const HousePage =(props)=>{
    
  

const {name, color, badgeImg, aboutText, commonRoomImg,motto} = props.data;

      
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

        <div className='about-house'>
            <h2 style={{color:`${color}`}}>About {name}</h2>

          <section style={{color:`${color}`}}>
              {parse(`${aboutText}`)}
        </section>  
        </div>

        <div className={`mid-content ${name}`}>
            <h2 style={{color:`${color}`}}>Notable House Members </h2>
            <div className='staff'>
            {
                props.houseMembers.map((item, i)=>{ 
                    if (i<11){
                        return <Face  key={item.id} 
                                 data={item}
                                 color={color}   
                    />}
                    
                })
            }
            </div>
        </div>            

     


    </div>)
}



export default HousePage;