import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  font-weight: 500;
  font-size: 2rem;
  color: #27275b;
  border-radius: 0.3rem;
  border: 1px solid #27275b;

  &:hover {
    background-color: #7575cf;
    outline: #27275b;
  }
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>

      <Button onClick={() => setCount((count) => count + 1)}> + 1 </Button>
      <Button onClick={() => setCount((count) => count - 1)}> - 1 </Button>
    </>
  );
}

export default App;
