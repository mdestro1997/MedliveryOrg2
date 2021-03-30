import {GETPARTICULARAPPLICATION} from '../actions/typeAuth'

const INITIAL_STATE = {

    getParticularApplication: ''
   }

export default function (state=INITIAL_STATE,action){

       switch(action.type){

       case GETPARTICULARAPPLICATION:

        // console.log(action.payload)
const getParticularApplication=action.payload
// console.log('editedApplication',getParticularApplication);

           return{...state , getParticularApplication:action.payload}

         
      
           default:
            return state
    }

}