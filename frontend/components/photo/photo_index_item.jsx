import React from 'react';
import { Link } from 'react-router-dom';


const PhotoIndexItem = props => (
    
    <li className="photo-index-li">
        <img className="photo-index-img" src={props.photo.photoUrl} />
    </li>


)

export default PhotoIndexItem;