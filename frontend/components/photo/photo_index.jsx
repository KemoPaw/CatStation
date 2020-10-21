import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {

    componentDidMount(){
        this.props.fetchPhotos();
    }

    render() {
        const { photos } = this.props;
        return(
            <div>
                <ul className="photo-index-ul">
                    {
                        photos.map(photo=> {
                            return (<PhotoIndexItem
                                key={photo.id}
                                photo={photo}
                                description={photo.description}
                                uploader_id={photo.uploader_id}
                            />)
                        })
                    }
                </ul>
             

            </div>
        )
    };
}

export default PhotoIndex;