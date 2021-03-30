import React,{Component} from 'react'
import {Navbar,Nav,Button,Form,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class HeaderAdmin extends Component{

// componentDidMount(){
//   this.isLoggedIn();
// }

isLoggedIn(){

  console.log('props ',this.props.authenticated);
  const authenticated = this.props.authenticated;
  console.log('authenticated ',authenticated);

    if(authenticated){

      return(

        <div>

<Nav className="mr-auto">
      
      <li> <Nav.Link variant="pills" to="#home">Home</Nav.Link></li>
      <li> <Nav.Link variant="pills" to="#features">View Total Requests </Nav.Link></li>
      <li><Nav.Link variant="pills" to="#features">Approved Requests</Nav.Link></li>
      <li> <Nav.Link variant="pills" to="#pricing">View Rejected Requests</Nav.Link></li>
 
  </Nav>


 <Form inline>

      <Link to ="/"><Button variant="primary">Review Patient Requests</Button></Link>
      <br />
      <Link to ="/signOut"><Button variant="danger">Logout</Button></Link>
      </Form>
        </div>
      )
    }else{

           return(

  <div>
     <Form inline>
      <Link to ="/loginFormEmployee"><Button variant="primary">Login</Button></Link>
      <br />
      <Link to ="/loginFormAdmin"><Button variant="danger">AdminLogin</Button></Link>
      </Form>
  </div>

           )
    }
}

    render(){

        return(
               <div >
                   
                 <Navbar bg="primary"  fixed="top" variant="dark">
                 <Container>
    <Navbar.Brand href="#home">MEDELIVERY (Admin)</Navbar.Brand>
    
    {/* <Form inline> */}
     
       {this.isLoggedIn()}
    {/* </Form> */}
    </Container>
  </Navbar>
  
  <br />
  <br />
  
  <br />
  <br />  
  <br />
  <br />
               </div>

        )
    }
}

function mapStateToProps(state){
  
  return{

     authenticated:state.authReducer.authenticated
  }
}


export default connect(mapStateToProps,null)(HeaderAdmin);