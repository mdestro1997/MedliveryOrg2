import React, { Component } from 'react';
import { Card, Image, Figure, Jumbotron } from 'react-bootstrap';
import Abi from '../img/Abi.jpg';
import Raphael from '../img/destro.jpg';
import Pitso from '../img/mmopiemang.jpg';
import io from 'socket.io-client';

class OnlineConsultation extends Component {
  constructor(props) {
    super(props);

    this.localVideoref = React.createRef();
    this.remoteVideoref = React.createRef();
    this.socket = null;
    this.candidates = [];
  }
       
  componentDidMount() {
    this.socket = io('/webrtcPeerDestro', {
      path: '/webrtc',
      query: {},
    });

    this.socket.on('connection-success', (success) => {
      console.log(success);
    });

    this.socket.on('offerOrAnswer', (sdp) => {
      this.textref.value = JSON.stringify(sdp);

      this.pc.setRemoteDescription(new RTCSessionDescription(sdp));
    });

    this.socket.on('candidate', (candidate) => {
      // this.textref.value = JSON.stringify(sdp)
      // console.log('socket candidate ', candidate)
      // this.candidates = [...this.candidates, candidate];
      this.pc.addIceCandidate(new RTCIceCandidate(candidate));
    });

    // const pc_config = null;

    const pc_config = {
      // iceServers: [
      //   // {
      //   //   urls: 'stun:[STUN_IP]:[PORT]',
      //   //   'credentials': '[YOR CREDENTIALS]',
      //   //   'username': '[USERNAME]'
      //   // },
      //   {
      //     url: 'stun:stun.l.google.com:19302',
      //   },
      //   {
      //     url: 'turn:numb.viagenie.ca',
      //     username: 'mathubaraphael@gmail.com',
      //     credential: 'B@k@ng_0397',
      //   },
      // ],
      iceServers: [
        { urls: ['stun:us-turn10.xirsys.com'] },
        {
          username:
            'FqA4SeW0UjpOu25PEe06lN6NvAbsrejriEP-w0sJA88PlH1P7gAbTHa6vEYH-n2DAAAAAF-VhHNSYXBo',
          credential: '1ebe9d58-16ca-11eb-83b5-0242ac140004',
          urls: [
            'turn:us-turn10.xirsys.com:80?transport=udp',
            'turn:us-turn10.xirsys.com:3478?transport=udp',
            'turn:us-turn10.xirsys.com:80?transport=tcp',
            'turn:us-turn10.xirsys.com:3478?transport=tcp',
            'turns:us-turn10.xirsys.com:443?transport=tcp',
            'turns:us-turn10.xirsys.com:5349?transport=tcp',
          ],
        },
      ],
    };

    this.pc = new RTCPeerConnection(pc_config);

    this.pc.onicecandidate = (e) => {
      if (e.candidate) {
        console.log('oniceCandidate ', e.candidate);

        // console.log(JSON.stringify(e.candidate))
        // const adCandidate = JSON.stringify(e.candidate)
        // this.candidates = [...this.candidates, e.candidate];

        this.sendToPeer('candidate,', e.candidate);
      }
    };

    this.pc.oniceconnectionstatechange = (e) => {
      console.log(e);
    };

    this.pc.ontrack = (e) => {
      this.remoteVideoref.current.srcObject = e.streams[0];
    };

    var constraints = { audio: true, video: { width: 1280, height: 720 } };

    const success = (stream) => {
      window.localStream = stream;
      this.localVideoref.current.srcObject = stream;
      this.pc.addStream(stream);
    };  
    const failure = (e) => {
      console.log('getUSERMEDIA Error: ', e);
    }; 

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(success)
      .catch(failure);

    // var constraints = { audio: true, video: { width: 1280, height: 720 } };
    // navigator.mediaDevices.getUserMedia(constraints)
    // .then(function(mediaStream) {
    //   var video = document.querySelector('video');
    //   video.srcObject = mediaStream;
    //   video.onloadedmetadata = function(e) {
    //     video.play();
    //   };
    // })
    // .catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.
    // Prefer camera resolution nearest to 1280x720.
    // always check for errors at the end.
  }

  // async function getMedia(constraints) {
  //   let stream = null;

  //   try {
  //     stream = await navigator.mediaDevices.getUserMedia(constraints);
  //     /* use the stream */
  //   } catch(err) {
  //     /* handle the error */
  //   }
  // }

  sendToPeer = (messageType, payload) => {
    this.socket.emit(messageType, {
      socketID: this.socket.id,
      payload,
    });
  };

  createOffer = () => {
    console.log('Offer');
    this.pc.createOffer({ offerToReceiveVideo: 1 }).then((sdp) => {
      // console.log(JSON.stringify(sdp))
      this.pc.setLocalDescription(sdp);
      this.sendToPeer('offerOrAnswer', sdp);
    });
  };

  setRemoteDescription = () => {
    console.log('setting remote desc');
    const desc = JSON.parse(this.textref.value);
    this.pc.setRemoteDescription(new RTCSessionDescription(desc));
  };

  createAnswer = () => {
    console.log('Answer');
    this.pc.createAnswer({ offerToReceiveVideo: 1 }).then((sdp) => {
      this.pc.setLocalDescription(sdp);

      this.sendToPeer('offerOrAnswer', sdp);

      // console.log(JSON.stringify(sdp))
    });
  };

  addCandidate = () => {
    // const candidate = JSON.parse(this.textref.value)
    // console.log('Adding Candidate:', candidate)
    // this.pc.addIceCandidate(new RTCIceCandidate(candidate))

    //retrieve and parse the Candidate copied from the remote peer
    console.log('adding candidates');
    console.log(this.candidates);

    this.candidates.forEach((candidate) => {
      console.log(JSON.stringify(candidate));
      //add the candidate to the peer connection
      this.pc.addIceCandidate(new RTCIceCandidate(candidate));
    });
  };

  render() {
    return (
      <div>
        <video
          style={{ width: 340, height: 340, background: 'black' }}
          className='mt-5 mr-5 ml-5'
          ref={this.localVideoref}
          autoPlay
        ></video>

        <video
          style={{ width: 340, height: 340, background: 'black' }}
          ref={this.remoteVideoref}
          autoPlay
        ></video>

        <div className='mt-5 mr-5 ml-5'>
          <button onClick={this.createOffer}>Offer</button>
          <button onClick={this.createAnswer}>Answer</button>
          <br />
          <textarea
            ref={(ref) => {
              this.textref = ref;
            }}
          />
          {/* <br />
          <button onClick={this.setRemoteDescription}>Set Remote Desc</button>
          <button onClick={this.addCandidate}>Add Candidate</button> */}
        </div>
      </div>
    );
  }
}

export default OnlineConsultation;
