import React,{Component} from 'react'
import {connect} from 'react-redux'
import {signOutActionCreator} from '../actions/login/signOutActionCreator'

class SignOut extends Component{

    componentDidMount(){
        // const token = localStorage.getItem('token');

        //  localStorage.removeItem('token');
        // console.log('tokenInSignOut ', token);
        // console.log('tokenInSignedOut ', token);

        this.props.signOutActionCreator()
    }    
     
    render(){

        return (
            <div className='container lead mt-5'>Sorry to see you go</div>
        )
    }
}
function mapStateToProps(state) {

    return { authenticated: state.authReducer.authenticated,
             auth:state.authReducer
           };
  }
export default connect(mapStateToProps,{signOutActionCreator})(SignOut);