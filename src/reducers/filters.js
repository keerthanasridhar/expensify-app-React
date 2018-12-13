import moment from 'moment';


const filterReduceDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
  
  export default(state=filterReduceDefaultState,action)=>{
    switch(action.type){
      case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
      case 'SORT_BY_DATE' :
      return {
        ...state,
        sortBy:'Date'
      }
      case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy:'amount'
      }
      case 'SET_BY_STARTDATE': 
      return {
        ...state,
        startDate:action.startDate
      }
      case 'SET_BY_ENDDATE':
      return {
        ...state,
        endDate: action.endDate
      }
      default: 
        return state
      } 
  }

