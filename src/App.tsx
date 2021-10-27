import { useState } from "react";
import styled from "styled-components";
import "./App.scss";

const Greeting = styled.h1`
  color: tomato;
  font-size: 2rem;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Greeting>todos</Greeting>
    </div>
  );
}

export default App;
