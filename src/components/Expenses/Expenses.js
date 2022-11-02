import React, { useState } from 'react'
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {

  const [selectYear, setSelectYear] = useState("2020")
  const selectedYearHandler = (selectedYear) => {
    setSelectYear(selectedYear);
  };

  const filteredExpense = props.expenses.filter(item => {
    return item.date.getFullYear().toString() === selectYear;
  });



  return (
    <li>
      <Card className='expenses'>
        <ExpensesFilter selected={selectYear} onSelectYear={selectedYearHandler} />
        <ExpenseChart expenses = {filteredExpense}/>
        <ExpensesList item={filteredExpense} />
      </Card>
    </li>
  )
}

export default Expenses