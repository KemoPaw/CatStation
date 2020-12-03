import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createPhoto, fetchPhoto } from '../../actions/photo_actions'
// import { fetchPhoto } from '../../actions/photo_api_util';


class PhotoEditForm extends React.Component {
       constructor(props){
             super(props);
            // this.state = this.props.photo;

            //  this.state = {
            //     photo: this.props.photo,
            // }
            //  this.handleChange = this.handleChange.bind(this)
             this.formSubmission = this.formSubmission.bind(this);
            //  this.handleTitle = this.handleTitle.bind(this);
             this.handleInput = this.handleInput.bind(this);
            this.handleImagePreview = this.handleImagePreview.bind(this);
            this.uponSubmitRedirect = this.uponSubmitRedirect.bind(this);

       }
       

  componentDidMount() {
    // this.props.fetchPhoto(this.props.match.params.photo.id);
    // const {photo} = this.props.location.state
    // console.log(photo);

      let arr = this.props.location.pathname.split("/");
      console.log(arr);
      let photoArrItem = arr[arr.length -2];
      console.log(photoArrItem);

      this.props.fetchPhoto(photoArrItem);
  }

   handleImagePreview(e) {
    // this.setState({
    //   imageFile: URL.createObjectURL(event.target.files[0])
    // })
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
    this.setState({ imageUrl: reader.result, imageFile: file });

    if (file) {
    reader.readAsDataURL(file);
    } else {
    this.setState({ imageUrl: "", imageFile: null });
    }
  }

    handleInput(field){
        // console.log(field.currentTarget.value)
        // return (e) => this.setState({ [field]: e.currentTarget.value })
    }

  formSubmission(e){
       

  }

   uponSubmitRedirect(res) { 
        this.props.history.push(`/photos/${res.photo.id}`)
    }

  render() {


    return (
      <div>
          <h1>Hello from Photo EDIT Form!</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
      photo: state.entities.photos[ownProps.match.params.photoId],
        // photo: { title: "", description: "", uploader_id: state.session.id, imageFile: null}, 
      currentUser: state.entities.users[state.session.id],

    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
        createPhoto: photo => dispatch(createPhoto(photo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoEditForm);