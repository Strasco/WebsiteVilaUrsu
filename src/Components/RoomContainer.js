import React from "react";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomContainer);

// import React from 'react'
// import RoomsList from './RoomsList'
// import {RoomConsumer} from '../Context'
// import Loading from './Loading'

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//            {
//                (value) =>{
//                     const {loading, sortedRooms, rooms} = value
//                     if(loading){
//                         return <Loading/>;
//                     }
//                 return (
//                     <div>
//                     Hello from Rooms Container
//                     <RoomsList rooms = {sortedRooms}/>
//                     </div>
//                    )
//                }
//            }
//         </RoomConsumer>

//         );
// }
