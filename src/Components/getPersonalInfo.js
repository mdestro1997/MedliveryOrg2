import React from 'react';
import { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Button, Form,Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Field,reduxForm } from 'redux-form';


class PersonalInfo extends Component{

    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.textInput = React.createRef();
        // this.focusTextInput = this.focusTextInput.bind(this);
      }

    // edit = React.createRef();


    renderGenderField = ( { className, label , input , type , placeholder,identifier,disabled  } ) =>{

        return (
            <div className={className}>
                <fieldset>
              <Form.Group >
                <Form.Label as="legend">{label}</Form.Label>
                <Form.Check
                {...input}
                disabled={disabled}
                type={type}
                label="Male"
                
                name={identifier}
                id="genderOne"
                />
                <Form.Check
                {...input}
                type={type}
                disabled={disabled}
                label="Female"
                name={identifier}
                id="genderTwo"
                />
      
                {/* {this.renderError(meta)} */}
              </Form.Group>
              </fieldset>
              <div>

<Button
className="mr-3 mb-2"
 type='submit'
 variant="success"
>
Save
</Button>

<Button
className="mr-3 mb-2"
 type='submit'
 variant="danger"
>
Edit
</Button>

</div>
            </div>
          );
         
    }


    renderFormFields = ({ className, label , input , id , type , placeholder , disabled,ref }) =>{ 

        return (
            <div className={className}>
            
            <Card>
            <ListGroup>
            <ListGroup.Item>
              <Form.Group >
                <Form.Label>{label}</Form.Label>
                <Form.Control
                  required
                //   {...props}
                //   {...rest}
                  {...input}
                  type={type}
                  ref = {this.textInput}     
                  id ={id}
                  disabled={disabled}
                  placeholder={placeholder}
                />
      
                {/* {this.renderError(meta)} */}
              </Form.Group>
              <div>

<Button
className="mr-3 mb-2"
 type='submit'
 variant="success"
 
 onClick = { 
     console.log('dd' , this.textInput.current)
      }
>
Save
</Button>

<Button
className="mr-3 mb-2"
 type='submit'
 variant="danger"
//  onClick = { }
>
Edit
</Button>

</div>
              </ListGroup.Item>
              </ListGroup>
              
              </Card>
        
            </div>
          );
     }



    render(){

        return( 

            <div className='container mt-5 mb-5'>
                <Container>
                <h3 className='text-center text-secondary mb-5'>Basic Profile Info</h3>

                <Form>

                <Form.Row>
                    <Field 
                    name = 'firstname'
                    label="Firstname"
                    type="text"
                    placeholder="Firstname"
                    className="col-md-6 mb-3"
                    disabled={true}
                    // onClick = {this.textInput.current.disabled = "true" }
                    component={ this.renderFormFields }   
                    />

                    <Field 
                    name = 'lastname'
                    label="Lastname"
                    type="text"
                    placeholder="Lastname"
                    className="col-md-6 mb-3"

                    disabled={true}
                    component={ this.renderFormFields  } 

                    />
   
                </Form.Row>

                {/* <Form.Row>
                    <Field 
                    name = 'lastname'
                    label="Lastname"
                    type="text"
                    placeholder="Lastname"
                    className="col-md-6"
                    disabled="true"
                    component={ this.renderFormFields  } 

                    />

                </Form.Row> */}
                   
                <Form.Row>
                    <Field 
                    name = 'email'
                    label="Email"
                    type="email"
                    placeholder="Email"
                    className="col-md-6 mb-3"
                    disabled={true}
                    id = "email"
                    component={ this.renderFormFields } 

                    />

                    <Field 
                    name = 'phone'
                    label="Phone"
                    type="text"
                    placeholder="Phone"
                    className="col-md-6 mb-3"
                    disabled={true}
                   
                    component={ this.renderFormFields  } 

                    />

                </Form.Row>

                {/* <Form.Row>

                   
                    <Field 
                    name = 'phone'
                    label="Phone"
                    type="text"
                    placeholder="Phone"
                    className="col-md-6"
                    disabled="true"
                    component={ this.renderFormFields  } 

                    />
                </Form.Row> */}

                <Form.Row>
                    <Field 
                    name = 'password'
                    label="Password"
                    type="password"
                    placeholder="Password"
                    className="col-md-8"
                    disabled={true}
                    ref = {this.textInput}
                    component={ this.renderFormFields  } 

                    />
                    

                </Form.Row>

                <Form.Row>
                    <Field 
                    name = "gender"
                    label="Gender"
                    identifier ="gender"
                    type="radio"
                    placeholder="Gender"
                    disabled={true}
                    className="col-md-4 mb-3"
                    component={ this.renderGenderField } 

                    />
                </Form.Row>


                <div>

                <Button
                className="mr-3"
                 type='submit'
                 variant="success"
                >
                Save
                </Button>

                <Button
                 type='submit'
                 variant="danger"
                >
                Cancel
                </Button>

                </div>



                </Form>


                </Container>

            </div>
         )
    }
}

export default reduxForm({
    form: 'personalInfoForm'
  })(PersonalInfo);