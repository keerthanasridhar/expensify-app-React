import React from 'react';
import {connect} from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount,setStartDate,setEndDate } from '../action/filters';
import { DateRangePicker} from 'react-dates';


class ExpenseListFilters extends React.Component{
    state = {
        calendarfocused: null
    };

    onDatesChange=({startDate,endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange=(calendarfocused)=>{
     this.setState(()=>{ calendarfocused })
     }
     onTextChange = (e)=>{
        // debugger;
    this.props.dispatch(setTextFilter(e.target.value))
        
    }
      onSortChange = (e)=>{
        if(e.target.value ==='date'){
            this.props.dispatch(sortByDate());
        } else if(e.target.value ==='amount'){
            this.props.dispatch(sortByAmount());
        }
    }
    
    render() {
        return (
            <div>
                <input 
                type = "text" 
                value={this.props.filters.text} 
                onChange ={this.onTextChange}/>
                <select 
                value = {this.props.filters.sortBy}
                onChange ={this.onSortChange} 
                >
                <option value = "date">Date</option>
                <option value = "amount">Amount</option>
                </select>
                <DateRangePicker
                startDate={this.props.filters.startDate}
                startDateId="startDateid123" // momentPropTypes.momentObj or null,
                endDate={this.props.filters.endDate}
                endDateId="EndDateid123" // momentPropTypes.momentObj or null,
                onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                focusedInput={this.state.calendarfocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={this.onFocusChange}
                numberOfMonths = {1}
                isOutsideRange={()=> false }
                showClearDates = {true} // PropTypes.func.isRequired,//The cross or clear mark
                
                // startDate={this.props.filters.startDate}
                // endDate={this.props.filters.endDate}
                // onDatesChange={this.onDatesChange}
                // focusedInput={this.state.calendarFocused}
                // onFocusChange={this.onFocusChange}
                // showClearDates={true}
                // numberOfMonths={1}
                // isOutsideRange={() => false}
                />
            </div>
        );
    }
}


const mapStateToProps = (state)=>{
    return {
        filters:state.filters
    }
}
const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
  });

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);