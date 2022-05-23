import styled from "@emotion/styled";

// todoWork_css
export const TodoHeader = styled.header`
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

// todoList_css
export const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Todolist = styled.ul`
  min-width: 30%;
  list-style: none;
`;
// todo_css
export const ToDo = styled.div`
  margin: 0.5rem;
  background: white;
  font-size: 1.5rem;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
`;

export const TodoItem = styled.li`
  padding: 0rem 0.5rem;
`;

export const TodoLi = styled.li`
  flex: 1;
`;

export const CompleteBtn = styled.button`
  background: #ff6f47;
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
  background: rgb(11, 212, 162);
`;

export const TrashBtn = styled.button`
  background: #ff6f47;
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
`;

// form_css
export const FilterTodo = styled.select`
  padding: 1rem;
`;

export const Formform = styled.form`
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormInput = styled.input`
  padding: 0.5rem;
  font-size: 2rem;
  border: none;
  background: white;
`;

export const FormButton = styled.button`
  padding: 0.5rem;
  font-size: 2rem;
  border: none;
  background: white;
  color: #ff6f47;
  background: #f7fffe;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    background: #ff6f47;
    color: white;
  }
`;

export const FormSelect = styled.div`
  margin: 1rem;
  position: relative;
  overflow: hidden;
  ::after {
    content: "\25BC";
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    background: #ff6f47;
    cursor: pointer;
    pointer-events: none;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none; 
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background-image: none;
    color: #ff6f47;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    width: 12rem;
    padding: 1rem;
  }
`;
