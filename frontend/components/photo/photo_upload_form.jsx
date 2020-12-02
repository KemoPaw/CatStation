import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createPhoto } from '../../actions/photo_actions'


class PhotoUploadForm extends React.Component {
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
            //  this.handleChange = this.handleChange.bind(this)
             this.formSubmission = this.formSubmission.bind(this);
            //  this.handleTitle = this.handleTitle.bind(this);
             this.handleInput = this.handleInput.bind(this);
            this.handleImagePreview = this.handleImagePreview.bind(this);

       }
       

//   componentDidMount() {
//     console.log(this.state);
//   }

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
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

  formSubmission(e){
        e.preventDefault();
        // console.log(this.state);
        // const formData = new FormData();
    
        // formData.append('photo[title]', this.state.title);
        const formData = new FormData();
        formData.append('photo[title]', this.state.title);

        // console.log(this.state.title);
        

        formData.append('photo[description]', this.state.description);
        formData.append('photo[uploader_id]', this.state.uploader_id); 
        if (this.state.imageFile) {
                formData.append('photo[image]', this.state.imageFile);
        } 
        // formData.append('photo[image]', this.state.imageFile);
        // formData.append('photo[photoUrl]', this.state.imageFile);

        
     
        // this.props.createPhoto(this.state);
        // this.props.createPhoto(formData);
        // console.log(this.state);
        // for (var key of formData.entries()) {
        // console.log(key[0] + ', ' + key[1]);
        // }

        this.props.createPhoto(formData);

  }

  render() {


    return (
      <div>
          <h1>Hello from Photo upload Form!</h1>
          <form onSubmit={this.formSubmission}>
            <div>
                <label> Photo Title:
                        <input type="text"
                            id="upload-photo-input-box"
                            value={this.state.title} 
                            onChange={this.handleInput("title")}
                        />
                </label>
            </div>

            <div>
                <label> Photo File Upload:
                
              </label>
                <input type="file" 
                    id="photoFile"
                    accept="image/png, image/jpeg"
                    onChange={this.handleImagePreview}
                    
                    />
                    <img
                    src={this.state.image}
                    />
            </div>
              

            <div>
                <label> Photo Details:
                    <input type="text"
                        id="upload-photo-input-box"
                     value={this.state.description} 
                    onChange={this.handleInput("description")}
                    />
              </label>
            </div>
            <input className="login-submit" type="submit" value="Upload Photo" />
          </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
    //   photo: state.entities.photos[ownProps.match.params.photoId],
    //   users: state.entities.users,
        // photo: { title: "", description: "", uploader_id: state.session.id, imageFile: null}, 
      currentUser: state.entities.users[state.session.id],

    };
};

const mapDispatchToProps = dispatch => {
    return {
        createPhoto: photo => dispatch(createPhoto(photo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUploadForm);