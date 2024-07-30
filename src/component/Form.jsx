import styles from "./cssmodules/formstyle.module.scss";
import { useState } from "react";
export default function Form({ todos, setTodos, setShow }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  function checkifempty() {
    console.log(todo);
    setShow(true);
  }

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputcontainer}>
          <input
            className={styles.input}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            type="text"
            value={todo.name}
          />
          <button
            onClick={() => checkifempty()}
            className={styles.button}
            type="submit"
          >
            Add To List
          </button>
        </div>
      </form>
    </div>
  );
}
