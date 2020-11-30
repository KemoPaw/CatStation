import React from 'react';

class PhotoShow extends React.Component{
    constructor(props){
        super(props);
        this.removePhoto = this.removePhoto.bind(this);
        this.userIdToUsername = this.userIdToUsername.bind(this);
    }

    componentDidMount(){
    }

    removePhoto(){
        // console.log(this.props.photo.uploader_id);
        // let checkArr = Object.values(this.props.users).map((user) => user.id);
        // console.log(this.props.currentUser);

        // console.log(this.props.currentUser.id);
       
        this.props.deletePhoto(this.props.photo.id).then(() => {
        this.props.history.push(`/photos`)});
       
       
    }

    userIdToUsername(userId){
        // console.log(this.props.users);
        // console.log(Object.values(this.props.users));
        // console.log(typeof Object.values(this.props.users));
        let username = "";

        Object.values(this.props.users).map(ele => {
            if(ele.id === userId){
                // console.log(ele.id);
                username = this.props.users[ele.id].username;
            }
        })

        return username;

        // console.log(typeof this.props.users);
        // console.log("Hello");

        // console.log(Object.keys(this.props.users));
    }


    render(){
        let delButton = (this.props.photo.uploader_id === this.props.currentUser.id) ? <button className="photo-show-remove" type="button" onClick={() => this.removePhoto()}>Remove Photo</button> : <div className="photo-show-remove-div"></div>
        if (!this.props.photo) return null;
        return(
            <div className="photo-show-div">

                <div className="photo-show-img">
                    <img src={this.props.photo.photoUrl} />
                </div>


                <div className="photo-show-content">
                    <h1 className="photo-show-title">{this.props.photo.title}</h1>
                    <h1 className="photo-show-title">{this.userIdToUsername(this.props.photo.uploader_id)}</h1>
                    {/* <h1 className="photo-show-title">{this.props.users}</h1> */}

                    <h3 className="photo-show-text">{this.props.photo.description}</h3>

                    <div>
                        {/* {this.props.photo.uploader_id === this.state.user.id ? <button className="photo-show-remove" type="button" onClick={() => this.removePhoto()}>Remove Photo</button> : <div></div>} */}
                        {/* <button className="photo-show-remove" type="button" onClick={() => this.removePhoto()}>Remove Photo</button> */}
                        {delButton}
                    </div>
                </div>

                {/* <h5>Uploaded by: {this.props.photo.uploader_id}</h5> */}

               
                
            </div>
        )
    }
}


export default PhotoShow;