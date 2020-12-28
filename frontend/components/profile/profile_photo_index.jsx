import React from 'react';
import ProfilePhotoIndexItem from './profile_photo_index_item';

class ProfilePhotoIndex extends React.Component {
      constructor(props){
        super(props);
      }

    componentDidMount(){
        // this.props.fetchPhotos();
        // this.props.fetchUsers();
    }

    render() {

        const { photos } = this.props;
        if (!photos) return null;
        // console.log(this.state);
        const {profileUserId} = this.props;
        // console.log(profileUserId);

        return(
            <div className="photo-profile-index-div">
                <ul className="photo-index-ul">
                    {
                        photos.map(photo=> {
                            if(photo.uploader_id === profileUserId){
                                return (<ProfilePhotoIndexItem
                                    key={photo.id}
                                    photo={photo}
                                    // photos={photos}
                                />)

                            }
                            else {
                                return null;
                            }
                        })
                    }
                </ul>
             

            </div>
        )
    };
}

export default ProfilePhotoIndex;