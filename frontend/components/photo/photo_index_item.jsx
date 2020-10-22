import React from 'react';
import { Link } from 'react-router-dom';


const PhotoIndexItem = props => {
    return (

        <li className="photo-index-li">
            
            <Link className="sample" to={`/photos/${props.photo.id}`}>
                <img className="photo-index-img" src={props.photo.photoUrl} />
            </Link>

        </li>
    )
};

export default PhotoIndexItem;