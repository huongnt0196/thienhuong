

export default (expenses, {text, sortBy, startDate, endDate}) => {
    return  expenses.filter( (expense ) => {
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    const startDateMatch = typeof startDate !== 'number' || startDate <= expense.createdAt ;
    const endDateMatch = typeof endDate !== 'number' || endDate >= expense.createdAt;
    return textMatch && startDateMatch && endDateMatch;
    }).sort(function(a, b){
      if (sortBy === 'amount'){
        if( a.amount < b.amount ){
          return 1;
        }else if( a.amount > b.amount ){
          return -1;
        } else {return 0;}
      }else if (sortBy === 'date'){
        return a.createdAt < b.createdAt ? 1 : -1
      }
    })
  }