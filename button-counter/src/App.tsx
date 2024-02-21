import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  margin-right: 1rem;
  font-weight: 500;
  font-size: 2rem;
  color: #865a82;
  border-radius: 0.3rem;
  border: 1px solid #ee9ee6;
  background-color: rgba(233, 183, 225, 0.515);

  &:hover {
    background-color: #ee9ee67c;
    outline: #ee9ee6;
    cursor: pointer;
  }

  &:disabled {
    color: #dedada;
    background-color: #fafafa;
    border: 1px solid #dadada;
  }
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>

      <Button disabled={count >= 10} onClick={() => setCount((count) => count + 1)}>
        + 1
      </Button>
      <Button disabled={count === 0} onClick={() => setCount((count) => count - 1)}>
        - 1
      </Button>
    </>
  );
}

export default App;
