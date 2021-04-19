import React from "react";
import Statistic from "./Statistic";

const Statistics = ({ good, neutral, bad }) => {
  let all = good + bad + neutral;
  let average = ((good + bad * -1) / all).toFixed(1);
  let postivePercentage = (good / all) * 100;
  if (all === 0) {
    return <p> No feedback given </p>;
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <Statistic text="good" value={good} />
            </td>
          </tr>
          <tr>
            <td>
              <Statistic text="neutral" value={neutral} />
            </td>
          </tr>
          <tr>
            <td>
              <Statistic text="bad" value={bad} />
            </td>
          </tr>
          <tr>
            <td>
              <Statistic text="all" value={all} />
            </td>
          </tr>
          <tr>
            <td>
              <Statistic text="average" value={average} />
            </td>
          </tr>
          <tr>
            <td>
              <Statistic text="positive" value={postivePercentage} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
