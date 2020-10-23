import React from 'react';

class PhotoShow extends React.Component{
    constructor(props){
        super(props);
        this.removePhoto = this.removePhoto.bind(this);
    }

    removePhoto(){
        this.props.deletePhoto(this.props.photo.id).then(() => {
            this.props.history.push(`/photos`);
        })
    }


    render(){
        if (!this.props.photo) return null;
        return(
            <div>
                <h1>Title: {this.props.photo.title}</h1>
                <h3>Description: {this.props.photo.description}</h3>

                <div>
                    <button type="button" onClick={() => this.removePhoto()}>Remove Photo</button>
                </div>

                {/* <h5>Uploaded by: {this.props.photo.uploader_id}</h5> */}

                <img  height="700px" width="auto" src={this.props.photo.photoUrl} />
                
            </div>
        )
    }
}


export default PhotoShow;