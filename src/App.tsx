import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

import "./App.css";

interface expenses {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

type expensesArray = Array<expenses>;

function App() {
  const expenses: expensesArray = [
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
  return (
    <div className="App">
      <h1 className="heading__1">Expense Tracker</h1>

      <NewExpense />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
