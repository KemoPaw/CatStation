import React from 'react';
import { Link } from 'react-router-dom';


class Comments extends React.Component{
    constructor(props){
        super(props);
        
    }

    // componentDidMount(){
    //     this.props.fetchUsers();
    // }


    render(){
        const {comment} = this.props;
        console.log(comment);
        return(
             <div>
                 <p>{comment}</p>
                {/* <p>We're in the comments component</p> */}
            </div>
        ) 
           
        
    }
}

export default Comments;