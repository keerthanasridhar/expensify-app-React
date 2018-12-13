
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './action/expenses';
import {setTextFilter} from './action/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/base/_base.scss'
import './styles/styles.scss';


const store = configureStore();
// console.log('test');



const jsx = (
    <Provider store = {store}>
    <AppRouter/>
     </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));






//setTimeout(()=>{
//     store.dispatch(setTextFilter('bill'));
// },3000)
// store.dispatch(addExpense({description:'Water Bill',amount:7000,createdAt:-21000}))
// store.dispatch(addExpense({description:'Gas Bill',amount:2000,createdAt: -1000}))
// store.dispatch(addExpense({description:'Kitchen',amount:450,createdAt: 1000}))
// store.dispatch(addExpense({description:'Rent',amount:9000,createdAt:-5000}))
//const state = store.getState();
// store.dispatch(setTextFilter('water'));


























