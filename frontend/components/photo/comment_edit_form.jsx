import React from 'react';
import { Link } from 'react-router-dom';




const commentEditForm = props => {
    //    constructor(props){
    //     super(props);


        this.handleEditCommentSubmit = this.handleEditCommentSubmit.bind(this);
        // this.reviseComment = this.reviseComment.bind(this);

    //    }

    // reviseComment(ele){
        // this.setState({editClicked : true, currentCommentId : ele.id}); 
        let commentSaveBtn = <button className="comment-submit" onClick={this.handleEditCommentSubmit}><i className="fas fa-save"></i></button>;
        // let commentEditForm = <form>
        //     <input type="text" placeholder={ele.body}> </input>  
        //     {commentSaveBtn}
        //     </form>;

        // // document.getElementById(ele.id).innerHTML = '<form> <input type="text" placeholder={ele.body}> </input> <button className="comment-submit" onClick={this.handleEditCommentSubmit}><i className="fas fa-save"></i></button> </form>';
        // console.log(commentSaveBtn);
        
        // console.log(ele);
        // console.log(ele.id);
     
    // }

    handleEditCommentSubmit(){
        console.log("Hello! from this.handleEditCommentSubmit");
    }

    // render() {

        return(
            <div>
                <p>Hello from the edit form!</p>
                {commentSaveBtn}

                <form>


                </form>
            </div>

        )

    // }
}



export default commentEditForm;