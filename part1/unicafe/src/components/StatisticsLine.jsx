/* eslint-disable react/prop-types */
import "./StatisticsLine.css";

const StatisticsLine = ({ text, value }) => {
  if (text === "positive") {
    return (
      <tr>
        <td>{text}</td>
        <td>{`${value * 100} %`}</td>
      </tr>
    );
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

export default StatisticsLine;
