import React from 'react';
import logo from './logo.svg';
import './App.css';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters';
import configStore from './store/configureStore';
import getInvisibleExpenses from './selectors/expenses';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux';

const store = configStore();


store.subscribe( () => {
  const state = store.getState();

  console.log(getInvisibleExpenses(state.expenses, state.filters));
} )
store.dispatch(addExpense({id: 1, description : "buy car", amount : 5000, createdAt : 2000}));
store.dispatch(addExpense({id: 2, description : "buy house", amount : 10000, createdAt : 1000}));
// store.dispatch(removeExpense(one.expense.id));
// store.dispatch(editExpense(two.expense.id, { amount: 500000 }));
// store.dispatch(editExpense(two.expense.id, { description: "bán nhà", amount : 700000 }));
//store.dispatch(setTextFilter('House'));
//store.dispatch(sortByDate());
// store.dispatch(sortByAmount());
// store.dispatch(setStartDate(-1000));
//store.dispatch(setEndDate(0));
// store.dispatch(setStartDate());


// setTimeout( () => {
//   store.dispatch(setTextFilter('Car'));
// }, 3000);

const jxs = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

export default jxs;
