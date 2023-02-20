import { Expense } from "../../utils/utils";
import Chart from "../Chart/Chart";

const ExpenseChart = (props: { items: Array<Expense>; year: string }) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  const filteredExpenses = props.items.filter(
    (item) => item.date!.getFullYear().toString() === props.year
  );
  for (const expense of filteredExpenses) {
    const expenseMonth = expense.date!.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += +expense.amount!;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
