import {DoctorAppointmentsSuccess,DoctorAppointmentsError} from '../actions/typeAuth'

const INITIAL_STATE={

    DoctorsAppointments:'',
    errorMessage: ''
}
    
export default function (state = INITIAL_STATE, action){

    switch(action.type){

        case DoctorAppointmentsSuccess:
console.log(action.payload)  
const aduthenticated=action.payload
console.log('authenticatedttt',aduthenticated);

           return{...state , DoctorsAppointments:action.payload}

            
   
        case DoctorAppointmentsError:
            console.log(action.payload)
            return{...state , errorMessage:action.payload}
         
        default:
            return state
    }
}