import Expenses from "./components/Expenses";
import NewExpense from './components/NewExpense/NewExpense'

import React, {useState} from 'react'

const DUMMY_EXPENSES = [
  {
    id : "1",
    title : "Car Insurance", 
    amount : "297.64", 
    date : new Date(2021, 2, 28)
  },
  {
    id : "2",
    title : "Market", 
    amount : "300.64",
     date : new Date(2021, 2, 29)
  }
  
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });

  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses item = {expenses} />
      
    </div>
  );
}

export default App;
