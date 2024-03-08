import { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Buttons = styled.div``;

// StyledButton에 대한 스타일
const buttonStyles = css`
  background-color: #48e6a5;
  width: 55px;
  height: 33px;
  border-radius: 4px;
  border: none;
  margin-left: 10px;
  &:hover {
    background-color: #00ffc0;
  }

  /* disabled 상태일 때의 스타일 */
  &:disabled {
    background-color: #4a4a4a;
    color: #a9a9a9;
    cursor: not-allowed;
  }
`;

const StyledButton = styled.button`
  ${buttonStyles}/* 위에서 정의한 buttonStyles 스타일을 적용 */
`;

export default function Count() {
  const [count, setCount] = useState(0);
  const maxValue = 2;
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
        <StyledButton disabled={count > maxValue} onClick={onIncrease}>
          +1
        </StyledButton>
        <StyledButton disabled={count < minValue} onClick={onDecrease}>
          -1
        </StyledButton>
      </Buttons>
    </Container>
  );
}
