import React, { Component } from 'react';
import { Navbar, Nav, Button, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  // componentDidMount(){
  //   this.isLoggedIn();

  // if(allowed_person){

  //   open door

  // }else{
  //   reject
  // }

  // }

  isLoggedIn() {
    // console.log('props ',this.props.authenticated);
    const authenticated = this.props.authenticated;
    const authenticatedtoken = localStorage.getItem('token');

    console.log('authenticated ', authenticated);
    if (authenticated) {
      if (authenticated.token && authenticated.userCategory) {
        if (authenticated.userCategory === 'A') {
          return (
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link as={Link} variant='pills' to='/adminSignUp'>
                  <Button variant='outline-info'>Create New Admin</Button>
                </Nav.Link>
                <Nav.Link as={Link} variant='pills' to='/doctorSignUp'>
                  <Button variant='outline-info'>Create New Doctor</Button>
                </Nav.Link>
                <Nav.Link as={Link} variant='pills' to='/searchAndUpdate'>
                  <Button variant='outline-info'>
                    Update Existing User Roles
                  </Button>
                </Nav.Link>
                <Nav.Link as={Link} variant='pills' to='/'>
                  <Button variant='outline-info'>Suspend User</Button>
                </Nav.Link>
              </Nav>

              <Nav className='ml-auto '>
                <Form inline>
                  <Link to='/getAllUserApplication'>
                    <Button className='mr-2' variant='outline-light'>
                      Register As Patient
                    </Button>
                  </Link>

                  <br />
                  <Link to='/signOut'>
                    <Button variant='outline-light'>Logout</Button>
                  </Link>
                </Form>
              </Nav>
            </Navbar.Collapse>
          );
        } else if (authenticated.userCategory === 'AP') {
          return (
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link as={Link} variant='pills' to='/applyForm'>
                  <Button variant='outline-info'>Request Medication</Button>
                </Nav.Link>
                <Nav.Link as={Link} variant='pills' to='/bookAppointment'>
                  <Button variant='outline-info'>Book Appointment</Button>
                </Nav.Link>
                <Nav.Link as={Link} variant='pills' to='/onlineConsultation'>
                  <Button variant='outline-info'>Consult Online</Button>
                </Nav.Link>
                <Nav.Link as={Link} variant='pills' to='/'>
                  <Button variant='outline-info'>View Lab Results</Button>
                </Nav.Link>
              </Nav>

              <Nav className='ml-auto '>
                <Form inline>
                  <Link to='/getAllUserApplication'>
                    <Button className='mr-2' variant='outline-light'>
                      Med Request History
                    </Button>
                  </Link>

                  <br />
                  <Link to='/signOut'>
                    <Button variant='outline-light'>Logout</Button>
                  </Link>
                </Form>
              </Nav>
            </Navbar.Collapse>
          );
        } else if (authenticated.userCategory === 'ADP') {
          return (
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link as={Link} variant='pills' to='/applyForm'>
                  <Button variant='outline-info'>Request Medication</Button>
                </Nav.Link>
                <Nav.Link as={Link} variant='pills' to='/bookAppointment'>
                  <Button variant='outline-info'>Book Appointment</Button>
                </Nav.Link>
                <Nav.Link as={Link} variant='pills' to='/onlineConsultation'>
                  <Button variant='outline-info'>Consult Online</Button>
                </Nav.Link>
                <Nav.Link as={Link} variant='pills' to='/'>
                  <Button variant='outline-info'>View Lab Results</Button>
                </Nav.Link>
              </Nav>

              <Nav className='ml-auto '>
                <Form inline>
                  <Link to='/getAllUserApplication'>
                    <Button className='mr-2' variant='outline-light'>
                      Med Request History
                    </Button>
                  </Link>

                  <br />
                  <Link to='/signOut'>
                    <Button variant='outline-light'>Logout</Button>
                  </Link>
                </Form>
              </Nav>
            </Navbar.Collapse>
          );
        } else if (authenticated.userCategory === 'P') {
          return (
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'>
              <Nav.Link as={Link} variant='pills' to='/selectGroup'>
                  <Button variant='outline-info'>My Dashboard</Button>
                </Nav.Link>
                <Nav.Link as={Link} variant='pills' to='/applyForm'>
                  <Button variant='outline-info'>Request Prescription</Button>
                </Nav.Link>
                <Nav.Link as={Link} variant='pills' to='/getPatientAppointments'>
                  <Button variant='outline-info'>My Appointments</Button>
                </Nav.Link>
                <Nav.Link as={Link} variant='pills' to='/onlineConsultation'>
                  <Button variant='outline-info'>Consult Online</Button>
                </Nav.Link>
                {/* <Nav.Link as={Link} variant='pills' to='/'>
                  <Button variant='outline-info'>View Lab Results</Button>
                </Nav.Link> */}
              </Nav>

              <Nav className='ml-auto '>
                <Form inline>
                  <Link to='/getAllUserApplication'>
                    <Button className='mr-2' variant='outline-light'>
                      Med Request History
                    </Button>
                  </Link>

                  <br />
                  <Link to='/signOut'>
                    <Button variant='outline-light'>Logout</Button>
                  </Link>
                </Form>
              </Nav>
            </Navbar.Collapse>
          );
        } else if (authenticated.userCategory === 'PD') {
          return (
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link as={Link} variant='pills' to='/applyForm'>
                  <Button variant='outline-info'>Request Medication</Button>
                </Nav.Link>
                <Nav.Link as={Link} variant='pills' to='/bookAppointment'>
                  <Button variant='outline-info'>Book Appointment</Button>
                </Nav.Link>
                <Nav.Link as={Link} variant='pills' to='/onlineConsultation'>
                  <Button variant='outline-info'>Consult Online</Button>
                </Nav.Link>
                <Nav.Link as={Link} variant='pills' to='/'>
                  <Button variant='outline-info'>View Lab Results</Button>
                </Nav.Link>
              </Nav>

              <Nav className='ml-auto '>
                <Form inline>
                  <Link to='/getAllUserApplication'>
                    <Button className='mr-2' variant='outline-light'>
                      Med Request History
                    </Button>
                  </Link>

                  <br />
                  <Link to='/signOut'>
                    <Button variant='outline-light'>Logout</Button>
                  </Link>
                </Form>
              </Nav>
            </Navbar.Collapse>
          );
        } else if (authenticated.userCategory === 'AD') {
          return (
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link as={Link} variant='pills' to='/applyForm'>
                  <Button variant='outline-info'>Request Medication</Button>
                </Nav.Link>
                <Nav.Link as={Link} variant='pills' to='/bookAppointment'>
                  <Button variant='outline-info'>Book Appointment</Button>
                </Nav.Link>
                <Nav.Link as={Link} variant='pills' to='/onlineConsultation'>
                  <Button variant='outline-info'>Consult Online</Button>
                </Nav.Link>
                <Nav.Link as={Link} variant='pills' to='/'>
                  <Button variant='outline-info'>View Lab Results</Button>
                </Nav.Link>
              </Nav>

              <Nav className='ml-auto '>
                <Form inline>
                  <Link to='/getAllUserApplication'>
                    <Button className='mr-2' variant='outline-light'>
                      Med Request History
                    </Button>
                  </Link>

                  <br />
                  <Link to='/signOut'>
                    <Button variant='outline-light'>Logout</Button>
                  </Link>
                </Form>
              </Nav>
            </Navbar.Collapse>
          );
        } else if (authenticated.userCategory === 'D') {
          return (
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link as={Link} variant='pills' to='/getDoctorsAppointments'>
                  <Button variant='outline-info'>Manage Appointments</Button>
                </Nav.Link>
                <Nav.Link as={Link} variant='pills' to='/bookAppointment'>
                  <Button variant='outline-info'>
                    View Medication Requests
                  </Button>
                </Nav.Link>
                <Nav.Link as={Link} variant='pills' to='/'>
                  <Button variant='outline-info'>Attach Lab Results</Button>
                </Nav.Link>
                {/* <Nav.Link as={Link} variant="pills" to="/"><Button variant="outline-info">Alter Appointment Times</Button></Nav.Link> */}
              </Nav>

              <Nav className='ml-auto '>
                <Form inline>
                  <Link to='/getAllUserApplication'>
                    <Button className='mr-2' variant='outline-light'>
                      Register As Patient
                    </Button>
                  </Link>

                  <br />
                  <Link to='/signOut'>
                    <Button variant='outline-light'>Logout</Button>
                  </Link>
                </Form>
              </Nav>
            </Navbar.Collapse>
          );
        }
      }
    } else {
      return (
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link as={Link} variant='pills' to='/applyForm'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} variant='pills' to='/targetGroup'>
              Target Group
            </Nav.Link>
            <Nav.Link as={Link} variant='pills' to='/'>
              Future Prospects
            </Nav.Link>
            <Nav.Link as={Link} variant='pills' to='/aboutMedlivery'>
              About Us
            </Nav.Link>
          </Nav>

          <Nav className='ml-auto '>
            <Form inline>
              <Link to='/signUpForm'>
                <Button className='mr-2' variant='outline-light'>
                  Sign Up
                </Button>
              </Link>
              <br />
              <Link to='/loginForm'>
                <Button variant='outline-light'>Login</Button>
              </Link>
            </Form>
          </Nav>
        </Navbar.Collapse>
      );
    }
  }

  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand='lg'
          className='bg-dark'
          fixed='top'
          variant='dark'
        >
          <Navbar.Brand as={Link} to='/'>
            <h3>
              <i>MEDLIVERY</i>
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />

          {this.isLoggedIn()}
          {/* <Form inline> */}

          {/* </Form> */}
        </Navbar>

        <br />
        <br />
        {/*   
  <br />
  <br />  
  <br />
  <br /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.authReducer.authenticated,
  };
}

export default connect(mapStateToProps, null)(Header);
