import { Expense } from "../../utils/utils";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props: { items: Array<Expense>; year: string }) => {
  const expenseContent = props.items
    .filter(
      (item: Expense) => item.date!.getFullYear().toString() === props.year
    )
    .map((expense: Expense) => (
      <li key={expense.id} className="expenses__list-item">
        <ExpenseItem
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      </li>
    ));

  if (expenseContent.length === 0) {
    return <p className="expenses__text">No expenses found.</p>;
  } else {
    return <ul className="expenses__list">{expenseContent}</ul>;
  }
};

export default ExpenseList;
