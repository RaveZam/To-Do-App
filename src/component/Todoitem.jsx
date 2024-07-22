import styles from "./cssmodules/todoitem.module.scss";
export default function Todoitem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  return (
    <div className={styles.todoitem}>
      <h1 className={styles.todotext}>
        {item}
        <button onClick={() => handleDelete(item)} className={styles.button}>
          Remove From List
        </button>
      </h1>
    </div>
  );
}
