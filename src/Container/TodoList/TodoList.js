import React from "react";
import Todo from "./Todo";
import { TodoContainer, Todolist } from "./todo.style";
const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <TodoContainer>
      <Todolist>
        {filteredTodos.map((todo) => (
          <Todo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            key={todo.id}
          />
        ))}
      </Todolist>
    </TodoContainer>
  );
};

export default TodoList;
