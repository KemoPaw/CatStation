import React from 'react';

class PhotoShow extends React.Component{
    constructor(props){
        super(props);
        this.removePhoto = this.removePhoto.bind(this);
    }

    removePhoto(){
        console.log(this.props.photo.uploader_id);
        let checkArr = Object.values(this.props.users).map((user) => user.id);
        console.log(checkArr);
        // console.log(this.props.users);
        // console.log(this.props.cureentUser);
        if(this.props.photo.uploader_id === this.session.user.id){
             this.props.deletePhoto(this.props.photo.id).then(() => {
               this.props.history.push(`/photos`);
             });
        } else {
            console.log("no")
        }
       
    }


    render(){
        if (!this.props.photo) return null;
        return(
            <div className="photo-show-div">

                <div className="photo-show-img">
                    <img height="auto" width="75%" src={this.props.photo.photoUrl} />
                </div>


                <div className="photo-show-content">
                    <h1 className="photo-show-text">{this.props.photo.title}</h1>
                    <h3 className="photo-show-text">{this.props.photo.description}</h3>

                    <div>
                        {/* {this.props.photo.uploader_id === this.state.user.id ? <button className="photo-show-remove" type="button" onClick={() => this.removePhoto()}>Remove Photo</button> : <div></div>} */}
                        <button className="photo-show-remove" type="button" onClick={() => this.removePhoto()}>Remove Photo</button>
                    </div>
                </div>

                {/* <h5>Uploaded by: {this.props.photo.uploader_id}</h5> */}

               
                
            </div>
        )
    }
}


export default PhotoShow;