import React from 'react';
import HousePage from './housepage';

const Hufflepuff = () => {
  const data={
    name: "Hufflepuff",
    badgeImg: "https://images.desenio.com/zoom/wb0015-8harrypotter-hufflepuff50x70-42317-31642.jpg?auto=compress%2Cformat&fit=max&w=384",
    commonRoomImg: "https://staticdelivery.nexusmods.com/images/5113/3467060-1675806285.png",
    color:"yellow",
  }
  return (
    <>
    <HousePage data={data}/>
    
    </>
  )
}

export default Hufflepuff