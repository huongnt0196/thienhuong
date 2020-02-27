import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, combineReducers } from 'redux';
const uuidv1 = require('uuid/v1');
// let demoState = {
//   expenses: [{
//     id: 1,
//     description: 'Buy house',
//     amount: 50000,
//     createdAt: 55500
//   }],
//   filter: {
//     text: 'house',
//     sortBy: 'amount',
//     startAt: undefined,
//     endAt: undefined
//   }
// }
 
const addExpense = ( {id = uuidv1(), description = 'buy house', amount = 50000, createdAt = 555555} = {} ) => {
    return{
        type : 'ADD_EXPENSE',
        expense: {
            id,
            description,
            amount,
            createdAt
        }
    }
}
const removeExpense = (id) => {
    return {
        type : 'REMOVE_EXPENSE',
        id
    }
}

const editExpense = ( id,updates ) => {
    return{
        type : 'EDIT_EXPENSE',
        id,
        updates
        
    }
}
const setTextFilter = (text = '') => {
    return{
        type : 'TEXT_FILTER',
        text
    }
} 
const sortByDate = () => {
    return {
        type : 'SORT_BY_DATE'
    }
} 
const sortByAmount = () => {
    return{
        type: 'SORT_BY_AMOUNT'
    }
}

const stateExpenseDefault = []; 

const expenseReducers = ( state = stateExpenseDefault, action ) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter( (exp) => {
               return (exp.id !== action.id)
            })
        case 'EDIT_EXPENSE': 
            return state.map( (exp) => {
                if (exp.id === action.id){
                    return {...state, ...action.updates}
                }else{ return state }
            } ) 
        default: return state
    }
}

const stateFilterDefault = {
    text: 'house',
    sortBy: 'amount',
    startAt: undefined,
    endAt: undefined
}

const filterReducers = (state = stateFilterDefault, action) => {
    switch(action.type){
        case 'TEXT_FILTER':
            return {...state, text : action.text}
        case 'SORT_BY_DATE':
            return {...state, sortBy : 'date'};
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'};
        default: return state
    }
}

const store = createStore(combineReducers({
    expenses : expenseReducers,
    filters  : filterReducers
}))

store.subscribe( () => {
    console.log(store.getState());
})
let one = store.dispatch(addExpense({description : 'Buy car'}));
let two = store.dispatch(addExpense({description : 'Buy food', amount : 60000}));
store.dispatch(removeExpense(one.expense.id));
store.dispatch(editExpense(two.expense.id, {description : 'PORK', amount : 400000}));
store.dispatch(setTextFilter('car'));
store.dispatch(sortByDate());
store.dispatch(sortByAmount());


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
