import styles from "./cssmodules/formstyle.module.scss";
import { useState } from "react";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
  }

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputcontainer}>
          <input
            className={styles.input}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            value={todo}
          />
          <button className={styles.button} type="submit">
            Add To List
          </button>
        </div>
      </form>
    </div>
  );
}
