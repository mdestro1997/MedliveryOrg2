/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import requireAuth from '../AuthenticationHOC/authHOC';
import { getParticularApplicationActionCreator } from '../../actions/PatientActionCreators/getParticularApplicationActionCreator';
import { editApplicationActionCreator } from '../../actions/PatientActionCreators/editApplicationActionCreator';
import ApplyForm from './applyForm';
import _ from 'lodash';

class EditUserApplication extends Component {
  componentDidMount() {
    console.log('this props checking for params.id ', this.props);
    console.log(' params.id ', this.props.match.params.id);
    //    const token = localStorage.getItem('token')
    const values = { id: this.props.match.params.id };
    //    const values = this.props.match.params.id
    //     values.token = localStorage.getItem('token')
    this.props.getParticularApplicationActionCreator(values);
  }

  onSubmit = (formValues) => {
    // formValues.token = localStorage.getItem('token');
    const id = this.props.match.params.id;
    console.log(formValues);

    this.props.editApplicationActionCreator(formValues, id, () => {
      this.props.history.push('/getAllUserApplication');
    });
  };

  // renderImage = () => {
  //   if (this.props.gotApplicationSuccessfully.imageUrl) {
  //     return (
  //       <button>
  //         <a
  //           href={`https://medliveryfileupload.s3.us-east-2.amazonaws.com/${this.props.gotApplicationSuccessfully.imageUrl}`}
  //         target='_blank' 
  //         ></a>
  //       </button>
  //     );
  //   }
  // };

  render() {
    console.log(
      'this.props.gotApplicationSuccessfully',
      this.props.gotApplicationSuccessfully
    );
    return (
      <Container className=' mt-5'>
        <h3 className='text-center grey-text text-darken-3'>Edit Application</h3>

        <div>
          <ApplyForm
            variant='success'
            message='Save'
            variant1='danger'
            message1='Back'
            to='/getAllUserApplication'
            initialValues={
              _.pick(
                this.props.gotApplicationSuccessfully,
                'Address',
                'nearestMedicalFacility',
                'briefMedicalHistory',
                'copyOfMedicalHistory'
              )

              //   {
              //   Address:this.props.gotApplicationSuccessfully.Address,
              //   nearestMedicalFacility: this.props.gotApplicationSuccessfully.nearestMedicalFacility,
              //   briefMedicalHistory: this.props.gotApplicationSuccessfully.briefMedicalHistory,
              //   copyOfMedicalHistory:  this.props.gotApplicationSuccessfully.copyOfMedicalHistory
              // }
            }
            onSubmit={this.onSubmit}
          />
      
          <a
            href={"https://medliveryfileupload.s3.us-east-2.amazonaws.com/" + this.props.gotApplicationSuccessfully.imageUrl}
            download="uuuuuu"
            //    rel="noopener noreferrer"
            target="_parent"
            
          >Test Download</a>
          
       
        </div>
      </Container>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    gotApplicationSuccessfully: _.find(
      state.getUserApplications.gotApplicationSuccessfully,
      { _id: ownProps.match.params.id }
    ),
    particularApplicationToBeEdited:
      state.getParticularApplication.getParticularApplication,
  };
}
//_.find(state.getUserApplications.gotApplicationSuccessfully, {'_id': ownProps.match.params.id})

export default reduxForm({
  form: 'applyForm',
})(
  connect(mapStateToProps, {
    editApplicationActionCreator,
    getParticularApplicationActionCreator,
  })(requireAuth(EditUserApplication))
);
