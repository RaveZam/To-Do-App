import { useState } from "react";
import Form from "./Form";
import Todomap from "./Todomap";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <Todomap todos={todos} />
    </div>
  );
}
