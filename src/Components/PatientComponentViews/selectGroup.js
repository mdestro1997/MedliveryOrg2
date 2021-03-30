/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { ListGroup, Container, Nav, Button, Form,Card,Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import requireAuth from '../AuthenticationHOC/authHOC';

import Theresa from '../../img/pexels-tubarones-photography-2764976.jpg'
import Abdul from '../../img/pexels-pixabay-35539.jpg'
import Hussein from '../../img/pexels-hussein-altameemi-1678821.jpg'
import {getAllDoctorsActionCreator} from '../../actions/PatientActionCreators/getAllDoctors'
import _ from 'lodash'

class SelectGroup extends Component {

componentDidMount(){
      
  const value =  localStorage.getItem('token')

  this.props.getAllDoctorsActionCreator(value)


}

  callFunction(){
    _.map(this.props.gotDoctorsSuccessfully, (profile) =>{
       console.log('profiiile',profile.owner.firstname)
    })
    // _.map(this.props.gotDoctorsSuccessfully,(profile))
    console.log('in the selectgroup',this.props.gotDoctorsSuccessfully);

  }

  render() {
   {this.callFunction()}
    return (
      <div>
        <Container className='mt-5 mb-5'>
          {/* <Nav className='justify-content-left mb-4' variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
  <Nav.Link as={Link} variant="pills" to="/applyForm"><Button variant="outline-info">Request Medication</Button></Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link as={Link} variant="pills" to="/targetGroup"><Button variant="outline-info">Book Appointment</Button></Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link as={Link} variant="pills" to="/"><Button variant="outline-info">Consult Online</Button></Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link as={Link} variant="pills" to="/"><Button variant="outline-info">View Lab Results</Button></Nav.Link>

</Nav.Item>
</Nav> */}

          {/* <h3 className='center'>Select One Of The Following teams</h3>
          <br />
          <br /> */}
{/* <br /> */}
          <Form className='mb-4'>
            <Form.Row>
              <div className='col-md-3'>
                <Form.Group>
                  <Form.Control
                    as='select'
                    // placeholder='Select City'
                    defaultValue='Select City'
                  >
                    <option>Select City</option>

                    <option>Gaborone</option>
                    <option>Mahalapye</option>
                    <option>Jwaneng</option>
                    <option>Francistown</option>
                    <option>Orapa</option>
                  </Form.Control>
                </Form.Group>
              </div>
              <div className='col-md-6'>
                <Form.Group>
                  <Form.Control
                    type='text'
                    placeholder='Search by:Doctors,Speciality,Symptoms,Disease'
                  />
                </Form.Group>
              </div>
              <div className='col-md-3'>
                <Form.Group>
                  <Form.Control as='select' placeholder='Select Hospital'>
                    <option>Select Hospital</option>

                    <option>Kalafhi</option>
                    <option>Gaborone Private Hospital</option>
                    <option>Bokamoso</option>
                    <option>Sidilega</option>
                    <option>Leetile</option>
                  </Form.Control>
                </Form.Group>
              </div>
            </Form.Row>
          </Form>


          {/* <div className="card mb-3 col-md-6" >
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="..." className="card-img" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> */}

{_.map(this.props.gotDoctorsSuccessfully, (profile) =>{
       console.log('profiiile',profile.owner.firstname)

       return(
        <Card  className='col-md-9 mb-3 '>
        <div className='row'>
        {/* <p>Ratings</p>
          <p>Reviews</p> */}
      <Image  style={{height: '12rem'}} className='col-md-3 mt-5' src={Hussein} roundedCircle />
     
        <Card.Body className='col-md-6'>
          <Card.Title className='text-primary'>Dr {profile.owner.firstname}  {profile.owner.lastname}</Card.Title>
          
          <Card.Text>
          <ListGroup>
        <ListGroup.Item><strong>Qualification</strong> : <i>{profile.qualification}</i> </ListGroup.Item>
        <ListGroup.Item><strong>Department</strong> : <i>{profile.department}</i></ListGroup.Item>
        <ListGroup.Item><strong>Speciality</strong> : <i>{profile.speciality}</i></ListGroup.Item>
        <ListGroup.Item><strong>Locality</strong> : <i>Gaborone,Botswana</i></ListGroup.Item>
        <ListGroup.Item><strong>Consultant in </strong>: <i>Kalafhi Private Hospital</i></ListGroup.Item>
        <ListGroup.Item><strong>Experience </strong>: <i>{profile.experience} years</i></ListGroup.Item>
      </ListGroup>
          </Card.Text>
          <Button 
          as={Link}
          className='mr-2 mb-2'
          variant="warning"
          to={{
            pathname:'/bookAppointment',
            state:{fromSelectedDoctor:profile}
          }}
          // to='/bookAppointment'
          >
          Book Appointment
          </Button>
          <Button 
          as={Link} 
          variant="primary"
          className='mr-2 mb-2'
          to='/bookAppointment'>
          Online Consultation
          </Button>
          <Button 
          as={Link} 
          variant="danger"
          className='mr-2'
          to='/bookAppointment'>
          Request Prescription
          </Button>
      
        </Card.Body>
        </div>
      </Card>
       )

    })}
{/* <Card  className='col-md-9 mb-3 '>
  <div className='row'>
<Image  style={{height: '12rem'}} className='col-md-3 mt-5' src={Hussein} roundedCircle />

  <Card.Body className='col-md-6'>
    <Card.Title className='text-primary'>Dr Abhilash Bansal</Card.Title>
    <Card.Text>
    <ListGroup>
  <ListGroup.Item><strong>Qualification</strong> : <i>MBBS,DNB(Neurology)</i> </ListGroup.Item>
  <ListGroup.Item><strong>Department</strong> : <i>Neurosurgeon</i></ListGroup.Item>
  <ListGroup.Item><strong>Speciality</strong> : <i>Neurosurgery</i></ListGroup.Item>
  <ListGroup.Item><strong>Locality</strong> : <i>Gaborone,Botswana</i></ListGroup.Item>
  <ListGroup.Item><strong>Consultant in </strong>: <i>Kalafhi Private Hospital</i></ListGroup.Item>
  <ListGroup.Item><strong>Experience </strong>: <i>6 years</i></ListGroup.Item>
</ListGroup>
    </Card.Text>
    <Button as={Link} className='mr-2' variant="warning" to='/bookAppointment'>Book Appointment</Button>
    <Button as={Link} variant="primary" to='/bookAppointment'>Online Consultation</Button>

  </Card.Body>
  </div>
</Card> */}

<Card  className='col-md-9 mb-3 '>
  <div className='row'>
<Image  style={{height: '12rem'}} className='col-md-3 mt-5' src={Theresa} roundedCircle />

  <Card.Body className='col-md-6'>
    <Card.Title className='text-primary'>Dr Revathy Parthasarathy</Card.Title>
    <Card.Text>
    <ListGroup>
  <ListGroup.Item><strong>Qualification</strong> : <i>MBBS,DGO</i> </ListGroup.Item>
  <ListGroup.Item><strong>Department</strong> : <i>Gynecologist &amp; Obstetrician</i></ListGroup.Item>
  <ListGroup.Item><strong>Speciality</strong> : <i>Gynaecology</i></ListGroup.Item>
  <ListGroup.Item><strong>Locality</strong> : <i>Gaborone,Botswana</i></ListGroup.Item>
  <ListGroup.Item><strong>Consultant in </strong>: <i>Gaborone Private Hospital</i></ListGroup.Item>
  <ListGroup.Item><strong>Experience </strong>: <i>23 years</i></ListGroup.Item>
</ListGroup>
    </Card.Text>
    <Button 
     as={Link}
     className='mr-2' 
     variant="warning"
    
    to='/bookAppointment'
     >
     Book Appointment
     </Button>
    <Button as={Link} variant="primary" to='/bookAppointment'>Online Consultation</Button>
    <Link
  to={{
    pathname: "/courses",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true }
  }}
/>

  </Card.Body>
  </div>
</Card>

<Card  className='col-md-9 mb-3 '>
  <div className='row'>
    <div className='col-md-3 mt-5'>
<Image  style={{height: '12rem'}}  src='' alt='loading' roundedCircle />
</div>
<div className='col-md-6'>
  <Card.Body  >
    <Card.Title className='text-primary'>Dr Girish B Navasundi </Card.Title>
    <Card.Text >
    <ListGroup as='ul' variant='flush' >
  <ListGroup.Item ><strong>Qualification</strong> : <i>MBBS,MD (Gen Medicine),DNB (Cardiology)</i> </ListGroup.Item>
  <ListGroup.Item ><strong>Department</strong> : <i>Cardiologist</i></ListGroup.Item>
  <ListGroup.Item ><strong>Speciality</strong> : <i>Cardiology</i></ListGroup.Item>
  <ListGroup.Item ><strong>Locality</strong> : <i>Gaborone,Botswana</i></ListGroup.Item>
  <ListGroup.Item ><strong>Consultant in </strong>: <i>Bokamoso Private Hospital</i></ListGroup.Item>
  <ListGroup.Item ><strong>Experience </strong>: <i>21 years</i></ListGroup.Item>
</ListGroup>
    </Card.Text>
    <Button as={Link} className='mr-2' variant="warning" to='/bookAppointment'>Book Appointment</Button>
    <Button as={Link} variant="primary" to='/bookAppointment'>Online Consultation</Button>

  </Card.Body>
  </div>
  </div>
</Card>
          </Container>

          {/* <ListGroup as='ol' type='1'>
            <ListGroup.Item action as='button'>
              <Link to='/'> Electronic Banking</Link>
            </ListGroup.Item>
            <ListGroup.Item action as='button'>
              <Link to='/'>Applications And Peripheral support</Link>
            </ListGroup.Item>
            <ListGroup.Item action as='button'>
              <Link>Service Assurance</Link>
            </ListGroup.Item>
            <ListGroup.Item action as='button'>
              <Link to='/'>Infrastructure</Link>
            </ListGroup.Item>
          </ListGroup> */}


          

      </div>
    );
  }
}                            

function mapStateToProps(state) {
  return {
    gotDoctorsSuccessfully:state.getAllDoctorsProfiles.doctorsProfiles,
    // authenticated: state.authReducer.authenticated,

      // state.getUserApplications.gotApplicationSuccessfully,
  };
}

export default (connect(mapStateToProps, { getAllDoctorsActionCreator }) (requireAuth(SelectGroup)) )

    