import { useState } from 'react';
import styled from 'styled-components';

const CountNum = styled.div`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  border-radius: 8px;
  width: 40px;
  border: 1px solid gray;
  margin-right: 5px;

  //아래 에러표시 해결
  &: hover {
    background-color: #347cf6;
    transition: all 0.5s;
  }
`;

function Counter() {
  //usestate 이전 상태 값을 가져와서 새로운 값을 설정
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    if (count < 10) {
      //setCount(prevCount + 1); 이렇게 써도 되나?
      setCount((prevCount) => prevCount + 1);
      // setCount(function setCount(prevCount){
      //   prevCount + 1
      // })
    } else {
      setCount(10);
    }
  };

  const onDecrease = () => {
    if (count > 0) {
      //setCount(prevCount + 1); 이렇게 써도 되나?
      setCount((prevCount) => prevCount - 1);
    } else {
      setCount(0);
    }
  };

  return (
    <>
      <CountNum>{count}</CountNum>
      <Button onClick={onIncrease}>+1</Button>
      <Button onClick={onDecrease}>-1</Button>
    </>
  );
}

export default Counter;
