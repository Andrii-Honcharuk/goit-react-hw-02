import style from "./Feedback.module.css";

export default function Feedback({
  feedbacksCount: { good, neutral, bad },
  total,
}) {
  const positiveFeedback = Math.round(((good + neutral) / total) * 100);
  return (
    <div className={style.feedbackContainer}>
      <p>Good: {good} </p>
      <p>Neutral: {neutral} </p>
      <p>Bad: {bad} </p>
      <p>Total: {total}</p>
      <p>Positive: {!positiveFeedback ? 0 : positiveFeedback}% </p>
    </div>
  );
}
