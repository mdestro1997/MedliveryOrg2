/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { getApplicationsActionCreator } from '../../actions/PatientActionCreators/getApplicationsActionCreator';
import requireAuth from '../AuthenticationHOC/authHOC';
import Modal from '../Modal';
import PaginationMethod from './pagination';
import FilterBy from './filterBy';

import { Button, Table, Container, Form, FormControl } from 'react-bootstrap';
import _ from 'lodash';

const values = {};
var keeper=''


class GetAllUserApplications extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.renderModal = this.renderModal.bind(this);
  }

  sortFilterContainer = {};

  componentDidMount() {
    console.log('authGETALLAPPLI ', this.props.authenticated);
    // formValues.token = localStorage.getItem('token');

    // const token = this.props.authenticated;
    const token = localStorage.getItem('token');
    values.token = token;
    this.props.getApplicationsActionCreator(values);
  }

  renderModal() {
    return (
      <div>
        <Modal />
      </div>
    );
  }

  onClickPaginationHandler = (e, e2) => {
    console.log('My Pagination', e);
    const token = localStorage.getItem('token');
    this.sortFilterContainer.token = token;
    this.sortFilterContainer.paginationTitle = e;
    this.sortFilterContainer.paginationValue = e2;
    this.props.getApplicationsActionCreator(this.sortFilterContainer);
  };

  onClickHandlerSort = (e, e2) => {
    // if(sortFilterContainer.isfiltered){

    // } else {
    console.log('from Parent!! ', e, e2);
    const token = localStorage.getItem('token');
    this.sortFilterContainer.sortTitle = e;
    this.sortFilterContainer.sortValue = e2;
    this.sortFilterContainer.token = token;

    console.log('WHats that', this.sortFilterContainer);

    // }
    this.props.getApplicationsActionCreator(this.sortFilterContainer);
  };

  onClickHandlerSortByName = (e, e2) => {
    console.log('from Parent!! ', e, e2);
    const token = localStorage.getItem('token');
    this.sortFilterContainer.sortByNameTitle = e;
    this.sortFilterContainer.sortByNameValue = e2;
    this.sortFilterContainer.token = token;

    console.log('WHats that', this.sortFilterContainer);

    this.props.getApplicationsActionCreator(this.sortFilterContainer);
  };

  onClickHandlerFilterBy = (e, e2) => {
    console.log('from Parent!! ', e, e2);
    const token = localStorage.getItem('token');
    this.sortFilterContainer.filterByTitle = e;
    this.sortFilterContainer.filterByValue = e2;
    this.sortFilterContainer.token = token;

    console.log('WHats that', this.sortFilterContainer);

    this.props.getApplicationsActionCreator(this.sortFilterContainer);
  };

  onSubmit(e) {
    console.log('Search Value!! ', e.Search);
    const token = localStorage.getItem('token');
    this.sortFilterContainer.searchValue = e.Search;
    this.sortFilterContainer.token = token;

    console.log('WHats that', this.sortFilterContainer);

    this.props.getApplicationsActionCreator(this.sortFilterContainer);
  }

  statusOfApplication = (status) => {
    console.log('status', status);

    if (status === 'Pending') {
      return 'warning';
    } else if (status === 'Approved') {
      return 'success';
    } else {
      return 'info';
    }
  };

   howCome=(e)=>{
    const token = localStorage.getItem('token');
    var alphabets =['a','b','c','d','e','d','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
      if(e === 'Backspace'){
     
        console.log('Backspace')
        var count= keeper.length - 1
 
        console.log('count',count)
 
        keeper = keeper.slice(0,count)
        if(count >= 3){
        console.log("You pressed , " + keeper);
        this.sortFilterContainer.searchValue = keeper;
        this.sortFilterContainer.token = token;
        this.props.getApplicationsActionCreator(this.sortFilterContainer);
        }

     }else if(e.length === 1 ){
      keeper= keeper.concat(e)
      console.log('length ',keeper.length)
      console.log("You pressed a key inside the input field, " + keeper);
      if(keeper.length >= 3){
        this.sortFilterContainer.searchValue = keeper;
        this.sortFilterContainer.token = token;
        this.props.getApplicationsActionCreator(this.sortFilterContainer);
      }
     }
     
    

     }
    
  

    
    //  if(keeper.length >= 3 ){

    //  }
  
  renderHelper = ({
    input,
    type,
    label,
    controlId,
    placeholder,
    required,
    accept,
    meta,
    error,
    onKeyDown,
  }) => {
    console.log('meta ', meta);

    return (
      <div className='searchBar mr-sm-2'>
        <Form.Group className='searchBarGroup' controlId={controlId}>
          <Form.Control
            style={{ width: 'inherit' }}
            {...input}
            type={type}
            placeholder={placeholder}
            onKeyDown={(e) =>{ this.howCome(e.key)}}
          />
          {/* {this.renderError(meta)} */}
        </Form.Group>
      </div>
    );
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Container className=' mt-5'>
        <div>
          <h3 className='text-center text-secondary'>
            Submitted Medical Applications
          </h3>
          <div className='search btn-group' className='parentContainer'>
            <Form
              inline
              style={{ width: '50%' }}
              onSubmit={handleSubmit(this.onSubmit.bind(this))}
            >
              <Field
                name='Search'
                type='text'
                placeholder='Search'
                component={this.renderHelper}
                onKeyDown='onKeyDown'
              />
              <Button type='submit'>Search</Button>
            </Form>
            <div className='filterData' style={{ width: '50%' }}>
              {
                <FilterBy
                  title='FilterBy'
                  itemOne='Pending'
                  itemTwo='Approved'
                  itemThree='InProgress'
                  passingOnClickHandlerToChild={this.onClickHandlerFilterBy}
                  variant='secondary'
                />
              }
              {
                <FilterBy
                  title='SortBy'
                  itemOne='Oldest to Newest'
                  itemTwo='Newest to Oldest'
                  passingOnClickHandlerToChild={this.onClickHandlerSort}
                  variant='success'
                />
              }
              {
                <FilterBy
                  title='SortByName'
                  itemOne='Raphael Mathuba'
                  itemTwo='Pitso'
                  passingOnClickHandlerToChild={this.onClickHandlerSortByName}
                  variant='primary'
                />
              }
            </div>
          </div>
          {/* <br />
          <br /> */}

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Place Of Application</th>
                <th>Submitted At</th>
                <th>Assigned To</th>
                <th>Status</th>
                <th>View</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
            </thead>

            <tbody>
              {_.map(this.props.gotApplicationSuccessfully, (application) => {
                return (
                  <tr key={application._id}>
                    <td>
                      {application.owner.firstname.concat(
                        ' ',
                        application.owner.lastname
                      )}
                    </td>
                    <td>{application.nearestMedicalFacility}</td>
                    <td>{application.createdAt}</td>
                    <td>Dr Mathuba</td>
                    <td>
                      <Button
                        variant={this.statusOfApplication(
                          application.assignedMedicalPractitioner
                        )}
                      >
                        {application.assignedMedicalPractitioner}
                      </Button>
                    </td>
                    <td>
                      <Button
                        as={Link}
                        to={`/viewUserApplication/${application._id}`}
                        variant='primary'
                      >
                        View
                      </Button>
                    </td>
                    <td>
                      <Button
                        as={Link}
                        to={`/editUserApplication/${application._id}`}
                        variant='info'
                      >
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button
                        type='button'
                        as={Link}
                        to={`/deleteUserApplication/${application._id}`}
                        variant='danger'
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <br />

          {
            <PaginationMethod
              title='Pagination'
              passingOnClickHandlerToChild={this.onClickPaginationHandler}
            />
          }
          <br />
          <br />
        </div>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.authReducer.authenticated,
    gotApplicationSuccessfully:
      state.getUserApplications.gotApplicationSuccessfully,
  };
}

export default reduxForm({
  form: 'SearchForm',
})(
  connect(mapStateToProps, { getApplicationsActionCreator })(
    requireAuth(GetAllUserApplications)
  )
);
