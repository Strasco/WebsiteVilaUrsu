import React from 'react'
import FoodsList from './FoodsList'
import {withFoodConsumer} from '../restaurantContext'
import FoodFilter from './FoodFilter'

function FoodContainer({context}){
    const{foods, sortedFoods} = context;

    return (
        <div className="wrapper">
            <div className="menu-container">
                <FoodFilter foods={foods}></FoodFilter>
                <FoodsList foods ={sortedFoods}></FoodsList>
            </div>
        </div>
    )
}

export default withFoodConsumer(FoodContainer)