import moment from 'moment';

export default(expenses,{text,sortBy,startDate,endDate})=>{ 
    return expenses.filter((expense)=>{
      const createdAtMoment = moment(expense.createdAt)
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,'day') : true;
      const endDateMatch = startDate ? endDate.isSameOrBefore(createdAtMoment,'day') : true;
      let Text = expense.description.toLowerCase();
      const textMatch = Text.includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{ 
      if(sortBy === 'date'){
        return a.createdAt<b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount'){
        return a.amount < b.amount ? 1 : -1;
      }
    });
  
  };