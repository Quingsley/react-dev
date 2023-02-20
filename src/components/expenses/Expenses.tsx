import { useState } from "react";
import Card from "../ui/Card";
import "./Expenses.css";
import { Expense } from "../../utils/utils";
import ExpensesFilter from "../expenseFilter/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

type expensesArray = Array<Expense>;

function Expenses(props: { items: expensesArray }) {
  const [currentYear, setCurrentYear] = useState("2023");

  const selectedYear = (year: string) => {
    setCurrentYear(year);

    return year;
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onSelectedYear={selectedYear}
        selectedYear={currentYear}
      />
      <ExpenseChart items={props.items} year={currentYear} />
      <ExpenseList items={props.items} year={currentYear} />
    </Card>
  );
}

export default Expenses;
