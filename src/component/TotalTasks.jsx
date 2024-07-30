import styles from "./cssmodules/totaltasks.module.css";
export default function Totaltasks({ totalTodos }) {
  return (
    <div className={styles.totaltask}>
      <h1> Total Tasks: {totalTodos}</h1>
    </div>
  );
}
