import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import "./Expenses.css";
import { Expense } from "../../utils/utils";
import ExpensesFilter from "../expenseFilter/ExpenseFilter";

type expensesArray = Array<Expense>;

function Expenses(props: { items: expensesArray }) {
  const [currentYear, setCurrentYear] = useState("2023");

  const selectedYear = (year: string) => {
    setCurrentYear(year);

    return year;
  };

  const expenseContent = props.items
    .filter(
      (item: Expense) => item.date!.getFullYear().toString() === currentYear
    )
    .map((expense: Expense) => (
      <ExpenseItem
        key={expense.id}
        id={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  return (
    <Card className="expenses">
      <ExpensesFilter
        onSelectedYear={selectedYear}
        selectedYear={currentYear}
      />
      {expenseContent.length > 0 ? (
        expenseContent
      ) : (
        <p className="expenses__text">No expenses found.</p>
      )}
    </Card>
  );
}

export default Expenses;
