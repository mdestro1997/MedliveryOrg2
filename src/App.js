/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Components/Header';
import signUpForm from './Components/PatientComponentViews/SignUpForm/signUpForm';
import LoginForm from './Components/loginForm';
import ApplyFormCreation from './Components/PatientComponentViews/applicationFormCreate';
import signOut from './Components/signOut';
import HomePage from './Components/homePage';
import TargetGroup from './Components/targetGroup';
import GetAllUserApplications from './Components/PatientComponentViews/getAllUserApplication';
import EditUserApplication from './Components/PatientComponentViews/editApplication';
import DeleteUserApplication from './Components/PatientComponentViews/deleteUserApplication';
import ViewUserApplication from './Components/PatientComponentViews/viewSpecificApplication';
import SelectGroup from './Components/PatientComponentViews/selectGroup';
import BookAppointment from './Components/PatientComponentViews/bookAppointment';
import OnlineConsultation from './Components/onlineConsultation';
import AboutMedlivery from './Components/AboutPage/aboutMedlivery'
import DoctorSignUpForm from './Components/DoctorComponentViews/doctorSignUpForm'
import DoctorBiography from './Components/DoctorComponentViews/doctorsBio'
import AdminSignUp from './Components/adminSignUp'
import SearchAndUpdate from './Components/searchAndUpdateExistingUser'
import AdminUpdateRoles from './Components/adminUpdateRoles'
import GetPatientBookingsAppointments from './Components/PatientComponentViews/getPatientBookingsAppointments'
import CancelBookingAppointment from './Components/PatientComponentViews/cancelBookingAppointment'
import ReschedulePatientAppointment from './Components/PatientComponentViews/reschedulePatientAppointment'
import GetDoctorsBookingsAppointments from './Components/DoctorComponentViews/getDoctorsBookingsAppointments'
import DoctorAppointmentScheduler from './Components/DoctorComponentViews/doctorAppointmentSchedule'
import personalInfoForm from './Components/getPersonalInfo'
// import LoginFormAdmin from './Components/loginAdmin'
// import LoginFormEmployee from './Components/loginEmployee'
//import HeaderAdmin from './Components/HeaderAdmin'
import history from './history';
import Footer from './Components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/targetGroup' exact component={TargetGroup} />
              <Route path='/signUpForm' exact component={signUpForm} />
              <Route path='/loginForm' exact component={LoginForm} />
              <Route path='/applyForm' exact component={ApplyFormCreation} />
              <Route path='/signOut' exact component={signOut} />
              <Route
                path='/getAllUserApplication'
                exact
                component={GetAllUserApplications}
              />
              <Route
                path='/editUserApplication/:id'
                exact
                component={EditUserApplication}  
              />
              <Route
                path='/deleteUserApplication/:id'
                exact
                component={DeleteUserApplication}
              />
              <Route
                path='/viewUserApplication/:id'
                exact
                component={ViewUserApplication}
              />
              <Route path='/selectGroup' exact component={SelectGroup} />
              <Route
                path='/bookAppointment'
                exact
                component={BookAppointment}
              />
              <Route path='/onlineConsultation' exact component={OnlineConsultation} />
              <Route path='/aboutMedlivery' exact component={AboutMedlivery} />

              <Route path='/doctorSignUp' exact component={DoctorSignUpForm} />
              <Route path='/doctorProfile' exact component={DoctorBiography} />
              <Route path='/adminSignUp' exact component={AdminSignUp} />
              <Route path='/searchAndUpdate' exact component={SearchAndUpdate} />
              <Route path='/getPatientAppointments' exact component={GetPatientBookingsAppointments} />
              <Route path='/adminUpdateRoles' exact component={AdminUpdateRoles} />
              <Route path='/cancelPatientAppointment/:id' exact component={CancelBookingAppointment} />
              <Route path='/reschedulePatientAppointment/:id' exact component={ReschedulePatientAppointment} />
              <Route path='/getDoctorsAppointments' exact component={GetDoctorsBookingsAppointments} />
              <Route path='/doctorAppointmentScheduler' exact component={DoctorAppointmentScheduler} />
              <Route path='/personInfoForm' exact component={personalInfoForm} />

              {/* <Route path="/loginFormAdmin" exact component={LoginFormAdmin} />
           <Route path="/loginFormEmployee" exact component={LoginFormEmployee} /> */}
        
            </Switch>
            {/* <Footer /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
