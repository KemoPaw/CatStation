import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePhotoIndex from './profile_photo_index_container';


class Profile extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     profileUser: "",
        // };
    }

    componentDidMount(){

        window.scrollTo(0, 0);

        // console.log(this.props.profileUser);
        this.props.fetchUsers();
        this.props.fetchPhotos();

        // let arr = this.props.location.pathname.split("/");
        // const profileUsername = arr[arr.length -1];
        // console.log(profileUsername)
        // this.setState({profileUser: profileUsername});


    }

    render(){
        // if (!this.props.profileUser) return null;

        // if (!profileUsername) return null;
        // let arr = this.props.location.pathname.split("/");
        // let profileUsername = arr[arr.length -1];
        
        return(
            <div>
                <p>Profile Container</p>
                {/* <p>Add Username Here</p> */}
                <h1>{this.props.profileUser.username}</h1>

                <div>
                    <p>
                        Add Photo Gallery Here
                    </p>
                </div>
                {/* <p>{this.props.profileUser}</p> */}
                <ProfilePhotoIndex profileUserId={this.props.profileUser.id}/>

            </div>
            
            
        )
    }
}

export default Profile;