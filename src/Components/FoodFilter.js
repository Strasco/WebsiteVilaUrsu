import React from 'react'
import {useContext} from "react"
import {FoodContext} from "../restaurantContext"
import Title from "../Components/Title"

const getUnique=(items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
}
//get unique types


export default function FoodFilter({foods}) {
    const context = useContext(FoodContext)
    const{
        handleChange, type
    } = context;
    
    let types = getUnique(foods, 'type');
    //add all
    types = ['all',...types];
    //map to jsx
    types = types.map((item,index) =>{
    return <option value={item} key={index}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="Meniu"></Title>
            <form className="filter-form">
                {/* Select type */}
                <div className="form-group">
                    <label htmlFor="type">Masa</label>
                    <select name="type" id="type" value={type} 
                    className="form-control" onChange={handleChange}>{types}
                    </select>
                </div>
                {/* End of select type */}
            </form>
        </section>
    )
}
