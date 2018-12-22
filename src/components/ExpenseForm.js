import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


// const now = moment().format('MMMM Do, YYYY');
const now = moment()
// console.log(now);


export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            description:props.expense ? props.expense.description:'',
            note: props.expense ? props.expense.note:'',
            amount: props.expense ? (props.expense.amount/100).toString():'',
            createdAt:props.expense ? moment(props.expense.createdAt):moment(),
            calendarfocused: false,
            error:''

        }
    }

    onDescriptionchnage = (e)=>{
        const description = e.target.value;
        this.setState(()=>({ description }))
    }; 
    OnChangeTextArea =(e)=>{
        const note = e.target.value;
        // e.persist();
        this.setState(()=>({ note } ))
    };
    onAmountChange =(e)=>{
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({ amount } )) 
        }
    };
    onDateChange=(createdAt)=>{
        if(createdAt){
            this.setState(()=>({ createdAt }))
        }
    };

    onFocusChange=({focused})=>{
     this.setState(()=>({ calendarfocused:focused }))
    };
    onSubmit = (e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            //error "pea"
            this.setState(()=>({ error: 'Pleas provide description and amount'}))
        }else {
            //clear the error
            this.setState(()=>({ error: ''}))
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount,10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
            console.log("there you go!")
        }
    };

    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
           <form onSubmit ={this.onSubmit}>
           <input type = "text"
           placeholder = "Description"
           autoFocus
           value = {this.state.description}
           onChange={this.onDescriptionchnage}
           />

           <input 
           type = "text"
           placeholder="Amount"
           value = {this.state.amount}
           onChange = {this.onAmountChange}/>

           <SingleDatePicker
           date={this.state.createdAt} // momentPropTypes.momentObj or null
           onDateChange={this.onDateChange} // PropTypes.func.isRequired
           focused={this.state.calendarfocused} // PropTypes.bool
           onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
           numberOfMonths = {1}
           isOutsideRange = {()=> false }
           />

           <textarea
           placeholder ="Add a note for the expense(Optional)"
           value = {this.state.note}
           onChange = {this.OnChangeTextArea}
           >
           </textarea>
           <button>Add Expense</button>
           </form>
            </div>
        )
    }
}
