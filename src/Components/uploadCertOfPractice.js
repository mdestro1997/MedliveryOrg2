import React, {Component} from 'react'
//import {Label} from 'react-bootstrap'


export default class FieldFileInput  extends Component{
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const { input: { onChange } } = this.props
    onChange(e.target.files[0])
    console.log(e.target.files[0])
  }

  render(){
    

    
    return (
        
        <div className="col-md-6 mt-3 ">
          <div className="custom-file">
          <label>Copy of Certificate Of Practice</label>
            <input  id="inputGroupFile01" onChange={this.onChange} accept=".jnp, .jpeg" placeholder ="Upload Copy Of MedicalHistory" required="required" type="file" className="custom-file-input" />
      <label className="custom-file-label" for="inputGroupFile01">Copy of Certificate Of Practice</label>
          </div>
        </div>
        
      );
}
}

