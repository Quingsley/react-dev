import { useState } from "react";
import "./AddExpenseButton.css";
const AddExpenseButton = (props: {
  flag: boolean;
  setNewFlag: (flag: boolean) => void;
}) => {
  const [, setFlag] = useState(props.flag);
  const showFormHandler = () => {
    setFlag((prevFlag) => {
      props.setNewFlag(!prevFlag);
      return !prevFlag;
    });
  };
  return (
    <button onClick={showFormHandler} className="add-new-expense__button">
      Add New Expense
    </button>
  );
};

export default AddExpenseButton;
