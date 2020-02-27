import React from 'react'; 
import ExpenseForm from './ExpenseForm'
import{connect} from 'react-redux'
import {addExpense} from '../actions/expenses'
/*
1. Create a new component namce: expenseform.js
2. Form: input type = "text" name = description, input type="float", button type = "submit"
3. connect to store, import addExpense from action expense
4. Handle event on submit e.preventDefault();props.dispatch(addExpense(description: e.target.description.value, amount: e.target.amount.value))
5. Return dashboard page
*/
const AddExpensePage = props => (
  <div>
    <h1>This is from my add expense component></h1>
    <ExpenseForm onSubmit = {expense => {
      console.log(expense);
      props.dispatch(addExpense(expense));
    }}/>
  </div>
);

export default connect()(AddExpensePage);

