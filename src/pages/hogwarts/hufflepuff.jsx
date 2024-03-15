import React, {useState, useEffect} from 'react';
import HousePage from './housepage';

const Hufflepuff = () => {
  const data={
    name: "Hufflepuff",
    badgeImg: "https://images.desenio.com/zoom/wb0015-8harrypotter-hufflepuff50x70-42317-31642.jpg?auto=compress%2Cformat&fit=max&w=384",
    commonRoomImg: "https://staticdelivery.nexusmods.com/images/5113/3467060-1675806285.png",
    color:"yellow",
    motto:"You might belong in Hufflepuff, where they are just and loyal. Those patient Hufflepuffs are true, and unafraid of toil",

  }
  const [houseMembers, setHouseMembers] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      
      try{
        await fetch('https://hp-api.onrender.com/api/characters/house/hufflepuff').then(
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
/*
  const url='https://hp-api.onrender.com/api/characters/staff';
  const response=  await fetch(url);
  const data =  await response.json();
  console.log(data)
  this.setState({characters: data})*/

   
  return (
    <>
    <HousePage data={data} houseMembers={houseMembers}/>
    
    </>
  )
}

export default Hufflepuff