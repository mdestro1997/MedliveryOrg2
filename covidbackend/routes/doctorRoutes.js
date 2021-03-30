const express = require('express');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const axios = require('axios').default;

const IndividualUser = require('../models/individualModel');
const doctorSignUpModel = require('../models/doctorsModel');
const doctorsBiographyModel = require('../models/doctorsBioModel');
const authenticationMiddleWare = require('../authentication/authMiddlewareJWT');
const bookingAppointment = require('../models/bookingAppointmentModel')
const config = require('../configs/zoomApi');

const router = new express.Router();



// const meeting_url;
// console.log('token', token)
    //use userinfo from the form and make a post request to /userinfo






//SignUp Doctor
const uploadCopyOfId = multer({
    limits: {
        fieldSize: '1000000',
    }
});
const fileUploads = uploadCopyOfId.fields([
    { name: 'copyOfId', maxCount: 1 },
    { name: 'copyOfCertificateOfPractice', maxCount: 1 },
]);

router.post('/createNewDoctorRecord', fileUploads, async(req, res) => {
    console.log('signU ', req.body);
    console.log('signUrew ', req.files['copyOfId'][0]);
    console.log('signUe ', req.files['copyOfCertificateOfPractice'][0]);

    const userCategory = 'D';
    const signUpFormData = JSON.parse(req.body.value[0]);
    signUpFormData.copyOfId = req.files['copyOfId'][0].buffer;
    signUpFormData.copyOfCertificateOfPractice =
        req.files['copyOfCertificateOfPractice'][0].buffer;
    delete signUpFormData.confirmPassword;
    signUpFormData.userCategory = userCategory;
    //     delete userObj.password;

    console.log('signUpFormData ', signUpFormData);

    const {
        qualification,
        department,
        speciality,
        locality,
        consultantIn,
        experience,
    } = signUpFormData;

    console.log('dsdddddddd', qualification, department);

    const newDoctorProfile = {};
    newDoctorProfile.qualification = qualification;
    newDoctorProfile.department = department;
    newDoctorProfile.speciality = speciality;
    newDoctorProfile.locality = locality;
    newDoctorProfile.consultantIn = consultantIn;
    newDoctorProfile.experience = experience;

    console.log('dsddddsss', newDoctorProfile);

    try {
        // console.log('tooookeeeeen ' );

        const newUserDoctor = new IndividualUser(signUpFormData);
        console.log('newUser ', newUserDoctor);
        const token = await newUserDoctor.generateAuthenticationToken();

        // const token = await newUser.generateAuthenticationToken();
        //  console.log('tooookeeeeen ' ,token);
        const newDoctor = await newUserDoctor.save();
        console.log('user ', newDoctor);

        newDoctorProfile.owner = newDoctor._id;
        const doctorProfile = new doctorsBiographyModel(newDoctorProfile);
        console.log('moving on with EXECUTIONS!!');
        const newdoctorProfile = await doctorProfile.save();
        console.log('user ', newdoctorProfile);

        res.status(200).send(newDoctor);
    } catch (e) {
        res.status(400).send('Could not Sign INDIVIDUAL UP');
    }
});

router.get('/getDoctorBookingsAppointments', authenticationMiddleWare, async(req, res) => {

    try {

        // const PatientId = req.params.id
        // console.log('PatientID',req.params.id)
        console.log('User', req.user._id)
            // console.log( 'kiid',mongoose.Types.ObjectId(PatientId) );

        const bookingsAppointments = await bookingAppointment.find({ DoctorId: req.user._id })
        console.log('bookingsAppointments', bookingsAppointments)


        res.status(200).send(bookingsAppointments)
    } catch (e) {

        console.log(e)

    }

})




router.patch('/doctorUpdatingPatientAppointmentStatus/:id', authenticationMiddleWare, async(req, res) => {

    try {
        const status = 'Confirmed'
            // const bookingsAppointments = await bookingAppointment.findById(req.params.id)
            // console.log('bookingsAppointments',bookingsAppointments)

        // const PatientId = req.params.id
        console.log('PatientID', req.params.id)
        console.log('User', req.user._id)
            // const editApplyMedFormData = JSON.parse(req.body.value[0]);

        //  console.log( 'kiid',editApplyMedFormData );

        //Use the ApiKey and APISecret from config.js for zoom api call
        const payload = {
            iss: config.APIKey,
            exp: ((new Date()).getTime() + 5000)
        };
        const token = jwt.sign(payload, config.APISecret);

        //zoom api call
        const meeting = await axios({
            method: 'POST',
            url: 'https://api.zoom.us/v2/users/mathubaraphael@gmail.com/meetings',
            headers: { 'content-type': 'application/json', authorization: `Bearer ${token}` },
            data: {
                "topic": "Doctors Appointment",
                "type": 2,
                "start_time": "2020-05-05 12:00:00",
                "password": "Hey123",
                "agenda": "This is the meeting description",
                "settings": {
                    "host_video": false,
                    "participant_video": false,
                    "join_before_host": false,
                    "mute_upon_entry": true,
                    "use_pmi": false,
                    "approval_type": 0
                }
            },
            json: true
        });
        const zoom_url = meeting.data.start_url
        console.log('meeting url', meeting.data.start_url)

        const updateApplication = await bookingAppointment.findByIdAndUpdate(
            req.params.id, { meeting_url: zoom_url, AppointmentStatus: status }, { new: true, runValidators: true }
        );
        // console.log('updateFound ', updateApplication);

        if (!updateApplication) {
            return res.status(400).send('Invalid Update!!');
        } else {
            console.log('updated!!');
            return res.status(200).send('UPDATED!!!!');
        }
    } catch (e) {

        console.log(e)

    }

})



module.exports = router;