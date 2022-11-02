import React ,{useState}from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewExpense = (props) => {

   const [isEditing, setEditing] = useState(false);
    
    const onSaveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData ={
            ...enteredExpenseData,
            id : Math.random.toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    const startEditingHandler =()=>{
        setEditing(true);
    };
    const stopEditingHandler =()=>{
        setEditing(false);
    };

  return (
    <div className='new-expense'>
    {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
    {isEditing && <ExpenseForm onCancle = {stopEditingHandler} onSaveExpenseData ={onSaveExpenseDataHandler} />}
    </div>
  )
}

export default NewExpense
