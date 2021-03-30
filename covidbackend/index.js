require('./dbConnection/dbMongooseCon');
const express = require('express');
const http = require('http');
const stripe = require('stripe')('sk_test_xxn6MchNPLrsm7p2hlxwyl03');
const AWS = require('aws-sdk');
const keys = require('./configs/dev');
const uuid = require('uuid/v1');
const multer = require('multer');

const IndividualUser = require('./models/individualModel');
const medicationApplicationForm = require('./models/medicationFormModel');
const doctorSignUpModel = require('./models/doctorsModel');
const doctorsBiographyModel = require('./models/doctorsBioModel');
const incidentManagementModel = require('./models/incidentManagementModel');
const changeManagementModel = require('./models/changeManagementModel');
const authenticationMiddleWare = require('./authentication/authMiddlewareJWT');

const patientRoutes = require('./routes/patientRoutes');
const loginAndOutRoutes = require('./routes/usersLoginAndLogout');
const doctorRoutes = require('./routes/doctorRoutes');
const adminRoutes = require('./routes/adminRoutes');

var io = require('socket.io')({
  path: '/webrtc',
});

const app = express();
//const server = http.createServer(app)

//const port = 5000;

const server = http.createServer(app);
//const io = socketio(server);
let port = process.env.PORT;

if (port == null || port == '') {
  port = 5000;
}

app.use(express.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE,PATCH');

  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept,Authorization'
  );

  next();
});

app.use(patientRoutes);
app.use(loginAndOutRoutes);
app.use(doctorRoutes);
app.use(adminRoutes);

// app.use(express.static(__dirname + '/build'));

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/build/index.html');
// });

app.post('/stripePay', async (req, res) => {
  console.log('Req ', req.body);
  const token = req.body.token.id; // Using Express
  const amount = req.body.amount;
  console.log('Amount ', amount);
  console.log('token ', token);

  try {
    const charge = await stripe.charges.create({
      amount: amount,
      currency: 'bwp',
      description: 'Example charge',
      source: token,
    });
  } catch (err) {
    console.log('Error occured ', err);
  }
});

app.post('/companySignUpInfo', async (req, res) => {
  console.log('body in COMPANY SIGNUP INFO', req.body);

  try {
    res.status(200).send('RECEIVED IN COMPANY INFO');
  } catch (e) {
    console.log('Could not sign Company ', e);
    res.status(500).send(e);
  }
});

const uploadCopyDoctorCertOfPractice = multer({
  limits: {
    fieldSize: '1000000',
  },
  // },
  // fileFilter (req,file,cb){

  //     if(!file.originalname.endsWith('.png') || !file.originalname.endsWith('.jpeg') || !file.originalname.endsWith('.jpg')){
  //        throw new Error('upload picture')
  //     }
  //     cb(undefined,true)
  // }
});

app.post('/incidentManagement', authenticationMiddleWare, async (req, res) => {
  console.log('req body ', req.body);
  const incidentManagementData = JSON.parse(req.body.value[0]);
  console.log('incidentManagementData ', req.body.imageUrl);

  try {
    const newIncident = new incidentManagementModel(incidentManagementData);
    const incidentSuccessfullyUploaded = await newIncident.save();

    res.status(201).send(incidentSuccessfullyUploaded);
  } catch (e) {
    console.log('ERROR OCCURED!!!!', e);
  }
});

app.post('/changeManagement', authenticationMiddleWare, async (req, res) => {
  console.log('req body ', req.body);
  const changeManagementData = JSON.parse(req.body.value[0]);
  console.log('incidentManagementData ', req.body.imageUrl);

  try {
    const newChange = new changeManagementModel(changeManagementData);
    const changeSuccessfullyUploaded = await newChange.save();

    res.status(201).send(changeSuccessfullyUploaded);
  } catch (e) {
    console.log('ERROR OCCURED!!!!', e);
  }
});

const listeningIo = server.listen(port, () => {
  console.log('Server is up on port ', port);
});

io.listen(listeningIo);

const peers = io.of('/webrtcPeerDestro');

//keep a reference of all socket connections
let connectedPeers = new Map();

peers.on('connection', socket => {
  console.log(socket.id);

  socket.emit('connection-success', { success: socket.id });

  connectedPeers.set(socket.id, socket);

  socket.on('disconnect', () => {
    console.log('socketid ' + socket.id + ' disconnected');

    connectedPeers.delete(socket.id);
  });

  socket.on('offerOrAnswer', (data) => {
    //send to the peer(s) if any

    for (const [socketID, socket] of connectedPeers.entries()) {
      //don't send to self
      if (socketID !== data.socketID) {
        console.log(socketID, data.payload.type);
        socket.emit('offerOrAnswer', data.payload);
      }
    }
    console.log('coonectt',connectedPeers)

  });

  socket.on('candidate', (data) => {
    //send to the peer(s) if any
    console.log('coonectt',connectedPeers)
    console.log('candidate ', data.payload);
    for (const [socketID, socket] of connectedPeers.entries()) {
      //don't send to self
      if (socketID !== data.socketID) {
        console.log(
          'sockectID ',
          +socketID + ' datapayload.type ' + data.payload.type
        );
        console.log('candidate ', data.payload);
        socket.emit('candidate', data.payload);
      }
    }
  });
});