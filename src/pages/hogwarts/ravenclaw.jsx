import React, {useState, useEffect} from 'react';
import HousePage from './housepage';

const Ravenclaw = () => {
    const data={
      name: "Ravenclaw",
      badgeImg: "https://images.desenio.com/zoom/wb0016-8harrypotter-ravenclaw50x70-79738-77537.jpg?auto=compress%2Cformat&fit=max&w=384",
      commonRoomImg: "https://wallpapercave.com/wp/wp11685557.jpg",
      color: "#3da9fc",
      motto:"Wit beyond measure is man's greatest treasure",
    }

    const [houseMembers, setHouseMembers] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      
      try{
        await fetch('https://hp-api.onrender.com/api/characters/house/ravenclaw').then(
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

export default Ravenclaw