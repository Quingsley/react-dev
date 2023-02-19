import { Expense } from "../../utils/utils";
import "./ExpenseForm.css";
import { ChangeEvent, useState } from "react";

const ExpenseForm = (props: {
  onSaveExpenseData: (data: Expense) => void;
  onCancelExpense: (flag: boolean) => void;
  flag: boolean;
}) => {
  const [newExpense, setNewExpense] = useState<Expense>({
    title: "",
    amount: "",
    date: new Date(),
  });

  const [, setNewFlag] = useState(props.flag);

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewExpense((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewExpense((prevState) => {
      return {
        ...prevState,
        amount: event.target.value as unknown as number,
      };
    });
  };
  const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewExpense((prevState) => {
      return {
        ...prevState,
        date: new Date(event.target.value),
      };
    });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSaveExpenseData(newExpense);
    setNewExpense({
      title: "",
      amount: "",
      date: new Date(),
    });
  };

  const newExpenseCancelHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setNewFlag((prevFlag) => {
      props.onCancelExpense(!prevFlag);
      return !prevFlag;
    });
  };
  return (
    <form className="new-expense__form" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <input
            className="new-expense__input"
            type="text"
            placeholder="Title"
            onChange={titleChangeHandler}
            value={newExpense.title}
          />
          <label className="new-expense__label" htmlFor="Title">
            Title
          </label>
        </div>
        <div className="new-expense__control">
          <input
            className="new-expense__input"
            type="number"
            min={0.01}
            step={0.01}
            placeholder="Amount"
            onChange={amountChangeHandler}
            value={newExpense.amount}
          />
          <label className="new-expense__label" htmlFor="Amount">
            Amount
          </label>
        </div>
        <div className="new-expense__control">
          <input
            className="new-expense__input"
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={newExpense.date?.toISOString().slice(0, 10)}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control new-expense__control--btns">
          <button className="new-expense__button">Add Expense</button>
          <button
            className="new-expense__button"
            onClick={newExpenseCancelHandler}
          >
            CANCEL
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
