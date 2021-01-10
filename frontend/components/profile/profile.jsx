import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePhotoIndex from './profile_photo_index_container';

// import catProfileImage from '../../../app/assets/images/profile-background-cat.jpg'


class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            profileUser: "",
            currentImg: 0
        };
        // this.randomProfileBanner = this.randomProfileBanner.bind(this);

    }

    componentDidMount(){

        window.scrollTo(0, 0);

        // console.log(this.props.profileUser);
        this.props.fetchUsers();
        this.props.fetchPhotos();
        this.interval = setInterval(() => this.changeBackgroundImage(), 3500);

        // let arr = this.props.location.pathname.split("/");
        // const profileUsername = arr[arr.length -1];
        // console.log(profileUsername)
        // this.setState({profileBanner: this.randomProfileBanner()});
        // let profileBannerPhoto = this.randomProfileBanner();



    }

    componentWillUnmount() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    }

    changeBackgroundImage() {
      let newCurrentImg = 0;
      const {currentImg} = this.state;

       const profileBannerPhotos = [
                window.proBannerOne,
                window.proBannerTwo,
                window.proBannerThree,
                window.proBannerFour,
                window.proBannerFive,
                window.proBannerSix,
                window.proBannerSeven,
                window.proBannerEight,
        ];

      const numOfImages = profileBannerPhotos.length;

      if (currentImg !== numOfImages - 1) {
        newCurrentImg = currentImg + 1;
      }

      this.setState({currentImg: newCurrentImg});
    }

    render(){
        if (!this.props.profileUser ) return null;

         const {currentImg} = this.state;

        // if (!profileUsername) return null;
        // let arr = this.props.location.pathname.split("/");
        // let profileUsername = arr[arr.length -1];
        // let profileBannerPhoto = this.randomProfileBanner();
        // let tempPhoto;
        // let profileBannerPhoto = undefined;
        
        // let profileBannerPhoto = this.randomProfileBanner();

       
        const randomProfileBannerPhotos = [
                window.proBannerOne,
                window.proBannerTwo,
                window.proBannerThree,
                window.proBannerFour,
                window.proBannerFive,
                window.proBannerSix,
                window.proBannerSeven,
                window.proBannerEight,
        ];

        let profileBannerNumber =  this.props.profileUser.id % (randomProfileBannerPhotos.length - 1);
        const urlString = randomProfileBannerPhotos[currentImg];



        
        return(
            <div className="profile-outer-div">
                {/* <p>Profile Container</p> */}
                {/* <p>Add Username Here</p> */}
                <h1 className="profile-header-username">
                    {this.props.profileUser.username}
                </h1>

                <img id="profile-header-img" src={urlString}>
                </img>

                <div className="profile-photo-header-div">
                    {this.props.profileUser.username}'s Uploaded Cat Images:
                </div>

                <div>
                    <ProfilePhotoIndex profileUserId={this.props.profileUser.id}/> 
                </div>

            </div>
            
            
        )
    }
}

export default Profile;