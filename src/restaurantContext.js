import React, { Component } from 'react';
import items from './restaurantData'

const FoodContext = React.createContext();

class FoodProvider extends Component {
    state  ={
        foods:[],
        sortedFoods:[],
        type: 'all'
    };
    //getData{}
    componentDidMount(){
        let foods = this.formatData(items)
        this.setState({
            foods,
            sortedFoods: foods
        })
    }

    formatData(items){
        let tempItems = items.map(item =>{
            let id = item.sys.id
            let image = item.fields.image.field.file.url;
            let food = {...item.fields, image, id}
            return food
        });
        return tempItems
    }

    // getRoom = (slug) =>{
    //     let tempRooms = [...this.state.rooms];
    //     const room = tempRooms.find((room) => room.slug === slug);
    //     return room;
    // }

    handleChange = event =>{
        const target = event.target
        const value = event.type ==='checkbox' ? target.checked:target.value
        const name = event.target.name;
        this.setState({
            [name]:value
        }, this.filterFoods)
    };

    filterFoods = () =>{
        let{
            foods, type
        } = this.state
        let tempFoods = [...foods];
        if(type !== 'all'){
            tempFoods = tempFoods.filter(food => food.type === type)
        }
        this.setState({
            sortedFoods:tempFoods
        });
    }

    render() {
        return (
            <FoodContext.Provider value={{
            ...this.state,
            handleChange: this.handleChange
            // getRoom:this.getRoom
            }
            }
            > 
            {this.props.children}
            </FoodContext.Provider>
        )
    }
}

const FoodConsumer = FoodContext.Consumer;

export function withFoodConsumer(Component){
    return function ConsumerWrapper(props){
        return <FoodConsumer>
            {value => <Component{...props} context ={value} />}
        </FoodConsumer>
    }
}

export {FoodProvider,FoodConsumer,FoodContext};