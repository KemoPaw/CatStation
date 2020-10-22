import React from 'react';

class PhotoShow extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>

                <h1>Welcome to a Photo's Show Page!</h1>
                <img  src={this.props.photo.photoUrl} />
                <h2>{this.props.photo.photoUrl}</h2>
            </div>
        )
    }
}


export default PhotoShow;