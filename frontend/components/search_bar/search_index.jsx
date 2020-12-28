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
        // console.log(photoArrItem);
        return(
            <div className="photo-index-div">
                {/* <p color="white">SEARCH INDEX CONTAINER</p> */}
                <div className="search-result-div">
                    <p>Search Results for:   <span>  </span> {photoArrItem}</p>
                </div>
                <ul className="photo-index-ul">
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