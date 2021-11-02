import React from "react";
import styled from "styled-components";
import { addTodo, todoEntity, toggleTouch } from "../store/todo.entity";
import TouchDown from "./vector/TouchDown";

const TodoForm = styled.form`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 0.7rem 1.7rem;
  border-bottom: ${(props) => props.theme.styles.borderBottom};

  input {
    padding: 1rem 0.5rem;
    flex: 1;
    outline: none;
    border: none;
    font-size: 24px;
    line-height: 34px;
    font-weight: 300;
    color: ${(props) => props.theme.colors.grey};
  }

  ::placeholder {
    font-style: italic;
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
  const { items } = todoEntity.use();

  return (
    <TodoForm onSubmit={(event) => event.preventDefault()}>
      {items.length ? <TouchDown onClick={toggleTouch} /> : <span />}
      <input
        type="text"
        onKeyPress={handleAddTodo}
        placeholder="What needs to be done"
      />
    </TodoForm>
  );
};

export default TodoInput;
