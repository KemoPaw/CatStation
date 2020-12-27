import React from 'react';
import { Link } from 'react-router-dom';


class SearchItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }

    }

    componentDidMount(){
        // console.log("Hello!");
        // console.log(this.props.location);
    }

    render(){
        const {key, id, photo} = this.props;
         return (

                //  <li className="photo-index-li" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} >
                 <li className="photo-index-li" >
                      
                            <Link to={`/photos/${id}`} className="photo-index-item-link">
                                {/* <div className="photo-index-item-text">{photo.title}</div> */}
                                 <div className="photo-index-item">
                                    <img src={photo.photoUrl} />

                                 </div>
                            </Link>

                       {/* </div> */}
                 </li>
             )


    }
   
};

export default SearchItem;