import {GetApplications,FailedGetApplications} from '../actions/typeAuth'
import _ from 'lodash'

 
const INITIAL_STATE = {

 gotApplicationSuccessfully: '',
 gotApplicationFailed :''
}

export default function (state=INITIAL_STATE,action){

      switch(action.type){
    
        case GetApplications:
    
            console.log(action.payload)
            const gotApplicationSuccessfully=action.payload
            // console.log('gotApplicationSuccessfully',gotApplicationSuccessfully);
            
                       return{...state , gotApplicationSuccessfully: action.payload}
            
          case FailedGetApplications:
            // console.log('gotApplicationFailed ',action.payload)
            return{...state , gotApplicationFailed:action.payload}
         
        default:
            return state

      }

}