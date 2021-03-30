import {AuthSuccess,AuthError} from '../actions/typeAuth'

const INITIAL_STATE={

    authenticated:'',
    errorMessage: ''
}
    
export default function (state = INITIAL_STATE, action){

    switch(action.type){

        case AuthSuccess:
console.log(action.payload)  
const aduthenticated=action.payload
console.log('authenticatedttt',aduthenticated);

           return{...state , authenticated:action.payload}

            
   
        case AuthError:
            console.log(action.payload)
            return{...state , errorMessage:action.payload}
         
        default:
            return state
    }
}