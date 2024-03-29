import React, {useState, useEffect} from 'react';
import HousePage from './housepage';

const Slytherin = () => {
  const data={
    name: "Slytherin",
    badgeImg: "https://images.desenio.com/zoom/wb0014-8harrypotter-slytherin50x70-64059-84203.jpg?auto=compress%2Cformat&fit=max&w=384",
    commonRoomImg: "https://images.ctfassets.net/usf1vwtuqyxm/7xvjjnk3ohlMXpKfQ5XxUs/48b84a7470b321832a4602324d807f8c/the-slytherin-common-room_3_1800x1248.png",
    color:"green",
    motto:"Slytherin will help you on your way to greatness",
    aboutText: "<p>Slytherin was founded by the legendary wizard Salazar Slytherin. </br>In establishing the house, Salazar instructed the Sorting Hat to pick students who had a few particular characteristics he most valued – cunning, resourcefulness, leadership, and ambition. </p> <p>    The founder highly valued and favoured pure-blood students and the Sorting Hat admitted that it could be a factor when being sorted. Students of any blood status could be placed in the house but a Muggle-born is quite rare.</p><p> The emblematic animal of the house was a snake and the house's colours were green and silver. There were two notable heads of the house; Horace Slughorn took the role twice (first leaving in 1981 and then taking the role again from 1997 until leaving before 2016), and Severus Snape. The patron ghost of the house was the Bloody Baron.</p><p>Many Slytherin students tended to clique together (often acquiring leaders) which further exemplified Slytherin's ambitious qualities. Examples of these included Draco Malfoy's gang, Merula Snyde's gang, Pansy Parkinson's gang and Tom Riddle's gang (which later became the Death Eaters).</p>"
  }

const aboutText = "";
  const [houseMembers, setHouseMembers] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      
      try{
        await fetch('https://hp-api.onrender.com/api/characters/house/slytherin').then(
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

export default Slytherin