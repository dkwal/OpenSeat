import React from "react"
import RestaurantIndexItem from "./restaurant_index_item"

class RestaurantIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            autoCompleteResults: [],
            itemSelected: {},
            showItemSelected: false
        };

        $.getJSON('/api/restaurants?q=' + this.state.term)
            .then(response => this.setState({ autoCompleteResults: Object.values(response) }));
    }

    getAutoCompleteResults(e){
        this.setState({
            term: e.target.value
        }, () => {
            $.getJSON('/api/restaurants?q=' + this.state.term)
                .then(response => this.setState({ autoCompleteResults: Object.values(response) }))
        });
    }

    render() {
        let autoCompleteList = this.state.autoCompleteResults.map((restaurant, index) => (
            <li key={index}>
                <RestaurantIndexItem restaurant={restaurant}/>
            </li>
        ))
        return (
            <div>
                <div className="search-bar">
                    <input ref={ (input) => { this.searchBar = input } }
                        value={ this.state.term }
                        onChange={ this.getAutoCompleteResults.bind(this) }
                        type='text'
                        placeholder='Search...' />
                </div>
                <div className="restaurant-index-container">
                    <div className="header-container">
                        <h2 className="restaurants-header">Recommended restaurants</h2>
                    </div>
                    <ul className="restaurant-index">
                        { autoCompleteList }
                    </ul>
                </div>
                {/* <div className="restaurant-index-container">
                    <div className="header-container">
                        <h2 className="restaurants-header">Recommended restaurants</h2>
                    </div>
                    <ul className="restaurant-index">
                        {this.props.restaurants.map( restaurant => (
                            <li key={restaurant.id}>
                                <RestaurantIndexItem restaurant={restaurant}/>
                            </li>
                        ))}
                    </ul>
                </div> */}
            </div>
        )
    } 
}

export default RestaurantIndex;