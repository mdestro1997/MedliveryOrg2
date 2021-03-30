import React,{Component} from 'react'
import {Container,Figure,ListGroup,ListGroupItem,Card} from 'react-bootstrap'
import GuyDepression from '../img/Guydepression.jpg'
import Cancer from '../img/Cancer.jpg'
import Dermatology from '../img/Dermatology.jpg'
import Sickness from '../img/Sickness.jpg'
import Therapy from '../img/Therapy.jpg'
import OnlineConsultation from '../img/onlineConsultation.jpg'
import Footer from './footer'

// import NotTodayCovid from '../img/covid19.jpg'

class TargetGroup extends Component{

    render(){
  
        return(
<div>
        <Container>   
            <div>
                
            <div className='container'>
          <h3 className='display-1 text-center text-info mt-5 mb-4'>
            {/* <i>Who Is It For?</i> */}
            <i>Target Group</i>
          </h3>

          <p className='lead text-center  mb-5'>
          <i>Medlivery is for everyone seeking any kind of medical assistance/advice from 
           some of the nation's leading health Care proffessionals.
           Bring healthcare of International standards within the reach of every individual. We are committed to the achievement and maintenance of excellence in education, research and healthcare for the benefit of humanity.
         </i> 
          </p>
        </div>


             <h2 className="text-center grey-text text-darken-3 ">Medlivery Is For Everyone Seeking Health Care Providers e.g</h2>
             <br />
             <br />

<div className='container mb-3'> 

<div className='row  mt-3'>
  <div className='col-md-4'>
    <Card>
      <Card.Img src={Cancer} width='300' height='400'/>
      <Card.Body>
        <Card.Title >
          <h5 className='text-center text-dark'>
          <i>Cancer</i>
          </h5>
          
        </Card.Title>
      </Card.Body>
    </Card>
  </div>

  <div className='col-md-4'>
    <Card>
      <Card.Img src={Dermatology} width='300' height='400'/>
      <Card.Body>
        <Card.Title >
          <h5 className='text-center text-dark'>
          <i>Skin Care</i>
          </h5>
          
        </Card.Title>
      </Card.Body>
    </Card>
  </div>
  <div className='col-md-4 mb-5'>
    <Card>
      <Card.Img src={GuyDepression} width='300' height='400'/>
      <Card.Body>
        <Card.Title >
          <h5 className='text-center text-dark'>
          <i>Mental Health</i>
          </h5>
          
        </Card.Title>
      </Card.Body>
    </Card>
  </div>
</div>
{/* 
  <div className='row  mt-3'>
  <div className='col-md-4'>
    <Card>
      <Card.Img src={Sickness} width='300' height='400'/>
      <Card.Body>
        <Card.Title >
          <h5 className='text-center text-dark'>
          <i>Illness</i>
          </h5>
          
        </Card.Title>
      </Card.Body>
    </Card>
  </div>

  <div className='col-md-4'>
    <Card>
      <Card.Img src={Therapy} width='300' height='400'/>
      <Card.Body>
        <Card.Title >
          <h5 className='text-center text-dark'>
          <i>Therapy</i>
          </h5>
          
        </Card.Title>
      </Card.Body>
    </Card>
  </div>
  <div className='col-md-4 mb-5'>
    <Card>
      <Card.Img src={OnlineConsultation} width='300' height='400'/>
      <Card.Body>
        <Card.Title >
          <h5 className='text-center text-dark'>
          <i>Doctor consultations</i>
          </h5>
          
        </Card.Title>
      </Card.Body>
    </Card>
  </div>
</div> */}

  




<div className='row mb-5 mt-3' >
  <div className='col-md-4'>
<ListGroup>
  <ListGroup.Item variant="warning">Cardiologist</ListGroup.Item>
  <ListGroup.Item variant="primary">Neurosurgeon</ListGroup.Item>
  <ListGroup.Item variant="danger">Psychiatrist</ListGroup.Item>
  <ListGroup.Item variant="dark">Orthopaedic Surgeon</ListGroup.Item>
</ListGroup>
</div>
<div className='col-md-4'>
<ListGroup>
  <ListGroup.Item variant="primary">Gynecologist</ListGroup.Item>
  <ListGroup.Item variant="success"> Pediatrician</ListGroup.Item>
  <ListGroup.Item variant="primary"> Gastroenrologist</ListGroup.Item>
  <ListGroup.Item variant="secondary">Neurologist</ListGroup.Item>
</ListGroup>
</div>
<div className='col-md-4 '>
<ListGroup>
  <ListGroup.Item variant="danger"> Oncologist</ListGroup.Item>
  <ListGroup.Item variant="warning">Urologist</ListGroup.Item>
  <ListGroup.Item variant="dark">Dentist</ListGroup.Item>
  <ListGroup.Item variant="info">ENT</ListGroup.Item>
</ListGroup>
</div>
  </div>
  
</div>


             {/* <Figure>
       <Figure.Image
        width={400}
        height={100}
        alt="171x180"
        className="mx-auto d-block"
        // src={NotTodayCovid}
        
        />
        </Figure> */}
             <br />
             <br />
             <h5 className="">Who Are Vunerable Group</h5>
             
             <br />
            <p className="font-weight-normal">
            The definition of <span className="font-weight-bold">Vunerable Group </span>
            in relation to <span className="font-weight-bold">COVID-19 </span>
            is classified as <span className="font-weight-bold">people who are higher risk of becoming very
            ill</span> from the virus or who <span className="font-weight-bold">may develop severe complications</span> from illness.
            </p>
            
            <br />

            <p className="font-weight-bold">Vunerable people include:</p>

            <ul>
              <li>People who are <span className="font-weight-bold">60 years and older.</span></li>
              <li>People who have the following medical conditions:
                <ol>
                <li className="font-weight-bold">Heart Conditions</li>
                <li className="font-weight-bold">High blood pressure</li>    
                <li className="font-weight-bold">Diabetes</li>    
                <li className="font-weight-bold">Cancer</li>    
                <li><span className="font-weight-bold">Chronic Kidney disease</span> with compromised kidney function.
                     This includes <span className="font-weight-bold">people on dialysis.</span> 
                </li>   
                <li className="font-weight-bold">Chronic obstructive pulmonary diseases,asthma 
                <span className="font-weight-normal">and any</span> other condition compromises respiratory function.
                </li> 
                <li className="font-weight-bold">HIV <span className="font-weight-bold">or</span> AIDS</li> 
                <li className="font-weight-bold">Tuberculosis</li> 

    
                </ol>     

              </li>
              <li className="font-weight-bold">
                  People on immunosuppressants
                  (<span className="font-weight-normal" >including</span> corticosteroids)
                  <span className="font-weight-normal" >for any reason.</span> 
              </li>

            </ul>
<br />
<br />
<p className="font-italic">*If you have a condition that is not listed and you
     believe that you may be vunerable, you must contact
      a health care proffessional who will advise us whether
       you fall into a vunerable group.
</p>
             
          

            </div>

</Container>
<Footer /> 
</div>

        )
    }
}

export default TargetGroup