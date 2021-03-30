import {PatientAppointmentsSuccess,PatientAppointmentsError} from '../actions/typeAuth'

const INITIAL_STATE={

    PatientAppointmentsBookings:'',
    errorMessage: ''
}
    
export default function (state = INITIAL_STATE, action){

    switch(action.type){

        case PatientAppointmentsSuccess:
console.log(action.payload)  
const aduthenticated=action.payload
console.log('authenticatedttt',aduthenticated);

           return{...state , PatientAppointments:action.payload}

            
   
        case PatientAppointmentsError:
            console.log(action.payload)
            return{...state , errorMessage:action.payload}
         
        default:
            return state
    }
}