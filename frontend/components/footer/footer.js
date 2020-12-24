import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



class Footer extends React.Component{

    render(){
        return(
            <div className="footer-div">
                {/* <p>We're in the footer!</p> */}
                {/* <span>
                    <p>About</p>
                </span> */}
                <span className="footer-span">
                    <a href="https://www.linkedin.com/in/kemopaw/" target="_blank"><i className="fab fa-linkedin fa-lg"></i></a>
                </span>
                <span className="footer-span">
                    <a href="https://github.com/KemoPaw" target="_blank"><i className="fab fa-github fa-lg"></i></a>
                    
                </span>
                <span className="footer-span">
                    <a href="https://angel.co/u/kemopaw" target="_blank"><i className="fab fa-angellist fa-lg"></i></a>
                    
                </span>
            </div>
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);