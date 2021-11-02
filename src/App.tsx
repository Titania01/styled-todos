import styled from "styled-components";
import "./App.scss";
import Footer from "./components/Footer";
// import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { todoEntity } from "./store/todo.entity";

const Wrapper = styled.div`
  width: 40rem;
  margin: 2rem auto;
`;

const Card = styled.div`
  box-shadow: ${(props) => props.theme.styles.boxShadow};
  background: white;
  position: relative;

  * {
    position: relative;
  }
  :before,
  :after {
    position: absolute;
    content: "";
    background: white;
    border: 1px solid lightgray;
  }
  :before {
    width: 95%;
    bottom: -1rem;
    height: 1rem;
    left: 2.5%;
  }
  :after {
    width: 98%;
    left: 1%;
    height: 0.5rem;
    bottom: -0.5rem;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.lightred};
  font-weight: 400;
  font-size: 100px;
  text-align: center;
  line-height: 20px;
`;

function App() {
  const { items: todos } = todoEntity.use();
  return (
    <Wrapper>
      <Title>todos</Title>
      <Card>
        <TodoInput />
        <TodoList />
        {todos.length ? <Footer /> : []}
      </Card>
    </Wrapper>
  );
}

export default App;
