import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createPhoto, fetchPhoto } from '../../actions/photo_actions'
// import { fetchPhoto } from '../../actions/photo_api_util';


class PhotoEditForm extends React.Component {
       constructor(props){
             super(props);
                this.state = {
                //  photo: this.props.photo,
                image: null,
                title: "",
                description: "",
                uploader_id: this.props.currentUser.id, 
                imageFile: null,
                imageUrl: null,
            }
            // this.state = this.props.photo;

            //  this.state = {
            //    photo: this.props.photo,

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
      // console.log(arr);
      let photoArrItem = arr[arr.length -2];
      console.log(this.state);

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
        // console.log(field.currentTarget.value);
        // console.log(this.state.title);

        // return (e) => this.setState({ [field]: e.currentTarget.value })
        //    return e => { 
        //     let photo = this.state.photo;
        //     photo[field] = e.target.value;
        //     this.setState( { photo })
        // }
    }

  formSubmission(e){
        e.preventDefault();
      console.log(this.state.title);
      console.log(this.state);
      console.log('wish we could just submit it like so')

  }

   uponSubmitRedirect(res) { 
        this.props.history.push(`/photos/${res.photo.id}`)
    }

  render() {
      console.log(this.props.photo)
        if (!this.props.photo) return null;


    return (
      <div>
          <h1>Hello from Photo EDIT Form!</h1>
           <form onSubmit={this.formSubmission}>
            <div>
                <label> Photo Title:
                        <input type="text"
                            id="upload-photo-input-box"
                            placeholder={this.props.photo.title}
                            value={this.state.title} 
                            onChange={e => this.setState({ title: e.target.value })}
                        />
                </label>
            </div>

            {/* <div>
                <label> Photo File Upload:
                
              </label>
                <input type="file" 
                    id="photoFile"
                    accept="image/png, image/jpeg"
                    onChange={this.handleImagePreview}
                    
                    />
                    <img
                    src={this.props.photo.imageUrl}
                    />
            </div> */}
              

            <div>
                <label> Photo Details:
                    <input type="text"
                        id="upload-photo-input-box"
                        placeholder={this.props.photo.description}
                     value={this.state.description} 
                    onChange={e => this.setState({ description: e.target.value })}
                    />
              </label>
            </div>
            <input className="login-submit" type="submit" value="Update Photo" />
          </form>
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