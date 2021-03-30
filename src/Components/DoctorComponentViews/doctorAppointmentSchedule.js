import React,{Component} from 'react'
import {Field,reduxForm} from 'redux-form'
import {Form,Button,Alert,Container,Col} from 'react-bootstrap'
import _ from 'lodash';


class  DoctorAppointmentSchedule extends Component {

killer(timeSlots){
   _.forEach(timeSlots, function(value) {
      console.log(value);
    return       <option>08:30-09:00</option>
    
    }) 
}
    

renderSelect = ({input,type,label,controlId,placeholder,required,accept,meta,error,timeSlots}) => {
   
    console.log('meta ',timeSlots);
     

    return(

<div className=' container col-md-3 '>


<Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label>{label}</Form.Label>
    <Form.Control as="select" custom>
    {/* var new_book = []; */}
 {/* { _.forEach(timeSlots, function(value) {
  console.log(value);
return       <option>{value}</option>

}) } */}
{this.killer(timeSlots)}
      <option>08:00-08:30</option>
      <option>08:30-09:00</option>
      <option>09:00-09:30</option>
      <option>09:30-10:00</option>
      <option>10:00-10:30</option>
      <option>10:30-11:00</option>
      <option>10:30-11:00</option>
      <option>11:00-11:30</option>
      <option>11:30-12:00</option>



    </Form.Control>
  </Form.Group>

        {/* <Form.Group  controlId={controlId}>
        <Form.Label>{label}</Form.Label>
        <Form.Control 
       required
       {...input}
        type={type}
         placeholder={placeholder}  />
      </Form.Group>
       */}
      

      </div>
        
    )

}





 renderHelper = ({input,type,label,controlId,placeholder,required,accept,meta,error,disabled}) => {
   
        console.log('meta ',meta)
         

        return(

    <div className=' container col-md-3 '>
            <Form.Group  controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control 
           required
           {...input}
           disabled={disabled}
            type={type}
             placeholder={placeholder}  />
          </Form.Group>
          
          
   
          </div>
            
        )
    
    }

    render(){
        const {handleSubmit} = this.props;
        var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";


  var books = [];
  var new_book = ['08:00 - 08:30','08:30-09:00','09:00-09:30','09:30-10:00','10:00-10:30','10:30-11:00','11:00-11:30','11:30-12:00'];
  books.push(new_book);


  // var dayTime={};

  // const destro = _.map(weekday,(day) =>{

     
       
  // });
  const destro = { "Monday":books[0],"Tuesday":books[0],"Wednesday":books[0],"Thursday":books[0],"Friday":books[0],"Saturday":books[0],"Sunday":books[0] }
  const days = _.keysIn(destro)
  console.log(_.map(destro,(value)=>{

    console.log('destr',value)})
  );

//   return(
//      <div>
//  { _.map(destro,(value)=>{
    // console.log(key,value);
 
     
        return (
            <div>
<Container>
<Form className='mt-5 mb-5' >
    
    <div className='row'>
        <h3 className="container text-center text-dark display-4 ">Doctor's Appointment Scheduler </h3>
{/* 
       {_.mapKeys(destro,(day,key) =>{

            // console.log("king ",day , "key ",key );
       })} */}
            
            </div>  
             <div className='mt-3'>
             <Form.Row className="align-items-center">
             <Field
                name="dayOfAppointment"
                type="text"
                label={days[0]}
                controlId="formGridAppointmentDay"
                placeholder={days[0]}
                disabled="true"
                component={this.renderHelper}
                />
                <Field
                name="startTime"
                type="time"
                label="Appointment Start Time"
                controlId="formGridAppointmentStartTime"
                placeholder="Appointment Start Time"
                timeSlots={destro.Monday}
                component={this.renderSelect}
                />
                <Field
                name="endTime"
                type="time"
                label="Appointment End Time"
                controlId="formGridAppointmentEndTime"
                placeholder="Appointment End Time"
                component={this.renderSelect}
                />
<Col xs="auto" className="my-2">
      <Button type="submit">Submit</Button>
    </Col>
               </Form.Row>
               <Form.Row>
             <Field
                name="dayOfAppointment"
                type="text"
                label="Tuesday"
                controlId="formGridAppointmentDay"
                placeholder="Tuesday"
                disabled="true"
                component={this.renderHelper}
                />
                <Field
                name="startTime"
                type="time"
                label="Appointment Start Time"
                controlId="formGridAppointmentStartTime"
                placeholder="Appointment Start Time"
                component={this.renderSelect}
                />
                <Field
                name="endTime"
                type="time"
                label="Appointment End Time"
                controlId="formGridAppointmentEndTime"
                placeholder="Appointment End Time"
                component={this.renderSelect}
                />

               </Form.Row> 
                  <Form.Row>
             <Field
                name="dayOfAppointment"
                type="text"
                label="Wednesday"
                disabled="true"
                controlId="formGridAppointmentDay"
                placeholder="Wednesday"
                component={this.renderHelper}
                />
                <Field
                name="startTime"
                type="time"
                label="Appointment Start Time"
                controlId="formGridAppointmentStartTime"
                placeholder="Appointment Start Time"
                component={this.renderSelect}
                />
                <Field
                name="endTime"
                type="time"
                label="Appointment End Time"
                controlId="formGridAppointmentEndTime"
                placeholder="Appointment End Time"
                component={this.renderSelect}
                />

               </Form.Row>  
                 <Form.Row>
             <Field
                name="dayOfAppointment"
                type="text"
                label="Thursday"
                disabled="true"
                controlId="formGridAppointmentDay"
                placeholder="Thursday"
                component={this.renderHelper}
                />
                <Field
                name="startTime"
                type="time"
                label="Appointment Start Time"
                controlId="formGridAppointmentStartTime"
                placeholder="Appointment Start Time"
                component={this.renderSelect}
                />
                <Field
                name="endTime"
                type="time"
                label="Appointment End Time"
                controlId="formGridAppointmentEndTime"
                placeholder="Appointment End Time"
                component={this.renderSelect}
                />

               </Form.Row>    <Form.Row>
             <Field
                name="dayOfAppointment"
                type="text"
                label="Friday"
                disabled="true"
                controlId="formGridAppointmentDay"
                placeholder="Friday"
                component={this.renderHelper}
                />
                <Field
                name="startTime"
                type="time"
                label="Appointment Start Time"
                controlId="formGridAppointmentStartTime"
                placeholder="Appointment Start Time"
                component={this.renderSelect}
                />
                <Field
                name="endTime"
                type="time"
                label="Appointment End Time"
                controlId="formGridAppointmentEndTime"
                placeholder="Appointment End Time"
                component={this.renderSelect}
                />

               </Form.Row>    <Form.Row>
             <Field
                name="dayOfAppointment"
                type="text"
                label="Select Day"
                disabled="true"
                controlId="formGridAppointmentDay"
                placeholder="Saturday"
                component={this.renderHelper}
                />
                <Field
                name="startTime"
                type="time"
                label="Appointment Start Time"
                controlId="formGridAppointmentStartTime"
                placeholder="Appointment Start Time"
                component={this.renderSelect}
                />
                <Field
                name="endTime"
                type="time"
                label="Appointment End Time"
                controlId="formGridAppointmentEndTime"
                placeholder="Appointment End Time"
                component={this.renderSelect}
                />

               </Form.Row>

               
               </div>

               {/* <div><Alert >{this.props.errorMessage}</Alert></div> */}

<Form.Row>
<Button className='container col-md-4 mt-4' type ="submit" variant="success"> Submit </Button> 
</Form.Row>
<br />  
</Form>
</Container>      
            </div>
        )
        
      // })}
      // </div>
  // )
    }
   
}          

export default reduxForm({

    form:'DoctorAppointmentScheduler'
    
})(DoctorAppointmentSchedule)

// export default DoctorAppointmentSchedule
