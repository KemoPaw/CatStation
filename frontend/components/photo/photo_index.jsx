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

                <p> WE'RE IN PHOTO_INDEX.JSX</p>
                <ul>
                    {
                        photos.map(photo=> {
                            debugger
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