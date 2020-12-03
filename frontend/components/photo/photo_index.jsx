import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {

    componentDidMount(){
        this.props.fetchPhotos();
        this.props.fetchUsers();
    }

    render() {
        const { photos } = this.props;
        return(
            <div className="photo-index-div">
                <ul className="photo-index-ul">
                    {
                        photos.map(photo=> {
                            return (<PhotoIndexItem
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

export default PhotoIndex;