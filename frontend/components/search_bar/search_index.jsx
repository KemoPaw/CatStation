import React from 'react';
import SearchItem from './search_item';

class SearchIndex extends React.Component {

    
    componentDidMount(){
        this.props.fetchPhotos();
        this.props.fetchUsers();
    }

    render() {
        const { photos } = this.props;
        return(
            <div className="photo-index-div">
                <h1>SEARCH INDEX CONTAINER</h1>
                <ul className="photo-index-ul">
                    {
                        photos.map(photo=> {
                            return (<SearchItem
                                key={photo.id}
                                id={photo.id}

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

export default SearchIndex;