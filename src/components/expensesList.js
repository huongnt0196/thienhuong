
import React from 'react';
import {connect} from 'react-redux';
import expenses from '../reducers/expenses';
import ExpensesListItem from './ExpensesListItem';
import selectedExpenses from '../selectors/expenses'


const ExpensesList = (props) => (
    <div>
        <h1>These are Expenses List</h1>
        {props.expenses.map( (expense) => {
            return <ExpensesListItem expense={expense} />
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {    
        expenses: selectedExpenses(state.expenses,state.filters)
  
    }
}
const ConnectedExpensesList = connect(mapStateToProps)(ExpensesList);
export default ConnectedExpensesList;