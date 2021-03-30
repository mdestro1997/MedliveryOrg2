  
import {BookingSuccess,BookingError} from '../actions/typeAuth'

const INITIAL_STATE={

    bookings:'',
    bookingError: ''
}
    
export default function (state=INITIAL_STATE, action){

    switch(action.type){

        case BookingSuccess:
// console.log(action.payload)  
const aduthenticated=action.payload
console.log('bookings',aduthenticated);

           return{...state , bookings:action.payload}

            
   
        case BookingError:
            console.log(action.payload)
            return{...state , doctorsProfilesError:action.payload}
    
            // case LOAD:
            //     console.log(action.payload)
            //     return{...state ,  doctorsAndPatientDetails:action.payload}
         
        default:
            return state
    }
}


// const reducer = (state = {}, action) => {
//     switch (action.type) {
//       case LOAD:
//         return {
//           data: action.data
//         }
//       default:
//         return state
//     }
//   }
  