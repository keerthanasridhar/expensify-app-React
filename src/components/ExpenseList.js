import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList =(props)=>(
<div>
{
    props.expense.length === 0 ? (<p>NO EXPENSES!</p>
    ) :
     (
        props.expenses.map((expense)=>{
            return <ExpenseListItem key={expense.id} {...expense}/>
        })
    )
}
</div>
);

const mapStateProps = (state)=>{
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    };
};

export default connect(mapStateProps)(ExpenseList)



