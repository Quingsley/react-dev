import ChartBar from "./ChartBar";
import "./Chart.css";

interface ChartProps {
  dataPoints: { value: number; label: string }[];
}

const Chart = (props: ChartProps) => {
  const chartValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...chartValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
