import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import React from 'react'

function ExpenseItem(props) {
    
   
    return(
        <li>
        <div className = "expense-item">

            <ExpenseDate date = {props.date}></ExpenseDate>
            <div className = "expense-item__description">
                <h2>{props.title}</h2>
                
            </div>
            <div className = "expense-item__price">${props.amount}</div>
            
        </div>
        </li>
    );
}

export default ExpenseItem;