import React from 'react';
import ReactDOM from 'react-dom';
//import 'bootstrap/dist/css/bootstrap.min.css' ;
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import promise from 'redux-promise'
import App from './App'
//import { reduxForm } from 'redux-form';
import reducers from './Reducer.js'
//import authReducer from './Reducer.js/authReducer'
//import { reducer } from 'redux-form';

// export default ({children,initialState ={}}) =>{}

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)




// ReactDOM.render(

    

// <Provider
// store={createStoreWithMiddleware(reducers)}></Provider>

    // const store = createStore(
    //     reducers,
    //     {authReducer:{authenticated:localStorage.getItem('token')}},
    //     applyMiddleware(promise)
    // )  
 
    console.log('localStore',localStorage.getItem('token'))

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}> <App /></Provider>

, document.querySelector('#root'))
