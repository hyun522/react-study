import React, { useRef, useState } from 'react';
import styled from 'styled-components';

type Lap = {
  id: number;
  lap: string;
};

const Bg = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  padding: 90px 20px 0 20px;
  border: 1px solid #ddd;
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

const Laps = styled(StopOrStart)`
  background-color: #bbb;
  box-shadow: 0 5px 0 0 #999;
`;

const LapList = styled.div`
  margin-top: 20px;
  line-height: 25px;
  font-size: 20px;
`;

export default function StopWatch() {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [laps, setLaps] = useState<Lap[]>([]);
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
        setTime((prev) => prev + 1);
      }, 10);
      //  10밀리초마다 시간 값을 1 증가 시킨다. 1초에 100번의 변경이 발생 ??
      setIsRunning(true);
    } else {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const formatTime = (milliseconds: number) => {
    //1초에 100번 바뀌는 숫자를 받아서
    const totalSeconds = Math.floor(milliseconds / 100); //밀리초 단위 시간을 초 단위로 변환하는 과정 / 밀리초는 1000 초는 100
    //100으로 나눠서 초를 계산
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0'); //1000을 60으로 나눈 몫
    const seconds = String(totalSeconds % 60).padStart(2, '0'); // 1000을 60으로 나눈 나머지
    const ms = String(milliseconds % 100).padStart(2, '0'); // 밀리초를 2자리로 표시
    return `${minutes}:${seconds}:${ms}`;
  };

  const resetStopWatch = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
    setLaps([]);
  };

  const handleLapClick = () => {
    const newLap = {
      id: laps.length === 0 ? 1 : laps[laps.length - 1].id + 1,
      //첫번째 클릭시 laps.length가 0이라서 임의로 1을 넣어준다. 그리고 lap도 같이 값을 넣어준다.
      //두번째 클릭시 laps.length가 1이라서 laps[0].id laps배열의 첫번째 객체의 id 1 (=이전값)을 가져 오겠다.  거기에 +1을 해주겠다
      lap: formatTime(time),
    };
    setLaps((prevLaps) => [...prevLaps, newLap]);
  };
  console.log(laps);

  //@TO-DO
  //stop 버튼 누르면 lap 함수 안보이도록 만들기 => ui먼저 구현 ✅
  //시간 00:00:00으로 변경하기✅
  //laps배열 중에서 하나 삭제하기
  //00:00:00흔들림 방지

  return (
    <Bg>
      <Main>
        <Time>{formatTime(time)}</Time>
        <Buttons>
          <StopOrStart onClick={toggleTimer}>
            {isRunning ? 'STOP' : 'START'}
          </StopOrStart>
          {isRunning ? (
            <Laps onClick={handleLapClick}>Lap</Laps>
          ) : (
            <Reset onClick={resetStopWatch}>RESET </Reset>
          )}
        </Buttons>
        <LapList>
          {laps.map((lap, index) => (
            <div key={index}>{lap.lap}</div>
          ))}
        </LapList>
      </Main>
    </Bg>
  );
}
