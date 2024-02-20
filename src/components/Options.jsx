import style from "./Options.module.css";

export default function Options({
  onTrack,
  feedbacksCount: { good, neutral, bad },
}) {
  const totalFeedback = good + neutral + bad;
  return (
    <div className={style.buttonsContainer}>
      <button className={style.button} onClick={() => onTrack("good")}>
        Good
      </button>
      <button className={style.button} onClick={() => onTrack("neutral")}>
        Neutral
      </button>
      <button className={style.button} onClick={() => onTrack("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={style.button} onClick={() => onTrack("reset")}>
          Reset
        </button>
      )}
    </div>
  );
}
