import styles from "./cssmodules/todoitem.module.scss";
export default function Todoitem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item)); //handles the delete button!
  }

  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.todoitem}>
      <h1 className={styles.todotext}>
        <span
          className={className}
          onClick={() => handleClick(item.name, item.done)}
        >
          {item.name}
        </span>
        <button onClick={() => handleDelete(item)} className={styles.button}>
          Remove From List
        </button>
      </h1>
    </div>
  );
}
