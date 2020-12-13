import React from 'react';
import { Link } from 'react-router-dom';


class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.commentId,
            body: this.props.comment,
            showEdit: false,
            // photo_id: this.props.photoId,
            user_id: this.props.commenterId,
        }
        this.toggleEditForm = this.toggleEditForm.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount(){

       this.setState({body: this.props.comment})
    //    .then(console.log(this.state));
    }


    handleInput(field){
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }


    // handleEditCommentSubmit(){

    //     // console.log(comm);

    //     console.log("inside comment submit");
    //     // this.props.updateComment(this.state);
    // }


    toggleEditForm() {

        // console.log(this.state);

        // const formData = new FormData();

        // formData.append('body', this.state.body);
        // formData.append('photo_id', this.state.photo_id);
        // formData.append('user_id', this.state.user_id); 
        // formData.append('id', this.state.id); 

        if (this.state.showEdit === false) {
            this.setState({showEdit : true});
            this.props.updateComment(Object.assign({}, this.state))
            // .then(this.setState({body: this.state.body}));
            //start updating the commnet info here
        } else {
            this.setState({showEdit : false})
              // .then(() =>  this.props.updateComment(this.state))
        }

    }
    
    render(){
        // if(comment === undefined) return null;

        const {comment, username, commentDeleteBtn, userId,  commenterId, photoId, commentId, updateComment} = this.props;
        let commentUpdateBtn = (userId === commenterId) ? <button type="button" onClick={() => this.toggleEditForm()}><i className="fas fa-edit"></i></button> : <p></p>;

        // let commentUpdateBtn =<button type="button" onClick={() => this.toggleEditForm()}><i className="fas fa-edit"></i></button>;
        // let commentSaveBtn = <button className="comment-submit" onClick={() => this.handleEditCommentSubmit}><i className="fas fa-save"></i></button>;

        let commentEditForm = (this.state.showEdit === true ) ? 
                        <form>
                        {/* <p>{comment}</p> */}
                        <textarea  value={this.state.body} onChange={this.handleInput("body")}> </textarea>  
                        {/* {commentSaveBtn} */}
                        </form>
                        : <p></p> ;


        // console.log(comment);

        let newComment = (comment !== this.state.body) ? this.state.body : comment;

        return(
             <div>
                 <p>{newComment}</p>
                 {commentEditForm}
                 {commentUpdateBtn}
                 {/* {commentSaveBtn} */}
                 {commentDeleteBtn}
                <p>by: {username}</p>
                {/* <p>{userId}</p> */}
            </div>
        ) 
           
        
    }
}

export default Comments;