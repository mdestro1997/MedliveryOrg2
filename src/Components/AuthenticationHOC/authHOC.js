import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }
    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      // console.log('propsy ',this.props.authenticated);
      // console.log('propsdjjy ',this.props.auth);
      const authenticated = localStorage.getItem('token');
        console.log('propsdjjy ',authenticated);

      // if (!this.props.authenticated) {

      if (!authenticated) {
        this.props.history.push('/');
       }
      // else{
      // this.props.history.push('/applyForm');
      // }

    }

    render() {

      return <ChildComponent {...this.props} />;
    
    }
  }
  function mapStateToProps(state) {

    return { authenticated: state.authReducer.authenticated,
             auth:state.authReducer
           };
  }
  return connect(mapStateToProps)(ComposedComponent);
};
