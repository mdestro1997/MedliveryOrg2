import React,{Component}   from 'react';
import { Jumbotron,Card } from 'react-bootstrap';
import Destro from '../../img/destro.jpg'
import Pitso from '../../img/mmopiemang.jpg'
import Aobakwe from '../../img/Abi.jpg'
import Footer from '../footer'

class AboutMedlivery extends Component {

  render() {
    return (
      <div>
        <div className='container'>
          <h3 className='display-1 text-center text-secondary mt-5 mb2'>
            <i>About Medlivery</i>
          </h3>

          <p className='lead text-center mb-5'>
            Welcome to Medlivery, Botswana's largest professional telehealth
            plaform housing more than 100+ doctors &amp; 50+ hospitals around
            the country.
          </p>
        </div>

        <Jumbotron fluid>
          <h3 className='container display-4 text-center text-dark mt-5 mb-2'>
            <i>Mission</i>
          </h3>

          <p className='container lead text-center mb-5'>
            Our aim is to improve health care delivery in Botswana by leveraging
            today's technology to offer solutions that increase access and
            convenience to healthcare.
          </p>
        </Jumbotron>

        <Jumbotron fluid>
          <h3 className='container display-4 text-center text-dark mt-5 mb-2'>
            <i>Vision</i>
          </h3>

          <p className='container lead text-center mb-5'>
            To be the leading medical healthcare platform in Africa offering
            value adding services to our customers through convienient access to
            healthcare.{' '}
          </p>
        </Jumbotron>

        <Jumbotron fluid>
          <h3 className='container display-4 text-center text-dark mt-5 mb-2'>
            <i>Who Are We?</i>
          </h3>

          <p className='container lead text-center mb-5'>
            <i>
              Medlivery is the future of health care delivery. We offer you the
              best and most convenient means to access health care. Our brand is
              committed towards maximising customer experiences at every touch
              point through a number of value creating services. Are you looking
              to ask a doctor questions about your health online? Are you unable
              to pick up your prescriptions or schedule appointments? Look no
              further! Through a simple touch of a button you can get access to
              these services and more through Medlivery. We offer a fast, easy
              and convenient way to gain access to general practitioners in your
              proximity either through live online consultations, audio
              consultations or gained ability to request delivery of
              prescriptions at the comfort of your own home. Through our
              application, you also gain access to medical practitioners in your
              area 24 hours a day, 7 days a week. We use a stringent
              verification process to ensure that your personal information and
              data are 100% secure and that you are satisfied every time.
              Subscribe to Medlivery today and invest in your health.
            </i>
          </p>
        </Jumbotron>

 <div className='container mt-5 mb-5'>
<h3 className='display-4 text-center text-dark mt-5 mb-5'>
  <i>OUR TEAM</i>
</h3>

<div className='row'>
  <div className='col-md-4'>
    <Card>
      <Card.Img src={Destro} width='300' height='400'/>
      <Card.Body>
        <Card.Title >
          <h5 className='text-center text-dark'>
          <i>Raphael Mathuba</i>
          </h5>
          
          <p className='lead text-center text-dark '>
          Co-founder, Chief Executive Officer(CEO), Chief Software Architect &amp; Software Engineer
          </p>
        </Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  </div>


  <div className='col-md-4'>
    <Card>
      <Card.Img src={Pitso} width='300' height='400'/>
      <Card.Body>
        <Card.Title >
          <h5 className='text-center text-dark'>
          <i>Pitso Mmopiemang</i>
          </h5>
          
          <p className='lead text-center text-dark '>
          Co-founder, Chief Finance Officer(CFO) &amp; Director Of Monitization          </p>
        </Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  </div>

  <div className='col-md-4'>
    <Card>
      <Card.Img src={Aobakwe} width='300' height='400'/>
      <Card.Body>
        <Card.Title >
          <h5 className='text-center text-dark'>
          <i>Aobakwe Mathuba</i>
          </h5>
          
          <p className='lead text-center text-dark '>
          Chief Technology Officer(CTO), Senior Engineer &amp; Lead Software Developer          </p>
        </Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  </div>
</div>

 </div>
 <Footer /> 
      </div>
    );
  }
}

export default AboutMedlivery;
