
import {GetAllDoctors,GetAllDoctorsError,LOAD} from '../actions/typeAuth'

const INITIAL_STATE={

    doctorsProfiles:'',
    doctorsProfilesError: ''
}
    
export default function (state=INITIAL_STATE, action){

    switch(action.type){

        case GetAllDoctors:
// console.log(action.payload)  
// const aduthenticated=action.payload
// console.log('doctorsProfilse',aduthenticated);

           return{...state , doctorsProfiles:action.payload}

            
   
        case GetAllDoctorsError:
            console.log(action.payload)
            return{...state , doctorsProfilesError:action.payload}
    
            case LOAD:
                console.log(action.payload)
                return{...state ,  doctorsAndPatientDetails:action.payload}
         
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
  