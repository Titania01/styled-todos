import pluralize from "pluralize";
import styled from "styled-components";
import {
  clearCompleted,
  setDisplaying,
  todoEntity,
} from "../store/todo.entity";
import { displayingTypes } from "../types";

const StyledFooter = styled.footer`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.grey};
`;

const Statuses = styled.div`
  display: flex;
  align-items: center;
`;

const Status = styled.span<{ active: boolean }>`
  border: 1px solid ${(props) => (props.active ? "#ccc" : "transparent")};
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  margin: 0 0.5rem;
  cursor: pointer;
  text-transform: capitalize;
`;

const ClearCompleted = styled.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
const Footer = () => {
  const statuses: displayingTypes[] = ["all", "active", "completed"];
  const { displaying, items } = todoEntity.use();
  const showClearCompleted = items.some((item) => item.done);
  const totalItemsLeft = items.filter((item) => !item.done).length;

  return (
    <StyledFooter>
      <span>
        {totalItemsLeft}
        {pluralize("items", totalItemsLeft)} left
      </span>

      <Statuses>
        {statuses.map((status: displayingTypes) => (
          <Status
            onClick={() => setDisplaying(status)}
            active={displaying === status}
            key={status}
          >
            {status}
          </Status>
        ))}

        {showClearCompleted ? (
          <ClearCompleted onClick={clearCompleted}>
            Clear completed
          </ClearCompleted>
        ) : (
          <span />
        )}
      </Statuses>
    </StyledFooter>
  );
};

export default Footer;
