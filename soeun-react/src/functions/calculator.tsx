import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Numbers = styled.div``;
const Calculation = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Buttons = styled.div`
  display: flex;
`;
const Button = styled.div`
  width: 43px;
  border: 1px solid;
  text-align: center;
  background-color: beige;
`;
const Div = styled.div`
  display: flex;
`;

export default function Calculator() {
  const [number, setNumber] = useState(0);
  const [operation, setOperation] = useState(""); // 더하기 빼기등 을 눌렀을때 표시된 숫자를 들고있을 변수
  const [holdNumber, setHoldNumber] = useState(0); // 더하기, 빼기 등의 명령어를 담는 변수
  const [displayedOperation, setDisplayedOperation] = useState(""); // 화면에 표시될 연산 기호

  const handleNumberClick = (num: number) => {
    setNumber((prevNumber) => parseFloat(prevNumber.toString() + num)); // 숫자로 형변환 후 문자열로 처리하여 덧붙임
  };

  const handleRemoveClick = () => {
    const numberString = String(number);
    if (numberString.length === 1) {
      setNumber(0);
    } else {
      setNumber(parseFloat(numberString.slice(0, numberString.length - 1)));
    }
  };

  const handleClickOperation = (enteredOperation: string) => {
    if (number !== 0) {
      setOperation(enteredOperation);
      setHoldNumber(number);
      setDisplayedOperation(enteredOperation); // 연산 기호를 화면에 표시
      setNumber(0); // 초기화된 상태로 설정
    }
  };

  const handleCalculation = (): void => {
    switch (operation) {
      case "+":
        setNumber(holdNumber + number);
        break;
      case "-":
        setNumber(holdNumber - number);
        break;
      case "X":
        setNumber(holdNumber * number);
        break;
      case "/":
        setNumber(holdNumber / number);
        break;
      default:
        setNumber(holdNumber + number);
        break;
    }
    setHoldNumber(0);
    setOperation("");
  };

  const handleACClick = () => {
    setNumber(0);
    setHoldNumber(0);
    setOperation("");
    setDisplayedOperation("");
  };

  return (
    <Container>
      <input value={number || holdNumber + displayedOperation} readOnly />
      <Buttons>
        <Numbers>
          <Div>
            <Button data-type="ac" onClick={handleACClick}>
              AC
            </Button>
            <Button onClick={() => handleRemoveClick()}>←</Button>
          </Div>
          <Div>
            <Button onClick={() => handleNumberClick(7)}>7</Button>
            <Button onClick={() => handleNumberClick(8)}>8</Button>
            <Button onClick={() => handleNumberClick(9)}>9</Button>
          </Div>
          <Div>
            <Button onClick={() => handleNumberClick(4)}>4</Button>
            <Button onClick={() => handleNumberClick(5)}>5</Button>
            <Button onClick={() => handleNumberClick(6)}>6</Button>
          </Div>
          <Div>
            <Button onClick={() => handleNumberClick(1)}>1</Button>
            <Button onClick={() => handleNumberClick(2)}>2</Button>
            <Button onClick={() => handleNumberClick(3)}>3</Button>
          </Div>
          <Button onClick={() => handleNumberClick(0)}>0</Button>
        </Numbers>
        <Calculation>
          <Button
            data-type="operator"
            onClick={() => handleClickOperation("/")}
          >
            /
          </Button>
          <Button
            data-type="operator"
            onClick={() => handleClickOperation("X")}
          >
            X
          </Button>
          <Button
            data-type="operator"
            onClick={() => handleClickOperation("-")}
          >
            -
          </Button>
          <Button
            data-type="operator"
            onClick={() => handleClickOperation("+")}
          >
            +
          </Button>
          <Button data-type="result" onClick={handleCalculation}>
            =
          </Button>
        </Calculation>
      </Buttons>
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
