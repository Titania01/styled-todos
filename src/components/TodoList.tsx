import styled from "styled-components";
import { deleteTodo, todoEntity, toggleTodo } from "../store/todo.entity";
import CancelIcon from "./vector/CancelIcon";
import MarkIcon from "./vector/MarkIcon";

const TodoItem = styled.div`
  border-bottom: ${(props) => props.theme.styles.borderBottom};
  padding: 1rem;
  display: flex;
  align-items: center;

  .delete {
    visibility: hidden;
  }
  :hover .delete {
    visibility: visible;
    cursor: pointer;
  }
`;
const IsDone = styled.div`
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  border-radius: 50%;
  border: 1px solid grey;
`;
const TodoText = styled.span<{ inactive: boolean }>`
  font-size: 24px;
  line-height: 29px;
  margin-left: 1rem;
  flex: 1;
  color: ${(props) => (props.inactive ? "#d9d9d9" : props.theme.colors.grey)};
  text-decoration: ${(props) => (props.inactive ? "line-through" : "none")};
`;

const TodoList = () => {
  const { items, displaying } = todoEntity.get();

  const todos =
    displaying === "active"
      ? items.filter((item) => !item.done)
      : displaying === "completed"
      ? items.filter((item) => item.done)
      : items;

  return (
    <>
      {todos.map((item) => (
        <TodoItem key={item.id}>
          <IsDone onClick={() => toggleTodo(item.id)}>
            {item.done && <MarkIcon />}
          </IsDone>
          <TodoText inactive={item.done}>{item.text}</TodoText>
          <CancelIcon className="delete" onClick={() => deleteTodo(item.id)} />
        </TodoItem>
      ))}
    </>
  );
};

export default TodoList;
