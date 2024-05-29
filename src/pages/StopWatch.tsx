//상태관리
// 1. 스탑워치 시작 버튼을 눌렀는가
// 2. 눌렀다면 카운트 다운을 시작해라

import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const Bg = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  background-color: pink;
  padding-top: 90px;
  text-align: center;
  position: relative;
`;

const Time = styled.div`
  font-size: 40px;
`;

const Buttons = styled.div`
  width: 420px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const StopOrStart = styled.button`
  width: 200px;
  border: none;
  color: #fff;
  border-radius: 8px;
  padding: 10px;
  background-color: #489bfc;
  box-shadow: 0 5px 0 0 #2789f9;
`;

const Reset = styled(StopOrStart)`
  background-color: #ed544f;
  box-shadow: 0 5px 0 0 #dc403f;
`;

const LapList = styled.div``;

const Lap = styled(StopOrStart)`
  background-color: #bbb;
  box-shadow: 0 5px 0 0 #999;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

//setInterval 함수는 일정 시간 간격으로 지정된 함수를 반복해서 실행합니다. 이 함수는 두 개의 인자를 받는다. 실행할 함수와 함수가 실행될 시간 간격
//clearInterval 함수는 setInterval로 설정된 반복 실행을 중지 setInterval이 반환한 함수를 인자로 받는다.

export default function StopWatch() {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [Laps, setLaps] = useState<[]>([]);
  //time을 실시간 관리하는 useRef
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const toggleTimer = () => {
    // 버튼을 눌렀을때 true 이면 = 시작 하겠다.
    //1초마다 타이머 실행
    //setTime 함수를 호출하여 이전 시간에 1000을 더한 값이 time이 된다.
    // 그리고 running state를 true로 만들어 준다.

    if (!isRunning) {
      //시작한것이 아니면
      intervalRef.current = setInterval(() => {
        // 일정 시간이 지난 후에 원하는 함수를 예약 실행(호출)할 수 있게 하는 것을 '호출 스케줄링(scheduling a call)'
        // 호출 스케일링을 구현 하는 두가지 방법
        // setTimeout을 이용해 일정 시간이 지난 후에 함수를 실행하는 방법
        // setInterval을 이용해 일정 시간 간격을 두고 함수를 실행하는 방법
        setTime((prev) => prev + 1000);
      }, 1000);
      setIsRunning(true);
    } else {
      //버튼을 눌렀을때 false이면 멈추겠다.
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };
  console.log(isRunning);

  const resetStopWatch = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  //0530 laplist 보여주기 type 지정하기

  return (
    <Bg>
      <Main>
        <Time>{time}</Time>
        <Buttons>
          <StopOrStart onClick={toggleTimer}>
            {isRunning ? 'STOP' : 'START'}
            {/* stop => false 이다. start => true가 되면 작동함  근데 시작하면 STOP이 보여야 한다.
            즉, false일때(=STOP) start가 보여야한다. */}
          </StopOrStart>
          <Reset onClick={resetStopWatch}>RESET</Reset>
        </Buttons>
        <LapList>{Laps}</LapList>
        {isRunning && <Lap>Lap</Lap>}
      </Main>
    </Bg>
  );
}
