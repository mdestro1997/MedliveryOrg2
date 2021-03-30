import React,{Component} from 'react'
import Form from 'react-bootstrap/Form'
import {Col,Button}  from 'react-bootstrap/'



class FormHelper extends Component{


    renderHelper({input,type,label,controlId,placeholder}){
   
        return(

            <div>

<Form>
<Form.Group controlId="formGroupEmail">
<Form.Label>Email address</Form.Label>
<Form.Control {...input} type="email" placeholder="Enter email" />
</Form.Group>

</Form>
            </div>
        )

    }

    onSubmit(e){
        
    }


    render(){

        return(

            <div>
 <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Radios
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Male"
          name="gender"
         // id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Female"
          name="gender"
          //id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="third radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
  </fieldset>

            </div>
        )
    }
}
