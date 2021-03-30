import {EDITAPPLICATION} from '../actions/typeAuth'

const INITIAL_STATE = {

        editedApplication: ''

       }

     
export default function (state=INITIAL_STATE,action){

       switch(action.type){

       case EDITAPPLICATION:

        console.log(action.payload)
const editedApplication=action.payload
console.log('editedApplication',editedApplication);

           return{...state , editedApplication:action.payload}

       
      
           default:
            return state
    }

}