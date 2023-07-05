import { useState, useEffect } from "react";
import Button from "./components/Button";
import "./App.css";
import StatisticsLine from "./components/StatisticsLine";

const App = () => {
  // save clicks of each button to its own state
  const [score, setScore] = useState(0);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const addFeedback = (feedback) => {
    if (feedback === "good") {
      setGood(good + 1);
      setScore(score + 1);
    }
    if (feedback === "neutral") {
      setNeutral(neutral + 1);
      setScore(score + 0);
    }
    if (feedback === "bad") {
      setBad(bad + 1);
      setScore(score - 1);
    }
  };

  useEffect(() => {
    const calcAll = good + neutral + bad;
    setAll(calcAll);

    const calcAve = calcAll !== 0 ? score / calcAll : 0;
    setAverage(calcAve);

    const calcPositive = calcAll !== 0 ? good / calcAll : 0;
    setPositive(calcPositive);
  }, [good, neutral, bad, score]);

  return (
    <div>
      <div>
        <h2>give feedback</h2>
      </div>
      <div>
        <Button handleClick={() => addFeedback("good")} text="good" />
        <Button handleClick={() => addFeedback("neutral")} text="neutral" />
        <Button handleClick={() => addFeedback("bad")} text="bad" />
      </div>
      <h2>statistics</h2>

      {all === 0 ? (
        <div>No feedback given</div>
      ) : (
        <div>
          <table>
            <tbody>
              <StatisticsLine text="good" value={good} />
              <StatisticsLine text="neutral" value={neutral} />
              <StatisticsLine text="bad" value={bad} />
              <StatisticsLine text="all" value={all} />
              <StatisticsLine text="average" value={average} />
              <StatisticsLine text="positive" value={positive} />
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
