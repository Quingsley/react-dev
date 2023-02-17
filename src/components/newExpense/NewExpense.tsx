import ExpenseForm from "./ExpenseForm";
import Card from "../ui/Card";

import "./NewExpense.css";

interface Expense {
  title?: string;
  amount?: number | string;
  date?: Date;
  id?: string;
}
const NewExpense = () => {
  const enteredExpenseData = (data: Expense): Expense => {
    console.log({ ...data, id: Math.random().toString() });
    return { ...data, id: Math.random().toString() };
  };

  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpenseData={enteredExpenseData} />
    </Card>
  );
};

export default NewExpense;
