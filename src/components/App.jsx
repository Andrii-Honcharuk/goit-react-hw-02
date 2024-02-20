import { useState, useEffect } from "react";

import Description from "./Description";
import Options from "./Options";
import Feedback from "./Feedback";
import Notification from "./Notification";

import "../App.css";

export const App = () => {
  const initialFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      return setFeedback(initialFeedback);
    }
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");
    return savedFeedback !== null ? JSON.parse(savedFeedback) : initialFeedback;
  });
  useEffect(
    () => window.localStorage.setItem("feedback", JSON.stringify(feedback)),
    [feedback]
  );
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <>
      <Description />
      <Options feedbacksCount={feedback} onTrack={updateFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedbacksCount={feedback} total={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
};
