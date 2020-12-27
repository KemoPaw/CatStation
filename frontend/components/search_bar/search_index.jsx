import React from 'react';
import SearchItem from './search_item';

class SearchIndex extends React.Component {

    
    componentDidMount(){
        this.props.fetchPhotos();
        this.props.fetchUsers();

       

        // console.log(photoArrItem);
    }

    render() {
        const { photos } = this.props;
        let arr = this.props.location.pathname.split("/");
        let photoArrItem = arr[arr.length -1];

        return(
            <div className="photo-index-div">
                <p color="white">SEARCH INDEX CONTAINER</p>
                <ul className="photo-index-ul">
                    {
                        photos.map(photo=> {
                              if(photoArrItem === photo.title){
                                return (<SearchItem
                                    key={photo.id}
                                    id={photo.id}

                                    photo={photo}
                                    // photos={photos}
                                 />)
                                }
                            else{
                                return null;
                            }
                        })
                    }
                </ul>
            </div>
        )
    };
}

export default SearchIndex;