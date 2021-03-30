import {SuccessfulApplication,ErrorApplication} from '../actions/typeAuth'

const INITIAL_STATE={

    authenticated:'',
    errorMessage: ''
}
    
export default function (state = INITIAL_STATE, action){

    switch(action.type){

        case SuccessfulApplication:
console.log(action.payload)  
const aduthenticated=action.payload
console.log('authenticatedttt',aduthenticated);

           return{...state , authenticated:action.payload}

            
   
        case ErrorApplication:
            console.log(action.payload)
            return{...state , errorMessage:action.payload}
         
        default:
            return state
    }
}