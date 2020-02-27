
const uuidv1 = require('uuid/v1');

export const addExpense = ({ id = uuidv1(), description = "Rent House", amount = 10000, createdAt = 55500 }) => {
    return {
      type    : 'ADD_EXPENSE',
      expense : {
        id,
        description,
        amount,
        createdAt
      }
    }
  };
  export const removeExpense = (id) => {
    return {
      type    : 'REMOVE_EXPENSE',
      id
    }
  }
  
  export const editExpense = (id, updates) => {
    return{
    type : 'EDIT_EXPENSE',
    id,
    updates
    }
  }