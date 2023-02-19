import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import AddExpenseButton from "./components/Button/AddExpenseButton";

import "./App.css";
import { Expense } from "./utils/utils";

type expensesArray = Array<Expense>;
const DUMMY_EXPENSES: expensesArray = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState<expensesArray>(DUMMY_EXPENSES);
  const expenseFlag = false;
  const [isShowForm, setShowForm] = useState(expenseFlag);
  const addExpenseHandler = (expense: Expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    setShowForm(false);
    return expense;
  };
  const setNewFlag = (flag: boolean) => {
    setShowForm(flag);
  };
  return (
    <div className="App">
      <h1 className="heading__1">Expense Tracker</h1>

      {isShowForm ? (
        <NewExpense
          onAddExpense={addExpenseHandler}
          cancelExpenseHandler={setNewFlag}
          flag={isShowForm}
        />
      ) : (
        <AddExpenseButton flag={isShowForm} setNewFlag={setNewFlag} />
      )}
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
