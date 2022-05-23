import React from "react";
import { ToDo, CompleteBtn, TrashBtn, TodoLi } from "./todo.style";
const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <ToDo>
      <TodoLi className={`todo-item ${todo.completed ? "completed" : ""} `}>
        {text}
      </TodoLi>
      <CompleteBtn onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </CompleteBtn>
      <TrashBtn onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </TrashBtn>
    </ToDo>
  );
};

export default Todo;
