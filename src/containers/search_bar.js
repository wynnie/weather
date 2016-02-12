import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.state = {term: ''};

        //Take the existing function and bind it to this
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    //All DOM change functions get an event object. THis is not react, normal JS
    onInputChange (event) {
        //Whenever a callback uses "this", this has a mystery context. Therefore
        //you have to bind the context as in the constructor
        this.setState({term: event.target.value});
    }
    onFormSubmit(event) {
        //Prevent browser from submitting the form and reloading the app
        //We are using form so that <Enter> key can be pressed for submit
        //or the button can be pressed
        event.preventDefault();

        //We need to go and fetch weather data now
        this.props.fetchWeather(this.state.term);

        //Clear the search bar
        this.setState({term: ''});
    }
    render() {
        return (
            //Controlled input below, i.e input value depends on state and not
            //the other way around
            //input-group is from bootstrap
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five-day forecast in your cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

//First argument is null because there is no app state here
export default connect(null,mapDispatchToProps)(SearchBar);
