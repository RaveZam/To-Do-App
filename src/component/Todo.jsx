import { useState } from "react";
import Form from "./Form";
import Todomap from "./Todomap";
import Tasks from "./Tasks";

export default function Todo() {
  const [show, setShow] = useState(false);
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;

  return (
    <div>
      <Tasks totalTodos={totalTodos} completedTodos={completedTodos} />
      <Form todos={todos} setTodos={setTodos} setShow={setShow} />
      <Todomap show={show} todos={todos} setTodos={setTodos} />
    </div>
  );
}
