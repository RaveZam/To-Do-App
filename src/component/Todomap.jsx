import Todoitem from "./Todoitem";
export default function Todomap({ todos }) {
  return (
    <div>
      {todos.map((item) => (
        <Todoitem key={item} item={item} />
      ))}
    </div>
  );
}
