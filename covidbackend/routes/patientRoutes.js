const express = require('express');
const multer = require('multer');
const uuid = require('uuid/v1');
const keys = require('../configs/dev');
const AWS = require('aws-sdk');
const sharp = require('sharp');
const path = require('path')
const mongoose =require ('mongoose')

const IndividualUser = require('../models/individualModel');
const medicationApplicationForm = require('../models/medicationFormModel');
const DoctorsProfile = require('../models/doctorsBioModel');
const bookingAppointment =require('../models/bookingAppointmentModel')
const authenticationMiddleWare = require('../authentication/authMiddlewareJWT');

const router = new express.Router();

//SignUp Patient
const upload = multer({
  limits: {
    fieldSize: '1000000',
  },
});

router.post(
  '/individualSignUpInfo',
  upload.single('copyOfId'),
  async (req, res) => {
    // console.log('signU ',req.body);
 let   userCategory = 'P';
    const signUpFormData = JSON.parse(req.body.value[0]);
    signUpFormData.copyOfId = req.file.buffer;
    signUpFormData.userCategory = userCategory;
    //console.log('signUpFormData ',signUpFormData);

    try {
      // console.log('tooookeeeeen ' );

      const newUser = new IndividualUser(signUpFormData);
      // console.log('tooookeeeeen ');

      const token = await newUser.generateAuthenticationToken();
      //  console.log('tooookeeeeen ' ,token);
       await newUser.save();

      res.status(200).send(token);
    } catch (e) {
      res.status(400).send('Could not Sign INDIVIDUAL UP');
    }
  }
);

//Delete specific medication application for particular user
router.delete(
  '/deleteUserApplication/:id',
  authenticationMiddleWare,
  async (req, res) => {
    const id = req.params.id;
    console.log('iiiiddd', id);
    try {
      console.log('inside');
      const deleteApplication = await medicationApplicationForm.findOneAndDelete(
        { _id: id, owner: req.user._id }
      );
      console.log('inside', deleteApplication);

      if (!deleteApplication) {
        throw new Error('Application/User Not Found!!');
      }

      return res.status(200).send(deleteApplication);
    } catch (e) {
      return res.status(500).send(e);
    }
  }
);

//Edit Or Update specific medication application for specific user
const editingUploader = multer({
  limits: {
    fieldSize: '1000000',
  },
});

router.patch(
  '/editUserApplication/:id',
  editingUploader.single('copyOfMedicalHistory'),
  authenticationMiddleWare,
  async (req, res) => {
    // console.log('req body ',req.body)
    const editApplyMedFormData = JSON.parse(req.body.value[0]);
    //console.log('editApplyMedFormData ',editApplyMedFormData)
    delete editApplyMedFormData.copyOfMedicalHistory;

    editApplyMedFormData.copyOfMedicalHistory = req.file.buffer;
    //console.log('req.user ',req.user)

    console.log('EDITapplyMedFormData3 ', editApplyMedFormData);

    //This converts the req body from an object to an Array
    const updates = Object.keys(editApplyMedFormData);
    console.log('toBeUpdated ', updates);
    const allowedfieldsUpdates = [
      'nearestMedicalFacility',
      'Address',
      'briefMedicalHistory',
      'copyOfMedicalHistory',
    ];

    const isValidFields = updates.every((update) =>
      allowedfieldsUpdates.includes(update)
    );
    console.log('isValidFields', isValidFields);
    if (!isValidFields) {
      return res.status(400).send('Invalid Update!!');
    }

    try {
      const updateApplication = await medicationApplicationForm.findByIdAndUpdate(
        req.params.id,
        editApplyMedFormData,
        { new: true, runValidators: true }
      );
      console.log('updateFound ', updateApplication);

      if (!updateApplication) {
        return res.status(400).send('Invalid Update!!');
      } else {
        console.log('updated!!');
        return res.status(200).send('UPDATED!!!!');
      }
    } catch (e) {
      return res.status(400).send('Invalid Update!!');
    }
  }
);

//Get specific medication application for particular user
router.get(
  '/getUserApplication/:id',
  authenticationMiddleWare,
  async (req, res) => {
    // console.log('req params ',req.params)
    const id = req.params.id;

    try {
      const application = await medicationApplicationForm.findOne({
        _id: id,
        owner: req.user._id,
      });
      // console.log('retrived Application ',application)

      if (application) {
        res.set('Content-Type', 'multipart/form-data');
        //              const buffer = copyO
        //              const mimetype = “image/jpg”; //can be a variable
        // const buffer = “file_buffer”; //buffer of the file
        // const imageData = Buffer.from(buffer, “base64”).toString(“base64”);
        // const imageURL = `data:${mimetype};base64,${imageData}`
        res.status(200).send(application);
      } else {
        throw new Error('Application Not Found!!');
      }
    } catch (e) {
      res.status(400).send(e);
    }
  }
);

router.get('/getAllDoctors',authenticationMiddleWare, async (req, res) => {
  console.log('body', req.body);
  let pagination = 0;

  try {
    const allDoctors = await DoctorsProfile.find()
      .limit(5)
      .populate('owner', 'firstname lastname email userCategory ')
      .skip(pagination);
console.log('doctors.... ', allDoctors)
    res.status(200).send(allDoctors);
  } catch (e) {}
});

//Get all Medication applications for particular user
router.get(
  '/getUserApplications',
  authenticationMiddleWare,
  async (req, res) => {
    let queryParameters = req.query;
    console.log('Query: ', queryParameters);
    console.log('Queryaaaaaa: ', queryParameters.SortBy);
    console.log('Query: ', queryParameters);

    // const match = {};
    let dateSort = { createdAt: -1 };
    let nameFilter = {};
    let statusFilter = '';
    let searchValue = '';
    let pagination = 0;

    if (
      queryParameters.sortTitle === 'SortBy' &&
      queryParameters.sortValue === 'Oldest to Newest'
    ) {
      dateSort = { createdAt: 1 };
      console.log('sortBy', queryParameters.sortValue);
    }
    if (queryParameters.sortByNameTitle === 'SortByName') {
      nameFilter = { firstname: queryParameters.sortByNameValue };
      console.log('nameFilter', nameFilter);
    }
    if (queryParameters.filterByTitle === 'FilterBy') {
      statusFilter = queryParameters.filterByValue;
      console.log('statusFilter', statusFilter);
    }
    if (
      queryParameters.searchValue !== '' &&
      queryParameters.searchValue !== 'undefined' &&
      queryParameters.searchValue != null
    ) {
      searchValue = queryParameters.searchValue;
      console.log('searchValue', searchValue);
    }

    if (queryParameters.paginationTitle === 'Pagination') {
      pagination = parseInt(queryParameters.paginationValue);
    }

    // }

    let applications = '';

    try {
      // const query = medicationApplicationForm
      //               .find({owner:req.user._id})
      //               .match({})
      if (statusFilter.length !== 0 && searchValue.length !== 0) {
        const query = {};
        if (searchValue) {
          query.$text = {};
        }
        applications = await medicationApplicationForm
          .find({
            owner: req.user._id,
            assignedMedicalPractitioner: statusFilter,
            $text: { $search: searchValue },
          })
          .sort(dateSort)
          .limit(5)
          .populate('owner', 'firstname lastname email')
          .skip(pagination);
      }
      //if Search value is there and No Filter
      else if (statusFilter.length === 0 && searchValue.length !== 0) {
        applications = await medicationApplicationForm
          .find({
            owner: req.user._id,
            $text: { $search: searchValue },
          })
          .sort(dateSort)
          .limit(5)
          .populate('owner', 'firstname lastname email')
          .skip(pagination);
      }
      //if Search value is not there and Filter value is there
      else if (statusFilter.length !== 0 && searchValue.length === 0) {
        applications = await medicationApplicationForm
          .find({
            owner: req.user._id,
            assignedMedicalPractitioner: statusFilter,
          })
          .sort(dateSort)
          .limit(5)
          .populate('owner', 'firstname lastname email')
          .skip(pagination);
      } else {
        applications = await medicationApplicationForm
          .find({
            owner: req.user._id,
            // score: { $meta: 'textScore' },
          })
          .sort(dateSort)
          .limit(5)
          .populate('owner', 'firstname lastname email')
          .skip(pagination);
      }

      // .countDocuments();

      // Person.
      // find({ occupation: /host/ }).
      //
      // where('age').gt(17).lt(66).
      // where('likes').in(['vaporizing', 'talking']).
      // limit(10).
      // sort('-occupation').
      // select('name occupation').
      // exec(callback);

      console.log('toooekkkkkeen', req.token);
      applications.token = req.token;
      applications.userCategory = req.userCategory;
      res.status(200).send(applications);
    } catch (e) {
      console.log('ERROR HAS OCCURED!!!!', e);
    }
  }
);

router.get('/api/uploads', authenticationMiddleWare, (req, res) => {
  console.log('reeeq id', req.user._id);
  const key = `${req.user._id}/${uuid()}.jpeg`;

  const s3 = new AWS.S3({
    accessKeyId: keys.accessKeyId,
    secretAccessKey: keys.secretAccessKey,
    signatureVersion: 'v4',
    region: 'us-east-2',
  });

  try {
    s3.getSignedUrl(
      'putObject',
      {
        Bucket: 'medliveryfileupload',
        ContentType: 'image/jpeg',
        Key: key,
      },
      (err, url) => res.send({ key, url })
    );
  } catch (e) {}
});

//resizing Upload
const uploader = multer({
  limits: {
    fieldSize: '1000000',
  },
});

// router.post(
//   '/api/resizeUploads',
//   uploader.single('copyOfMedicalHistory'),
//   async (req, res) => {
//     // console.log('up for resizing ', req.file);
//     // console.log('upload up for resizing ', req.file.buffer);
//     // await sharp(req.file.buffer).resize().toFile('images122.jpeg');
//     var image = 'resizedImage'
//     try {
//       req.file = await sharp(req.file.buffer)
//         .resize(300, 200, { fit: 'contain' })
//         .jpeg({ quality: 90, chromaSubsampling: '4:4:4' })
//         .toBuffer(image);
// // const resize = Buffer.from(req.file.buffer)
//       // console.log('buffser ', req.file.buffer);
//       // res.attachment(path.join(__dirname,'../' + image + '.jpeg'));
//       res.send(req.file)
//     } catch (e) {
//       console.log('errror', e);
//     }
//   }
// );

//Delete/Cancel Patient appointment

router.delete('/patientAppointmentCancellation/:id',authenticationMiddleWare,async(req,res)=>{

  try{

  }catch(e){

  }

})

//Reschedule/update appointment
router.patch('/rescheduleAppointment/:id',authenticationMiddleWare,async(req,res)=>{

  try{

  }catch(e){
    
  }

})


//GET specific patient bookings Past and present
router.get('/getPatientBookingsAppointments',authenticationMiddleWare, async(req,res)=>{

     try{

      // const PatientId = req.params.id
      // console.log('PatientID',req.params.id)
      console.log('User',req.user._id)

      // console.log( 'kiid',mongoose.Types.ObjectId(PatientId) );

      const bookingsAppointments = await bookingAppointment.find({PatientId:req.user._id})
      console.log('bookingsAppointments',bookingsAppointments)

      res.status(200).send(bookingsAppointments)
     }catch(e){

      console.log(e)

     }
} )

//Patient Makes a Doctor's Appointment

router.post('/patientBookings',authenticationMiddleWare,async (req,res) =>{
const appointmentDetails={}
  const {
    Patientfirstname,
    Patientmiddlename,
    Patientlastname,
    Patientemail,
    patientId,
    PatientdateOfBirth,
    AppointmentDate,
    AppointmentTime,
    medicalAid,
    refferals,
    doctorSpeciality,
    doctorsId
  } = req.body;
  console.log('GOOD EVENING',appointmentDetails)

  try{
    const checkDoctor = await IndividualUser.findOne({_id: req.body.doctorsId})
    
    if(checkDoctor){
      console.log('ISMID ',checkDoctor)

      appointmentDetails.doctorFirstName = checkDoctor.firstname
      appointmentDetails.doctorLastName  = checkDoctor.lastname
      appointmentDetails.Patientlastname = Patientlastname
      appointmentDetails.DoctorId  = doctorsId
      appointmentDetails.refferals =refferals;
      appointmentDetails.doctorSpeciality=doctorSpeciality
      appointmentDetails.Patientfirstname=Patientfirstname
      appointmentDetails.Patientmiddlename=Patientmiddlename
      appointmentDetails.Patientemail =Patientemail
      appointmentDetails.PatientdateOfBirth=PatientdateOfBirth
      appointmentDetails.AppointmentDate=AppointmentDate,
      appointmentDetails.AppointmentTime=AppointmentTime
      appointmentDetails.medicalAid=medicalAid
      appointmentDetails.PatientId=patientId
      
      console.log('created ',appointmentDetails)

      const newAppointment = new bookingAppointment(appointmentDetails);

      const createdAppointment = await newAppointment.save();
      console.log('created ',createdAppointment)
      res.status(201).send(createdAppointment)
    }else{
      throw new Error('Doctor Not Found!!');
    }
    console.log('appointmentDetails',appointmentDetails)


  }catch(e){

    console.log(e)

  }

})

//Patient applies or requests for medications

router.post(
  '/applyMedForm',
  uploader.single('copyOfMedicalHistory'),
  authenticationMiddleWare,
  async (req, res) => {
    // console.log('req body ', req.body.value);

    // console.log('req body ', req);

    const applyMedFormData = JSON.parse(req.body.value[0]);
    console.log('applyMedFormData ', req.body.imageUrl);
    applyMedFormData.imageUrl = req.body.imageUrl;
    // applyMedFormData.imageUrl = JSON.parse(req.body.value[1]);

    //  console.log('applyMedFormData ',req.body.value[1])
    delete applyMedFormData.copyOfMedicalHistory;

    applyMedFormData.copyOfMedicalHistory = req.file.buffer;
    // console.log('req.user ',req.user)

    applyMedFormData.owner = req.user._id;
    // console.log('applyMedFormData3 ',applyMedFormData)

    try {
      const newMedicationApplicationForm = new medicationApplicationForm(
        applyMedFormData
      );
      const applicationSuccess = await newMedicationApplicationForm.save();
      console.log('tookkkkkeeeeen', req.token);
      applicationSuccess.token = req.token;
      applicationSuccess.userCategory = req.userCategory;

      res.status(201).send(applicationSuccess);
    } catch (e) {
      console.log('ERROR OCCURED!!!!', e);
    }
  }
);

module.exports = router;
