
import React from 'react';
import { removeExpense } from '../actions/expenses';
import {connect} from "react-redux";
import {Link} from "react-router-dom"


const ExpensesListItem = (props) => (
    <div>
        <p> Description: {props.expense.description} - Amount: {props.expense.amount} - Created At: {props.expense.createdAt}<Link to = {`/edit/${props.expense.id}`}>Edit</Link></p>
    <button onClick = {() => props.dispatch(removeExpense(props.expense.id))}>Remove</button>
    </div>
);

export default connect()(ExpensesListItem);