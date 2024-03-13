import React from 'react';
import HousePage from './housepage';

const Slytherin = () => {
  const data={
    name: "Slytherin",
    badgeImg: "https://images.desenio.com/zoom/wb0014-8harrypotter-slytherin50x70-64059-84203.jpg?auto=compress%2Cformat&fit=max&w=384",
    commonRoomImg: "https://images.ctfassets.net/usf1vwtuqyxm/7xvjjnk3ohlMXpKfQ5XxUs/48b84a7470b321832a4602324d807f8c/the-slytherin-common-room_3_1800x1248.png",
    color:"green",
  }
  return (
    <>
    <HousePage data={data}/>
    
    </>
)
}

export default Slytherin