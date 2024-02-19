import { useState } from "react";
import { useEffect } from "react";
import Description from "./Description";
import Options from "./Options";
import Feedback from "./Feedback";

import "../App.css";

export const App = () => {
  const initialFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");
    return savedFeedback !== null ? JSON.parse(savedFeedback) : initialFeedback;
  });

  const handleClick = (key) => {
    setFeedback({
      ...feedback,
      [key]: feedback[key] + 1,
    });
  };

  const handleReset = () => {
    setFeedback(initialFeedback);
  };

  useEffect(
    () => window.localStorage.setItem("feedback", JSON.stringify(feedback)),
    [feedback]
  );

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <div className="buttonsContainer">
        <Options value={feedback.good} onTrack={() => handleClick("good")}>
          Good
        </Options>
        <Options
          value={feedback.neutral}
          onTrack={() => handleClick("neutral")}
        >
          Neutral
        </Options>
        <Options value={feedback.bad} onTrack={() => handleClick("bad")}>
          Bad
        </Options>
        {totalFeedback > 0 && (
          <Options value={feedback} onTrack={handleReset}>
            Reset
          </Options>
        )}
      </div>
      <div className="feedbackContainer">
        {totalFeedback > 0 ? (
          <div>
            <Feedback> Good: {feedback.good} </Feedback>
            <Feedback> Neutral: {feedback.neutral} </Feedback>
            <Feedback> Bad: {feedback.bad} </Feedback>
            <Feedback> Total: {totalFeedback} </Feedback>
            <Feedback>
              {" "}
              Positive: {!positiveFeedback ? 0 : positiveFeedback}%{" "}
            </Feedback>
          </div>
        ) : (
          <p>No feedback yet</p>
        )}
      </div>
    </>
  );
};
