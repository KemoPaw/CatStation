import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createPhoto } from '../../actions/photo_actions'
// import PhotoShow from './photo_show';

class PhotoUploadForm extends React.Component {
       constructor(props){
             super(props);
             this.state = {
                 file: null
            }
             this.handleChange = this.handleChange.bind(this)
       }
       

  componentDidMount() {
    // this.props.fetchPost(this.props.match.params.postId);
  }

   handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }

  render() {


    return (
      <div>
          <h1>Hello from Photo upload Form!</h1>
          <form>
              <label> Photo File Upload:
                  <input type="file" 
                    id="photoFile"
                    accept="image/png, image/jpeg"
                    onChange={this.handleChange}
                    
                    />
                    <img
                    src={this.state.file}
                    />

              </label>
              <label> Photo Title:
                    <input type="text"/>
              </label>
              <label> Photo Description:
                    <input type="text"/>
              </label>
          </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
      photo: state.entities.photos[ownProps.match.params.photoId],
      users: state.entities.users,
      currentUser: state.entities.users[state.session.id],

    };
};

const mapDispatchToProps = dispatch => {
    return {
        createPhoto: (photo) => dispatch(createPhoto(photo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUploadForm);