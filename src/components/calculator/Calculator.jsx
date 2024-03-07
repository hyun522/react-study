import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
  border: 1px solid black;
  padding: 20px;
`;

const Calculated = styled.div`
  border: 1px solid black;
  padding: 10px;
  width: 100%;
`;

export default function Calculator() {
  const [number, setNumber] = useState(0);
  const [hold, setHold] = useState(0);
  const [operator, setOperator] = useState('');
  const [calculation, setCalculation] = useState([]);
  const [result, setResult] = useState(0);

  const handleNumberClick = (e) => {
    const numInput = e.target.textContent;
    const nextNum = operator ? Number(numInput) : Number(String(number) + numInput);
    setNumber(nextNum);
    if (result) setResult(0);
  };

  const handleOperatorClick = (e) => {
    const nextOperator = e.target.textContent;
    setOperator(nextOperator);
    setHold(number);
    setNumber(0);
    setCalculation([...calculation, nextOperator]);
  };

  const handleEqualClick = () => {
    setResult(hold);
    setCalculation([]);
  };

  const handleResetClick = () => {
    setNumber(0);
    setHold(0);
    setOperator('');
    setCalculation([]);
    setResult(0);
  };

  useEffect(() => {
    if (calculation.includes('=')) {
      setCalculation([number]);
    } else setCalculation([number]);

    if (hold) {
      switch (operator) {
        case '+':
          setHold(hold + number);
          break;
        case '-':
          setHold(hold - number);
          break;
        case 'x':
          setHold(hold * number);
          break;
        case '/':
          setHold(hold / number);
          break;
        default:
          break;
      }
    }
  }, [number]);

  return (
    <>
      <Container>
        <Calculated>{result ? result : `${calculation.join(' ')}`}</Calculated>
        <div>
          <Button onClick={handleResetClick}>AC</Button>
          <Button onClick={handleOperatorClick}>/</Button>
        </div>
        <div>
          <Button onClick={handleNumberClick}>8</Button>
          <Button onClick={handleNumberClick}>7</Button>
          <Button onClick={handleNumberClick}>9</Button>
          <Button onClick={handleOperatorClick}>x</Button>
        </div>
        <div>
          <Button onClick={handleNumberClick}>4</Button>
          <Button onClick={handleNumberClick}>5</Button>
          <Button onClick={handleNumberClick}>6</Button>
          <Button onClick={handleOperatorClick}>-</Button>
        </div>
        <div>
          <Button onClick={handleNumberClick}>1</Button>
          <Button onClick={handleNumberClick}>2</Button>
          <Button onClick={handleNumberClick}>3</Button>
          <Button onClick={handleOperatorClick}>+</Button>
        </div>
        <div>
          <Button onClick={handleNumberClick}>0</Button>
          <Button onClick={handleEqualClick}>=</Button>
        </div>
      </Container>
    </>
  );
}
