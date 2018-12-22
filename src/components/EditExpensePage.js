import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense,removeExpense} from '../action/expenses';



export class EditExpensePage extends React.Component{
onSubmit = (expense)=>{
    //dispatch the action to edit
    props.dispatch(editExpense(props.expense.id,expense))
    //redirect to dashboard
    props.history.push('/');
    console.log('updated',expense);
}
onRemove = ()=>{
        props.dispatch(removeExpense({id:props.expense.id}));
        props.history.push('/');
    };
// console.log(props);
render(){
    return ( 
        <div>
        <ExpenseForm
        expense = {props.expense}
        onSubmit = {this.onSubmit}
        />
        <button onClick = {this.onRemove}>Remove</button>
        </div>
    );
}
};
    


const mapStateToProps = (state,props)=>{
return {
    expense: state.expenses.find((expense)=>expense.id === props.match.params.id)
}
};

const mapDispatchToprops = (dispatch,props)=>({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
  });
  

export default connect(mapStateToProps,mapDispatchToprops)(EditExpensePage);


