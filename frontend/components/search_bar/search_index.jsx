import React from 'react';
import SearchItem from './search_item';

class SearchIndex extends React.Component {

        constructor(props){
        super(props);

        this.userIdToUsername = this.userIdToUsername.bind(this);

        }

    
    componentDidMount(){
        this.props.fetchPhotos();
        this.props.fetchUsers();
    }

    userIdToUsername(userId){
        let username = "";

        Object.values(this.props.users).map(ele => {
            if(ele.id === userId){
                // console.log(ele.id);
                username = this.props.users[ele.id].username;
            }
        })
        return username;
    }

    render() {
        const { photos } = this.props;
        let arr = this.props.location.pathname.split("/");
        let photoArrItem = arr[arr.length -1];
        let photoCounter = 0;
        photos.map(photo=> {
            if(photo.title.toLowerCase().includes(photoArrItem.toLowerCase())){
                photoCounter += 1;
            }
            else if( this.userIdToUsername(photo.uploader_id).toLowerCase().includes(photoArrItem.toLowerCase())) {
                photoCounter += 1;
                                  
            }
            else{
                photoCounter += 0;

            }})
        // console.log(photoCounter);
        let searchNoResult = (photoCounter === 0) ? <p className="search-no-results">There are no search results for &nbsp; &ldquo; {photoArrItem} &rdquo; , &nbsp; please free to try a different search instead.</p> : <p></p>;
                        
        // console.log(photoArrItem);
        return(
            <div className="photo-index-div">
                {/* <p color="white">SEARCH INDEX CONTAINER</p> */}
                <div className="search-result-div">
                    <p>Search Results for:  &nbsp; {photoArrItem}</p>
                </div>
                {searchNoResult}

                <ul className="photo-search-index-ul">
                    {
                        photos.map(photo=> {
                              if(photo.title.toLowerCase().includes(photoArrItem.toLowerCase())){
                                return (<SearchItem
                                    key={photo.id}
                                    id={photo.id}

                                    photo={photo}
                                 />)
                                }
                                else if( this.userIdToUsername(photo.uploader_id).toLowerCase().includes(photoArrItem.toLowerCase())) {
                                    return (<SearchItem
                                    key={photo.id}
                                    id={photo.id}

                                    photo={photo}
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