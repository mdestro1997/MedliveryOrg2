/* eslint-disable no-unused-vars */
import React,{Component} from 'react'
import {Dropdown,Button} from 'react-bootstrap'

import {getApplicationsActionCreator} from '../../actions/PatientActionCreators/getApplicationsActionCreator'
import { connect } from 'react-redux'



class FilterBy extends Component{



 onClickHandler(e){

    console.log('dfghhkshsfjkshdfkjs',e)

//     console.log('authGETALLAPPLI ',this.props.authenticated)
// // formValues.token = localStorage.getItem('token');

//     // const token = this.props.authenticated;
//     const token = localStorage.getItem('token')
//     this.props.getApplicationsActionCreator(token);

 }

    render(){

        return(

            <div className='ml-2'>
                <Dropdown>
  <Dropdown.Toggle variant={this.props.variant} id="dropdown-basic">
   {this.props.title}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    
    <Dropdown.Item  onClick={() =>this.props.passingOnClickHandlerToChild(this.props.title, this.props.itemOne) } >{this.props.itemOne}</Dropdown.Item>
    <Dropdown.Item  onClick={() =>this.props.passingOnClickHandlerToChild(this.props.title, this.props.itemTwo) }  >{ this.props.itemTwo}</Dropdown.Item>
    <Dropdown.Item   onClick={() =>this.props.passingOnClickHandlerToChild(this.props.title,this.props.itemThree)} >{ this.props.itemThree}</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>    
           </div>
        )
    }
}

export default FilterBy;

