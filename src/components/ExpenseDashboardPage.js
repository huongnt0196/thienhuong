import React from 'react';
import ExpensesList from './expensesList';
import ExpensesListFilters from './ExpensesListFilters'
const ExpenseDashboardPage = () => (
  <div>
   <ExpensesListFilters/>
    <ExpensesList />
  </div>
);



export default ExpenseDashboardPage;
