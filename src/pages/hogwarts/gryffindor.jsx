import React, {useState, useEffect} from 'react';
import HousePage from './housepage'

const Gryffindor = () => {
  const data={
    name: "Gryffindor",
    badgeImg: "https://images.desenio.com/zoom/wb0013-8harrypotter-gryffindor50x70-97281-41200.jpg?auto=compress%2Cformat&fit=max&w=384",
    commonRoomImg: "https://wallpapercave.com/wp/wp8128250.jpg",
    color:"#ae0001",
    motto:"Their daring, nerve and chivalry set Gryffindors apart",
    aboutText: "<p>Founded by Godric Gryffindor, students are sorted into this house based on characteristics such as courage, chivalry, nerve and determination.</p><p>Gryffindor corresponded roughly to the element of fire, and it was for this reason that the colors scarlet and gold were chosen to represent the house. The emblematic animal of the house a lion, and its house point hourglass was filled with rubies. Sir Nicholas de Mimsy-Porpington, also known as 'Nearly Headless Nick', was the House ghost.</p><p>The Head of House before and during Harry Potter's time was Minerva McGonagall, who became House Head when she was appointed Transfiguration professor at Hogwarts. She took over Albus Dumbledore's previous teaching position when he became Headmaster. Neville Longbottom was known to have become the Head of House after Minerva was made Headmistress in 1998 following the end of the Second Wizarding War.</p>"
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
