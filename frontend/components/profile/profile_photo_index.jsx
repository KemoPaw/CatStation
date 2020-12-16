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
        console.log(this.state);
        return(
            <div className="photo-index-div">
                <ul className="photo-index-ul">
                    {
                        photos.map(photo=> {
                            return (<ProfilePhotoIndexItem
                                key={photo.id}
                                photo={photo}
                                // photos={photos}
                            />)
                        })
                    }
                </ul>
             

            </div>
        )
    };
}

export default ProfilePhotoIndex;