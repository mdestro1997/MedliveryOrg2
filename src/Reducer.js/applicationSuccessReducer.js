import {APPLICATION_SUCCESSFUL} from '../actions/applyFormActionCreator'

const INITIAL_STATE ={

    APPLICATION_SUCCESSFUL:""
}

export default function (state = INITIAL_STATE, action){

    switch(action.type){

        case APPLICATION_SUCCESSFUL:
// console.log(action.payload)
const aduthenticated=action.payload
// console.log('APPLICATION_SUCCESSFUL',aduthenticated);
   
           return{...state , authenticated:action.payload}

       
//COME BACK AND EDIT
        case APPLICATION_SUCCESSFUL:
            // console.log(action.payload)
            return{...state , errorMessage:action.payload}
         
        default:
            return state
    }
}