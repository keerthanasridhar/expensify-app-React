import React from 'react';
import ExpenseForm from '../components/ExpenseForm.js'
import {connect} from 'react-redux';
import { addExpense } from '../action/expenses';

class AddExpensePage extends React.component {
    onSubmit = (expense)=>{
        this.props.addExpense(expense);
        this.props.history.push('/')
        }
        
      render() {
       return (
            <div>
            <h1> Add Expense</h1>
            <ExpenseForm 
            onSubmit = {this.onSubmit}
            />
            </div>
        );
        }
} 


const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
  });

export default connect(mapDispatchToProps)(AddExpensePage);