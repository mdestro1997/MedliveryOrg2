import React, {Component} from 'react'
//import {Label} from 'react-bootstrap'


export default class FieldFileInput  extends Component{
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

componentDidUpdate(){
  console.log('got it',this.props.refferals)

}


  onChange(e) {
    const { input: { onChange } } = this.props
    onChange(e.target.files[0])
    console.log(e.target.files[0])
  }

  onRefferalChange=() =>{

    // this.props.refferals

  }

  render(){
    

    console.log('got it',this.props.refferals)
    // console.log('got it',this.props.thingsChanged)

    return (
      
        <div className="col-md-6 mt-5 ">
          <div className="custom-file">
          <label>Doctor's Refferal Document/Note </label>
            <input  id="inputGroupFile01" onChange={this.onChange} accept=".jnp, .jpeg" placeholder ="Upload Copy Of MedicalHistory" required="required" type="file" className="custom-file-input" />
      <label className="custom-file-label" for="inputGroupFile01">Doctor's Refferal Document/Note</label>
          </div>
        </div>
        
      );
}
}

