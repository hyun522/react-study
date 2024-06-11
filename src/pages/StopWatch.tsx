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

const DragContainer = styled.div`
  border: 1px solid #000;
`;

export default function StopWatch() {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [laps, setLaps] = useState<Lap[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const toggleTimer = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 10);
      setIsRunning(true);
    } else {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 100); //밀리초 단위 시간을 초 단위로 변환하는 과정 / 밀리초는 1000 초는 100
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
      lap: formatTime(time),
    };
    setLaps((prevLaps) => [...prevLaps, newLap]);
  };
  console.log(laps);

  const handleListDelete = (id: number) => {
    setLaps((prevLaps) => prevLaps.filter((lap) => lap.id !== id));
  };

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
          {laps.map((lap) => (
            <DragContainer key={lap.id}>
              <span onClick={() => handleListDelete(lap.id)}>{lap.lap}</span>
            </DragContainer>
          ))}
        </LapList>
      </Main>
    </Bg>
  );
}
