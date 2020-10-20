import React from 'react';
import { Link } from 'react-router-dom';


const PhotoIndexItem = props => (
    
    <li>
        <p>{props.title}</p> <br />
        <p>{props.description}</p> <br />
        <p>{props.uploader_id}</p> <br />
        <p>{props.key}</p>
    </li>
)


export default PhotoIndexItem;