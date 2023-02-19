import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";
import { Expense } from "../../utils/utils";

function ExpenseItem(props: Expense) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item__title">{props.title}</h2>
        <Card className="expense-item__price"> $ {props.amount}</Card>
      </div>
    </Card>
  );
}

export default ExpenseItem;
