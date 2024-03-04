import { useState } from 'react';
import { Button } from './styledCounter';
import { add, subtract, multiply, divide } from './utils/calculator';

const OPERATOR = ['+', '-', '×', '÷'];

function App() {
  const [total, setTotal] = useState<number | '오류'>(0);
  const [operand, setOperand] = useState(0);
  const [operator, setOperator] = useState('');

  const handleOperator = (op: string) => {
    setOperator(op);
    console.log(op);
  };

  const handleCalculator = (number: number) => {
    if (total === '오류') {
      setTotal(number);
      setOperand(0);
      setOperator('');
    } else if (operator === '') {
      const newNumber = +total * 10 + number;
      setTotal(newNumber);
    } else {
      const newNumber = operand * 10 + number;
      setOperand(newNumber);
    }
  };

  const handleResult = (op: string) => {
    let result;

    switch (op) {
      case '+':
        result = add(+total, operand);
        break;
      case '-':
        result = subtract(+total, operand);
        break;
      case '×':
        result = multiply(+total, operand);
        break;
      case '÷':
        result = divide(+total, operand);
        break;
      default:
        return console.log(op);
    }

    if (!isFinite(result)) {
      setTotal('오류');
      setOperator('');
    } else {
      setTotal(result);
    }

    setOperand(0);
  };

  return (
    <>
      <h5>
        {total} {operator !== '' && operator} {operand !== 0 && operand}
      </h5>

      <h1>{total}</h1>

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
          setOperator('');
        }}
      >
        AC
      </Button>
    </>
  );
}

export default App;
