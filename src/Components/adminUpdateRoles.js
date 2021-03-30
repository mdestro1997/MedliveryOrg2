import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListGroup, Table, Button, Dropdown,DropdownButton,Form } from 'react-bootstrap';
import _ from 'lodash';
class AdminUpdateRoles extends Component {
  componentDidMount() {
    console.log('eeeeeeeeeeee', this.props.foundSearch);
  }

  changeValue(e) {
    this.renderUserCategoryEditing(e);
  }

  sendToForm(e){
  console.log('hey we are here and alive',e)
  }

  renderUserCategoryEditing(userCategory) {
    if (userCategory === 'P') {
      return (
        <Form inline>
        
        <Form.Control
          as="select"
          className=" mt-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
          custom
          // onChange={() =>{ this.props.foundSearch.userCategory = value}}
        >
          <option onChange={() =>{ this.props.foundSearch.userCategory = 'P'}}  value="P">{userCategory}</option>
          <option onChange={() =>{ this.props.foundSearch.userCategory = 'PA'}} value="PA">PA</option>
          <option onChange={() =>{ this.props.foundSearch.userCategory = 'PD'}} value="PD">PD</option>
          <option onChange={() =>{ this.props.foundSearch.userCategory = 'PDA'}} value="PDA">PDA</option>
        </Form.Control>
        </Form>
      );
    } else if (userCategory === 'A') {
      return (
        <Form inline>
        
        <Form.Control
          as="select"
          className="my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
          custom
        >
          <option value="A">{userCategory}</option>
          <option value="AD">AD</option>
          
        </Form.Control>
        </Form>
      );
    } else if (userCategory === 'D') {
      return (
        <Form inline>
        
        <Form.Control
          as="select"
          className="my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
          custom
        >
          <option value="D">{userCategory}</option>
          <option value="DA">DA</option>
          
        </Form.Control>
        </Form>
      );
    } else if (userCategory === 'PD') {
      return (
        <Form inline>
        
        <Form.Control
          as="select"
          className="my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
          custom
        >
          <option value="PD">{userCategory}</option>
          
          <option value="PDA">PD</option>
          {/* <option value="3">PDA</option> */}
        </Form.Control>
        </Form>
      );
    } else if (userCategory === 'AP') {
      return (
        <Form inline>
        
        <Form.Control
          as="select"
          className="my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
          custom
        >
          <option disabled value="AP">{userCategory}</option>
          <option value="PD">PD</option>
          <option value="PDA">PDA</option>
        </Form.Control>
        </Form>
      );
    }
  }

  render() {
    return (
      <div className='container mb-5 mt-3'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>User Category</th>
              <th>Phone Number</th>
              <th>Physical Address</th>
              <th>Update</th>
            </tr>
          </thead>

          <tbody>
            <tr key={this.props.foundSearch._id}>
              <td>{this.props.foundSearch.firstname}</td>
              <td>{this.props.foundSearch.lastname}</td>
              <td>{this.props.foundSearch.email}</td>
              <td>
                {this.renderUserCategoryEditing(
                  this.props.foundSearch.userCategory
                )}
              </td>
              <td>{this.props.foundSearch.phoneNumber}</td>
              <td>{this.props.foundSearch.physicalAddress}</td>
              
                <Button
                //   as={Link}
                //   to={`/viewUserApplication/`}
                type='button'
                 onClick={() =>{this.sendToForm(this.props.foundSearch)}}
                  variant='primary'
                >
                  Update
                </Button>
              
              {/* <td><Button as={Link} to={`/editUserApplication/${application._id}`}  variant="info">Edit</Button></td>
                      <td><Button type="button" as={Link} to={`/deleteUserApplication/${application._id}`} variant="danger">Delete</Button></td> */}
            </tr>
          </tbody>
        </Table>
        {/* <ListGroup>
        <ListGroup.Item>{this.props.foundSearch.email}</ListGroup.Item>
 
</ListGroup> */}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    foundSearch: state.foundSearchToUpdate.foundSearch,
  };
}

export default connect(mapStateToProps, null)(AdminUpdateRoles);
