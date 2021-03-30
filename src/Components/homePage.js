import React,{Component} from 'react'
import {Container,Image,Jumbotron, Button,Card} from 'react-bootstrap'
import '../App.css'
import CovidHomePage from '../img/covid.jpg'
import CovidHomePage1 from '../img/pexels-ready-made-3850692.jpg'
import HappyPatient from '../img/pexels-andrea-piacquadio-3769021.jpg'
import HappyPatient1 from '../img/Mr&MrsMmopiemang.jpg'
import Footer from './footer'

class HomePage extends Component{

    render(){

         
          return (
            <div>
              <div className='landing'>
                <div className='home-wrap'>
                  <div className='home-inner'></div>
                </div>
              </div>

              <div className='caption center-block text-center'>
                <h3 className='display-1 '>MEDLIVERY</h3>
                <p className=' text-dark'>
                Register now and benefit from  a faster ,smarter and convenient way to manage you healthcare!

                </p>
                <Button className='' variant='outline-dark'>
                  <strong>GET STARTED</strong>
                </Button>
              </div>

              <Jumbotron className='   mb-5' fluid>
    <div className='text-center mb-5'>
    <h2>HOW IT WORKS </h2>

    </div>
 <div className='container'>  
 <div className='row'>
 <div className='col-md-4 text-center'>

     <h5>ORDER REPEAT PRESCRIPTIONS </h5>
     <p className='lead text-center'>Request repeat prescriptions online, with delivery of your prescription to your preferred location</p>
     </div>
{/* <div className='col-md-3 text-center'>
    <h5>ORDER TESTING SUPPLIES  </h5>
</div> */}
<div className='col-md-4 text-center'>
    <h5>GP APPOINTMENTS FROM HOME  </h5>
    <p className='lead text-center'>Register to book, check or cancel appointments with a GP, nurse, or other healthcare professional.</p>
</div>
<div className='col-md-4 text-center'>
    <h5>PERSONAL HEALTH RECORDS</h5>
    <p className='lead text-center'>Medlivery provides a complete and accurate summary of an individual's medical history which is accessible online.Patient-reported outcome data, lab results etc. </p>
</div>

 </div>
 </div> 
</Jumbotron>

{/* Ending Jumbotron*/}

{/* beginning of card */}
              <div className='container  mt-5 mb-5'>
              <div className='text-center mb-5'>
    <h2>PORTFOLIO </h2>

    </div>
                <div className='row'>
                    <div className='col-sm-4 mb-2'>
                  <Card border='info' className='bg-dark text-white' style={{ width: '18rem' }}>
                    <Card.Img as='img'  roundedCircle src={CovidHomePage} />
                    {/* <Card.ImgOverlay>
    <Card.Title className='text-success card-title text-center '><strong>Ensuring Access To Medicines</strong></Card.Title>
      </Card.ImgOverlay> */}
                    <Card.Body>
                    <Card.Title className='text-success card-title text-center '><strong>Ensuring Access To Medicines</strong></Card.Title>
                      <Card.Text>
                      Use an online patient portal to see your test results, schedule appointments, request prescription refills or email your doctor.


                      </Card.Text>
                      <Button variant='primary'>View More...</Button>
                    </Card.Body>
                  </Card>
                  </div>
                  <div className='col-md-4 mb-2'>
                  <Card border='success' className='bg-dark text-white' style={{ width: '18rem' }}>
                    <Card.Img as='img'  roundedCircle src={CovidHomePage1} />
                    {/* <Card.ImgOverlay>
    <Card.Title className='text-success card-title text-center '><strong>Ensuring Access To Medicines</strong></Card.Title>
      </Card.ImgOverlay> */}
                    <Card.Body>
                    <Card.Title className='text-warning card-title text-center '><strong>Chronic Disease Management </strong></Card.Title>
                      <Card.Text>
                      Use an online patient portal to see your test results, schedule appointments, request prescription refills or email your doctor.


                      </Card.Text>
                      <Button variant='primary'>View More...</Button>
                    </Card.Body>
                  </Card>
                  </div>
                  <div className='col-md-4 mb-2'>
                  <Card border="warning"  className='bg-dark text-white' style={{ width: '18rem' }}>
                    <Card.Img as='img'  roundedCircle src={CovidHomePage} />
                    {/* <Card.ImgOverlay>
    <Card.Title className='text-success card-title text-center '><strong>Ensuring Access To Medicines</strong></Card.Title>
      </Card.ImgOverlay> */}
                    <Card.Body>
                    <Card.Title className='text-info card-title text-center '><strong>Expanding Telehealth</strong></Card.Title>
                      <Card.Text>
                      Use an online patient portal to see your test results, schedule appointments, request prescription refills or email your doctor.


                      </Card.Text>
                      <Button variant='primary'>View More...</Button>
                    </Card.Body>
                  </Card>
                  </div>
                </div>
              </div>
{/* ENDING OF THE CARD */}

{/* beginning of TESTIMONIAL */}

<div className='container  mt-5 mb-5'>
              <div className='text-center mb-5'>
    <h2>TESTIMONIALS </h2>

    </div>
                <div className='row '>
                    <div className='bg-secondary col-sm-6 mb-2'>
                    <Card   className=' text-white' >
                    <Card.Img as='img' fluid rounded src={HappyPatient} />
                    {/* <Card.ImgOverlay>
    <Card.Title className='text-success card-title text-center '><strong>Ensuring Access To Medicines</strong></Card.Title>
      </Card.ImgOverlay> */}
                    <Card.Body>
                    <Card.Title className='text-secondary card-title text-center '><strong>Malebogo Mathuba</strong></Card.Title>
                      <Card.Text className='lead text-dark text-center'>
                  <i>  " Medlivery has saved me alot of time and many visits every month to the hospital and pharmacy. I can now order and pay online with it being delivered to me within no time.Makes so much sense rather than multiple car journeys and spending time queuing."</i>

                      </Card.Text>
                    </Card.Body>
                  </Card>
                  

</div>
<div className='bg-secondary col-sm-6 mb-2'>
                    <Card className='' >
                    <Card.Img as='img' fluid roundedCircle src={HappyPatient1} />
                    {/* <Card.ImgOverlay>
    <Card.Title className='text-success card-title text-center '><strong>Ensuring Access To Medicines</strong></Card.Title>
      </Card.ImgOverlay> */}
                    <Card.Body>
    <Card.Title className='text-secondary card-title text-center '><strong>Mr &amp; Mrs Mmopiemang</strong></Card.Title>
                      <Card.Text className='lead text-center text-dark'>
                   <i>  " Well please with Medlivery. Been using it for 2 or 3 years now;reliable delivery of my medication within 48 hrs of the mouse click. Endless tedious hours saved waiting in teh local Boots while they rummage around trying to find the right prescription." </i> 

                      </Card.Text>
                    </Card.Body>
                  </Card>

                

</div>
</div>

</div>
  {/* ending Cards Testimonies */}


                  {/*Beginning Footer  */}
                  <div >   
                  {/* <Card className="text-center  bg-secondary">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title className='text-dark'><i>MEDLIVERY</i></Card.Title>
    <Card.Text className=' text-white text-center'>
   <p className='lead '><i> At our core is a collection of design and development solutions that represents everything  <br />
     your business needs to compete in the modern marketplace.</i>
     </p> 
     
     <p className='text-dark'><strong className=''>Our Location</strong> <br/> Plot 20339 Phakalane <br/> Gaborone <br/> Botswana</p>
     <p className='text-dark'><strong>Contact info</strong> <br/> (+267) 76364834 <br/> (+267) 74321804 <br/> mathubaraphael@gmail.com</p>

    </Card.Text>
  </Card.Body>
  <Card.Footer className="">2 days ago</Card.Footer>
</Card> */}



</div> 

{/* Ending Footer */}



<Footer /> 
            </div>
          );
    }
}

export default HomePage;