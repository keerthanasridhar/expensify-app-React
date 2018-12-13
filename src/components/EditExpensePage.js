import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense,removeExpense} from '../action/expenses';



const EditExpensePage = (props) => {
// console.log(props);
    return ( 
        <div>
        <ExpenseForm
        expense = {props.expense}
        onSubmit = {(expense)=>{
            //dispatch the action to edit
            props.dispatch(editExpense(props.expense.id,expense))
            //redirect to dashboard
            props.history.push('/');
            console.log('updated',expense);
        }}
        />
        <button onClick = {()=>{
            props.dispatch(removeExpense({id:props.expense.id}));
            props.history.push('/');
        }}>Remove</button>
        </div>
    )
};

const mapStateToProps = (state,props)=>{
return {
    expense: state.expenses.find((expense)=>expense.id === props.match.params.id)
}
};

export default connect(mapStateToProps)(EditExpensePage);


