import React from 'react';
import { Link } from 'react-router-dom';
import PhotoEditForm from './photo_edit_form';



class PhotoShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            body: "",
            user_id: this.props.currentUser.id,
            photo_id: this.props.photo.id,
        }
        this.removePhoto = this.removePhoto.bind(this);
        this.userIdToUsername = this.userIdToUsername.bind(this);
        // this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);



    }

    componentDidMount(){
        this.props.fetchPhoto(this.props.photo.id);
        // console.log(this.state);

    }

    removePhoto(){
        // console.log(this.props.photo.uploader_id);
        // let checkArr = Object.values(this.props.users).map((user) => user.id);
        // console.log(this.props.currentUser);

        // console.log(this.props.currentUser.id);
       
        this.props.deletePhoto(this.props.photo.id).then(() => {
        this.props.history.push(`/photos`)});
       
       
    }

    // editPhoto(){
    //     // console.log('wish we could just edit a photo like this :( ');
    //     this.props.history.push(`/edit/`);
    // }

    userIdToUsername(userId){
        // console.log(this.props.users);
        // console.log(Object.values(this.props.users));
        // console.log(typeof Object.values(this.props.users));
        let username = "";

        Object.values(this.props.users).map(ele => {
            if(ele.id === userId){
                // console.log(ele.id);
                username = this.props.users[ele.id].username;
            }
        })

        return username;

        // console.log(typeof this.props.users);
        // console.log("Hello");

        // console.log(Object.keys(this.props.users));
    }


    handleCommentSubmit(e) {
        e.preventDefault();
        // debugger
        this.props.createComment(Object.assign ({}, this.state)).then(() => this.setState({body : "" }));
    }
    // handleCommentChange(){
    //     return e => this.setState({body: e.currentTarget.value});
    // }

      handleInput(field){
        // console.log(field.currentTarget.value)
        // debugger

        return (e) => this.setState({ [field]: e.currentTarget.value })
    }
    //think about how your state may change
    render(){
        const allComments = (!this.props.photo.comments) ? <h1>there r no comments , shame</h1> : 
            <ul>
                {Object.values(this.props.photo.comments).map( (ele, idx) => {
                    return(
                        <li key={idx}>{ele.body}</li>
                    )
                })}
            </ul>

        const makeComment = (!this.props.currentUser) ? <h1>PLEASE SING IN </h1> : 
            <form className="comment-create-form">
                <textarea  placeholder="Write a comment ..." className="comment-textarea" value={this.state.body} onChange={this.handleInput("body")} />
                <button className="comment-submit" onClick={this.handleCommentSubmit}>Submit</button>
            </form>;

        // let delButton = ((this.props.photo.uploader_id === this.props.currentUser.id) && (this.props.currentUser.id !== undefined)) ? <button className="photo-show-remove" type="button" onClick={() => this.removePhoto()}>Remove Photo</button> : <div className="photo-show-remove-div"></div>
        if (!this.props.photo) return null;
        // if (!this.props.currentUser) return null;
        let delButton = (this.props.currentUser && (this.props.photo.uploader_id === this.props.currentUser.id) ) ? <button className="photo-show-remove" type="button" onClick={() => this.removePhoto()}>Remove Photo</button> : <div className="photo-show-remove-div"></div>
        // let editButton = (this.props.currentUser && (this.props.photo.uploader_id === this.props.currentUser.id) ) ? <Link to={`/photos/${this.props.photo.id}/edit`}>Edit Photo </Link> : <div className="photo-show-remove-div"></div>
        // let editButton = (this.props.currentUser && (this.props.photo.uploader_id === this.props.currentUser.id) ) ? <Link to={{
        //                                                                                                                 pathname: `/photos/${this.props.photo.id}/edit`,
        //                                                                                                                 state: {
        //                                                                                                                     photo: true
        //                                                                                                                 }
        //                                                                                                                 }}>Edit Photo </Link>
        //                                                                                                                  : <div className="photo-show-remove-div"></div>



        return(
            <div className="photo-show-div">

                <div className="photo-show-img">
                    <img src={this.props.photo.photoUrl} />
                </div>


                <div className="photo-show-content">
                    <h1 className="photo-show-title">{this.props.photo.title}</h1>
                    <h1 className="photo-show-title">{this.userIdToUsername(this.props.photo.uploader_id)}</h1>
                    {/* <h1 className="photo-show-title">{this.props.users}</h1> */}

                    <h3 className="photo-show-text">{this.props.photo.description}</h3>

                    <div>
                        {/* {this.props.photo.uploader_id === this.state.user.id ? <button className="photo-show-remove" type="button" onClick={() => this.removePhoto()}>Remove Photo</button> : <div></div>} */}
                        {/* <button className="photo-show-remove" type="button" onClick={() => this.removePhoto()}>Remove Photo</button> */}
                        {delButton}
                        {/* {editButton} */}
                    </div>
                    <div className="comments-div">
                        {/* <h1>Comments Div</h1> */}
                        {makeComment}
                        {allComments}

                    </div>
                </div>

                {/* <h5>Uploaded by: {this.props.photo.uploader_id}</h5> */}

               
                
            </div>
        )
    }
}


export default PhotoShow;