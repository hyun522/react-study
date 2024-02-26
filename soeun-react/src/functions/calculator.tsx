import { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Numbers = styled.div``;
const Calculation = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Calculator() {
  const [number, setNumber] = useState(0);
  const [holdNumaber, setHoldNumber] = useState(0);
  const [operation, setOperation] = useState("");
  return (
    <Container>
      <input></input>
      <Numbers>
        <button>AC</button>
        <div>
          <button>7</button>
          <button>8</button>
          <button>9</button>
        </div>
        <div>
          <button>4</button>
          <button>5</button>
          <button>6</button>
        </div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
        <button>0</button>
      </Numbers>
      <Calculation>
        <button>/</button>
        <button>X</button>
        <button>-</button>
        <button>+</button>
        <button>=</button>
      </Calculation>
    </Container>
  );
}
