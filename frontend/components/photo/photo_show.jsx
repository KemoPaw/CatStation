import React from 'react';
import { Link } from 'react-router-dom';
import Comments from './comments';





class PhotoShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            body: "",
            // user_id: this.props.currentUser.id,
            photo_id: "",
            showEdit: false,
            currentCommentId: null,
        }
        this.removePhoto = this.removePhoto.bind(this);

        this.removeComment = this.removeComment.bind(this);
        this.userIdToUsername = this.userIdToUsername.bind(this);
       
        this.handleInput = this.handleInput.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  
        this.toggleEditForm = this.toggleEditForm.bind(this);
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        // this.props.fetchPhoto(this.props.photo.id);
        let arr = this.props.location.pathname.split("/");
        let photoArrItem = arr[arr.length -1];
        // console.log(photoArrItem);
        this.props.fetchUsers();
        this.props.fetchPhoto(photoArrItem)
        .then(() => {
            this.setState({photo_id: photoArrItem})
        })
        .then(() => {
            this.setState({user_id: this.props.currentUser.id})
        })

        this.props.fetchComments();
    }

    componentWillUnmount(){
        localStorage.removeItem('username');
    }

    removePhoto(){
        this.props.deletePhoto(this.props.photo.id).then(() => {
        this.props.history.push(`/photos`)});
    }

    removeComment(ele){
        this.props.deleteComment(ele.id)
    }

    toggleEditForm(eleId) {

        // console.log(eleId);

        this.setState({currentCommentId: eleId});

        if (this.state.showEdit === false) {
            this.setState({showEdit : true})
        } else {
            this.setState({showEdit : false})
        }

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


    handleCommentSubmit(e) {
        e.preventDefault();
  

        this.props.createComment(Object.assign({}, this.state))
        .then(() => this.setState({body : "" }))
        // .then(window.location.reload());
    }


    handleInput(field){

        return (e) => this.setState({ [field]: e.currentTarget.value })
    }
    //think about how your state may change
    render(){
 
        if (!this.props.photo) return null;
        // if(!this.props.currentUser) return null;



        let uploaderUsername = this.userIdToUsername(this.props.photo.uploader_id);
        if (uploaderUsername !== "") localStorage.setItem('username', uploaderUsername);
        if (uploaderUsername === "") localStorage.getItem('username');

        let finalUsername = (!uploaderUsername === "") ? uploaderUsername : localStorage.getItem('username');

        let commentSorted = this.props.photo.comments;


        let array = $.map(commentSorted, function(value, index) {
            value.key = index;
            return value;
        });

        let sortedData = array.sort(function(p1, p2){
            return p1.id - p2.id;
        });
        // console.log(sortedData);

        const allComments = (!this.props.photo.comments) ? <h1></h1> : 
            <ul>
                {Object.values(sortedData).map( (ele, idx) => {
                    let currentPhotoId = ele.photo_id;
                    let commentUsername = this.userIdToUsername(ele.user_id);
                    let commentDeleteBtn = ((this.props.currentUser) && ( ele.user_id === this.props.currentUser.id)) ? <button type="button" onClick={() => this.removeComment(ele)}><i className="fas fa-trash"></i></button> : <p></p>


                    return(
                        <li  key={idx} className="photo-show-comment-item">

                            <Comments comment={ele.body} commentId={ele.id} photoId={currentPhotoId} commenterId={ele.user_id} userId={this.props.currentUser.id} username={commentUsername}  commentDeleteBtn={commentDeleteBtn} updateComment={this.props.updateComment}/>
  
                        </li>
                    )
                })}
            </ul>

        const makeComment = (!this.props.currentUser) ? <h1></h1> : 
            <form className="comment-create-form">
                <textarea  placeholder="Write a comment ..." className="comment-textarea" value={this.state.body} onChange={this.handleInput("body")} />
                <button className="comment-submit" onClick={this.handleCommentSubmit}>Submit Comment</button>
            </form>;

        let delButton = (this.props.currentUser && (this.props.photo.uploader_id === this.props.currentUser.id) ) ? <button className="photo-show-remove" type="button" onClick={() => this.removePhoto()}>Remove Photo</button> : <div className="photo-show-remove-div"></div>
        // let editButton = (this.props.currentUser && (this.props.photo.uploader_id === this.props.currentUser.id) ) ? <Link to={`/photos/${this.props.photo.id}/edit`}>Edit Photo </Link> : <div className="photo-show-remove-div"></div>
         let editButton = (this.props.currentUser && (this.props.photo.uploader_id === this.props.currentUser.id) ) ? 
         <Link className="photo-show-edit" 
         style={{ textDecoration: 'none' }}
         to={{
        pathname: `/photos/${this.props.photo.id}/edit`,
        state: {
            photo: true
        }
        }}>Edit Photo </Link>
        : <div className="photo-show-edit-div"></div>



        return(
            <div className="photo-show-div">

                <div className="photo-show-img">
                    <img src={this.props.photo.photoUrl} />
                </div>


                <div className="photo-show-content">
                    {/* <div className="photo-show-close-div">
                        <Link to="/photos">
                            <i class="fas fa-times-circle"></i>
                        </Link>
                    </div> */}
                    <h1 className="photo-show-title">{this.props.photo.title}</h1>
                     <Link to={`/profile/${finalUsername}`}>
                        <h1 className="photo-show-title">{finalUsername}</h1>
                     </Link>
                    {/* <h1 className="photo-show-title">{this.props.users}</h1> */}

                    <h3 className="photo-show-text">{this.props.photo.description}</h3>

                    <div>
                        {/* {this.props.photo.uploader_id === this.state.user.id ? <button className="photo-show-remove" type="button" onClick={() => this.removePhoto()}>Remove Photo</button> : <div></div>} */}
                        {/* <button className="photo-show-remove" type="button" onClick={() => this.removePhoto()}>Remove Photo</button> */}
                        {delButton}
                        {editButton}
                    </div>
                    <div className="comments-div">
                        {/* <h1>Comments Div</h1> */}
                        {makeComment}
                        {allComments}
                        {/* <Comments
                            
                        /> */}


                    </div>
                </div>

                {/* <h5>Uploaded by: {this.props.photo.uploader_id}</h5> */}

               
                
            </div>
        )
    }
}


export default PhotoShow;