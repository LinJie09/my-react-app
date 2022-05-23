import React from "react";
import { Formform, FormInput, FormButton } from "./todo.style";
const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <Formform>
      <FormInput
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <FormButton
        onClick={submitTodoHandler}
        className="todo-button"
        type="submit"
      >
        {" "}
        <i className="fas fa-plus-square"></i>
      </FormButton>
      {/* <FormSelect>
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">ALL</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </FormSelect> */}
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">ALL</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </Formform>
  );
};

export default Form;
