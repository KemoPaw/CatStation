import React from 'react';
import { Link } from 'react-router-dom';


const PhotoIndexItem = props => {
    return (

        <li className="photo-index-li">
            <Link to={`/photos/${props.photo.id}`}>
                 <img src={props.photo.photoUrl} />
            </Link>

            {/* <div className="photo-index-item-div">
            </div> */}
            

        </li>
    )
};

export default PhotoIndexItem;