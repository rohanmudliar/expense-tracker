import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const valueData = props.dataPoints.map((dataPoint) => dataPoint.value);

  const maxValue = Math.max(...valueData);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
