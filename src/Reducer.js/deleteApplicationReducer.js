import {DELETE_APPLICATION} from '../actions/typeAuth'

const INITIAL_STATE = {

        deletedApplication: ''

       }

     
export default function (state=INITIAL_STATE,action){

       switch(action.type){

       case DELETE_APPLICATION:

        console.log('gjkahkahjkahkkahakja',action.payload)
const deletedApplicationy=action.payload
console.log('editedApplication',deletedApplicationy);

           return{...state , deletedApplication:action.payload}

       
      
           default:
            return state
    }

}