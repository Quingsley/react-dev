import "./ExpenseDate.css";
import Card from "../ui/Card";

function ExpenseDate(props: {
  date?: {
    toLocaleString: (
      arg0: string,
      arg1: { month?: string; day?: string }
    ) => string;
    getFullYear: () => number;
  };
}) {
  const month = props.date!.toLocaleString("en-US", { month: "long" });
  const day = props.date!.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date!.getFullYear();
  return (
    <Card className="expense-item__date">
      <div>{day}</div>
      <div>{month}</div>
      <div> {year}</div>
    </Card>
  );
}

export default ExpenseDate;
