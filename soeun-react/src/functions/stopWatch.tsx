import { useRef, useState } from "react"
import styled from "styled-components";
import Record, { LapRecord } from "../components/stopwatch/record";
import Timer from "../components/stopwatch/timer";
import formatTime from "../components/stopwatch/formatTime";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents:center;
`
const ButtonsWrapper= styled.div`
    display: flex;
    gap: 1rem;
    margin-top:3rem;
    margin-bottom:3rem;
`
const Button = styled.button`
width:10rem;
height:3rem;
color: white;
border:none;
border-radius: 10rem;

`
const StartButton = styled(Button)`
  background-color: blue;
 
`;
const ResettButton = styled(Button)`
  background-color: red;
`;
const LapButton = styled(Button) `
background-color:gray;
margin-top:5rem;
`
export default function StopWatch(){
  const[running, setRunning]=useState<boolean>(false);
  const[time, setTime] =useState<number>(0);
  const[laps, setLaps]=useState<LapRecord[]>([]);
  const intervalRef= useRef<NodeJS.Timeout |undefined>(undefined);

  const startWatch = ()=>{
    if(!running){
      intervalRef.current = setInterval(()=>{
        setTime((prevTime)=> prevTime+1000);//이전값+1초
      },1000);//1초마다 카운트 실행
      setRunning(true);
    }else{
      clearInterval(intervalRef.current);//clearInterval 자바스크립트 내장함수,  setInterval 함수에 의해 설정된 반복 동작을 중지하는 데 사용
      setRunning(false);
    }
  };

  const resetStopwatch = ()=>{
    clearInterval(intervalRef.current);
    setTime(0);
    setLaps([]);
    setRunning(false);
  };

  const recordLap=()=>{
    const newLap ={
      id:laps.length === 0 ? 1 :laps[laps.length-1].id +1,
      lap:time,
       deleteLap: deleteLap,
    };
    setLaps((prevLaps)=>[...prevLaps, newLap]);
  }
  const deleteLap=(id:number)=>{//삭제할 아이디 전달 받기 
    const filteredLaps =laps
    .filter((record)=> record.id !== id)//삭제한 것 을 빼고 다시 필터링 
    .map((record,index)=>({...record, id:index+1}));//나머지 배열들에 아이디를 1부터 다시 부여 
    setLaps(filteredLaps);
  };

 
  return(
    <Container>
  <Timer lapTime={formatTime(time)}/>
  <ButtonsWrapper>
<StartButton className='StartBtn' onClick={startWatch}>{running? 'Stop' :'Start'}</StartButton>
<ResettButton className="ResetBtn" onClick={resetStopwatch}>Reset</ResettButton>
  

</ButtonsWrapper>
  {laps.map((lap) => (
        <Record key={lap.id} id={lap.id} lap={lap.lap}   deleteLap={deleteLap}/>
      ))}
 {running &&<LapButton onClick={recordLap}>Lap</LapButton>}
    </Container>
  )
}