import styles from "./cssmodules/todoitem.module.css";
export default function Todoitem({ item }) {
  return (
    <div>
      <h1 className={styles.todoitem}> {item} </h1>
    </div>
  );
}
