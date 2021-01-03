import React from 'react'
import Restaurant from '../pages/Restaurant'
import Food from './Food'



export default function FoodsList({foods}) {
    if(foods.length === 0){
        return (
            <div className="empty-search">
                <h3>bla bla bla no room filter</h3>
            </div>
        )
    }

    // return <section className="roomsList">
    //     <div className="roomslist-center">
    //         {
    //             rooms.map(item =>{
    //                 return <Room key={item.id} room={item}/>;
    //             })
    //         }
    //     </div>
    // </section>

    return <div className="menu-container">
            {
                foods.map(food =>{
                    return <Food key={food.id} food={food}/>
                })
            }
        </div>
    
        
    
    
                    
}
