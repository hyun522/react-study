import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Buttons = styled.div``;
const StyledButton = styled.button`
  background-color: #cccccc;

  width: 55px;
  height: 33px;
  border-radius: 4px;
  border: none;
  margin-left: 10px;
  &: hover {
    background-color: #00ffc0;
  }
`;

export default function Count() {
  const [count, setCount] = useState(0);
  const maxValue = 100;
  const minValue = -100;
  const onIncrease = () => {
    if (count < maxValue) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  const onDecrease = () => {
    if (count > minValue) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <Container>
      <h2> {count}</h2>
      <Buttons>
        <StyledButton onClick={onIncrease}>+1</StyledButton>
        <StyledButton onClick={onDecrease}>-1</StyledButton>
      </Buttons>
    </Container>
  );
}
