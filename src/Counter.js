import { useState } from 'react';

function Counter() {
  //usestate 이전 상태 값을 가져와서 새로운 값을 설정
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    if (count < 10) {
      //setCount(count + 1); 이렇게 써도 되나?
      setCount((prevCount) => prevCount + 1);
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
      <div>{count}</div>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </>
  );
}

export default Counter;
