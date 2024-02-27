import { useState } from 'react';
import { Button } from './styledCounter';
import { add, subtract, multiply, divide } from './utils/calculator';

const OPERATOR = ['+', '-', '×', '÷'];

function App() {
  const [total, setTotal] = useState(0);
  const [operand, setOperand] = useState(0);
  const [operator, setOperator] = useState('');

  const handleOperator = (op: string) => {
    setOperator(op);
    console.log(op);
  };

  const handleCalculator = (number: number) => {
    //3자리 숫자까지 입력가능
    if (total === 0) {
      setTotal(number);
    } else {
      setOperand(number);
    }
  };

  const handleResult = (op: string) => {
    switch (op) {
      case '+':
        setTotal(add(total, operand));
        break;
      case '-':
        setTotal(subtract(total, operand));

        break;
      case '×':
        setTotal(multiply(total, operand));
        //숫자 너무 커질때
        break;
      case '÷':
        setTotal(divide(total, operand));
        //소숫점 많이 내려갈때
        break;
      default:
        return console.log(op);
    }
    setOperand(0);
  };

  return (
    <>
      <h1>{total}</h1>
      <h2>{operand}</h2>

      {[...Array(10)].map((_, i) => (
        <Button onClick={() => handleCalculator(i)} key={i}>
          {i}
        </Button>
      ))}
      <br />
      {OPERATOR.map((oper) => (
        <Button disabled={total === 0} onClick={() => handleOperator(oper)}>
          {oper}
        </Button>
      ))}

      <Button
        disabled={operand === 0}
        onClick={() => {
          handleResult(operator);
        }}
      >
        =
      </Button>

      <Button
        disabled={total === 0}
        onClick={() => {
          setTotal(0);
          setOperand(0);
        }}
      >
        AC
      </Button>
    </>
  );
}

export default App;
