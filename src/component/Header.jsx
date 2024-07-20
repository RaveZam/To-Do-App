import styles from "./cssmodules/headerstyle.module.css";
export default function Header() {
  return (
    <div className="Header">
      <h1 className={styles.Header}> My To Do List </h1>
    </div>
  );
}
