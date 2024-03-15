import React, {useState, useEffect} from 'react';
import HousePage from './housepage'

const Gryffindor = () => {
  const data={
    name: "Gryffindor",
    badgeImg: "https://images.desenio.com/zoom/wb0013-8harrypotter-gryffindor50x70-97281-41200.jpg?auto=compress%2Cformat&fit=max&w=384",
    commonRoomImg: "https://wallpapercave.com/wp/wp8128250.jpg",
    color:"#800020",
    motto:"Their daring, nerve and chivalry set Gryffindors apart",
  }
  
  const [houseMembers, setHouseMembers] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      
      try{
        await fetch('https://hp-api.onrender.com/api/characters/house/gryffindor').then(
          response=>response.json() 
        ).then(
          result=>{
            setHouseMembers(result)
            
          }          
        )
        window.scrollTo(0, 0)
      }catch(err){
        console.log(err)
      }
    };
    fetchData();
  },[])

  return (
    <>
    <HousePage data={data} houseMembers={houseMembers}/>
    
    </>
  )
}

export default Gryffindor
