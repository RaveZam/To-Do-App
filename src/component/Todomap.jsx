import Todoitem from "./Todoitem";
import styles from "./cssmodules/todolist.module.css";
export default function Todomap({ todos, setTodos, setShow, show }) {
  return (
    <div>
      {show ? (
        <div className={styles.list}>
          {todos.map((item) => (
            <Todoitem
              key={item.name}
              item={item}
              todos={todos}
              setTodos={setTodos}
              setShow={setShow}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
