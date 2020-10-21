import React from 'react';
import { Link } from 'react-router-dom';


const PhotoIndexItem = props => {
    debugger
    return (<li>
        <img src={props.photo.photoUrl} height="100px" width="100px" alt="Hello from img tag"/>
    </li>)
}


export default PhotoIndexItem;