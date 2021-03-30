import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import authReducer from './authReducer'
import getUserApplications from './getUserApplicationsReducer'
import getParticularApplication from './getParticularApplicationReducer'
import editApplication from './editApplicationReducer'
import foundSearchToUpdate from './searchAndUpdateReducer'
import getAllDoctorsProfiles from './getAllDoctorsProfilesReducer'
import PatientAppointmentsBookings from './getPatientBookingsAppointmentsReducer'
import DoctorsAppointmentsBookings from './getDoctorsAppointmentsReducer'
export default combineReducers({
    
form:formReducer,
authReducer:authReducer,
getUserApplications:getUserApplications,
getParticularApplication:getParticularApplication,
editApplication:editApplication,
foundSearchToUpdate:foundSearchToUpdate,
getAllDoctorsProfiles:getAllDoctorsProfiles,
PatientAppointmentsBookings:PatientAppointmentsBookings,
DoctorsAppointmentsBookings:DoctorsAppointmentsBookings
});   