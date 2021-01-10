import React from 'react';
import SearchItem from './search_item';
import { Link } from 'react-router-dom';


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
        let searchNoResult = (photoCounter === 0) ? <div className="search-no-results-div"><p className="search-no-results">No Search Results found for &nbsp; &ldquo; {photoArrItem} &rdquo; , &nbsp; please free to try a different search instead.</p> </div> : <p></p>;
        let searchBufferDiv = (photoCounter < 11) ?  <div className="photo-search-result-div"></div> : <div></div>;
                        
        // console.log(photoArrItem);
        return(
            <div className="photo-search-index-div">
                {/* <p color="white">SEARCH INDEX CONTAINER</p> */}
                <div className="search-result-div">
                    <p>Search Results for:  &nbsp; {photoArrItem}</p>
                </div>

                <div className="photo-search-back-div">
                        <Link className="photo-search-back-btn" style={{ textDecoration: 'none' }}  to="/photos">
                            <p><i className="fas fa-arrow-left"></i> &nbsp; Back to Gallery</p>
                        </Link>
                </div>

                {searchNoResult}
               

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
               
               {searchBufferDiv}

                  <div className="photo-search-back-div">
                        <Link className="photo-search-back-btn" style={{ textDecoration: 'none' }}  to="/photos">
                            <p><i className="fas fa-arrow-left"></i> &nbsp; Back to Gallery</p>
                        </Link>
                </div>
            </div>
        )
    };
}

export default SearchIndex;