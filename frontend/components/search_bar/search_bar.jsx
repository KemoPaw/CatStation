import React from 'react';
import { Link } from 'react-router-dom';

class searchBar extends React.Component{

       constructor(props){

             super(props);
             this.state = {
                 keyword: "",
             }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

       }

    // componentDidMount(){
    //     this.props.fetchPhotos();
    // }

    handleSubmit(e) {
        e.preventDefault();
        // let searchTerm = this.state.keyword;
        // this.props.fetchFilteredPhotos(this.state.keyword);
        // this.setState({keyword: ''});
        // console.log(this.state.keyword)
        // .then(() => {
        // this.props.history.push(`/search/${searchTerm}`)});
        this.setState({keyword: ""});
    }
    

    handleInput(field){
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }


    render() {

        return(
            <div>
                {/* <form onSubmit={this.handleSubmit}> */}
                    <input id="search-bar-input" type="text" placeholder="Search for photos by title..." onChange={this.handleInput("keyword")}></input>
                    <Link style={{ textDecoration: 'none' }} to={`/search/${this.state.keyword}`}>
                        <button id="search-bar-submit" type="submit" >Search</button>
                    </Link>

                {/* </form> */}
            </div>
        )
    }
}

export default searchBar; 