import { useState } from "react";
import Form from "./Form";
import Todomap from "./Todomap";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} setShow={setShow} />
      <Todomap show={show} todos={todos} setTodos={setTodos} />
    </div>
  );
}
