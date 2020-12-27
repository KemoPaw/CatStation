import React from 'react';
import { Link } from 'react-router-dom';

class searchBar extends React.Component{

       constructor(props){

             super(props);
             this.state = {
                 searchTerm: "",
             }

        this.handleInput = this.handleInput.bind(this);

       }

    componentDidMount(){
        this.props.fetchPhotos();
    }
    
    handleInput(field){
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }


    render() {

        return(
            <div>
                <input id="search-bar-input" type="text" placeholder="Hello from the Search Bar" onChange={this.handleInput("searchTerm")}></input>
                <button id="search-bar-submit" type="submit">Search</button>
            </div>
        )
    }
}

export default searchBar; 