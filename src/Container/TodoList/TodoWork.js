import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import "./todo.css";
function TodoWork() {
  // todoList
  // State suff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [statuts, setStatus] = useState("all");
  const [filteredTodos, setFilderedTodos] = useState([]);
  // RUN ONCE when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);
  // USE Effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, statuts]);
  // Functions
  const filterHandler = () => {
    switch (statuts) {
      case "completed":
        setFilderedTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilderedTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilderedTodos(todos);
        break;
    }
  };
  // Save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      const todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
  return (
    <div className="todoWork">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        todos={todos}
      />
    </div>
  );
}
export default TodoWork;
