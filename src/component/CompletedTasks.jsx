import styles from "./cssmodules/completedtasks.module.css";
export default function Completedtasks({ completedTodos }) {
  return (
    <div className={styles.completedtasks}>
      <h1> Completed Tasks: {completedTodos}</h1>
    </div>
  );
}
