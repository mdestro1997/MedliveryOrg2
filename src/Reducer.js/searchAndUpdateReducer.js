import {FoundSearch} from '../actions/typeAuth'
// export  const FoundSearch = 'Successful FoundSearch';
// export const SearchNotFount = 'Unsuccessful Search'
const INITIAL_STATE = {

        foundSearch: ''

       }

     
export default function (state=INITIAL_STATE,action){

       switch(action.type){

       case FoundSearch:

        console.log('gjkahkahjkahkkahakja',action.payload)
const foundSearchess=action.payload
console.log('foundSearchess',foundSearchess);

           return{...state , foundSearch:action.payload}

       
      
           default:
            return state
    }

}