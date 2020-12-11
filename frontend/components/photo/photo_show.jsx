import React from 'react';
import { Link } from 'react-router-dom';
import PhotoEditForm from './photo_edit_form';




class PhotoShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            body: "",
            // user_id: this.props.currentUser.id,
            photo_id: "",
            showEdit: false,
            // currentCommentId: null,
        }
        this.removePhoto = this.removePhoto.bind(this);
        // this.reviseComment = this.reviseComment.bind(this);
        this.removeComment = this.removeComment.bind(this);
        this.userIdToUsername = this.userIdToUsername.bind(this);
        // this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.handleEditCommentSubmit = this.handleEditCommentSubmit.bind(this);
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

    reviseComment(ele){
        // this.setState({editClicked : true, currentCommentId : ele.id}); 
        // let commentSaveBtn = <button className="comment-submit" onClick={this.handleEditCommentSubmit}><i className="fas fa-save"></i></button>;
        // let commEditForm = <form>
        //     <input type="text" placeholder={ele.body}> </input>  
        //     {commentSaveBtn}
        //     </form>;

        // this.setState({body: ele.body}) // new state should overwrite the ajax call

        // document.getElementById(ele.id).innerHTML = "<input id=`${ele.id}` type='text'>  </input>";

        // console.log(document.getElementById("comment-input").value);




        // '<form> <input type="text" placeholder={ele.body}> </input> <button className="comment-submit" onClick={this.handleEditCommentSubmit}><i className="fas fa-save"></i></button> </form>';
        // console.log(commentSaveBtn);
        
        console.log(ele);
        // console.log(ele.id);
      
     
    }

    toggleEditForm() {
        if (this.state.showEdit === false) {
            this.setState({showEdit : true})
        } else {
            this.setState({showEdit : false})
        }

    }

    handleEditCommentSubmit(e){
        //  e.preventDefault();
         console.log("made it inside handle edit comment submit");
         console.log(e);


        // this.setState({body: newComm})
        // .then(console.log(this.state))
        // .then(this.props.updateComment(Object.assign({}, this.state)));

        // console.log("Hello! from this.handleEditCommentSubmit");
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
        // .then(() => this.setState({body : "" }))
        // .then(window.location.reload());
    }


    handleInput(field){
        // console.log(field.currentTarget.value)
        // debugger

        return (e) => this.setState({ [field]: e.currentTarget.value })
    }
    //think about how your state may change
    render(){
        // console.log(this.props);
        if (!this.props.photo) return null;
        let uploaderUsername = this.userIdToUsername(this.props.photo.uploader_id);
        if (uploaderUsername !== "") localStorage.setItem('username', uploaderUsername);
        if (uploaderUsername === "") localStorage.getItem('username');

   


        let finalUsername = (!uploaderUsername === "") ? uploaderUsername : localStorage.getItem('username');


        const allComments = (!this.props.photo.comments) ? <h1></h1> : 
            <ul>
                {Object.values(this.props.photo.comments).map( (ele, idx) => {

                    let commentUsername = this.userIdToUsername(ele.user_id);
                    let commentDeleteBtn = ((this.props.currentUser) && ( ele.user_id === this.props.currentUser.id)) ? <button type="button" onClick={() => this.removeComment(ele)}><i className="fas fa-trash"></i></button> : <p></p>
                    // let commentUpdateBtn = ((this.props.currentUser) && ( ele.user_id === this.props.currentUser.id)) ? <button type="button" onClick={() => this.reviseComment(ele)}><i className="fas fa-edit"></i></button> : <p></p>
                    let commentUpdateBtn = ((this.props.currentUser) && ( ele.user_id === this.props.currentUser.id)) ? <button type="button" onClick={() => this.toggleEditForm()}><i className="fas fa-edit"></i></button> : <p></p>;

                    let commentSaveBtn = <button className="comment-submit" onClick={this.handleEditCommentSubmit(ele)}><i className="fas fa-save"></i></button>;


                    let commentEditForm = (this.state.showEdit === true) ? 
                        <form>
                        <textarea value={ele.body}> </textarea>  
                        {commentSaveBtn}
                        </form>
                        
                        : <p> nada hoe </p> ;

                    return(
                        <li  key={idx} className="photo-show-comment-item">
                            <div id={ele.id}>{ele.body}</div>
                             {/* <input id="comment-input" type='text'>  </input> */}
                             {commentEditForm}
                            {commentUpdateBtn}

                            {commentDeleteBtn}
                            <br/>
                            by: {commentUsername}
                        </li>
                    )
                })}
            </ul>

        const makeComment = (!this.props.currentUser) ? <h1></h1> : 
            <form className="comment-create-form">
                <textarea  placeholder="Write a comment ..." className="comment-textarea" value={this.state.body} onChange={this.handleInput("body")} />
                <button className="comment-submit" onClick={this.handleCommentSubmit}>Submit Comment</button>
            </form>;

        // let delButton = ((this.props.photo.uploader_id === this.props.currentUser.id) && (this.props.currentUser.id !== undefined)) ? <button className="photo-show-remove" type="button" onClick={() => this.removePhoto()}>Remove Photo</button> : <div className="photo-show-remove-div"></div>
        // if (!this.props.photo) return null;
        // if (!this.props.currentUser) return null;
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
                    <h1 className="photo-show-title">{finalUsername}</h1>
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

                    </div>
                </div>

                {/* <h5>Uploaded by: {this.props.photo.uploader_id}</h5> */}

               
                
            </div>
        )
    }
}


export default PhotoShow;