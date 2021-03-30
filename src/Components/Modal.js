import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Modal,Button} from 'react-bootstrap'

class Modals extends Component{

  onAgree = () =>{

     this.props.onAgree()
  }

  onDisagree = () =>{
 
     this.props.onDisagree()

  }


    render(){
       
        return ReactDOM.createPortal(
            <div>
<Modal show={true} onHide={this.onDisagree}>
        <Modal.Header closeButton >
        <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.body}</Modal.Body>
        <Modal.Footer>
          <Button onClick={this.onDisagree} variant="primary" >
            {this.props.buttonOne}
          </Button>
          <Button onClick={this.onAgree} variant="danger" >
            {this.props.buttonTwo}
          </Button>
        </Modal.Footer>
      </Modal>
            </div>,
            document.querySelector("#modal")
        )
    }
}

export default  Modals;