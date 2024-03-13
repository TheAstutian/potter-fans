import React from 'react'
import HousePage from './housepage'

const Gryffindor = () => {
  const data={
    name: "Gryffindor",
    badgeImg: "https://images.desenio.com/zoom/wb0013-8harrypotter-gryffindor50x70-97281-41200.jpg?auto=compress%2Cformat&fit=max&w=384",
    commonRoomImg: "https://wallpapercave.com/wp/wp8128250.jpg",
    color:"#722f37",
  }
  return (
    <>
    <HousePage data={data}/>
    
    </>
  )
}

export default Gryffindor
