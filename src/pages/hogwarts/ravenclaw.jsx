import React from 'react';
import HousePage from './housepage';

const Ravenclaw = () => {
    const data={
      name: "Ravenclaw",
      badgeImg: "https://images.desenio.com/zoom/wb0016-8harrypotter-ravenclaw50x70-79738-77537.jpg?auto=compress%2Cformat&fit=max&w=384",
      commonRoomImg: "https://i.pinimg.com/736x/2e/68/a3/2e68a3525531aada507b76c35fd7a698.jpg",
      color: "blue",
    }
    return (
      <>
      <HousePage data={data}/>
      
      </>
  )
}

export default Ravenclaw