import React from "react";
import Food from "./Food";

export default function FoodsList({ foods }) {
  if (foods.length === 0) {
    return (
      <div className="empty-search">
        <h3>bla bla bla no room filter</h3>
      </div>
    );
  }

  return (
    <div className="menu-container">
      <div className="row no-gutters d-flex justify-content-center">
        {foods.map((food) => {
          return <Food key={food.id} food={food} />;
        })}
      </div>
    </div>
  );
}
