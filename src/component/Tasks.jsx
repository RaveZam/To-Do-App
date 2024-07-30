import styles from "./cssmodules/tasks.module.css";
import Totaltasks from "./TotalTasks";
import Completedtasks from "./CompletedTasks";
export default function Tasks({ totalTodos, completedTodos }) {
  return (
    <div>
      <h2 className={styles.taskslabel}>Total Tasks</h2>
      <div className={styles.tasksContainer}>
        <Totaltasks totalTodos={totalTodos} />
        <Completedtasks completedTodos={completedTodos} />
      </div>
    </div>
  );
}
