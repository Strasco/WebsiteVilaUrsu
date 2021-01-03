import React from 'react'
import Rooms from '../pages/Rooms'
import Room from './Room'



export default function RoomsList({rooms}) {
    if(rooms.length === 0){
        return (
            <div className="empty-search">
                <h3>bla bla bla no room filter</h3>
            </div>
        )
    }
    return <section className="roomsList">
        <div className="roomslist-center">
            {
                rooms.map(item =>{
                    return <Room key={item.id} room={item}/>;
                })
            }
        </div>
    </section>
}
