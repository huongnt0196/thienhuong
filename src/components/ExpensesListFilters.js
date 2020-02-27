import React from 'react';
import {connect} from "react-redux";
import{setTextFilter, sortByDate, sortByAmount} from '../actions/filters';


/*
1. import sortbydate & sortbyamount from action
2. handle event on change 
3. dispatch 

*/
const ExpensesListFilters = (props) => {
    return(
        <div className = "filter">
            <input type = "text" value = {props.filter.text} onChange = {(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }}/>
            <select onChange = {(e) => {if(e.target.value === 'amount'){props.dispatch(sortByAmount())} else if (e.target.value === 'date'){props.dispatch(sortByDate())}}} value = {props.filter.sortBy}>
              

                <option value = "amount">By Amount</option>
                <option value = "date">By Date</option>
            </select>
        </div>
    );
};
const mapStateToProps = state => {
    return{
        filter: state.filters
    }
}
export default connect(mapStateToProps)(ExpensesListFilters);