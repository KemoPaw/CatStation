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
            <div className="photo-show-div">

                <div className="photo-show-content">
                    <img height="auto" width="75%" src={this.props.photo.photoUrl} />
                </div>


                <div className="photo-show-content">
                    <h1 className="photo-show-text">{this.props.photo.title}</h1>
                    <h3 className="photo-show-text">{this.props.photo.description}</h3>

                    <div>
                        <button className="photo-show-remove" type="button" onClick={() => this.removePhoto()}>Remove Photo</button>
                    </div>
                </div>

                {/* <h5>Uploaded by: {this.props.photo.uploader_id}</h5> */}

               
                
            </div>
        )
    }
}


export default PhotoShow;