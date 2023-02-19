import ExpenseForm from "./ExpenseForm";
import Card from "../ui/Card";
import "./NewExpense.css";
import { Expense } from "../../utils/utils";

const NewExpense = (props: {
  onAddExpense: (data: Expense) => Expense;
  cancelExpenseHandler: (flag: boolean) => void;
  flag: boolean;
}) => {
  const enteredExpenseData = (data: Expense) => {
    props.onAddExpense({ ...data, id: Math.random().toString() });
  };

  const cancelExpenseHandler = (flag: boolean) => {
    props.cancelExpenseHandler(flag);
  };

  return (
    <Card className="new-expense">
      <ExpenseForm
        onSaveExpenseData={enteredExpenseData}
        onCancelExpense={cancelExpenseHandler}
        flag={props.flag}
      />
    </Card>
  );
};

export default NewExpense;
