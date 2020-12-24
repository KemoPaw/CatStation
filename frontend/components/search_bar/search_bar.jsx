import React from 'react';
import { Link } from 'react-router-dom';

class searchBar extends React.Component{
    render() {

        return(
            <div>

                <input type="text" placeholder="Hello from the Search Bar"></input>
            </div>
        )
    }
}

export default searchBar;