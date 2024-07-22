import styles from "./cssmodules/formstyle.module.scss";
import { useState } from "react";
export default function Form({ todos, setTodos, setShow }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
  }

  function checkifempty() {
    console.log("Hi");
  }

  function twofunctions() {
    checkifempty();
    setShow(true);
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
          <button
            onClick={() => twofunctions()}
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
