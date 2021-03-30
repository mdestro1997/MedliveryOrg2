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
        
        <div className="col-md-6 mt-3  ">
          {/* <div className='row'> */}
          <div className="custom-file">
          <label>Copy Of ID</label>
            <input  id="inputGroupFile01" onChange={this.onChange} accept=".jnp, .jpeg" placeholder ="Upload Copy Of ID" required="required" type="file" className="custom-file-input" />
      <label className="custom-file-label" htmlfor="inputGroupFile01">Copy Of ID</label>
          </div>
        {/* </div> */}
        </div>
        
      );
}
}




// <div><label></label>
// <div className="file-field input-field">
//  <div className="btn">
//      <span>File</span>
//   <input
//    type='file'
//     accept='.csv, .exel'
//     required="required"
//    onChange={this.onChange}
//   />
//   </div>
//   <div className="file-path-wrapper">
//    <input 
//    className="file-path validate" 
//    type="text" 
//    placeholder="Upload Contancts file"
//    />
//  </div>
// </div>
// </div>
