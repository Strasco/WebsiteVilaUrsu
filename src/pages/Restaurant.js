import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import FoodContainer from '../Components/FoodContainer'

//import FoodContainer '../Components/FoodContainer'
//import {Link} from 'react-router-dom'

export default function Restaurant() {
    return (
        <>
            <Hero hero="restaurantHero">
            <Banner title="Restaurant" subtitle="Best food in Straja"></Banner>
            </Hero>
            <FoodContainer></FoodContainer>
        </>
    )
}
