import style from "./Options.module.css";
export default function Options({ onTrack, children }) {
  return (
    <button className={style.button} onClick={onTrack}>
      {children}
    </button>
  );
}
