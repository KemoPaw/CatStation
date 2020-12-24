import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePhotoIndex from './profile_photo_index_container';

// import catProfileImage from '../../../app/assets/images/profile-background-cat.jpg'


class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            profileUser: "",
        };
        this.randomProfileBanner = this.randomProfileBanner.bind(this);

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

    componentWillUnmount(){
        // profileBannerPhoto = null;
    }

    randomProfileBanner(){
        // if (profileBannerPhoto) {
        //     return profileBannerPhoto
        // }
        // else {
            let randomProfileBannerPhotos = [
                window.proBannerOne,
                window.proBannerTwo,
                window.proBannerThree,
                window.proBannerFour,
                window.proBannerFive,
                window.proBannerSix,
                window.proBannerSeven,
                window.proBannerEight,
            ];
            // let randomPhoto = _.sample(randomProfileBannerPhotos);
            let randomPhoto = randomProfileBannerPhotos[Math.floor(Math.random() * randomProfileBannerPhotos.length)];
            // console.log(randomPhoto);
            return randomPhoto;

        // }
    }

    render(){
        if (!this.props.profileUser && !profileBannerPhoto) return null;

        // if (!profileUsername) return null;
        // let arr = this.props.location.pathname.split("/");
        // let profileUsername = arr[arr.length -1];
        // let profileBannerPhoto = this.randomProfileBanner();
        // let tempPhoto;
        // let profileBannerPhoto = undefined;
        
        let profileBannerPhoto = this.randomProfileBanner();

        
        return(
            <div className="profile-outer-div">
                {/* <p>Profile Container</p> */}
                {/* <p>Add Username Here</p> */}
                <h1 className="profile-header-username">
                    {this.props.profileUser.username}
                </h1>

                <img id="profile-header-img" src={profileBannerPhoto}>
                </img>

                <div className="profile-photo-header-div">
                    Uploaded Cat Images:
                </div>

                <div>
                    <ProfilePhotoIndex profileUserId={this.props.profileUser.id}/> 
                </div>

            </div>
            
            
        )
    }
}

export default Profile;