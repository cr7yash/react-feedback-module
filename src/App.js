import React, { useState } from "react";
import Statistics from "./Component/Statistics";
import Button from "./Component/Button";

import "./style.css";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodFeedbackHandler = () => {
    setGood(good + 1);
  };
  const neutralFeedbackHandler = () => {
    setNeutral(neutral + 1);
  };
  const badFeedbackHandler = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button event={goodFeedbackHandler} value="Good">
        Good
      </Button>
      <Button event={neutralFeedbackHandler} value="Neutral">
        Neutral
      </Button>
      <Button event={badFeedbackHandler} value="Bad">
        Bad
      </Button>
      <p>Statistics</p>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
}
