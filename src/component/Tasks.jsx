import styles from "./cssmodules/tasks.module.css";
import Totaltasks from "./TotalTasks";
import Completedtasks from "./CompletedTasks";
export default function Tasks({ totalTodos, completedTodos }) {
  return (
    <div className={styles.tasksContainer}>
      <h2 className={styles.taskslabel}>Total Tasks:</h2>
      <Totaltasks totalTodos={totalTodos} />
      <Completedtasks completedTodos={completedTodos} />
    </div>
  );
}
