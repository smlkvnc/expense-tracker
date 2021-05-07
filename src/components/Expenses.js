
import "./Expenses.css";
import ExpenseFilter from './NewExpense/ExpenseFilter'
import React, { useState } from 'react'
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2021");

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    
    return (
        <div>
            <div className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesList items = {filteredExpenses} />
            </div>
        </div>
    )
}

export default Expenses;