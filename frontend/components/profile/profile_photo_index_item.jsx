import React from 'react';
import { Link } from 'react-router-dom';


class ProfilePhotoIndexItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }

    }
    render () {

        return (

        <li className="photo-index-li">
            <Link to={`/photos/${this.props.photo.id}`} className="photo-index-item-link">
                <div className="photo-index-item">
                    <img src={this.props.photo.photoUrl} />
                </div>
            </Link>

            {/* <div className="photo-index-item-div">
            </div> */}
            

        </li>
    )

    }
    
};

export default ProfilePhotoIndexItem;