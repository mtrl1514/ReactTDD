import React, { Component} from 'react';
import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList'

export default class RestaurantListPage extends Component {
    state = { restaurantNames: [],
        showNewRestaurantForm : false,
     }
    
     handleShowNewRestaurnatForm = () => {
         console.log('handleShowNewRestaurnatForm');
         this.setState({ showNewRestaurantForm: true });
     }

    handelAddRestaurant = (newRestaurantName) => {
        this.setState(state => ({
            showNewRestaurantForm: false,
            restaurantNames: [
                newRestaurantName,
                ...state.restaurantNames,
            ],
        }));

    }
    
    render() {
        const { restaurantNames,
            showNewRestaurantForm
         } = this.state;
         console.log( {showNewRestaurantForm} );
        return (
            <div>
                <button
                    data-test="addRestaurantButton"
                    onClick={this.handleShowNewRestaurnatForm}
                >
                    Add Restaurant
                </button>
                {
                    showNewRestaurantForm
                        ? (
                            <NewRestaurantForm 
                            onSave={this.handelAddRestaurant}
                            />
                        )
                        : null
                }
               
                <RestaurantList restaurantNames={restaurantNames} />
            </div>
        );
    }
}