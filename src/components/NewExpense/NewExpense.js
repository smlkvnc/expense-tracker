import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css"
const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };
    const [isEditing, setIsEditing] = useState(false);

    const buttonHandler = () => {
        setIsEditing(true);
    }
    const buttonCancelHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={buttonHandler} type="button">Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={buttonCancelHandler} />}
        </div>
    )
}

export default NewExpense
