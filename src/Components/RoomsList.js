import React from "react";
import Rooms from "../pages/Rooms";
import Room from "./Room";

export default function RoomsList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>bla bla bla no room filter</h3>
      </div>
    );
  }
  return (
    <section className="">
      <div className="row roomslist justify-content-center">
        {rooms.map((item) => {
          return (
            <div className="col-3 room-item ">
              <Room key={item.id} room={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
