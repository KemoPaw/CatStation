import React from 'react';
import { Link } from 'react-router-dom';


class PhotoIndexItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            addClass: false
        }

        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);

    }

    // componentDidMount(){
    //     this.props.fetchPhotos();
    //     this.props.fetchUsers();
    // }

    mouseEnter(){
        // console.log('mouse enter');
        this.setState({ addClass: true });
    }

    mouseLeave(){
        // console.log('mouse leave');
        this.setState({ addClasse: false });
    }

    render(){
        const {key, id, photo} = this.props;
         return (

                //  <li className="photo-index-li" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} >
                 <li className="photo-index-li" >

                       <div className="photo-index-item">
                        <Link to={`/photos/${id}`}>
                            <img src={photo.photoUrl} />
                        </Link>

                       </div>
                 </li>
             )


    }
   
};

export default PhotoIndexItem;