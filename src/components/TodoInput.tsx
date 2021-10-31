import React from "react";
import styled from "styled-components";
import { addTodo } from "../store/todo.entity";
import TouchDown from "./vector/TouchDown";

const TodoForm = styled.form`
  display: flex;
  background-color: white;
  padding: 0.7;
  border-bottom: ${(props) => props.theme.styles.borderBottom};

  input {
    padding: 1rem;
    flex: 1;
    outline: none;
    border: none;
    font-size: 24px;
    line-height: 34px;
    font-weight: 300;
    color: ${(props) => props.theme.colors.grey};
  }
`;

const TodoInput = () => {
  const handleAddTodo = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const newTodo = event.currentTarget.value;

    if (event.key === "Enter") {
      if (!newTodo.trim()) return;
      addTodo(newTodo);

      event.currentTarget.value = "";
    }
  };
  return (
    <TodoForm onSubmit={(event) => event.preventDefault()}>
      <TouchDown />
      <input
        type="text"
        onKeyPress={handleAddTodo}
        placeholder="What needs to be done"
      />
    </TodoForm>
  );
};

export default TodoInput;
